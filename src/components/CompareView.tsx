"use client";

import { useState } from "react";
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

function ProvisionPanel({
  provision,
  showOriginalToggle,
}: {
  provision: Provision;
  showOriginalToggle: boolean;
}) {
  const [showOriginal, setShowOriginal] = useState(false);
  const meta = COUNTRY_META[provision.country];

  return (
    <div className={`rounded-xl border-2 ${meta.border} ${meta.bg} p-5 flex flex-col`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{meta.flag}</span>
        <h3 className={`text-lg font-bold ${meta.color}`}>{meta.label}</h3>
      </div>

      <dl className="space-y-3 text-sm flex-1">
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
        <div>
          <dt className="font-semibold text-gray-600">
            条文
            {showOriginalToggle && provision.text_original && (
              <button
                onClick={() => setShowOriginal(!showOriginal)}
                className="ml-2 text-xs font-normal px-2 py-0.5 rounded bg-gray-200 hover:bg-gray-300 text-gray-600 transition"
              >
                {showOriginal ? "日本語訳に切替" : "原文に切替"}
              </button>
            )}
          </dt>
          <dd className="mt-1 leading-relaxed text-gray-700">
            {showOriginalToggle && showOriginal && provision.text_original
              ? provision.text_original
              : provision.text_ja}
          </dd>
        </div>
        {provision.note && (
          <div>
            <dt className="font-semibold text-gray-600">備考</dt>
            <dd className="mt-0.5 text-gray-500 italic">{provision.note}</dd>
          </div>
        )}
      </dl>

      <a
        href={provision.source_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-xs text-blue-600 hover:underline"
      >
        出典を確認（一次資料） &rarr;
      </a>
    </div>
  );
}

interface Props {
  jpProvision: Provision;
  foreignProvision: Provision;
  onClose: () => void;
}

export default function CompareView({
  jpProvision,
  foreignProvision,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* ヘッダー */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h2 className="text-lg font-bold text-gray-800">比較ビュー</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            aria-label="閉じる"
          >
            &times;
          </button>
        </div>

        {/* 比較パネル */}
        <div className="p-6 grid md:grid-cols-2 gap-6">
          <ProvisionPanel
            provision={jpProvision}
            showOriginalToggle={false}
          />
          <ProvisionPanel
            provision={foreignProvision}
            showOriginalToggle={true}
          />
        </div>

        {/* フッター */}
        <div className="border-t border-gray-200 px-6 py-3 flex items-center justify-between flex-wrap gap-2">
          <p className="text-xs text-gray-400">
            本比較は法的助言を構成するものではありません。
          </p>
          <button
            onClick={() => {
              const url = `${window.location.origin}/compare?jp=${jpProvision.id}&foreign=${foreignProvision.id}`;
              navigator.clipboard.writeText(url).catch(() => {});
              alert("比較URLをクリップボードにコピーしました");
            }}
            className="text-xs px-3 py-1.5 rounded border border-gray-300 hover:bg-gray-100 transition text-gray-700"
          >
            共有URLをコピー
          </button>
        </div>
      </div>
    </div>
  );
}
