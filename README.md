# safety-low

このリポジトリは、日本・米国・英国の安全衛生法規制の比較資料を公開するためのものです。

## このリポジトリに入っているファイル

- `README.md`（この説明ファイル）
- `index.html`（GitHub Pages の入口ページ）
- `japan_us_uk_safety_health_comparison.md`（比較本文）

## まず開く場所

- 比較資料（Markdown）: [`japan_us_uk_safety_health_comparison.md`](./japan_us_uk_safety_health_comparison.md)
- GitHub Pages 用トップページ: [`index.html`](./index.html)

## 「入ってない」ように見える時の確認

1. GitHub 画面でブランチが **`main`** になっているか確認
2. リポジトリのトップ画面を再読み込み
3. それでも見えない場合は、未 push の可能性が高いので最新コミットを push

## GitHub Pages を使う場合

このリポジトリには、`main` ブランチへ push すると自動で Pages をデプロイする workflow（`.github/workflows/pages.yml`）を含めています。

1. リポジトリの **Settings → Pages** を開く
2. **Build and deployment** の Source を **GitHub Actions** にする
3. `main` ブランチに push する
4. **Actions** タブで `Deploy static site to GitHub Pages` が成功したら公開URLにアクセス
