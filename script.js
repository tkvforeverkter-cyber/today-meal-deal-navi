// ここにキャンペーンデータを追加します。
// β版では、まず手入力でこの campaignData に外食キャンペーンと店舗情報を入れていきます。
// 新しいデータを追加するときは、下のテンプレートをコピーして campaignData の中に貼り付けます。
/*
  {
    id: "sample-campaign-id", // 管理用ID。他のデータと重ならない英数字の名前

    // 店舗情報
    chainName: "ガスト", // チェーン名
    storeName: "ガスト 本巣店", // 店舗名。まだ店舗が未定なら「ガスト 対象店舗（デモ）」でもOK
    storeArea: "岐阜県本巣市", // 地域名
    address: "岐阜県本巣市〇〇", // 住所。未定なら「確認中」でもOK
    latitude: null, // 緯度。分からない場合は null
    longitude: null, // 経度。分からない場合は null
    mapKeyword: "ガスト 本巣店", // Googleマップ検索で使う言葉

    // キャンペーン情報
    genre: "family-restaurant", // 内部用ジャンル
    genreLabel: "ファミレス", // 画面に表示するジャンル
    campaignTitle: "キッズメニュー注文でドリンクバー割引", // キャンペーン名
    campaignSummary: "キッズメニュー注文でドリンクバーが割引になります。", // 短い説明
    discountType: "割引", // 割引 / 還元 / クーポン / 特典
    dealScore: 90, // お得度スコア。数字が大きいほどおすすめ
    distanceKm: 1.2, // 現在地からの距離。今はデモ用
    paymentMethods: "アプリクーポン・各種決済", // 使える決済方法
    deadline: "本日21:00終了", // 終了日や終了時間
    urgency: "今日まで", // 今日終了カードで目立たせる短い表示
    isEndingToday: true, // 今日終了なら true
    deadlineMinutes: 21 * 60, // 今日終了順で使う終了時刻
    officialSiteUrl: "https://example.com", // 公式URL
    caution: "一部店舗では対象外の場合があります。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認", // 注意点

    // 検索用
    companions: ["子どもと", "家族で"], // 誰と行くか
    genres: ["ファミレス", "ランチ"], // 食べたいジャンル
    tags: ["家族向け", "今日終了", "割引"], // 検索やおすすめに使うタグ

    // 表示用
    recommendedFor: ["kids", "family"], // おすすめ理由を切り替えるための内部用
    recommendedForLabel: "子どもと・家族で", // 画面に表示するおすすめ対象
    reasons: {
      kids: "子ども椅子があり、提供が早いので子ども連れにおすすめです。",
      family: "家族でシェアしやすく、支払い総額を抑えやすいです。",
    },
    targetStores: "全国の対象店舗", // 対象店舗
    targetProducts: "対象キッズメニュー", // 対象商品
  },
*/

// 本物キャンペーン入力テンプレート
// 公式サイト・アプリ・決済キャンペーンを見て手入力するときは、下の項目をコピーして使います。
// campaignTitle: "", // キャンペーン名
// campaignSummary: "", // キャンペーンの短い説明
// discountType: "", // 割引 / 還元 / クーポン / 特典
// dealScore: 80, // お得度スコア。数字が大きいほどおすすめ
// paymentMethods: "", // 使える決済方法
// deadline: "", // 終了日。例: 2026年7月31日まで
// isEndingToday: false, // 今日終了なら true
// officialSiteUrl: "", // 公式サイトやキャンペーン詳細URL
// sourceType: "公式サイト", // 公式サイト / アプリクーポン / 決済キャンペーン / 手入力 / β版サンプル
// checkedAt: "2026-06-26", // 情報を確認した日
// confidence: "要確認", // 高 / 中 / 要確認
// caution: "", // 注意点。使う前に確認してほしい条件

// 新しいお得情報を増やすときは、この campaignData 配列に1件分の情報を追加してください。
let campaignData = [
  // β版テストデータ追加欄
  // 実店舗をテストするときは、この { ... } をコピーして、この下に貼り付けてください。
  // 住所や緯度経度が未確認の場合は、"要確認" や null のままで大丈夫です。
  // テスト用データだと分かるように、id や campaignTitle に "test" や "テスト" を入れておくと安心です。
  /*
  {
    id: "test-real-store-001", // 管理用ID。他のデータと重ならない名前にします

    // 店舗情報
    chainName: "テスト外食チェーン", // チェーン名。例: ガスト、マクドナルド、コメダ珈琲
    storeName: "テスト外食チェーン 本巣店（テスト）", // 店舗名。実店舗名に書き換えます
    storeArea: "岐阜県本巣市", // 地域名。例: 岐阜県本巣市
    address: "要確認", // 住所。未確認なら「要確認」
    latitude: null, // 緯度。未確認なら null。例: 35.000000
    longitude: null, // 経度。未確認なら null。例: 136.000000
    mapKeyword: "テスト外食チェーン 本巣店", // Googleマップ検索用キーワード

    // キャンペーン情報
    genre: "family-restaurant", // 内部用ジャンル。例: lunch, cafe, family-restaurant, sushi, ramen, yakiniku, takeout
    genreLabel: "ファミレス", // 画面に表示するジャンル
    campaignTitle: "【テスト】ドリンクバー割引キャンペーン", // キャンペーン名
    campaignSummary: "テスト用のお得情報です。実際に使う前に公式情報を確認してください。", // 短い説明
    discountType: "割引", // 割引 / 還元 / クーポン / 特典
    dealScore: 80, // お得度スコア。数字が大きいほどおすすめ
    distanceKm: 1.0, // 緯度経度が未入力のときに使うデモ距離
    paymentMethods: "要確認", // 使える決済方法。例: PayPay、楽天ペイ、店舗アプリ
    deadline: "要確認", // 終了日。例: 本日23:59終了、2026年7月31日まで
    urgency: "要確認", // 今日終了欄で目立たせる短い表示。例: 今日まで
    isEndingToday: false, // 今日終了なら true、そうでなければ false
    deadlineMinutes: 24 * 60, // 今日終了順で使う時刻。未定なら仮でOK
    officialSiteUrl: "https://example.com", // 公式URL。未確認なら仮URL
    caution: "テストデータです。実際の利用前に公式サイトや店舗で条件を確認してください。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認", // 注意点

    // 検索用
    companions: ["ひとり", "家族で"], // 誰と行くか。例: ひとり, 子どもと, 家族で, 友達と, 夫婦で
    genres: ["ファミレス", "ランチ"], // 食べたいジャンル
    tags: ["テストデータ", "要確認", "ランチ", "割引"], // 検索やおすすめに使うタグ

    // 表示用
    recommendedFor: ["solo", "family"], // 内部用。例: solo, kids, family, friends, couple
    recommendedForLabel: "ひとり・家族で", // 画面に表示するおすすめ対象
    reasons: {
      solo: "ひとりでも入りやすいかを確認するためのテスト理由です。",
      family: "家族で使いやすいかを確認するためのテスト理由です。",
    },
    targetStores: "要確認", // 対象店舗。例: 全国の対象店舗、〇〇店のみ
    targetProducts: "要確認", // 対象商品。例: 対象セット、アプリ注文商品
  },
  */

  {
    id: "gusto-family-lunch",
    chainName: "ガスト",
    storeName: "ガスト 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "ガスト",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    campaignTitle: "キッズメニュー注文でドリンクバー割引",
    campaignSummary: "キッズメニュー注文でドリンクバー割引。条件に合えば会計時にお得になります。",
    discountType: "割引",
    dealScore: 86,
    distanceKm: 0.7,
    paymentMethods: "アプリクーポン・各種決済",
    deadline: "本日20:00終了",
    urgency: "あと3時間",
    isEndingToday: true,
    deadlineMinutes: 1200,
    officialSiteUrl: "https://example.com/gusto",
    caution: "一部店舗では対象外の場合があります。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["子どもと", "家族で", "友達と"],
    genres: ["ファミレス", "ランチ"],
    tags: ["割引", "ファミレス", "ランチ", "子どもと", "家族で", "友達と", "今日終了", "近い", "子ども連れ", "家族向け"],
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    reasons: {
      kids: "子ども椅子があり、提供が早いので子ども連れにおすすめです。",
      family: "席が広く、家族でシェアしやすいメニューが多いので支払い総額を抑えやすいです。",
      friends: "長く話しやすく、メニューの価格帯も合わせやすいので友達との食事に向いています。",
    },
    targetStores: "全国の対象店舗",
    targetProducts: "キッズメニューと対象セット",
  },
  {
    id: "bamiyan-family-dinner",
    chainName: "バーミヤン",
    storeName: "バーミヤン 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "バーミヤン",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    campaignTitle: "セット注文で餃子半額クーポン",
    campaignSummary: "セット注文で餃子半額クーポン。条件に合えば会計時にお得になります。",
    discountType: "クーポン",
    dealScore: 78,
    distanceKm: 1.4,
    paymentMethods: "店舗により異なる",
    deadline: "本日22:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 1320,
    officialSiteUrl: "https://example.com/bamiyan",
    caution: "クーポン内容は店舗ごとに異なる場合があります。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["家族で", "友達と"],
    genres: ["ファミレス", "ランチ"],
    tags: ["クーポン", "ファミレス", "ランチ", "家族で", "友達と", "今日終了", "家族向け"],
    recommendedFor: ["family", "friends"],
    recommendedForLabel: "家族で・友達と",
    reasons: {
      family: "取り分けしやすい中華メニューが多く、家族でいろいろ頼んでも満足感を出しやすいです。",
      friends: "複数人でシェアしやすく、クーポンの効果を感じやすいので友達との食事に合います。",
    },
    targetStores: "全国の対象店舗",
    targetProducts: "対象セットと餃子",
  },
  {
    id: "kurasushi-kids",
    chainName: "くら寿司",
    storeName: "くら寿司 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "くら寿司",
    genre: "sushi",
    genreLabel: "回転寿司",
    campaignTitle: "アプリ予約で会計5%オフ",
    campaignSummary: "アプリ予約で会計5%オフ。条件に合えば会計時にお得になります。",
    discountType: "割引",
    dealScore: 82,
    distanceKm: 2.2,
    paymentMethods: "アプリ予約・店頭決済",
    deadline: "本日21:30終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 1290,
    officialSiteUrl: "https://example.com/kurasushi",
    caution: "予約条件を満たさない場合は対象外です。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["子どもと", "家族で", "友達と"],
    genres: ["回転寿司", "ランチ"],
    tags: ["割引", "回転寿司", "ランチ", "子どもと", "家族で", "友達と", "今日終了", "子ども連れ", "家族向け"],
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    reasons: {
      kids: "子どもが選びやすいメニューが多く、待ち時間を減らしやすいので子ども連れに向いています。",
      family: "家族それぞれが好きな皿を選べるので、好みが分かれる日でも使いやすいです。",
      friends: "食べる量を自分で調整できるので、友達同士でも会計感覚を合わせやすいです。",
    },
    targetStores: "全国の対象店舗",
    targetProducts: "アプリ予約対象の会計",
  },
  {
    id: "sushiro-friends",
    chainName: "スシロー",
    storeName: "スシロー 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "スシロー",
    genre: "sushi",
    genreLabel: "回転寿司",
    campaignTitle: "対象皿3皿以上で50円引き",
    campaignSummary: "対象皿3皿以上で50円引き。条件に合えば会計時にお得になります。",
    discountType: "割引",
    dealScore: 74,
    distanceKm: 1.8,
    paymentMethods: "店舗により異なる",
    deadline: "本日23:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 1380,
    officialSiteUrl: "https://example.com/sushiro",
    caution: "一部商品は割引対象外の場合があります。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["友達と", "家族で", "夫婦で"],
    genres: ["回転寿司", "ランチ"],
    tags: ["割引", "回転寿司", "ランチ", "友達と", "家族で", "夫婦で", "今日終了", "家族向け"],
    recommendedFor: ["friends", "family", "couple"],
    recommendedForLabel: "友達と・家族で・夫婦で",
    reasons: {
      friends: "好きな皿を少しずつ選べるので、友達と気軽に行きやすい候補です。",
      family: "子どもから大人まで選びやすく、家族全員の好みに合わせやすいです。",
      couple: "短時間でも使いやすく、重すぎない外食にしたい夫婦に向いています。",
    },
    targetStores: "全国の対象店舗",
    targetProducts: "対象皿",
  },
  {
    id: "mcdonald-takeout",
    chainName: "マクドナルド",
    storeName: "マクドナルド 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "マクドナルド",
    genre: "takeout",
    genreLabel: "テイクアウト",
    campaignTitle: "モバイルオーダーでポテトM割引",
    campaignSummary: "モバイルオーダーでポテトM割引。条件に合えば会計時にお得になります。",
    discountType: "割引",
    dealScore: 88,
    distanceKm: 0.5,
    paymentMethods: "アプリ注文",
    deadline: "本日18:00終了",
    urgency: "あと1時間",
    isEndingToday: true,
    deadlineMinutes: 1080,
    officialSiteUrl: "https://example.com/mcdonald",
    caution: "クーポン併用不可の場合があります。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["ひとり", "子どもと", "家族で", "友達と"],
    genres: ["テイクアウト", "ランチ"],
    tags: ["割引", "テイクアウト", "ランチ", "ひとり", "子どもと", "家族で", "友達と", "今日終了", "近い", "子ども連れ", "家族向け"],
    recommendedFor: ["solo", "kids", "family", "friends"],
    recommendedForLabel: "ひとり・子どもと・家族で・友達と",
    reasons: {
      solo: "ひとりでも注文しやすく、短時間で食べられるので忙しい時に便利です。",
      kids: "子どもが食べやすいメニューが多く、提供が早いので子ども連れにおすすめです。",
      family: "テイクアウトしやすく、家族分をまとめて買っても使いやすい候補です。",
      friends: "集合前後に立ち寄りやすく、軽く食べたい友達同士に向いています。",
    },
    targetStores: "全国の対象店舗",
    targetProducts: "モバイルオーダー対象商品",
  },
  {
    id: "komeda-cafe-couple",
    chainName: "コメダ珈琲",
    storeName: "コメダ珈琲 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "コメダ珈琲",
    genre: "cafe",
    genreLabel: "カフェ",
    campaignTitle: "ドリンク注文でミニデザート100円引き",
    campaignSummary: "ドリンク注文でミニデザート100円引き。条件に合えば会計時にお得になります。",
    discountType: "割引",
    dealScore: 72,
    distanceKm: 0.9,
    paymentMethods: "店舗により異なる",
    deadline: "本日19:00終了",
    urgency: "あと2時間",
    isEndingToday: true,
    deadlineMinutes: 1140,
    officialSiteUrl: "https://example.com/komeda",
    caution: "店舗ごとに条件が異なる場合があります。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["ひとり", "夫婦で", "友達と"],
    genres: ["カフェ"],
    tags: ["割引", "カフェ", "ひとり", "夫婦で", "友達と", "今日終了", "近い"],
    recommendedFor: ["solo", "couple", "friends"],
    recommendedForLabel: "ひとり・夫婦で・友達と",
    reasons: {
      solo: "ひとりでも入りやすく、休憩や作業のついでに使いやすいカフェ候補です。",
      couple: "ゆっくり話しやすく、軽食と甘いものを一緒に楽しみたい夫婦に合います。",
      friends: "カフェ利用しやすく、休憩にも会話にも使いやすい候補です。",
    },
    targetStores: "対象店舗のみ",
    targetProducts: "ドリンク注文時のミニデザート",
  },
  {
    id: "marugame-solo-lunch",
    chainName: "丸亀製麺",
    storeName: "丸亀製麺 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "丸亀製麺",
    genre: "lunch",
    genreLabel: "ランチ",
    campaignTitle: "うどん札利用で天ぷら割引",
    campaignSummary: "うどん札利用で天ぷら割引。条件に合えば会計時にお得になります。",
    discountType: "割引",
    dealScore: 80,
    distanceKm: 1.1,
    paymentMethods: "店頭決済",
    deadline: "本日20:30終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 1230,
    officialSiteUrl: "https://example.com/marugame",
    caution: "うどん札の利用条件を確認してください。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["ひとり", "友達と", "家族で"],
    genres: ["ランチ"],
    tags: ["割引", "ランチ", "ひとり", "友達と", "家族で", "今日終了", "家族向け"],
    recommendedFor: ["solo", "friends", "family"],
    recommendedForLabel: "ひとり・友達と・家族で",
    reasons: {
      solo: "ひとりでも入りやすく、短時間で食べられるのでランチ候補に向いています。",
      friends: "回転が早く、友達と気軽に食べたい時に使いやすいです。",
      family: "好みに合わせてうどんや天ぷらを選べるので、家族でも使いやすい候補です。",
    },
    targetStores: "全国の対象店舗",
    targetProducts: "うどん札対象商品",
  },
  {
    id: "saizeriya-friends",
    chainName: "サイゼリヤ",
    storeName: "サイゼリヤ 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "サイゼリヤ",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    campaignTitle: "対象セットで合計150円お得",
    campaignSummary: "対象セットで合計150円お得。条件に合えば会計時にお得になります。",
    discountType: "特典",
    dealScore: 90,
    distanceKm: 1.6,
    paymentMethods: "店舗により異なる",
    deadline: "本日23:30終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 1410,
    officialSiteUrl: "https://example.com/saizeriya",
    caution: "ランチ時間帯など一部条件があります。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["ひとり", "友達と", "家族で", "夫婦で"],
    genres: ["ファミレス", "ランチ"],
    tags: ["特典", "ファミレス", "ランチ", "ひとり", "友達と", "家族で", "夫婦で", "今日終了", "家族向け"],
    recommendedFor: ["solo", "friends", "family", "couple"],
    recommendedForLabel: "ひとり・友達と・家族で・夫婦で",
    reasons: {
      solo: "ひとりでも価格が読みやすく、軽く済ませたい時に使いやすいです。",
      friends: "長く話しやすく、注文を分けても総額を抑えやすいので友達と行きやすいです。",
      family: "家族でシェアしやすく、支払い総額を抑えやすい外食候補です。",
      couple: "気軽に入れて価格も分かりやすく、夫婦の普段使いに向いています。",
    },
    targetStores: "全国の対象店舗",
    targetProducts: "対象セット",
  },
  {
    id: "sukiya-solo",
    chainName: "すき家",
    storeName: "すき家 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "すき家",
    genre: "lunch",
    genreLabel: "ランチ",
    campaignTitle: "対象牛丼セットで80円引き",
    campaignSummary: "対象牛丼セットで80円引き。条件に合えば会計時にお得になります。",
    discountType: "割引",
    dealScore: 76,
    distanceKm: 0.4,
    paymentMethods: "d払い",
    deadline: "本日17:00終了",
    urgency: "まもなく終了",
    isEndingToday: true,
    deadlineMinutes: 1020,
    officialSiteUrl: "https://example.com/sukiya",
    caution: "一部店舗では対象外の場合があります。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["ひとり", "友達と"],
    genres: ["ランチ"],
    tags: ["割引", "ランチ", "ひとり", "友達と", "今日終了", "近い"],
    recommendedFor: ["solo", "friends"],
    recommendedForLabel: "ひとり・友達と",
    reasons: {
      solo: "ひとりでも入りやすく、短時間で食べられるので急ぎのランチにおすすめです。",
      friends: "近くでさっと食べられるので、友達と時間をかけずに済ませたい時に向いています。",
    },
    targetStores: "全国の対象店舗",
    targetProducts: "対象牛丼セット",
  },
  {
    id: "joyfull-family",
    chainName: "ジョイフル",
    storeName: "ジョイフル 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "ジョイフル",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    campaignTitle: "キッズプレート注文で100円引き",
    campaignSummary: "キッズプレート注文で100円引き。条件に合えば会計時にお得になります。",
    discountType: "割引",
    dealScore: 84,
    distanceKm: 2.8,
    paymentMethods: "店舗により異なる",
    deadline: "本日21:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 1260,
    officialSiteUrl: "https://example.com/joyfull",
    caution: "対象時間が限られる場合があります。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["子どもと", "家族で", "友達と"],
    genres: ["ファミレス", "ランチ"],
    tags: ["割引", "ファミレス", "ランチ", "子どもと", "家族で", "友達と", "今日終了", "子ども連れ", "家族向け"],
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    reasons: {
      kids: "子ども向けメニューがあり、席も使いやすいので子ども連れにおすすめです。",
      family: "家族向けメニューが多く、人数が多い時でも選びやすい外食候補です。",
      friends: "価格帯が分かりやすく、友達と気軽に集まりたい時に使いやすいです。",
    },
    targetStores: "全国の対象店舗",
    targetProducts: "キッズプレート",
  },
  {
    id: "ramen-solo",
    chainName: "一風堂",
    storeName: "一風堂 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "一風堂",
    genre: "ramen",
    genreLabel: "ラーメン",
    campaignTitle: "替玉1回無料クーポン",
    campaignSummary: "替玉1回無料クーポン。条件に合えば会計時にお得になります。",
    discountType: "クーポン",
    dealScore: 83,
    distanceKm: 1.3,
    paymentMethods: "店頭決済",
    deadline: "本日22:30終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 1350,
    officialSiteUrl: "https://example.com/ippudo",
    caution: "他クーポンと併用できない場合があります。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["ひとり", "友達と"],
    genres: ["ラーメン", "ランチ"],
    tags: ["クーポン", "ラーメン", "ランチ", "ひとり", "友達と", "今日終了"],
    recommendedFor: ["solo", "friends"],
    recommendedForLabel: "ひとり・友達と",
    reasons: {
      solo: "ひとりでも入りやすく、しっかり食べたい時のお得候補です。",
      friends: "短時間で満足感が出やすく、友達とラーメン気分の日に合います。",
    },
    targetStores: "対象店舗のみ",
    targetProducts: "替玉",
  },
  {
    id: "yakiniku-family",
    chainName: "牛角",
    storeName: "牛角 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "牛角",
    genre: "yakiniku",
    genreLabel: "焼肉",
    campaignTitle: "食べ放題コース注文で10%オフ",
    campaignSummary: "食べ放題コース注文で10%オフ。条件に合えば会計時にお得になります。",
    discountType: "割引",
    dealScore: 92,
    distanceKm: 3.1,
    paymentMethods: "クレジットカード・コード決済",
    deadline: "本日23:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 1380,
    officialSiteUrl: "https://example.com/gyukaku",
    caution: "事前予約や人数条件が必要な場合があります。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["家族で", "友達と", "夫婦で"],
    genres: ["焼肉"],
    tags: ["割引", "焼肉", "家族で", "友達と", "夫婦で", "今日終了", "家族向け"],
    recommendedFor: ["family", "friends", "couple"],
    recommendedForLabel: "家族で・友達と・夫婦で",
    reasons: {
      family: "家族でシェアしやすく、人数が多いほど割引のうれしさが出やすいです。",
      friends: "みんなで食べる楽しさがあり、コース割引でお得感を共有しやすいです。",
      couple: "少し特別感があり、夫婦でしっかり外食したい日に向いています。",
    },
    targetStores: "全国の対象店舗",
    targetProducts: "食べ放題コース",
  },
  {
    id: "gusto-kids-family-v2",
    chainName: "ガスト",
    storeName: "ガスト 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "ガスト",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    campaignTitle: "キッズプレート注文で家族ドリンクバー割引",
    campaignSummary: "キッズプレート注文で家族ドリンクバー割引。条件に合えば会計時にお得になります。",
    discountType: "割引",
    dealScore: 91,
    distanceKm: 0.8,
    paymentMethods: "店舗により異なる",
    deadline: "本日21:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 1260,
    officialSiteUrl: "https://example.com/gusto-family",
    caution: "一部店舗では対象外の場合があります。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["子どもと", "家族で"],
    genres: ["ファミレス", "ランチ"],
    tags: ["割引", "ファミレス", "ランチ", "子どもと", "家族で", "今日終了", "近い", "子ども連れ", "家族向け"],
    recommendedFor: ["kids", "family"],
    recommendedForLabel: "子どもと・家族で",
    reasons: {
      kids: "子ども椅子があり、提供が早いので子ども連れにおすすめです。",
      family: "家族でシェアしやすいメニューが多く、ドリンクバー割引で総額を抑えやすいです。",
    },
    targetStores: "全国の対象店舗",
    targetProducts: "キッズプレートとドリンクバー",
  },
  {
    id: "kurasushi-family-v2",
    chainName: "くら寿司",
    storeName: "くら寿司 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "くら寿司",
    genre: "sushi",
    genreLabel: "回転寿司",
    campaignTitle: "家族利用でアプリ予約ポイント還元",
    campaignSummary: "家族利用でアプリ予約ポイント還元。条件に合えば会計時にお得になります。",
    discountType: "還元",
    dealScore: 87,
    distanceKm: 1.7,
    paymentMethods: "アプリ予約・店頭決済",
    deadline: "本日22:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 1320,
    officialSiteUrl: "https://example.com/kurasushi-family",
    caution: "予約条件を満たさない場合は対象外です。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["子どもと", "家族で", "友達と"],
    genres: ["回転寿司", "ランチ"],
    tags: ["還元", "回転寿司", "ランチ", "子どもと", "家族で", "友達と", "今日終了", "子ども連れ", "家族向け"],
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    reasons: {
      kids: "子どもが選びやすいメニューが多く、家族で待ち時間を減らしやすいです。",
      family: "家族それぞれが好きな皿を選べるので、好みが分かれる日でも使いやすいです。",
      friends: "食べる量を調整しやすく、友達同士でも会計感覚を合わせやすいです。",
    },
    targetStores: "全国の対象店舗",
    targetProducts: "アプリ予約対象の会計",
  },
  {
    id: "marugame-solo-lunch-v2",
    chainName: "丸亀製麺",
    storeName: "丸亀製麺 本巣店（デモ）",
    storeArea: "岐阜県本巣市周辺（デモ）",
    address: "岐阜県本巣市周辺（デモ住所）",
    latitude: null,
    longitude: null,
    mapKeyword: "丸亀製麺",
    genre: "lunch",
    genreLabel: "ランチ",
    campaignTitle: "ひとりランチで天ぷら1品割引",
    campaignSummary: "ひとりランチで天ぷら1品割引。条件に合えば会計時にお得になります。",
    discountType: "割引",
    dealScore: 85,
    distanceKm: 0.9,
    paymentMethods: "店頭決済",
    deadline: "本日20:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 1200,
    officialSiteUrl: "https://example.com/marugame-solo",
    caution: "一部商品は割引対象外の場合があります。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["ひとり", "友達と"],
    genres: ["ランチ"],
    tags: ["割引", "ランチ", "ひとり", "友達と", "今日終了", "近い"],
    recommendedFor: ["solo", "friends"],
    recommendedForLabel: "ひとり・友達と",
    reasons: {
      solo: "ひとりでも入りやすく、短時間で食べられるので昼休みのランチにおすすめです。",
      friends: "回転が早く、友達と気軽に食べたい時にも使いやすいです。",
    },
    targetStores: "全国の対象店舗",
    targetProducts: "対象うどんと天ぷら",
  },

  // 岐阜市・本巣市・瑞穂市・北方町周辺 β版テスト店舗データ
  {
    id: "beta-local-gusto-kitagata",
    chainName: "ガスト",
    storeName: "ガスト 岐阜北方店",
    storeArea: "北方町",
    address: "岐阜県本巣郡北方町平成8-25",
    latitude: null, // ここに緯度を入力します（例: 35.123456）
    longitude: null, // ここに経度を入力します（例: 136.123456）
    mapKeyword: "ガスト 岐阜北方店",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    campaignTitle: "すかいらーくアプリクーポン確認用",
    campaignSummary: "すかいらーくアプリや公式キャンペーンを確認してから利用してください。",
    discountType: "アプリクーポン",
    dealScore: 82,
    distanceKm: 1.2,
    paymentMethods: "すかいらーくアプリ・店舗で要確認",
    deadline: "公式アプリ・公式サイトで要確認",
    urgency: "要確認",
    isEndingToday: false,
    deadlineMinutes: 24 * 60,
    officialSiteUrl: "https://www.skylark.co.jp/gusto/",
    caution: "β版テスト用データです。実際に利用する前に公式アプリ・公式サイト・店舗で最新条件を確認してください。",
    sourceType: "公式アプリ・公式サイト確認前提",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["子どもと", "家族で", "友達と"],
    genres: ["ファミレス", "ランチ"],
    tags: ["β版テスト", "実店舗メモ", "要確認", "北方町", "ファミレス", "クーポン", "ランチ", "子どもと", "家族で", "友達と", "今日終了", "公式アプリ確認前提", "すかいらーくアプリ", "本物寄りβ版"],
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    reasons: {
      kids: "子ども連れでも使いやすいかを確認するためのβ版テスト候補です。",
      family: "家族で食事しやすいかを確認するためのβ版テスト候補です。",
      friends: "友達と入りやすいかを確認するためのβ版テスト候補です。",
    },
    targetStores: "ガスト 岐阜北方店（要確認）",
    targetProducts: "すかいらーくアプリや公式キャンペーン上の対象商品を要確認",
  },
  {
    id: "beta-local-mcdonald-motosu-gotanda",
    chainName: "マクドナルド",
    storeName: "マクドナルド 本巣五反田店",
    storeArea: "本巣市",
    address: "岐阜県本巣市春近134-1",
    latitude: null, // ここに緯度を入力します（例: 35.123456）
    longitude: null, // ここに経度を入力します（例: 136.123456）
    mapKeyword: "マクドナルド 本巣五反田店",
    genre: "takeout",
    genreLabel: "テイクアウト",
    campaignTitle: "アプリクーポン・モバイルオーダー確認用",
    campaignSummary: "マクドナルド公式アプリやモバイルオーダーで使えるクーポンを確認してから利用してください。",
    discountType: "アプリクーポン",
    dealScore: 85,
    distanceKm: 2.4,
    paymentMethods: "公式アプリ・モバイルオーダー・店舗で要確認",
    deadline: "公式アプリ・公式サイトで要確認",
    urgency: "要確認",
    isEndingToday: false,
    deadlineMinutes: 24 * 60,
    officialSiteUrl: "https://www.mcdonalds.co.jp/",
    caution: "β版テスト用データです。実際に利用する前に公式アプリ・公式サイト・店舗で最新条件を確認してください。",
    sourceType: "公式アプリ・公式サイト確認前提",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["ひとり", "子どもと", "家族で", "友達と"],
    genres: ["テイクアウト", "ランチ"],
    tags: ["β版テスト", "実店舗メモ", "要確認", "本巣市", "テイクアウト", "クーポン", "ランチ", "ひとり", "子どもと", "家族で", "友達と", "公式アプリ確認前提", "モバイルオーダー", "本物寄りβ版"],
    recommendedFor: ["solo", "kids", "family", "friends"],
    recommendedForLabel: "ひとり・子どもと・家族で・友達と",
    reasons: {
      solo: "ひとりでも短時間で使いやすく、テイクアウトにも向いています。",
      kids: "子どもが食べやすいメニューが多く、提供が早いので子ども連れに使いやすいです。",
      family: "家族分をまとめて買いやすく、移動中の食事にも使いやすいです。",
      friends: "友達と気軽に立ち寄りやすい候補です。",
    },
    targetStores: "マクドナルド 本巣五反田店（要確認）",
    targetProducts: "公式アプリ・モバイルオーダー上の対象商品を要確認",
  },
  {
    id: "beta-local-komeda-gifu-hozumi",
    chainName: "コメダ珈琲店",
    storeName: "コメダ珈琲店 岐阜穂積店",
    storeArea: "瑞穂市",
    address: "岐阜県瑞穂市馬場春雨町1-22",
    latitude: null, // ここに緯度を入力します（例: 35.123456）
    longitude: null, // ここに経度を入力します（例: 136.123456）
    mapKeyword: "コメダ珈琲店 岐阜穂積店",
    genre: "cafe",
    genreLabel: "カフェ",
    campaignTitle: "β版テスト用サンプルお得情報",
    campaignSummary: "実際のキャンペーン情報は公式サイトで確認してください。",
    discountType: "特典",
    dealScore: 78,
    distanceKm: 4.8,
    paymentMethods: "要確認",
    deadline: "要確認",
    urgency: "要確認",
    isEndingToday: false,
    deadlineMinutes: 24 * 60,
    officialSiteUrl: "https://example.com",
    caution: "β版テスト用データです。実際に利用する前に公式サイトや店舗で条件を確認してください。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["ひとり", "友達と", "夫婦で"],
    genres: ["カフェ"],
    tags: ["β版テスト", "実店舗メモ", "要確認", "瑞穂市", "カフェ", "特典", "ひとり", "友達と", "夫婦で"],
    recommendedFor: ["solo", "friends", "couple"],
    recommendedForLabel: "ひとり・友達と・夫婦で",
    reasons: {
      solo: "ひとりでも休憩しやすく、短時間のカフェ利用にも向いています。",
      friends: "会話しながらゆっくり過ごしやすく、友達との休憩に使いやすい候補です。",
      couple: "落ち着いて話しやすく、夫婦で軽く外食したい時にも使いやすいです。",
    },
    targetStores: "コメダ珈琲店 岐阜穂積店（要確認）",
    targetProducts: "要確認",
  },
  {
    id: "beta-local-marugame-gifu-kita",
    chainName: "丸亀製麺",
    storeName: "丸亀製麺 岐阜北",
    storeArea: "岐阜市",
    address: "岐阜県岐阜市則武東3-15-15",
    latitude: null, // ここに緯度を入力します（例: 35.123456）
    longitude: null, // ここに経度を入力します（例: 136.123456）
    mapKeyword: "丸亀製麺 岐阜北",
    genre: "lunch",
    genreLabel: "ランチ",
    campaignTitle: "丸亀製麺アプリ・キャンペーン確認用",
    campaignSummary: "丸亀製麺アプリや公式キャンペーン情報を確認してから利用してください。",
    discountType: "アプリクーポン / キャンペーン",
    dealScore: 80,
    distanceKm: 5.5,
    paymentMethods: "丸亀製麺アプリ・店舗で要確認",
    deadline: "公式アプリ・公式サイトで要確認",
    urgency: "要確認",
    isEndingToday: false,
    deadlineMinutes: 24 * 60,
    officialSiteUrl: "https://jp.marugame.com/",
    caution: "β版テスト用データです。実際に利用する前に公式アプリ・公式サイト・店舗で最新条件を確認してください。",
    sourceType: "公式アプリ・公式サイト確認前提",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["ひとり", "家族で", "友達と"],
    genres: ["ランチ"],
    tags: ["β版テスト", "実店舗メモ", "要確認", "岐阜市", "ランチ", "特典", "ひとり", "家族で", "友達と", "今日終了", "公式アプリ確認前提", "公式キャンペーン確認前提", "本物寄りβ版"],
    recommendedFor: ["solo", "family", "friends"],
    recommendedForLabel: "ひとり・家族で・友達と",
    reasons: {
      solo: "ひとりでも入りやすく、短時間で食べられるランチ候補です。",
      family: "家族で手早く食事を済ませたい時に使いやすいです。",
      friends: "気軽なランチとして友達とも使いやすい候補です。",
    },
    targetStores: "丸亀製麺 岐阜北（要確認）",
    targetProducts: "丸亀製麺アプリや公式キャンペーン上の対象商品を要確認",
  },
  {
    id: "beta-local-sukiya-gifu-kitagata",
    chainName: "すき家",
    storeName: "すき家 岐阜北方店",
    storeArea: "北方町",
    address: "岐阜県本巣郡北方町平成4-3",
    latitude: null, // ここに緯度を入力します（例: 35.123456）
    longitude: null, // ここに経度を入力します（例: 136.123456）
    mapKeyword: "すき家 岐阜北方店",
    genre: "lunch",
    genreLabel: "ランチ",
    campaignTitle: "β版テスト用サンプルお得情報",
    campaignSummary: "実際のキャンペーン情報は公式サイトで確認してください。",
    discountType: "特典",
    dealScore: 83,
    distanceKm: 1,
    paymentMethods: "要確認",
    deadline: "要確認",
    urgency: "要確認",
    isEndingToday: false,
    deadlineMinutes: 24 * 60,
    officialSiteUrl: "https://example.com",
    caution: "β版テスト用データです。実際に利用する前に公式サイトや店舗で条件を確認してください。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["ひとり", "友達と"],
    genres: ["ランチ", "テイクアウト"],
    tags: ["β版テスト", "実店舗メモ", "要確認", "北方町", "ランチ", "特典", "テイクアウト", "ひとり", "友達と"],
    recommendedFor: ["solo", "friends"],
    recommendedForLabel: "ひとり・友達と",
    reasons: {
      solo: "ひとりでも入りやすく、短時間で食べられる候補です。",
      friends: "手軽に食べたい時に友達とも使いやすい候補です。",
    },
    targetStores: "すき家 岐阜北方店（要確認）",
    targetProducts: "要確認",
  },
  {
    id: "beta-local-sushiro-kitagata",
    chainName: "スシロー",
    storeName: "スシロー 北方店",
    storeArea: "北方町",
    address: "岐阜県本巣郡北方町高屋清流4丁目32番地",
    latitude: null, // ここに緯度を入力します（例: 35.123456）
    longitude: null, // ここに経度を入力します（例: 136.123456）
    mapKeyword: "スシロー 北方店",
    genre: "sushi",
    genreLabel: "回転寿司",
    campaignTitle: "β版テスト用サンプルお得情報",
    campaignSummary: "実際のキャンペーン情報は公式サイトで確認してください。",
    discountType: "特典",
    dealScore: 79,
    distanceKm: 2.2,
    paymentMethods: "要確認",
    deadline: "要確認",
    urgency: "要確認",
    isEndingToday: false,
    deadlineMinutes: 24 * 60,
    officialSiteUrl: "https://example.com",
    caution: "β版テスト用データです。実際に利用する前に公式サイトや店舗で条件を確認してください。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["子どもと", "家族で", "友達と"],
    genres: ["回転寿司", "ランチ"],
    tags: ["β版テスト", "実店舗メモ", "要確認", "北方町", "回転寿司", "特典", "ランチ", "子どもと", "家族で", "友達と"],
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    reasons: {
      kids: "子どもが食べたいものを選びやすく、家族で使いやすい回転寿司候補です。",
      family: "家族それぞれの好みに合わせやすく、シェアしながら食べやすいです。",
      friends: "友達と気軽に入りやすく、食べる量を調整しやすい候補です。",
    },
    targetStores: "スシロー 北方店（要確認）",
    targetProducts: "要確認",
  },
  {
    id: "beta-local-kurasushi-gifu-masaki",
    chainName: "くら寿司",
    storeName: "くら寿司 岐阜正木店",
    storeArea: "岐阜市",
    address: "岐阜県岐阜市正木西町1-20",
    latitude: null, // ここに緯度を入力します（例: 35.123456）
    longitude: null, // ここに経度を入力します（例: 136.123456）
    mapKeyword: "くら寿司 岐阜正木店",
    genre: "sushi",
    genreLabel: "回転寿司",
    campaignTitle: "β版テスト用サンプルお得情報",
    campaignSummary: "実際のキャンペーン情報は公式サイトで確認してください。",
    discountType: "特典",
    dealScore: 81,
    distanceKm: 6.1,
    paymentMethods: "要確認",
    deadline: "本日23:59終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 23 * 60 + 59,
    officialSiteUrl: "https://example.com",
    caution: "β版テスト用データです。実際に利用する前に公式サイトや店舗で条件を確認してください。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["子どもと", "家族で", "友達と"],
    genres: ["回転寿司", "ランチ"],
    tags: ["β版テスト", "実店舗メモ", "要確認", "岐阜市", "回転寿司", "特典", "ランチ", "子どもと", "家族で", "友達と", "今日終了"],
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    reasons: {
      kids: "子どもが食べたいものを選びやすく、家族で使いやすい回転寿司候補です。",
      family: "家族それぞれの好みに合わせやすく、シェアしながら食べやすいです。",
      friends: "友達と気軽に入りやすく、食べる量を調整しやすい候補です。",
    },
    targetStores: "くら寿司 岐阜正木店（要確認）",
    targetProducts: "要確認",
  },
  {
    id: "beta-local-saizeriya-malera-gifu",
    chainName: "サイゼリヤ",
    storeName: "サイゼリヤ モレラ岐阜店",
    storeArea: "本巣市",
    address: "岐阜県本巣市三橋1100 モレラ岐阜1F",
    latitude: null, // ここに緯度を入力します（例: 35.123456）
    longitude: null, // ここに経度を入力します（例: 136.123456）
    mapKeyword: "サイゼリヤ モレラ岐阜店",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    campaignTitle: "β版テスト用サンプルお得情報",
    campaignSummary: "実際のキャンペーン情報は公式サイトで確認してください。",
    discountType: "クーポン",
    dealScore: 77,
    distanceKm: 3,
    paymentMethods: "要確認",
    deadline: "要確認",
    urgency: "要確認",
    isEndingToday: false,
    deadlineMinutes: 24 * 60,
    officialSiteUrl: "https://example.com",
    caution: "β版テスト用データです。実際に利用する前に公式サイトや店舗で条件を確認してください。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["子どもと", "家族で", "友達と"],
    genres: ["ファミレス", "ランチ"],
    tags: ["β版テスト", "実店舗メモ", "要確認", "本巣市", "ファミレス", "クーポン", "ランチ", "子どもと", "家族で", "友達と"],
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    reasons: {
      kids: "子ども連れでも使いやすいかを確認するためのβ版テスト候補です。",
      family: "家族で食事しやすいかを確認するためのβ版テスト候補です。",
      friends: "友達と入りやすいかを確認するためのβ版テスト候補です。",
    },
    targetStores: "サイゼリヤ モレラ岐阜店（要確認）",
    targetProducts: "要確認",
  },
  {
    id: "beta-local-bamiyan-gifu-koenmae",
    chainName: "バーミヤン",
    storeName: "バーミヤン 岐阜公園前店",
    storeArea: "岐阜市",
    address: "岐阜県岐阜市大宮町1-1",
    latitude: null, // ここに緯度を入力します（例: 35.123456）
    longitude: null, // ここに経度を入力します（例: 136.123456）
    mapKeyword: "バーミヤン 岐阜公園前店",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    campaignTitle: "β版テスト用サンプルお得情報",
    campaignSummary: "実際のキャンペーン情報は公式サイトで確認してください。",
    discountType: "特典",
    dealScore: 76,
    distanceKm: 7.2,
    paymentMethods: "要確認",
    deadline: "要確認",
    urgency: "要確認",
    isEndingToday: false,
    deadlineMinutes: 24 * 60,
    officialSiteUrl: "https://example.com",
    caution: "β版テスト用データです。実際に利用する前に公式サイトや店舗で条件を確認してください。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["子どもと", "家族で", "友達と"],
    genres: ["ファミレス", "ランチ"],
    tags: ["β版テスト", "実店舗メモ", "要確認", "岐阜市", "ファミレス", "特典", "ランチ", "子どもと", "家族で", "友達と"],
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    reasons: {
      kids: "子ども連れでも使いやすいかを確認するためのβ版テスト候補です。",
      family: "家族で食事しやすいかを確認するためのβ版テスト候補です。",
      friends: "友達と入りやすいかを確認するためのβ版テスト候補です。",
    },
    targetStores: "バーミヤン 岐阜公園前店（要確認）",
    targetProducts: "要確認",
  },
  {
    id: "beta-local-joyfull-gifu-kitagata",
    chainName: "ジョイフル",
    storeName: "ジョイフル 岐阜北方店",
    storeArea: "北方町",
    address: "岐阜県本巣郡北方町栄町1丁目100番",
    latitude: null, // ここに緯度を入力します（例: 35.123456）
    longitude: null, // ここに経度を入力します（例: 136.123456）
    mapKeyword: "ジョイフル 岐阜北方店",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    campaignTitle: "β版テスト用サンプルお得情報",
    campaignSummary: "実際のキャンペーン情報は公式サイトで確認してください。",
    discountType: "特典",
    dealScore: 80,
    distanceKm: 1.5,
    paymentMethods: "要確認",
    deadline: "本日23:59終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 23 * 60 + 59,
    officialSiteUrl: "https://example.com",
    caution: "β版テスト用データです。実際に利用する前に公式サイトや店舗で条件を確認してください。",
    sourceType: "β版サンプル",
    checkedAt: "2026-06-26",
    confidence: "要確認",
    companions: ["子どもと", "家族で", "友達と"],
    genres: ["ファミレス", "ランチ"],
    tags: ["β版テスト", "実店舗メモ", "要確認", "北方町", "ファミレス", "特典", "ランチ", "子どもと", "家族で", "友達と", "今日終了"],
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    reasons: {
      kids: "子ども連れでも使いやすいかを確認するためのβ版テスト候補です。",
      family: "家族で食事しやすいかを確認するためのβ版テスト候補です。",
      friends: "友達と入りやすいかを確認するためのβ版テスト候補です。",
    },
    targetStores: "ジョイフル 岐阜北方店（要確認）",
    targetProducts: "要確認",
  },

];

// ここにGoogleスプレッドシートCSVのURLを入れます
// 例: const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/.../export?format=csv&gid=0";
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSYLSLEeIfTuIxtr93I5FT_M3V7R-0_YiaXK48GjeGCU79kn-Ju2GhxKtte3hn4_fgBBGwc31IUm-JV/pub?gid=2118753398&single=true&output=csv";


function updateDataSourceStatus(sourceLabel) {
  if (!dataSourceStatus) {
    return;
  }

  dataSourceStatus.textContent = "データ取得：" + sourceLabel;
}

function parseCsvText(csvText) {
  const rows = [];
  let row = [];
  let value = "";
  let inQuotes = false;

  for (let index = 0; index < csvText.length; index += 1) {
    const char = csvText[index];
    const nextChar = csvText[index + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      value += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(value);
      value = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }
      row.push(value);
      if (row.some((cell) => cell.trim() !== "")) {
        rows.push(row);
      }
      row = [];
      value = "";
      continue;
    }

    value += char;
  }

  row.push(value);
  if (row.some((cell) => cell.trim() !== "")) {
    rows.push(row);
  }

  return rows;
}

function csvToObjects(csvText) {
  const rows = parseCsvText(csvText);

  if (rows.length < 2) {
    return [];
  }

  const headers = rows[0].map((header) => header.trim());
  return rows.slice(1).map((row) => {
    return headers.reduce((object, header, index) => {
      object[header] = (row[index] || "").trim();
      return object;
    }, {});
  });
}

function splitCsvList(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (!value) {
    return [];
  }

  return String(value)
    .split(/[、,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseNullableNumber(value) {
  if (value === null || value === undefined || String(value).trim() === "") {
    return null;
  }

  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : null;
}

function parseScore(value) {
  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : 0;
}

function parseFlexibleBoolean(value) {
  const normalized = String(value || "").trim().toLowerCase();

  if (["true", "TRUE", "1", "yes", "y", "はい", "○", "本日", "今日"].map((item) => item.toLowerCase()).includes(normalized)) {
    return true;
  }

  if (["false", "FALSE", "0", "no", "n", "いいえ", "×", "なし"].map((item) => item.toLowerCase()).includes(normalized)) {
    return false;
  }

  return false;
}

function genreValueFromLabel(label) {
  const genreMap = {
    "ランチ": "lunch",
    "カフェ": "cafe",
    "ファミレス": "family-restaurant",
    "回転寿司": "sushi",
    "ラーメン": "ramen",
    "焼肉": "yakiniku",
    "テイクアウト": "takeout",
  };

  return genreMap[label] || "lunch";
}

function recommendedKeyFromLabel(label) {
  const companionMap = {
    "ひとり": "solo",
    "子どもと": "kids",
    "家族で": "family",
    "友達と": "friends",
    "夫婦で": "couple",
    solo: "solo",
    kids: "kids",
    family: "family",
    friends: "friends",
    couple: "couple",
  };

  return companionMap[label] || label;
}

function reasonsFromCsv(value, recommendedFor) {
  if (!value) {
    const defaultReason = "公式情報を確認してから使うβ版のお得候補です。";
    return recommendedFor.reduce((reasons, key) => {
      reasons[key] = defaultReason;
      return reasons;
    }, {});
  }

  const text = String(value).trim();
  const parts = text.split("|").map((item) => item.trim()).filter(Boolean);
  const reasonObject = {};

  parts.forEach((part) => {
    const separatorIndex = part.indexOf(":");
    if (separatorIndex > 0) {
      const key = recommendedKeyFromLabel(part.slice(0, separatorIndex).trim());
      reasonObject[key] = part.slice(separatorIndex + 1).trim();
    }
  });

  if (Object.keys(reasonObject).length > 0) {
    return reasonObject;
  }

  recommendedFor.forEach((key) => {
    reasonObject[key] = text;
  });

  return reasonObject;
}

function deadlineMinutesFromText(deadline) {
  const match = String(deadline || "").match(/(\d{1,2}):(\d{2})/);

  if (!match) {
    return 24 * 60;
  }

  return Number(match[1]) * 60 + Number(match[2]);
}

function urgencyFromDeadline(deadline, isEndingToday) {
  if (!isEndingToday) {
    return "要確認";
  }

  if (String(deadline || "").includes("本日")) {
    return deadline;
  }

  return "今日まで";
}

function campaignFromCsvRow(row) {
  const genres = splitCsvList(row.genres);
  const companions = splitCsvList(row.companions);
  const tags = splitCsvList(row.tags);
  const recommendedFor = splitCsvList(row.recommendedFor).map(recommendedKeyFromLabel);
  const safeRecommendedFor = recommendedFor.length > 0 ? recommendedFor : companions.map(recommendedKeyFromLabel).filter(Boolean);
  const finalRecommendedFor = safeRecommendedFor.length > 0 ? safeRecommendedFor : ["solo"];
  const genreLabel = genres[0] || "ランチ";
  const isEndingToday = parseFlexibleBoolean(row.isEndingToday);

  return {
    id: row.id,
    chainName: row.chainName,
    storeName: row.storeName,
    storeArea: row.storeArea,
    address: row.address || "要確認",
    latitude: parseNullableNumber(row.latitude),
    longitude: parseNullableNumber(row.longitude),
    mapKeyword: row.mapKeyword || row.storeName || row.chainName,
    genre: genreValueFromLabel(genreLabel),
    genreLabel,
    campaignTitle: row.campaignTitle || "キャンペーン確認用",
    campaignSummary: row.campaignSummary || "公式情報を確認してから利用してください。",
    discountType: row.discountType || "要確認",
    dealScore: parseScore(row.dealScore),
    distanceKm: 9.9,
    paymentMethods: splitCsvList(row.paymentMethods).length > 0 ? splitCsvList(row.paymentMethods) : ["要確認"],
    deadline: row.deadline || "要確認",
    urgency: urgencyFromDeadline(row.deadline, isEndingToday),
    isEndingToday,
    deadlineMinutes: deadlineMinutesFromText(row.deadline),
    officialSiteUrl: row.officialSiteUrl || "要確認",
    caution: row.caution || "実際に利用する前に公式サイトや店舗で条件を確認してください。",
    sourceType: row.sourceType || "手入力",
    checkedAt: row.checkedAt || "要確認",
    confidence: row.confidence || "要確認",
    companions,
    genres,
    tags,
    recommendedFor: finalRecommendedFor,
    recommendedForLabel: companions.join("・") || "要確認",
    reasons: reasonsFromCsv(row.reasons, finalRecommendedFor),
    targetStores: row.targetStores || "要確認",
    targetProducts: row.targetProducts || "要確認",
  };
}

function campaignsFromCsv(csvText) {
  return csvToObjects(csvText)
    .map(campaignFromCsvRow)
    .filter((campaign) => campaign.id && campaign.storeName && campaign.campaignTitle);
}

function setupCampaignRuntimeData() {
  campaignData.forEach((campaign) => {
    campaign.demoDistanceKm = campaign.distanceKm;
  });
}

async function loadCampaignsFromCsv() {
  if (!GOOGLE_SHEET_CSV_URL) {
    setupCampaignRuntimeData();
    updateDataSourceStatus("内蔵デモデータ");
    return;
  }

  try {
    const response = await fetch(GOOGLE_SHEET_CSV_URL);

    if (!response.ok) {
      throw new Error("CSVを読み込めませんでした");
    }

    const csvText = await response.text();
    const csvCampaigns = campaignsFromCsv(csvText);

    if (csvCampaigns.length === 0) {
      throw new Error("CSVに有効なデータがありませんでした");
    }

    campaignData = csvCampaigns;
    setupCampaignRuntimeData();
    updateDataSourceStatus("スプレッドシート");
  } catch (error) {
    console.warn("CSV読み込みに失敗したため、script.js内のcampaignDataを使います。", error);
    setupCampaignRuntimeData();
    updateDataSourceStatus("内蔵デモデータ");
  }
}


const companionLabels = {
  solo: "ひとりで行きやすい",
  kids: "子どもと行ける",
  family: "家族で使いやすい",
  friends: "友達と行きやすい",
  couple: "夫婦で行きやすい",
};

const foodLabels = {
  all: "外食",
  lunch: "ランチ",
  cafe: "カフェ",
  "family-restaurant": "ファミレス",
  sushi: "回転寿司",
  ramen: "ラーメン",
  yakiniku: "焼肉",
  takeout: "テイクアウト",
};

const companionSearchLabels = {
  solo: "ひとり",
  kids: "子どもと",
  family: "家族で",
  friends: "友達と",
  couple: "夫婦で",
};

const genreSearchLabels = {
  all: "なんでも",
  lunch: "ランチ",
  cafe: "カフェ",
  "family-restaurant": "ファミレス",
  sushi: "回転寿司",
  ramen: "ラーメン",
  yakiniku: "焼肉",
  takeout: "テイクアウト",
};

const sortLabels = {
  near: "近い順",
  deal: "お得順",
  endingToday: "今日終了順",
};

const app = document.querySelector(".app");
const form = document.querySelector("#searchForm");
const locationButton = document.querySelector("#locationButton");
const locationStatus = document.querySelector("#locationStatus");
const locationDetail = document.querySelector("#locationDetail");
const dataSourceStatus = document.querySelector("#dataSourceStatus");
const companionSelect = document.querySelector("#companionSelect");
const foodSelect = document.querySelector("#foodSelect");
const sortSelect = document.querySelector("#sortSelect");
const topPicksResults = document.querySelector("#topPicksResults");
const savedResults = document.querySelector("#savedResults");
const savedCount = document.querySelector("#savedCount");
const todayEndingResults = document.querySelector("#todayEndingResults");
const recommendationTitle = document.querySelector("#recommendationTitle");
const results = document.querySelector("#results");
const resultCount = document.querySelector("#resultCount");
const conditionChips = document.querySelector("#conditionChips");
const resetButton = document.querySelector("#resetButton");
const resultsSection = document.querySelector(".results-section");
const topPicksSection = document.querySelector(".top-picks");
const sortNote = document.querySelector("#sortNote");
const detailModal = document.querySelector("#detailModal");
const modalBody = document.querySelector("#modalBody");
const savedDealIds = new Set(JSON.parse(localStorage.getItem("savedMealDeals") || "[]"));
let currentPosition = null;
let hasSearched = false;

// CSVを使う場合も、手入力データを使う場合も、読み込み後に demoDistanceKm を準備します。

function saveSavedDeals() {
  localStorage.setItem("savedMealDeals", JSON.stringify([...savedDealIds]));
}

function isSaved(campaignId) {
  return savedDealIds.has(campaignId);
}

function savedButtonText(campaignId) {
  return isSaved(campaignId) ? "保存済み" : "⭐ あとで見る";
}

function savedButtonClass(campaignId) {
  return isSaved(campaignId) ? "save-button is-saved" : "save-button";
}

function toggleSaved(campaignId) {
  if (savedDealIds.has(campaignId)) {
    savedDealIds.delete(campaignId);
  } else {
    savedDealIds.add(campaignId);
  }

  saveSavedDeals();
  showTopPicks();
  showSavedCampaigns();
  showTodayEndingCampaigns();
  showCampaigns();

  if (detailModal.classList.contains("is-open")) {
    const campaign = campaignData.find((item) => item.id === campaignId);
    if (campaign) {
      openDetailModal(campaign);
    }
  }
}

function hasCoordinates(campaign) {
  return typeof campaign.latitude === "number" && typeof campaign.longitude === "number";
}

function toRadians(degrees) {
  return degrees * Math.PI / 180;
}

function haversineDistanceKm(fromLatitude, fromLongitude, toLatitude, toLongitude) {
  const earthRadiusKm = 6371;
  const latitudeDistance = toRadians(toLatitude - fromLatitude);
  const longitudeDistance = toRadians(toLongitude - fromLongitude);
  const fromLatitudeRadians = toRadians(fromLatitude);
  const toLatitudeRadians = toRadians(toLatitude);
  const a = Math.sin(latitudeDistance / 2) * Math.sin(latitudeDistance / 2)
    + Math.cos(fromLatitudeRadians) * Math.cos(toLatitudeRadians)
    * Math.sin(longitudeDistance / 2) * Math.sin(longitudeDistance / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusKm * c;
}

function updateCampaignDistancesFromPosition(position) {
  campaignData.forEach((campaign) => {
    if (hasCoordinates(campaign)) {
      campaign.distanceKm = Number(haversineDistanceKm(
        position.latitude,
        position.longitude,
        campaign.latitude,
        campaign.longitude
      ).toFixed(1));
      return;
    }

    campaign.distanceKm = campaign.demoDistanceKm;
  });
}

function resetCampaignDistancesToDemo() {
  campaignData.forEach((campaign) => {
    campaign.distanceKm = campaign.demoDistanceKm;
  });
}

function refreshCampaignViews() {
  showTopPicks();
  showSavedCampaigns();
  showTodayEndingCampaigns();
  showCampaigns();
}

function mapsUrl(campaign) {
  if (typeof campaign.latitude === "number" && typeof campaign.longitude === "number") {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(campaign.latitude + "," + campaign.longitude);
  }

  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(campaign.mapKeyword || campaign.storeName || campaign.chainName);
}

function isUsingCalculatedDistance(campaign) {
  return Boolean(currentPosition) && hasCoordinates(campaign);
}

function distanceValueText(campaign) {
  return isUsingCalculatedDistance(campaign)
    ? "現在地から約" + campaign.distanceKm + "km"
    : "約" + campaign.distanceKm + "km";
}

function distanceSourceText(campaign) {
  return isUsingCalculatedDistance(campaign)
    ? "現在地から計算"
    : "距離はデモ表示です";
}

function sourceMetaText(campaign) {
  return "情報元：" + (campaign.sourceType || "要確認")
    + " / 確認日：" + (campaign.checkedAt || "要確認")
    + " / 信頼度：" + (campaign.confidence || "要確認");
}

function sourceNoticeText(campaign) {
  if (campaign.confidence === "要確認") {
    return "公式情報をご確認ください";
  }

  return "利用前に条件をご確認ください";
}

function paymentMethodsText(campaign) {
  return Array.isArray(campaign.paymentMethods)
    ? campaign.paymentMethods.join("、")
    : campaign.paymentMethods;
}

function sourceBadgeText(campaign) {
  return campaign.sourceType === "β版サンプル" ? "β版サンプル" : campaign.sourceType;
}

function reasonFor(campaign, companion) {
  return campaign.reasons[companion] || campaign.reasons[campaign.recommendedFor[0]];
}

function createCampaignCard(campaign, companion, options = {}) {
  const isHighlight = Boolean(options.isHighlight);
  return [
    '<article class="deal-card">',
    '<div class="deal-top">',
    '<p class="store-name">' + campaign.storeName + '</p>',
    '<span class="genre">' + campaign.genreLabel + '</span>',
    '</div>',
    '<p class="campaign">' + campaign.campaignTitle + '</p>',
    '<div class="reason-box">',
    '<p class="reason-label">おすすめ理由</p>',
    '<p class="reason">' + reasonFor(campaign, companion) + '</p>',
    '</div>',
    '<div class="score-row" aria-label="並び替えに使う情報">',
    '<div class="score-item"><span class="score-label">お得度</span><span class="score-value">' + campaign.dealScore + '点</span></div>',
    '<div class="score-item"><span class="score-label">距離</span><span class="score-value">' + distanceValueText(campaign) + '</span><span class="distance-source">' + distanceSourceText(campaign) + '</span></div>',
    '<div class="score-item"><span class="score-label">終了</span><span class="score-value">' + campaign.deadline.replace("本日", "") + '</span></div>',
    '</div>',
    '<div class="deadline-badge"><span>' + (isHighlight ? campaign.urgency : campaign.deadline) + '</span><span>今日終了</span></div>',
    '<div class="source-note"><span class="source-badge">' + sourceBadgeText(campaign) + '</span><span>' + sourceMetaText(campaign) + '</span><span>' + sourceNoticeText(campaign) + '</span></div>',
    '<dl class="meta-list"><div><dt>誰におすすめか</dt><dd>' + campaign.recommendedForLabel + '</dd></div></dl>',
    '<div class="card-actions three-actions">',
    '<button class="detail-button" type="button" data-detail-id="' + campaign.id + '">詳細を見る</button>',
    '<a class="route-link" href="' + mapsUrl(campaign) + '" target="_blank" rel="noreferrer">ルートを見る</a>',
    '<button class="' + savedButtonClass(campaign.id) + '" type="button" data-save-id="' + campaign.id + '">' + savedButtonText(campaign.id) + '</button>',
    '</div>',
    '</article>',
  ].join("");
}

function topPickReason(campaign) {
  const reasons = [];
  if (campaign.dealScore >= 86) reasons.push("お得度が高い");
  if (campaign.isEndingToday) reasons.push("今日終了");
  if (campaign.recommendedFor.includes("kids") || campaign.recommendedFor.includes("family")) reasons.push("家族でも使いやすい");
  if (campaign.distanceKm <= 1.6) reasons.push("近い距離");
  reasons.push("使い方が分かりやすい");
  return reasons.slice(0, 4).join("・");
}

function createTopPickCard(campaign, index) {
  return [
    '<article class="deal-card">',
    '<div class="deal-top"><div><span class="rank-badge">' + (index + 1) + '</span></div><span class="genre">' + campaign.genreLabel + '</span></div>',
    '<p class="store-name">' + campaign.storeName + '</p>',
    '<p class="campaign">' + campaign.campaignTitle + '</p>',
    '<p class="pick-note">' + topPickReason(campaign) + '</p>',
    '<div class="reason-box"><p class="reason-label">おすすめ理由</p><p class="reason">' + reasonFor(campaign, campaign.recommendedFor[0]) + '</p></div>',
    '<div class="score-row" aria-label="おすすめ3選の判断材料">',
    '<div class="score-item"><span class="score-label">お得度</span><span class="score-value">' + campaign.dealScore + '点</span></div>',
    '<div class="score-item"><span class="score-label">距離</span><span class="score-value">' + distanceValueText(campaign) + '</span><span class="distance-source">' + distanceSourceText(campaign) + '</span></div>',
    '<div class="score-item"><span class="score-label">終了</span><span class="score-value">' + campaign.deadline.replace("本日", "") + '</span></div>',
    '</div>',
    '<div class="deadline-badge"><span>' + campaign.urgency + '</span><span>今日終了</span></div>',
    '<div class="source-note"><span class="source-badge">' + sourceBadgeText(campaign) + '</span><span>' + sourceMetaText(campaign) + '</span><span>' + sourceNoticeText(campaign) + '</span></div>',
    '<div class="card-actions three-actions">',
    '<button class="detail-button" type="button" data-detail-id="' + campaign.id + '">詳細を見る</button>',
    '<a class="route-link" href="' + mapsUrl(campaign) + '" target="_blank" rel="noreferrer">ルートを見る</a>',
    '<button class="' + savedButtonClass(campaign.id) + '" type="button" data-save-id="' + campaign.id + '">' + savedButtonText(campaign.id) + '</button>',
    '</div>',
    '</article>',
  ].join("");
}

function matchesCompanion(campaign, selectedCompanion) {
  const selectedLabel = companionSearchLabels[selectedCompanion];
  return (campaign.companions || []).includes(selectedLabel) || campaign.recommendedFor.includes(selectedCompanion);
}

function matchesFood(campaign, selectedFood) {
  if (selectedFood === "all") return true;

  const selectedLabel = genreSearchLabels[selectedFood];
  return (campaign.genres || []).includes(selectedLabel) || campaign.genre === selectedFood;
}

function searchRelevance(campaign) {
  let score = 0;

  if (matchesCompanion(campaign, companionSelect.value)) score += 2;
  if (foodSelect.value === "all") score += 1;
  if (foodSelect.value !== "all" && matchesFood(campaign, foodSelect.value)) score += 2;

  return score;
}

function compareCampaigns(a, b, sortType) {
  if (sortType === "deal") {
    return b.dealScore - a.dealScore;
  }

  if (sortType === "endingToday") {
    return Number(b.isEndingToday) - Number(a.isEndingToday) || a.deadlineMinutes - b.deadlineMinutes;
  }

  return a.distanceKm - b.distanceKm;
}

function sortCampaigns(campaigns, sortType) {
  return [...campaigns].sort((a, b) => compareCampaigns(a, b, sortType));
}

function sortCampaignMatches(scoredCampaigns, sortType) {
  return [...scoredCampaigns]
    .sort((a, b) => compareCampaigns(a.campaign, b.campaign, sortType) || b.relevance - a.relevance)
    .map((item) => item.campaign);
}

function updateRecommendationTitle() {
  const companionText = companionLabels[companionSelect.value];
  const foodText = foodLabels[foodSelect.value];
  recommendationTitle.textContent = companionText + foodText + "のお得候補";
}

function updateSortNote() {
  if (hasSearched) {
    if (sortSelect.value === "near") {
      sortNote.textContent = currentPosition
        ? "現在地から近い順で表示中です。"
        : "近い順はデモ距離で表示しています。現在地を使うと、より正確な距離表示になります。";
      sortNote.style.display = "block";
      return;
    }

    sortNote.textContent = sortLabels[sortSelect.value] + "で表示中。";
    sortNote.style.display = "block";
    return;
  }

  if (sortSelect.value === "near") {
    sortNote.textContent = currentPosition
      ? "現在地から近い順で表示できます。"
      : "近い順はデモ距離で表示しています。現在地を使うと、より正確な距離表示になります。";
    sortNote.style.display = "block";
    return;
  }

  sortNote.style.display = "none";
}

function updateResultSummary(resultTotal) {
  resultCount.textContent = hasSearched ? resultTotal + "件見つかりました" : resultTotal + "件";
  resetButton.hidden = !hasSearched;

  if (!hasSearched) {
    conditionChips.innerHTML = "";
    conditionChips.style.display = "none";
    return;
  }

  conditionChips.style.display = "flex";
  conditionChips.innerHTML = [
    companionSearchLabels[companionSelect.value],
    genreSearchLabels[foodSelect.value],
    sortLabels[sortSelect.value],
  ]
    .map((label) => '<span>' + label + '</span>')
    .join("");
}

function switchToSearchResults() {
  hasSearched = true;
  app.classList.add("is-searched");
}

function resetSearchConditions() {
  companionSelect.value = "solo";
  foodSelect.value = "all";
  sortSelect.value = "near";
  hasSearched = false;
  app.classList.remove("is-searched");
  showCampaigns();
  topPicksSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function topPickScore(campaign) {
  let score = campaign.dealScore;
  if (campaign.isEndingToday) score += 12;
  if (campaign.recommendedFor.includes("kids") || campaign.recommendedFor.includes("family")) score += 10;
  if (campaign.distanceKm <= 1) score += 8;
  if (campaign.targetStores && campaign.targetProducts && campaign.paymentMethods) score += 5;
  return score;
}

function showTopPicks() {
  const topPicks = [...campaignData]
    .sort((a, b) => topPickScore(b) - topPickScore(a))
    .slice(0, 3);

  topPicksResults.innerHTML = topPicks.map(createTopPickCard).join("");
}

function showSavedCampaigns() {
  const savedCampaigns = campaignData.filter((campaign) => savedDealIds.has(campaign.id));
  savedCount.textContent = savedCampaigns.length + "件";

  if (savedCampaigns.length === 0) {
    savedResults.innerHTML = '<p class="saved-empty">気になるお得を保存すると、ここに表示されます</p>';
    return;
  }

  savedResults.innerHTML = savedCampaigns.map((campaign) => createCampaignCard(campaign, companionSelect.value)).join("");
}

function showTodayEndingCampaigns() {
  const endingCampaigns = sortCampaigns(campaignData.filter((campaign) => campaign.isEndingToday), "endingToday").slice(0, 3);
  todayEndingResults.innerHTML = endingCampaigns.map((campaign) => createCampaignCard(campaign, campaign.recommendedFor[0], { isHighlight: true })).join("");
}

function showCampaigns() {
  const scoredCampaigns = campaignData.map((campaign) => {
    return {
      campaign,
      relevance: searchRelevance(campaign),
    };
  });
  const matchedCampaigns = scoredCampaigns.filter((item) => item.relevance > 0);
  const candidates = matchedCampaigns.length > 0 ? matchedCampaigns : scoredCampaigns;
  const sortedCampaigns = sortCampaignMatches(candidates, sortSelect.value);

  updateRecommendationTitle();
  updateSortNote();
  updateResultSummary(sortedCampaigns.length);

  if (sortedCampaigns.length === 0) {
    results.innerHTML = '<p class="empty">条件に合う候補が見つかりませんでした。ジャンルを“なんでも”に変えて試してみてください。</p>';
    return;
  }

  results.innerHTML = sortedCampaigns.map((campaign) => createCampaignCard(campaign, companionSelect.value)).join("");
}

function useCurrentLocation() {
  locationButton.disabled = true;
  locationStatus.classList.remove("is-success", "is-error");
  locationStatus.textContent = "現在地：取得中...";
  locationDetail.textContent = "ブラウザの位置情報許可を確認しています。";

  if (!navigator.geolocation) {
    currentPosition = null;
    resetCampaignDistancesToDemo();
    locationStatus.classList.add("is-error");
    locationStatus.textContent = "現在地：未取得";
    locationDetail.textContent = "位置情報を取得できませんでした。ブラウザの許可設定を確認してください。";
    locationButton.disabled = false;
    refreshCampaignViews();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      currentPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      updateCampaignDistancesFromPosition(currentPosition);
      locationStatus.classList.add("is-success");
      locationStatus.textContent = "現在地：取得済み";
      locationDetail.textContent = "現在地から近い順で表示できます（確認用：" + currentPosition.latitude.toFixed(4) + ", " + currentPosition.longitude.toFixed(4) + "）。";
      locationButton.disabled = false;
      refreshCampaignViews();
    },
    () => {
      currentPosition = null;
      resetCampaignDistancesToDemo();
      locationStatus.classList.add("is-error");
      locationStatus.textContent = "現在地：未取得";
      locationDetail.textContent = "位置情報を取得できませんでした。ブラウザの許可設定を確認してください。";
      locationButton.disabled = false;
      refreshCampaignViews();
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
  );
}

function openDetailModal(campaign) {
  const companion = companionSelect.value;
  modalBody.innerHTML = [
    '<p class="store-name">' + campaign.storeName + '</p>',
    '<div class="modal-summary">',
    '<p class="modal-label">このお得の内容</p>',
    '<p class="modal-campaign">' + campaign.campaignTitle + '</p>',
    '<p class="modal-summary-text">' + campaign.campaignSummary + '</p>',
    '</div>',
    '<div class="source-note modal-source-note"><span class="source-badge">' + sourceBadgeText(campaign) + '</span><span>' + sourceMetaText(campaign) + '</span><span>' + sourceNoticeText(campaign) + '</span></div>',
    '<div class="modal-reason"><span>おすすめ理由</span>' + reasonFor(campaign, companion) + '</div>',
    '<dl class="detail-grid">',
    '<div><dt>対象店舗</dt><dd>' + campaign.targetStores + '</dd></div>',
    '<div><dt>対象商品</dt><dd>' + campaign.targetProducts + '</dd></div>',
    '<div><dt>使える決済方法</dt><dd>' + paymentMethodsText(campaign) + '</dd></div>',
    '<div><dt>情報元</dt><dd>' + (campaign.sourceType || "要確認") + '</dd></div>',
    '<div><dt>確認日</dt><dd>' + (campaign.checkedAt || "要確認") + '</dd></div>',
    '<div><dt>信頼度</dt><dd>' + (campaign.confidence || "要確認") + '</dd></div>',
    '<div><dt>店舗エリア</dt><dd>' + campaign.storeArea + '</dd></div>',
    '<div><dt>住所</dt><dd>' + campaign.address + '</dd></div>',
    '<div><dt>距離</dt><dd>' + distanceValueText(campaign) + '<br><span class="distance-source">' + distanceSourceText(campaign) + '</span></dd></div>',
    '<div><dt>お得の種類</dt><dd>' + campaign.discountType + '</dd></div>',
    '<div><dt>終了期限</dt><dd>' + campaign.deadline + '</dd></div>',
    '<div><dt>注意点</dt><dd>' + campaign.caution + '</dd></div>',
    '</dl>',
    '<div class="modal-actions with-save">',
    '<a class="official-link" href="' + campaign.officialSiteUrl + '" target="_blank" rel="noreferrer">公式サイトを見る</a>',
    '<a class="modal-route-link" href="' + mapsUrl(campaign) + '" target="_blank" rel="noreferrer">ルートを見る</a>',
    '<button class="modal-save-button ' + (isSaved(campaign.id) ? "is-saved" : "") + '" type="button" data-save-id="' + campaign.id + '">' + savedButtonText(campaign.id) + '</button>',
    '</div>',
  ].join("");
  detailModal.classList.add("is-open");
  detailModal.setAttribute("aria-hidden", "false");
}

function closeDetailModal() {
  detailModal.classList.remove("is-open");
  detailModal.setAttribute("aria-hidden", "true");
}

function handleSaveClick(event) {
  const button = event.target.closest("[data-save-id]");

  if (!button) {
    return;
  }

  toggleSaved(button.dataset.saveId);
}

function handleDetailClick(event) {
  const button = event.target.closest("[data-detail-id]");

  if (!button) {
    return;
  }

  const campaign = campaignData.find((item) => item.id === button.dataset.detailId);

  if (campaign) {
    openDetailModal(campaign);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  switchToSearchResults();
  showCampaigns();
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

resetButton.addEventListener("click", resetSearchConditions);

locationButton.addEventListener("click", useCurrentLocation);
topPicksResults.addEventListener("click", handleDetailClick);
topPicksResults.addEventListener("click", handleSaveClick);
savedResults.addEventListener("click", handleDetailClick);
savedResults.addEventListener("click", handleSaveClick);
todayEndingResults.addEventListener("click", handleDetailClick);
todayEndingResults.addEventListener("click", handleSaveClick);
results.addEventListener("click", handleDetailClick);
results.addEventListener("click", handleSaveClick);
detailModal.addEventListener("click", handleSaveClick);
detailModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) {
    closeDetailModal();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDetailModal();
  }
});

loadCampaignsFromCsv().then(refreshCampaignViews);
