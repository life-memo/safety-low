"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import CompareView from "@/components/CompareView";
import { search, type SearchResult } from "@/lib/search";
import { provisions, type Provision } from "@/data/provisions";

function SearchPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);

  // 比較ビュー用
  const [compareJp, setCompareJp] = useState<Provision | null>(null);
  const [compareForeign, setCompareForeign] = useState<Provision | null>(null);

  // 検索実行
  const doSearch = useCallback(
    (q: string) => {
      setQuery(q);
      if (q.trim()) {
        setResults(search(q));
        router.replace(`/search?q=${encodeURIComponent(q)}`, { scroll: false });
      } else {
        setResults([]);
        router.replace("/search", { scroll: false });
      }
    },
    [router],
  );

  // 初回読み込み時にURLのqで検索
  useEffect(() => {
    if (initialQuery) {
      setResults(search(initialQuery));
    }
  }, [initialQuery]);

  // 比較ボタンのハンドラ: JP条文を自動選択し、外国条文との比較を開く
  const handleCompare = useCallback((foreign: Provision) => {
    if (foreign.country === "JP") {
      // JP同士の場合: 最初の外国条文を探す
      const firstForeign = provisions.find(
        (p) => p.country !== "JP" && p.topic_tags.some((t) => foreign.topic_tags.includes(t)),
      );
      if (firstForeign) {
        setCompareJp(foreign);
        setCompareForeign(firstForeign);
      }
      return;
    }

    // 同一トピックのJP条文を探す
    const jpMatch = provisions.find(
      (p) =>
        p.country === "JP" &&
        p.topic_tags.some((t) => foreign.topic_tags.includes(t)),
    );
    setCompareJp(jpMatch ?? provisions.find((p) => p.country === "JP")!);
    setCompareForeign(foreign);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <nav className="bg-slate-800 text-white sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="/" className="text-lg font-bold whitespace-nowrap hover:text-blue-300 transition">
            安全衛生法規制 国際比較
          </a>
          <a
            href="/"
            className="text-sm text-slate-300 hover:text-white transition"
          >
            トップに戻る
          </a>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-2">条文横断検索</h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          日本・米国・英国の安全衛生法令を横断して、関連条文を検索できます
        </p>

        <SearchBar defaultValue={query} onSearch={doSearch} />

        {query && (
          <p className="text-sm text-gray-500 mt-4 mb-2">
            「<span className="font-semibold text-gray-700">{query}</span>」の検索結果：
            <span className="font-semibold">{results.length}</span> 件
          </p>
        )}

        <div className="mt-4">
          <SearchResults
            results={results}
            query={query}
            onCompare={handleCompare}
          />
        </div>
      </div>

      {/* 比較モーダル */}
      {compareJp && compareForeign && (
        <CompareView
          jpProvision={compareJp}
          foreignProvision={compareForeign}
          onClose={() => {
            setCompareJp(null);
            setCompareForeign(null);
          }}
        />
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-500">
          読み込み中...
        </div>
      }
    >
      <SearchPageInner />
    </Suspense>
  );
}
