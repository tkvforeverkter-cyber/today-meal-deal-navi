# 今日の外食トクナビ

## 概要

誰と行くか、何を食べたいかを選ぶと、近くてお得な外食候補を提案するデモアプリです。

このアプリは、まだ本物のキャンペーンデータではなく、サンプルのデモデータで動いています。

## 現在の実装内容の要約

### 実装済み機能
- 誰と行くか・何を食べたいか・並び替え条件を選んで検索できる
- 今日のおすすめ3選・今日終了のお得・あとで見るのカードを表示できる
- 詳細モーダル、Googleマップ検索、保存済みお得の切り替えに対応している
- 現在地取得に対応し、位置情報があれば近い順の距離表示を切り替えられる
- GoogleスプレッドシートのCSVやGoogle Apps Script送信の下書き機能を備えている

### 未実装機能
- 実際のキャンペーンデータベース連携
- 店舗情報や公式キャンペーンページとの自動同期
- 現在地に基づく本物の経路・距離精度の向上
- ユーザー認証やログイン機能
- 管理画面の本格運用

### 改善候補トップ10
1. 検索条件をブラウザに保存して、次回起動時も再利用できるようにする
2. よく使う条件をワンタッチで切り替えられるクイック検索を追加する
3. おすすめ3選を条件に応じて動的に再計算する
4. もっと自然な空状態メッセージと導線を追加する
5. 詳細モーダルに「使い方」「注意点」などを見やすく整理する
6. スマホでの縦スクロール体験をさらに改善する
7. データの更新日や出典を強調して信頼性を見せる
8. 位置情報が無い場合に代替のおすすめ表示を増やす
9. 管理者下書きデータの入力補助を強化する
10. GitHub Pagesで公開した後の利用ログや改善フィードバックを収集する仕組みを作る

### v0.8で追加した内容
- 検索条件の保存と復元
- よく使う条件のクイックプリセット
- 条件に応じたおすすめ3選・今日終了カードの再表示
- 見出しと案内文の改善

## 現在はデモデータです

掲載している店舗名、キャンペーン内容、距離、お得度、終了期限などは、動作確認用のサンプルです。

実際に利用する前に、必ず公式サイトや店舗で条件を確認する必要があります。

## 今後追加したい機能

- 本物のキャンペーンデータ登録
- Googleスプレッドシート連携
- 現在地から本物の距離順に並び替え
- 店舗データとの連携
- スマホUIの改善
- フォロワー向け公開

## v1.0の方針

v1.0では、現在地取得よりも「市区町村・生活圏で探せる」体験をメインにします。
検索は地域選択を中心にし、地域名に合う店舗・エリアを優先して表示します。
現在地は補助機能として残し、必要なときだけ距離表示を試せる形にします。

## ファイル構成

GitHub Pagesで公開しやすいように、アプリ本体を一番上の階層に置いています。

```text
README.md    # この説明ファイル
index.html   # アプリの入口
style.css    # 見た目の調整
script.js    # データ、検索、保存、モーダルなどの動き
outputs/     # 作業途中の出力ファイル。GitHub公開には必須ではありません
work/        # 作業用フォルダ。GitHubにアップロードしなくても大丈夫です
```

## キャンペーン管理表の項目

将来Googleスプレッドシートなどで管理しやすくするために、1行を「1つのお得情報」として扱います。

実キャンペーンを入れるときは、基本的に `chainName` にチェーン名を入れます。`storeName` は特定の店舗だけで使えるお得情報のときだけ入れれば大丈夫です。

| 列名 | 何を入れるか |
| --- | --- |
| id | 管理用の名前です。他の行と重ならない英数字にします。例：beta-local-gusto-kitagata |
| chainName | チェーン名です。例：ガスト、マクドナルド、丸亀製麺 |
| storeName | 個別店舗名です。任意です。未入力の場合は「近くの対象店舗」として表示されます。例：ガスト 岐阜北方店 |
| storeArea | 地域名です。例：北方町、本巣市、岐阜市 |
| address | 店舗の住所です。未確認なら「要確認」と入れます。 |
| latitude | 緯度です。現在地からの距離計算に使います。未確認なら空欄または null にします。 |
| longitude | 経度です。現在地からの距離計算に使います。未確認なら空欄または null にします。 |
| mapKeyword | Googleマップ検索で使う言葉です。例：ガスト 岐阜北方店 |
| campaignTitle | キャンペーン名です。例：アプリクーポン確認用 |
| campaignSummary | キャンペーンの短い説明です。ユーザーが内容をすぐ分かる文章にします。 |
| discountType | お得の種類です。例：割引、還元、クーポン、特典、アプリクーポン |
| dealScore | お得度スコアです。数字が大きいほどおすすめです。例：80 |
| paymentMethods | 使える決済方法です。例：PayPay、楽天ペイ、公式アプリ、店舗で要確認 |
| deadline | 終了日や終了時間です。例：2026年7月31日まで、本日23:59終了、要確認 |
| isEndingToday | 今日終了かどうかです。今日終了なら true、違うなら false にします。 |
| isVisible | 表示するかどうかです。FALSE / false / いいえ / 非表示 にするとアプリには表示しません。空欄なら表示します。 |
| priority | 今日のおすすめ3選で使う優先度です。数字が小さいほど優先して表示します。空欄なら通常のおすすめロジックで表示します。 |
| memo | 管理用メモです。確認したことや後で直すことを書きます。アプリ画面には表示しません。 |
| companions | 誰と行く人に合うかです。例：ひとり、子どもと、家族で、友達と、夫婦で |
| genres | 食べたいジャンルです。例：ランチ、カフェ、ファミレス、回転寿司、テイクアウト |
| tags | 検索やおすすめに使う目印です。例：家族向け、今日終了、公式アプリ確認前提 |
| recommendedFor | アプリ内部でおすすめ理由を切り替えるための項目です。例：solo、kids、family、friends、couple |
| reasons | おすすめ理由です。誰と行くかに合わせた理由を書きます。 |
| targetStores | 対象店舗です。例：全国の対象店舗、岐阜北方店のみ、要確認 |
| targetProducts | 対象商品です。例：対象セット、アプリ注文商品、要確認 |
| officialSiteUrl | 公式サイトや公式キャンペーンページのURLです。未確認なら「要確認」と入れます。 |
| sourceType | 情報元です。例：公式サイト、アプリクーポン、決済キャンペーン、手入力、β版サンプル |
| checkedAt | 情報を確認した日です。例：2026-06-26 |
| confidence | 信頼度です。例：高、中、要確認 |
| caution | 注意点です。利用前に確認してほしい条件を書きます。 |

## 新しいキャンペーンを追加するときの流れ

1. 公式サイトや公式アプリで情報を確認する
2. 店舗名・対象商品・決済方法・終了日を確認する
3. `campaignData` に1件分追加する
4. `checkedAt` に確認日を入れる
5. `confidence` を設定する
6. アプリ上で表示確認する
7. GitHubにアップロードして公開URLを更新する

## 注意点

- β版ではサンプルデータを含みます。
- 実際に使う前に公式情報を確認してください。
- キャンペーンは変更・終了することがあります。
- 誤情報防止のため `checkedAt` と `sourceType` を必ず入れてください。

## 開発メモ

- アプリの入口は `index.html` です。
- キャンペーンデータは `script.js` の上部にある `campaignData` にまとめています。
- 新しいキャンペーンを追加するときは、`campaignData` に1件分のデータを追加します。
- `localStorage` を使って「あとで見る」の保存状態をブラウザ内に残しています。
- 現在地取得はブラウザの位置情報機能を使っていますが、距離計算はまだデモ表示です。
- Google Maps APIはまだ使っておらず、店舗名でGoogleマップ検索を開く形です。

## GitHubにアップロードするファイル

最低限、次の4つをアップロードすれば公開できます。

- `README.md`
- `index.html`
- `style.css`
- `script.js`

`work/` は作業用フォルダなので、GitHubにアップロードしなくても大丈夫です。

`outputs/` は以前の出力場所です。今はルートに同じアプリファイルをコピーしているため、GitHub Pagesで公開するだけなら必須ではありません。

## GitHub Pagesで公開する手順

1. GitHubで新しいリポジトリを作ります。
2. `README.md`、`index.html`、`style.css`、`script.js` をアップロードします。
3. リポジトリの `Settings` を開きます。
4. 左メニューから `Pages` を開きます。
5. `Build and deployment` の `Source` を `Deploy from a branch` にします。
6. `Branch` を `main`、フォルダを `/root` にして保存します。
7. 数分待つと、GitHub PagesのURLが表示されます。
8. そのURLを開いて、アプリが表示されるか確認します。


## 管理者用下書き作成機能の発展メモ

現在は、キャンペーンURLを貼って、対象チェーン・ジャンル・おすすめ対象を選ぶと、Googleスプレッドシートに貼り付けられる「要確認」の下書きデータを作る段階です。

将来的には、Google Apps Script や AI API を使って、URL先の内容を読み取り、キャンペーン名・期限・注意点などを自動抽出する予定です。

ただし、誤情報を防ぐため、公開前には必ず人間が公式サイト・公式アプリ・店舗情報を確認する運用にします。


## Google Apps Scriptでスプレッドシートに追加する準備

管理者用フォームの「スプレッドシートに送信」は、Google Apps Script のWebアプリURLにJSONを送る想定です。

Google Apps Script の役割は次の通りです。

- アプリから送られたURLやチェーン名を受け取る
- スプレッドシートの最終行に1行追加する
- 将来的にはURL先ページを読み取り、キャンペーン名や期限を自動抽出する予定
- 現段階では要確認データとして追加する

```javascript
const SHEET_NAME = 'シート1';

const COLUMN_ORDER = [
  'id',
  'chainName',
  'storeName',
  'storeArea',
  'address',
  'latitude',
  'longitude',
  'mapKeyword',
  'campaignTitle',
  'campaignSummary',
  'discountType',
  'dealScore',
  'paymentMethods',
  'deadline',
  'isEndingToday',
  'companions',
  'genres',
  'tags',
  'recommendedFor',
  'reasons',
  'targetStores',
  'targetProducts',
  'officialSiteUrl',
  'sourceType',
  'checkedAt',
  'confidence',
  'caution',
  'isVisible',
  'priority',
  'memo',
];

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || '{}');
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const chainName = payload.chainName || '要確認';
  const campaignUrl = payload.campaignUrl || '要確認';
  const genres = Array.isArray(payload.genres) ? payload.genres : [];
  const companions = Array.isArray(payload.companions) ? payload.companions : [];
  const checkedAt = payload.checkedAt || Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd');
  const id = [chainName, checkedAt, new Date().getTime()].join('-');

  const rowObject = {
    id,
    chainName,
    storeName: '',
    storeArea: '要確認',
    address: '要確認',
    latitude: '',
    longitude: '',
    mapKeyword: chainName,
    campaignTitle: '公式キャンペーン確認用',
    campaignSummary: '公式キャンペーンページを確認してから利用してください。',
    discountType: '要確認',
    dealScore: '50',
    paymentMethods: '要確認',
    deadline: '要確認',
    isEndingToday: 'FALSE',
    companions: companions.join(','),
    genres: genres.join(','),
    tags: ['URL自動下書き', '要確認'].concat(genres, companions).join(','),
    recommendedFor: companions.join(','),
    reasons: '公式キャンペーンページを確認してから使うβ版の下書き候補です。',
    targetStores: '全国または近隣の対象店舗。詳細は公式情報をご確認ください。',
    targetProducts: '要確認',
    officialSiteUrl: campaignUrl,
    sourceType: payload.sourceType || 'URL自動下書き',
    checkedAt,
    confidence: payload.confidence || '要確認',
    caution: '利用前に公式サイト・公式アプリ・店舗で最新条件を確認してください。',
    isVisible: payload.isVisible || 'TRUE',
    priority: '',
    memo: payload.memo || 'URLから追加した要確認データです。公開前に内容確認が必要です。',
  };

  sheet.appendRow(COLUMN_ORDER.map((column) => rowObject[column] || ''));

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Apps Script をWebアプリとして公開したら、発行されたURLを `script.js` の `GAS_ENDPOINT_URL` に入れます。

本番運用ではGoogle Apps Script側でも同じパスワードを確認してください。

