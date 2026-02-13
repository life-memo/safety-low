import { provisions, type Provision } from "@/data/provisions";
import { synonymGroups } from "@/data/synonyms";

export interface SearchResult {
  provision: Provision;
  /** 0–1 スコア（高いほど関連性が高い） */
  score: number;
  /** マッチしたフィールド名の一覧 */
  matchedFields: string[];
}

/**
 * クエリ文字列を正規化し、同義語を展開した検索語群を返す。
 */
function expandQuery(raw: string): string[] {
  const q = raw.trim().toLowerCase();
  if (!q) return [];

  const terms = new Set<string>();
  terms.add(q);

  // 同義語グループから展開
  for (const group of synonymGroups) {
    const lower = group.map((g) => g.toLowerCase());
    if (lower.some((syn) => syn.includes(q) || q.includes(syn))) {
      for (const syn of lower) terms.add(syn);
    }
  }

  return Array.from(terms);
}

const FIELD_WEIGHTS: Record<string, number> = {
  keywords: 5,
  topic_tags: 4,
  citation: 3,
  law_name: 3,
  text_ja: 1,
  text_original: 1,
  note: 0.5,
};

/**
 * 部分一致検索を行い、スコア付きの結果を返す。
 */
export function search(query: string): SearchResult[] {
  const terms = expandQuery(query);
  if (terms.length === 0) return [];

  const results: SearchResult[] = [];

  for (const prov of provisions) {
    let score = 0;
    const matchedFields = new Set<string>();

    for (const term of terms) {
      // keywords（配列）
      for (const kw of prov.keywords) {
        if (kw.toLowerCase().includes(term) || term.includes(kw.toLowerCase())) {
          score += FIELD_WEIGHTS.keywords;
          matchedFields.add("keywords");
        }
      }

      // topic_tags
      for (const tag of prov.topic_tags) {
        const tagLower = tag.toLowerCase().replace(/_/g, " ");
        if (tagLower.includes(term) || term.includes(tagLower)) {
          score += FIELD_WEIGHTS.topic_tags;
          matchedFields.add("topic_tags");
        }
      }

      // 文字列フィールドを部分一致
      const textFields: [string, string][] = [
        ["citation", prov.citation],
        ["law_name", prov.law_name],
        ["text_ja", prov.text_ja],
        ["text_original", prov.text_original],
        ["note", prov.note],
      ];

      for (const [fieldName, value] of textFields) {
        if (!value) continue;
        if (value.toLowerCase().includes(term)) {
          score += FIELD_WEIGHTS[fieldName];
          matchedFields.add(fieldName);
        }
      }
    }

    if (score > 0) {
      results.push({
        provision: prov,
        score,
        matchedFields: Array.from(matchedFields),
      });
    }
  }

  // スコア降順 → 同スコアなら国コード順（JP→US→UK）
  const countryOrder: Record<string, number> = { JP: 0, US: 1, UK: 2 };
  results.sort(
    (a, b) =>
      b.score - a.score ||
      (countryOrder[a.provision.country] ?? 9) -
        (countryOrder[b.provision.country] ?? 9),
  );

  return results;
}

/**
 * 国別にグルーピングした結果を返す。
 */
export function groupByCountry(results: SearchResult[]) {
  const groups: Record<"JP" | "US" | "UK", SearchResult[]> = {
    JP: [],
    US: [],
    UK: [],
  };
  for (const r of results) {
    groups[r.provision.country].push(r);
  }
  return groups;
}

/**
 * テキスト中のマッチ箇所を <mark> でハイライトするための分割結果を返す。
 */
export function highlightParts(
  text: string,
  query: string,
): { text: string; highlight: boolean }[] {
  if (!query.trim() || !text) return [{ text, highlight: false }];

  const q = query.trim();
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts: { text: string; highlight: boolean }[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const idx = match.index;
    if (idx > lastIndex) {
      parts.push({ text: text.slice(lastIndex, idx), highlight: false });
    }
    parts.push({ text: match[0], highlight: true });
    lastIndex = idx + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), highlight: false });
  }

  return parts.length > 0 ? parts : [{ text, highlight: false }];
}
