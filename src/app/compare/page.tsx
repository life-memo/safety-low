"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { provisions } from "@/data/provisions";
import CompareView from "@/components/CompareView";

function ComparePageInner() {
  const params = useSearchParams();
  const jpId = params.get("jp");
  const foreignId = params.get("foreign");

  const jpProv = provisions.find((p) => p.id === jpId);
  const foreignProv = provisions.find((p) => p.id === foreignId);

  if (!jpProv || !foreignProv) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-slate-800 text-white sticky top-0 z-40 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold hover:text-blue-300 transition">
              安全衛生法規制 国際比較
            </a>
            <a href="/search" className="text-sm text-slate-300 hover:text-white transition">
              検索に戻る
            </a>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-lg text-gray-600 mb-4">
            指定された条文が見つかりませんでした。
          </p>
          <p className="text-sm text-gray-400 mb-6">
            URLパラメータの形式: <code className="bg-gray-100 px-2 py-0.5 rounded">/compare?jp=jp-004&foreign=uk-003</code>
          </p>
          <a
            href="/search"
            className="inline-block rounded-lg bg-slate-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-600 transition"
          >
            検索ページへ
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-slate-800 text-white sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="/" className="text-lg font-bold hover:text-blue-300 transition">
            安全衛生法規制 国際比較
          </a>
          <div className="flex gap-4 text-sm">
            <a href="/search" className="text-slate-300 hover:text-white transition">
              検索
            </a>
            <a href="/" className="text-slate-300 hover:text-white transition">
              トップ
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-2">比較ビュー</h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          日本の法令条文と海外法令を並べて比較できます
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 日本側 */}
          <div className="rounded-xl border-2 border-red-200 bg-red-50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{"\u{1F1EF}\u{1F1F5}"}</span>
              <h3 className="text-lg font-bold text-red-700">日本</h3>
            </div>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-gray-600">法令名</dt>
                <dd className="mt-0.5">{jpProv.law_name}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-600">条項</dt>
                <dd className="mt-0.5 font-mono text-xs bg-white/70 border border-gray-300 rounded px-2 py-1 inline-block">
                  {jpProv.citation}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-600">条文</dt>
                <dd className="mt-1 leading-relaxed text-gray-700">{jpProv.text_ja}</dd>
              </div>
              {jpProv.note && (
                <div>
                  <dt className="font-semibold text-gray-600">備考</dt>
                  <dd className="mt-0.5 text-gray-500 italic">{jpProv.note}</dd>
                </div>
              )}
            </dl>
            <a href={jpProv.source_url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs text-blue-600 hover:underline">
              出典を確認 &rarr;
            </a>
          </div>

          {/* 海外側 */}
          <ForeignPanel provision={foreignProv} />
        </div>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="/search"
            className="text-sm px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition text-gray-700"
          >
            検索に戻る
          </a>
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href).catch(() => {});
              alert("URLをクリップボードにコピーしました");
            }}
            className="text-sm px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition text-gray-700"
          >
            共有URLをコピー
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-8 text-center">
          本比較は法的助言を構成するものではありません。正確な法的判断には各国の法令原文及び専門家への相談が必要です。
        </p>
      </div>
    </div>
  );
}

function ForeignPanel({ provision }: { provision: (typeof provisions)[number] }) {
  const meta: Record<string, { label: string; flag: string; color: string; bg: string; border: string }> = {
    US: { label: "米国", flag: "\u{1F1FA}\u{1F1F8}", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200" },
    UK: { label: "英国", flag: "\u{1F1EC}\u{1F1E7}", color: "text-green-700", bg: "bg-green-50", border: "border-green-200" },
    JP: { label: "日本", flag: "\u{1F1EF}\u{1F1F5}", color: "text-red-700", bg: "bg-red-50", border: "border-red-200" },
  };
  const m = meta[provision.country] ?? meta.US;

  return (
    <div className={`rounded-xl border-2 ${m.border} ${m.bg} p-5`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{m.flag}</span>
        <h3 className={`text-lg font-bold ${m.color}`}>{m.label}</h3>
      </div>
      <dl className="space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-gray-600">法令名</dt>
          <dd className="mt-0.5">{provision.law_name}</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-600">条項</dt>
          <dd className="mt-0.5 font-mono text-xs bg-white/70 border border-gray-300 rounded px-2 py-1 inline-block">
            {provision.citation}
          </dd>
        </div>
        {provision.text_original && (
          <div>
            <dt className="font-semibold text-gray-600">原文</dt>
            <dd className="mt-1 leading-relaxed text-gray-700">{provision.text_original}</dd>
          </div>
        )}
        <div>
          <dt className="font-semibold text-gray-600">
            {provision.text_original ? "日本語訳" : "条文"}
          </dt>
          <dd className="mt-1 leading-relaxed text-gray-700">{provision.text_ja}</dd>
        </div>
        {provision.note && (
          <div>
            <dt className="font-semibold text-gray-600">備考</dt>
            <dd className="mt-0.5 text-gray-500 italic">{provision.note}</dd>
          </div>
        )}
      </dl>
      <a href={provision.source_url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs text-blue-600 hover:underline">
        出典を確認 &rarr;
      </a>
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-500">
          読み込み中...
        </div>
      }
    >
      <ComparePageInner />
    </Suspense>
  );
}
