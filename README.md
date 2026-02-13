# safety-low — 安全衛生法規制 国際比較

日本・米国・英国の安全衛生法規制を条文レベルで比較するWebサイトです。

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## 収録内容

| セクション | 内容 |
|---|---|
| 概要カード | 各国の法令名・制定年・所管機関・規制アプローチ |
| 比較一覧表 | 10項目で3カ国を横並び比較 |
| 各国詳細 | 条文番号付きで主要規定を解説 |
| 比較分析 | 規制哲学・リスクアセスメント・罰則・保護対象の違い |
| 出典 | 一次資料（法令条文・政府公式サイト）へのリンク |

## 対象法令

- **日本**: 労働安全衛生法（昭和47年法律第57号, 1972年）
- **米国**: Occupational Safety and Health Act of 1970 (29 U.S.C. §§ 651–678)
- **英国**: Health and Safety at Work etc. Act 1974 (1974 c.37)

## ローカル開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## Vercelデプロイ

1. [Vercel](https://vercel.com) で **New Project** → このリポジトリをImport
2. Framework Preset: **Next.js**（自動検出）
3. **Deploy** をクリック

特別な設定は不要です。

## 出典・一次資料

全ての記載に一次資料へのリンクを付記しています。主な出典：

- [e-Gov法令検索 — 労働安全衛生法](https://elaws.e-gov.go.jp/document?lawid=347AC0000000057)
- [OSHA — OSH Act of 1970](https://www.osha.gov/laws-regs/oshact/completeoshact)
- [legislation.gov.uk — HSWA 1974](https://www.legislation.gov.uk/ukpga/1974/37/contents)
