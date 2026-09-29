# 恋クエ 公式サイト

`index.html` と `style.css`、`assets/` のみで動く、軽量な1ページサイトです。
本文(お問い合わせ・法務文書)はJavaScriptなしで読めます。`theme.js` はピンク/ブルーの
配色切り替え(任意の演出機能)のみに使う小さなスクリプトで、JavaScriptを無効にしても
既定のピンク配色でページ全体が問題なく表示されます。
`trial.js` は未使用の保管ファイルです。ページからは読み込みません。
実機スクリーンショットは元PNGを保持し、表示用WebPに縮小・圧縮しています。

## 公開

GitHub Pagesなどの静的ホスティングで、この `docs/` を公開ルートに指定します。
GitHub Pagesを使用する場合は、対象リポジトリの Pages 設定で公開するブランチと `/docs` を選びます。
この作業では外部公開は行っていません。

公開先を `https://YOUR-DOMAIN/` とした場合:

- サポートURL: `https://YOUR-DOMAIN/#support`
- プライバシーポリシーURL: `https://YOUR-DOMAIN/#privacy`
- 利用規約URL: `https://YOUR-DOMAIN/#terms`

プロジェクト名を含むURLで公開する場合は、そのURLの末尾に各アンカーを付けてください。
ログイン不要で、全ての文書を開いた状態で読めます。

## 公開前に必要なこと

指定に従い、法務文書の全文を変更せずHTML化しています。現時点の原文には
制定日の未記入欄が含まれています。正式な公開前に `Legal/privacy-policy.md` と
`Legal/terms-of-service.md` の制定日を確定し、下記の再生成を実行してください。
サイトを作成しただけでは公開URLは発行されません。

## 法務文書の更新

プロジェクトのルートから以下を実行します（Python標準ライブラリのみ）。

```sh
python3 scripts/build_official_site.py
```

原文の見出し・段落・箇条書き・表・注記を保持して `docs/index.html` を再生成します。
HTMLの見出しレベルは、サイト内の階層に合わせて1段下げています。
ページ構成を変える場合は、生成元の `scripts/build_official_site.py` を編集します。
見た目は `docs/style.css` で変更できます。

## App Storeリンク

配信開始時に、生成スクリプト内の `coming-soon` 部分を正式なApp Storeリンクへ変更し、
再生成してください。現在はクリックを誘う無効ボタンを設けず「近日公開」と表示しています。

## ローカル確認

```sh
python3 -m http.server 4174 --bind 127.0.0.1 --directory docs
```

`http://127.0.0.1:4174/` で確認できます。
