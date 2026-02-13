"use client";

import { useState, useCallback, type FormEvent } from "react";
import { useRouter } from "next/navigation";

interface Props {
  /** 初期値（URLパラメータから受け取る場合など） */
  defaultValue?: string;
  /** Enter 時に /search へ遷移する（トップページ埋め込み用） */
  navigateOnSubmit?: boolean;
  /** 遷移ではなく親コンポーネントに検索語を伝える */
  onSearch?: (query: string) => void;
}

export default function SearchBar({
  defaultValue = "",
  navigateOnSubmit = false,
  onSearch,
}: Props) {
  const [value, setValue] = useState(defaultValue);
  const router = useRouter();

  const submit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const q = value.trim();
      if (!q) return;
      if (navigateOnSubmit) {
        router.push(`/search?q=${encodeURIComponent(q)}`);
      } else {
        onSearch?.(q);
      }
    },
    [value, navigateOnSubmit, onSearch, router],
  );

  return (
    <form onSubmit={submit} className="w-full max-w-2xl mx-auto flex gap-2">
      <div className="relative flex-1">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="条文を横断検索（例：リスクアセスメント、罰則、General Duty …）"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              setValue("");
              onSearch?.("");
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
            aria-label="クリア"
          >
            &times;
          </button>
        )}
      </div>
      <button
        type="submit"
        className="rounded-lg bg-slate-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 transition whitespace-nowrap"
      >
        検索
      </button>
    </form>
  );
}
