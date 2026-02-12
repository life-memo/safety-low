# safety-low

日本・米国・英国の安全衛生法規制の比較資料を公開するリポジトリです。

## 収録ファイル

- `README.md`（この説明）
- `index.html`（公開用トップページ）
- `japan_us_uk_safety_health_comparison.md`（比較本文）
- `vercel.json`（Vercelデプロイ設定）
- `.github/workflows/pages.yml`（GitHub Pages用、任意）

## まず見る場所

- 公開トップ: [`index.html`](./index.html)
- 比較資料本文: [`japan_us_uk_safety_health_comparison.md`](./japan_us_uk_safety_health_comparison.md)

## Vercelで公開する（おすすめ）

1. Vercelで **New Project** を選び、このGitHubリポジトリをImport
2. Framework Preset は **Other** のままでOK
3. Build Command は空欄、Output Directory も空欄でOK（静的配信）
4. Deploy を実行
5. 発行された `https://<project>.vercel.app` にアクセス

`vercel.json` で `/` が `index.html` を返すように設定済みです。

## GitHub Pagesを使う場合（任意）

- `main` への push で `.github/workflows/pages.yml` が実行されます。
- **Settings → Pages → Source: GitHub Actions** を選択してください。

## もし「ファイルがない」ように見える場合

1. GitHubでブランチが `main` か確認
2. ページを再読み込み
3. 最新コミットが push 済みか確認
