"use client";

import { useState, useMemo } from "react";
import { type SearchResult, groupByCountry, highlightParts } from "@/lib/search";
import type { Provision } from "@/data/provisions";

const COUNTRY_META: Record<
  string,
  { label: string; flag: string; color: string; bg: string; border: string }
> = {
  JP: {
    label: "日本",
    flag: "\u{1F1EF}\u{1F1F5}",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  US: {
    label: "米国",
    flag: "\u{1F1FA}\u{1F1F8}",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  UK: {
    label: "英国",
    flag: "\u{1F1EC}\u{1F1E7}",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
  },
};

function HighlightedText({ text, query }: { text: string; query: string }) {
  const parts = highlightParts(text, query);
  return (
    <>
      {parts.map((p, i) =>
        p.highlight ? (
          <mark key={i} className="bg-yellow-200 rounded px-0.5">
            {p.text}
          </mark>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </>
  );
}

function TextToggle({
  original,
  ja,
  query,
}: {
  original: string;
  ja: string;
  query: string;
}) {
  const [showOriginal, setShowOriginal] = useState(false);

  if (!original) {
    return (
      <p className="text-sm text-gray-700 leading-relaxed mt-2">
        <HighlightedText text={ja} query={query} />
      </p>
    );
  }

  return (
    <div className="mt-2">
      <div className="flex gap-2 mb-1">
        <button
          onClick={() => setShowOriginal(false)}
          className={`text-xs px-2 py-0.5 rounded ${!showOriginal ? "bg-slate-700 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"} transition`}
        >
          日本語訳
        </button>
        <button
          onClick={() => setShowOriginal(true)}
          className={`text-xs px-2 py-0.5 rounded ${showOriginal ? "bg-slate-700 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"} transition`}
        >
          原文
        </button>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">
        {showOriginal ? (
          <HighlightedText text={original} query={query} />
        ) : (
          <HighlightedText text={ja} query={query} />
        )}
      </p>
    </div>
  );
}

function ResultCard({
  result,
  query,
  onCompare,
}: {
  result: SearchResult;
  query: string;
  onCompare: (p: Provision) => void;
}) {
  const p = result.provision;
  const meta = COUNTRY_META[p.country];

  return (
    <div
      className={`rounded-lg border ${meta.border} ${meta.bg} p-4 transition hover:shadow-md`}
    >
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-lg">{meta.flag}</span>
          <span
            className={`text-xs font-mono ${meta.color} border ${meta.border} rounded px-2 py-0.5 bg-white/60 whitespace-nowrap`}
          >
            {p.citation}
          </span>
        </div>
        <button
          onClick={() => onCompare(p)}
          className="text-xs px-2.5 py-1 rounded bg-slate-100 border border-slate-300 hover:bg-slate-200 text-slate-700 transition whitespace-nowrap"
        >
          比較
        </button>
      </div>

      <h4 className="font-bold text-gray-800 mt-2 text-sm">
        <HighlightedText text={p.law_name} query={query} />
      </h4>

      <TextToggle original={p.text_original} ja={p.text_ja} query={query} />

      <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
        <a
          href={p.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-600 hover:underline"
        >
          出典を確認 &rarr;
        </a>
        {p.note && (
          <span className="text-xs text-gray-500 italic">{p.note}</span>
        )}
      </div>
    </div>
  );
}

type Tab = "ALL" | "JP" | "US" | "UK";

export default function SearchResults({
  results,
  query,
  onCompare,
}: {
  results: SearchResult[];
  query: string;
  onCompare: (provision: Provision) => void;
}) {
  const [tab, setTab] = useState<Tab>("ALL");

  const groups = useMemo(() => groupByCountry(results), [results]);

  const tabItems: { key: Tab; label: string; count: number }[] = [
    { key: "ALL", label: "すべて", count: results.length },
    { key: "JP", label: `${COUNTRY_META.JP.flag} 日本`, count: groups.JP.length },
    { key: "US", label: `${COUNTRY_META.US.flag} 米国`, count: groups.US.length },
    { key: "UK", label: `${COUNTRY_META.UK.flag} 英国`, count: groups.UK.length },
  ];

  const visible =
    tab === "ALL"
      ? results
      : results.filter((r) => r.provision.country === tab);

  if (results.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-lg mb-1">該当する条文が見つかりませんでした</p>
        <p className="text-sm">別のキーワードで検索してみてください</p>
      </div>
    );
  }

  return (
    <div>
      {/* タブ */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabItems.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`text-sm px-3 py-1.5 rounded-full border transition ${
              tab === t.key
                ? "bg-slate-700 text-white border-slate-700"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {t.label}
            <span className="ml-1.5 text-xs opacity-80">({t.count})</span>
          </button>
        ))}
      </div>

      {/* 結果カード */}
      <div className="space-y-4">
        {visible.map((r) => (
          <ResultCard
            key={r.provision.id}
            result={r}
            query={query}
            onCompare={onCompare}
          />
        ))}
      </div>

      {/* 免責 */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        本検索結果は法的助言を構成するものではありません。正確な法的判断には各国の法令原文及び専門家への相談が必要です。
      </p>
    </div>
  );
}
