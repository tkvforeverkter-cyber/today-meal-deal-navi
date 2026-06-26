// ここにキャンペーンデータを追加します。
// コピペ用キャンペーン追加テンプレート
// 次回キャンペーンを追加するときは、この下の { ... } をコピーして campaignData の中に貼り付けます。
// 貼り付けたら、右側の値だけを書き換えればOKです。
/*
  {
    id: "sample-campaign-id", // 管理用の名前。英数字とハイフンで、他と重ならない名前にします
    storeName: "ガスト", // 店舗名
    genre: "family-restaurant", // 検索用ジャンル。例: lunch, cafe, family-restaurant, sushi, ramen, yakiniku, takeout
    genreLabel: "ファミレス", // 画面に表示するジャンル名
    genres: ["ファミレス", "ランチ"], // 検索用ジャンル。選ばれた「何を食べたい？」と比べます
    campaignTitle: "キッズメニュー注文でドリンクバー割引", // キャンペーン内容
    recommendedFor: ["kids", "family"], // 誰におすすめか。例: solo, kids, family, friends, couple
    recommendedForLabel: "子どもと・家族で", // 画面に表示するおすすめ対象
    companions: ["子どもと", "家族で"], // 検索用の「誰と行く？」。選ばれた条件と比べます
    reasons: { // 誰と行くかによって表示するおすすめ理由
      kids: "子ども椅子があり、提供が早いので子ども連れにおすすめです。", // 子どもと行く人向けの理由
      family: "家族でシェアしやすく、支払い総額を抑えやすいです。", // 家族向けの理由
    },
    dealScore: 90, // お得度スコア。数字が大きいほどお得
    distanceKm: 1.2, // 現在地からの距離。今はデモ用の数字です
    deadline: "本日21:00終了", // 終了期限として画面に表示する文字
    urgency: "今日まで", // 今日終了セクションなどで目立たせる短い表示
    isEndingToday: true, // 今日終了なら true、今日終了でなければ false
    deadlineMinutes: 21 * 60, // 並び替え用の終了時刻。21:00なら 21 * 60
    targetStores: "全国の対象店舗", // どの店舗で使えるか
    targetProducts: "対象キッズメニュー", // 何の商品が対象か
    paymentMethods: "店舗により異なる", // 使える決済方法
    caution: "一部店舗では対象外の場合があります。", // 注意点
    officialSiteUrl: "https://example.com", // 公式サイトURL。今はダミーURLでもOK
    mapKeyword: "ガスト", // Googleマップ検索で使うキーワード
  },
*/

// 新しいお得情報を増やすときは、この campaignData 配列に1件分の情報を追加してください。
const campaignData = [
  {
    id: "gusto-family-lunch",
    storeName: "ガスト",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    genres: ["ファミレス", "ランチ"],
    campaignTitle: "キッズメニュー注文でドリンクバー割引",
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    companions: ["子どもと", "家族で", "友達と"],
    reasons: {
      kids: "子ども椅子があり、提供が早いので子ども連れにおすすめです。",
      family: "席が広く、家族でシェアしやすいメニューが多いので支払い総額を抑えやすいです。",
      friends: "長く話しやすく、メニューの価格帯も合わせやすいので友達との食事に向いています。",
    },
    dealScore: 86,
    distanceKm: 0.7,
    deadline: "本日20:00終了",
    urgency: "あと3時間",
    isEndingToday: true,
    deadlineMinutes: 20 * 60,
    targetStores: "全国の対象店舗",
    targetProducts: "キッズメニューと対象セット",
    paymentMethods: "アプリクーポン・各種決済",
    caution: "一部店舗では対象外の場合があります。",
    officialSiteUrl: "https://example.com/gusto",
    mapKeyword: "ガスト",
  },
  {
    id: "bamiyan-family-dinner",
    storeName: "バーミヤン",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    genres: ["ファミレス", "ランチ"],
    campaignTitle: "セット注文で餃子半額クーポン",
    recommendedFor: ["family", "friends"],
    recommendedForLabel: "家族で・友達と",
    companions: ["家族で", "友達と"],
    reasons: {
      family: "取り分けしやすい中華メニューが多く、家族でいろいろ頼んでも満足感を出しやすいです。",
      friends: "複数人でシェアしやすく、クーポンの効果を感じやすいので友達との食事に合います。",
    },
    dealScore: 78,
    distanceKm: 1.4,
    deadline: "本日22:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 22 * 60,
    targetStores: "全国の対象店舗",
    targetProducts: "対象セットと餃子",
    paymentMethods: "店舗により異なる",
    caution: "クーポン内容は店舗ごとに異なる場合があります。",
    officialSiteUrl: "https://example.com/bamiyan",
    mapKeyword: "バーミヤン",
  },
  {
    id: "kurasushi-kids",
    storeName: "くら寿司",
    genre: "sushi",
    genreLabel: "回転寿司",
    genres: ["回転寿司", "ランチ"],
    campaignTitle: "アプリ予約で会計5%オフ",
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    companions: ["子どもと", "家族で", "友達と"],
    reasons: {
      kids: "子どもが選びやすいメニューが多く、待ち時間を減らしやすいので子ども連れに向いています。",
      family: "家族それぞれが好きな皿を選べるので、好みが分かれる日でも使いやすいです。",
      friends: "食べる量を自分で調整できるので、友達同士でも会計感覚を合わせやすいです。",
    },
    dealScore: 82,
    distanceKm: 2.2,
    deadline: "本日21:30終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 21 * 60 + 30,
    targetStores: "全国の対象店舗",
    targetProducts: "アプリ予約対象の会計",
    paymentMethods: "アプリ予約・店頭決済",
    caution: "予約条件を満たさない場合は対象外です。",
    officialSiteUrl: "https://example.com/kurasushi",
    mapKeyword: "くら寿司",
  },
  {
    id: "sushiro-friends",
    storeName: "スシロー",
    genre: "sushi",
    genreLabel: "回転寿司",
    genres: ["回転寿司", "ランチ"],
    campaignTitle: "対象皿3皿以上で50円引き",
    recommendedFor: ["friends", "family", "couple"],
    recommendedForLabel: "友達と・家族で・夫婦で",
    companions: ["友達と", "家族で", "夫婦で"],
    reasons: {
      friends: "好きな皿を少しずつ選べるので、友達と気軽に行きやすい候補です。",
      family: "子どもから大人まで選びやすく、家族全員の好みに合わせやすいです。",
      couple: "短時間でも使いやすく、重すぎない外食にしたい夫婦に向いています。",
    },
    dealScore: 74,
    distanceKm: 1.8,
    deadline: "本日23:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 23 * 60,
    targetStores: "全国の対象店舗",
    targetProducts: "対象皿",
    paymentMethods: "店舗により異なる",
    caution: "一部商品は割引対象外の場合があります。",
    officialSiteUrl: "https://example.com/sushiro",
    mapKeyword: "スシロー",
  },
  {
    id: "mcdonald-takeout",
    storeName: "マクドナルド",
    genre: "takeout",
    genreLabel: "テイクアウト",
    genres: ["テイクアウト", "ランチ"],
    campaignTitle: "モバイルオーダーでポテトM割引",
    recommendedFor: ["solo", "kids", "family", "friends"],
    recommendedForLabel: "ひとり・子どもと・家族で・友達と",
    companions: ["ひとり", "子どもと", "家族で", "友達と"],
    reasons: {
      solo: "ひとりでも注文しやすく、短時間で食べられるので忙しい時に便利です。",
      kids: "子どもが食べやすいメニューが多く、提供が早いので子ども連れにおすすめです。",
      family: "テイクアウトしやすく、家族分をまとめて買っても使いやすい候補です。",
      friends: "集合前後に立ち寄りやすく、軽く食べたい友達同士に向いています。",
    },
    dealScore: 88,
    distanceKm: 0.5,
    deadline: "本日18:00終了",
    urgency: "あと1時間",
    isEndingToday: true,
    deadlineMinutes: 18 * 60,
    targetStores: "全国の対象店舗",
    targetProducts: "モバイルオーダー対象商品",
    paymentMethods: "アプリ注文",
    caution: "クーポン併用不可の場合があります。",
    officialSiteUrl: "https://example.com/mcdonald",
    mapKeyword: "マクドナルド",
  },
  {
    id: "komeda-cafe-couple",
    storeName: "コメダ珈琲",
    genre: "cafe",
    genreLabel: "カフェ",
    genres: ["カフェ"],
    campaignTitle: "ドリンク注文でミニデザート100円引き",
    recommendedFor: ["solo", "couple", "friends"],
    recommendedForLabel: "ひとり・夫婦で・友達と",
    companions: ["ひとり", "夫婦で", "友達と"],
    reasons: {
      solo: "ひとりでも入りやすく、休憩や作業のついでに使いやすいカフェ候補です。",
      couple: "ゆっくり話しやすく、軽食と甘いものを一緒に楽しみたい夫婦に合います。",
      friends: "カフェ利用しやすく、休憩にも会話にも使いやすい候補です。",
    },
    dealScore: 72,
    distanceKm: 0.9,
    deadline: "本日19:00終了",
    urgency: "あと2時間",
    isEndingToday: true,
    deadlineMinutes: 19 * 60,
    targetStores: "対象店舗のみ",
    targetProducts: "ドリンク注文時のミニデザート",
    paymentMethods: "店舗により異なる",
    caution: "店舗ごとに条件が異なる場合があります。",
    officialSiteUrl: "https://example.com/komeda",
    mapKeyword: "コメダ珈琲",
  },
  {
    id: "marugame-solo-lunch",
    storeName: "丸亀製麺",
    genre: "lunch",
    genreLabel: "ランチ",
    genres: ["ランチ"],
    campaignTitle: "うどん札利用で天ぷら割引",
    recommendedFor: ["solo", "friends", "family"],
    recommendedForLabel: "ひとり・友達と・家族で",
    companions: ["ひとり", "友達と", "家族で"],
    reasons: {
      solo: "ひとりでも入りやすく、短時間で食べられるのでランチ候補に向いています。",
      friends: "回転が早く、友達と気軽に食べたい時に使いやすいです。",
      family: "好みに合わせてうどんや天ぷらを選べるので、家族でも使いやすい候補です。",
    },
    dealScore: 80,
    distanceKm: 1.1,
    deadline: "本日20:30終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 20 * 60 + 30,
    targetStores: "全国の対象店舗",
    targetProducts: "うどん札対象商品",
    paymentMethods: "店頭決済",
    caution: "うどん札の利用条件を確認してください。",
    officialSiteUrl: "https://example.com/marugame",
    mapKeyword: "丸亀製麺",
  },
  {
    id: "saizeriya-friends",
    storeName: "サイゼリヤ",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    genres: ["ファミレス", "ランチ"],
    campaignTitle: "対象セットで合計150円お得",
    recommendedFor: ["solo", "friends", "family", "couple"],
    recommendedForLabel: "ひとり・友達と・家族で・夫婦で",
    companions: ["ひとり", "友達と", "家族で", "夫婦で"],
    reasons: {
      solo: "ひとりでも価格が読みやすく、軽く済ませたい時に使いやすいです。",
      friends: "長く話しやすく、注文を分けても総額を抑えやすいので友達と行きやすいです。",
      family: "家族でシェアしやすく、支払い総額を抑えやすい外食候補です。",
      couple: "気軽に入れて価格も分かりやすく、夫婦の普段使いに向いています。",
    },
    dealScore: 90,
    distanceKm: 1.6,
    deadline: "本日23:30終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 23 * 60 + 30,
    targetStores: "全国の対象店舗",
    targetProducts: "対象セット",
    paymentMethods: "店舗により異なる",
    caution: "ランチ時間帯など一部条件があります。",
    officialSiteUrl: "https://example.com/saizeriya",
    mapKeyword: "サイゼリヤ",
  },
  {
    id: "sukiya-solo",
    storeName: "すき家",
    genre: "lunch",
    genreLabel: "ランチ",
    genres: ["ランチ"],
    campaignTitle: "対象牛丼セットで80円引き",
    recommendedFor: ["solo", "friends"],
    recommendedForLabel: "ひとり・友達と",
    companions: ["ひとり", "友達と"],
    reasons: {
      solo: "ひとりでも入りやすく、短時間で食べられるので急ぎのランチにおすすめです。",
      friends: "近くでさっと食べられるので、友達と時間をかけずに済ませたい時に向いています。",
    },
    dealScore: 76,
    distanceKm: 0.4,
    deadline: "本日17:00終了",
    urgency: "まもなく終了",
    isEndingToday: true,
    deadlineMinutes: 17 * 60,
    targetStores: "全国の対象店舗",
    targetProducts: "対象牛丼セット",
    paymentMethods: "d払い",
    caution: "一部店舗では対象外の場合があります。",
    officialSiteUrl: "https://example.com/sukiya",
    mapKeyword: "すき家",
  },
  {
    id: "joyfull-family",
    storeName: "ジョイフル",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    genres: ["ファミレス", "ランチ"],
    campaignTitle: "キッズプレート注文で100円引き",
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    companions: ["子どもと", "家族で", "友達と"],
    reasons: {
      kids: "子ども向けメニューがあり、席も使いやすいので子ども連れにおすすめです。",
      family: "家族向けメニューが多く、人数が多い時でも選びやすい外食候補です。",
      friends: "価格帯が分かりやすく、友達と気軽に集まりたい時に使いやすいです。",
    },
    dealScore: 84,
    distanceKm: 2.8,
    deadline: "本日21:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 21 * 60,
    targetStores: "全国の対象店舗",
    targetProducts: "キッズプレート",
    paymentMethods: "店舗により異なる",
    caution: "対象時間が限られる場合があります。",
    officialSiteUrl: "https://example.com/joyfull",
    mapKeyword: "ジョイフル",
  },
  {
    id: "ramen-solo",
    storeName: "一風堂",
    genre: "ramen",
    genreLabel: "ラーメン",
    genres: ["ラーメン", "ランチ"],
    campaignTitle: "替玉1回無料クーポン",
    recommendedFor: ["solo", "friends"],
    recommendedForLabel: "ひとり・友達と",
    companions: ["ひとり", "友達と"],
    reasons: {
      solo: "ひとりでも入りやすく、しっかり食べたい時のお得候補です。",
      friends: "短時間で満足感が出やすく、友達とラーメン気分の日に合います。",
    },
    dealScore: 83,
    distanceKm: 1.3,
    deadline: "本日22:30終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 22 * 60 + 30,
    targetStores: "対象店舗のみ",
    targetProducts: "替玉",
    paymentMethods: "店頭決済",
    caution: "他クーポンと併用できない場合があります。",
    officialSiteUrl: "https://example.com/ippudo",
    mapKeyword: "一風堂",
  },
  {
    id: "yakiniku-family",
    storeName: "牛角",
    genre: "yakiniku",
    genreLabel: "焼肉",
    genres: ["焼肉"],
    campaignTitle: "食べ放題コース注文で10%オフ",
    recommendedFor: ["family", "friends", "couple"],
    recommendedForLabel: "家族で・友達と・夫婦で",
    companions: ["家族で", "友達と", "夫婦で"],
    reasons: {
      family: "家族でシェアしやすく、人数が多いほど割引のうれしさが出やすいです。",
      friends: "みんなで食べる楽しさがあり、コース割引でお得感を共有しやすいです。",
      couple: "少し特別感があり、夫婦でしっかり外食したい日に向いています。",
    },
    dealScore: 92,
    distanceKm: 3.1,
    deadline: "本日23:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 23 * 60,
    targetStores: "全国の対象店舗",
    targetProducts: "食べ放題コース",
    paymentMethods: "クレジットカード・コード決済",
    caution: "事前予約や人数条件が必要な場合があります。",
    officialSiteUrl: "https://example.com/gyukaku",
    mapKeyword: "牛角",
  },
  {
    id: "gusto-kids-family-v2",
    storeName: "ガスト",
    genre: "family-restaurant",
    genreLabel: "ファミレス",
    genres: ["ファミレス", "ランチ"],
    campaignTitle: "キッズプレート注文で家族ドリンクバー割引",
    recommendedFor: ["kids", "family"],
    recommendedForLabel: "子どもと・家族で",
    companions: ["子どもと", "家族で"],
    reasons: {
      kids: "子ども椅子があり、提供が早いので子ども連れにおすすめです。",
      family: "家族でシェアしやすいメニューが多く、ドリンクバー割引で総額を抑えやすいです。",
    },
    dealScore: 91,
    distanceKm: 0.8,
    deadline: "本日21:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 21 * 60,
    targetStores: "全国の対象店舗",
    targetProducts: "キッズプレートとドリンクバー",
    paymentMethods: "店舗により異なる",
    caution: "一部店舗では対象外の場合があります。",
    officialSiteUrl: "https://example.com/gusto-family",
    mapKeyword: "ガスト",
  },
  {
    id: "kurasushi-family-v2",
    storeName: "くら寿司",
    genre: "sushi",
    genreLabel: "回転寿司",
    genres: ["回転寿司", "ランチ"],
    campaignTitle: "家族利用でアプリ予約ポイント還元",
    recommendedFor: ["kids", "family", "friends"],
    recommendedForLabel: "子どもと・家族で・友達と",
    companions: ["子どもと", "家族で", "友達と"],
    reasons: {
      kids: "子どもが選びやすいメニューが多く、家族で待ち時間を減らしやすいです。",
      family: "家族それぞれが好きな皿を選べるので、好みが分かれる日でも使いやすいです。",
      friends: "食べる量を調整しやすく、友達同士でも会計感覚を合わせやすいです。",
    },
    dealScore: 87,
    distanceKm: 1.7,
    deadline: "本日22:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 22 * 60,
    targetStores: "全国の対象店舗",
    targetProducts: "アプリ予約対象の会計",
    paymentMethods: "アプリ予約・店頭決済",
    caution: "予約条件を満たさない場合は対象外です。",
    officialSiteUrl: "https://example.com/kurasushi-family",
    mapKeyword: "くら寿司",
  },
  {
    id: "marugame-solo-lunch-v2",
    storeName: "丸亀製麺",
    genre: "lunch",
    genreLabel: "ランチ",
    genres: ["ランチ"],
    campaignTitle: "ひとりランチで天ぷら1品割引",
    recommendedFor: ["solo", "friends"],
    recommendedForLabel: "ひとり・友達と",
    companions: ["ひとり", "友達と"],
    reasons: {
      solo: "ひとりでも入りやすく、短時間で食べられるので昼休みのランチにおすすめです。",
      friends: "回転が早く、友達と気軽に食べたい時にも使いやすいです。",
    },
    dealScore: 85,
    distanceKm: 0.9,
    deadline: "本日20:00終了",
    urgency: "今日まで",
    isEndingToday: true,
    deadlineMinutes: 20 * 60,
    targetStores: "全国の対象店舗",
    targetProducts: "対象うどんと天ぷら",
    paymentMethods: "店頭決済",
    caution: "一部商品は割引対象外の場合があります。",
    officialSiteUrl: "https://example.com/marugame-solo",
    mapKeyword: "丸亀製麺",
  },
];

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

const form = document.querySelector("#searchForm");
const locationButton = document.querySelector("#locationButton");
const locationStatus = document.querySelector("#locationStatus");
const locationDetail = document.querySelector("#locationDetail");
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
const sortNote = document.querySelector("#sortNote");
const detailModal = document.querySelector("#detailModal");
const modalBody = document.querySelector("#modalBody");
const savedDealIds = new Set(JSON.parse(localStorage.getItem("savedMealDeals") || "[]"));
let currentPosition = null;

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

function mapsUrl(campaign) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(campaign.mapKeyword);
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
    '<div class="score-item"><span class="score-label">距離</span><span class="score-value">約' + campaign.distanceKm + 'km</span></div>',
    '<div class="score-item"><span class="score-label">終了</span><span class="score-value">' + campaign.deadline.replace("本日", "") + '</span></div>',
    '</div>',
    '<div class="deadline-badge"><span>' + (isHighlight ? campaign.urgency : campaign.deadline) + '</span><span>今日終了</span></div>',
    '<p class="demo-note">※この情報はデモデータです</p>',
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
    '<div class="score-item"><span class="score-label">距離</span><span class="score-value">約' + campaign.distanceKm + 'km</span></div>',
    '<div class="score-item"><span class="score-label">終了</span><span class="score-value">' + campaign.deadline.replace("本日", "") + '</span></div>',
    '</div>',
    '<div class="deadline-badge"><span>' + campaign.urgency + '</span><span>今日終了</span></div>',
    '<p class="demo-note">※この情報はデモデータです</p>',
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
    .sort((a, b) => b.relevance - a.relevance || compareCampaigns(a.campaign, b.campaign, sortType))
    .map((item) => item.campaign);
}

function updateRecommendationTitle() {
  const companionText = companionLabels[companionSelect.value];
  const foodText = foodLabels[foodSelect.value];
  recommendationTitle.textContent = companionText + foodText + "のお得候補";
}

function updateSortNote() {
  if (sortSelect.value === "near") {
    sortNote.textContent = currentPosition
      ? "現在地から近い順で表示しています（距離はデモ表示です）。"
      : "ダミー距離を使って近い順で表示しています。";
    sortNote.style.display = "block";
    return;
  }

  sortNote.style.display = "none";
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
  resultCount.textContent = sortedCampaigns.length + "件";

  if (sortedCampaigns.length === 0) {
    results.innerHTML = '<p class="empty">この条件に合う外食候補はまだありません。</p>';
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
    locationStatus.classList.add("is-error");
    locationStatus.textContent = "現在地：未取得";
    locationDetail.textContent = "位置情報を取得できませんでした。ブラウザの許可設定を確認してください。";
    locationButton.disabled = false;
    showCampaigns();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      currentPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      locationStatus.classList.add("is-success");
      locationStatus.textContent = "現在地：取得済み";
      locationDetail.textContent = "現在地を取得しました（確認用：" + currentPosition.latitude.toFixed(4) + ", " + currentPosition.longitude.toFixed(4) + "）";
      locationButton.disabled = false;
      showCampaigns();
    },
    () => {
      currentPosition = null;
      locationStatus.classList.add("is-error");
      locationStatus.textContent = "現在地：未取得";
      locationDetail.textContent = "位置情報を取得できませんでした。ブラウザの許可設定を確認してください。";
      locationButton.disabled = false;
      showCampaigns();
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
  );
}

function openDetailModal(campaign) {
  const companion = companionSelect.value;
  modalBody.innerHTML = [
    '<p class="store-name">' + campaign.storeName + '</p>',
    '<p class="modal-campaign">' + campaign.campaignTitle + '</p>',
    '<p class="modal-demo-note">※この情報はデモデータです</p>',
    '<div class="modal-reason">' + reasonFor(campaign, companion) + '</div>',
    '<dl class="detail-grid">',
    '<div><dt>対象店舗</dt><dd>' + campaign.targetStores + '</dd></div>',
    '<div><dt>対象商品</dt><dd>' + campaign.targetProducts + '</dd></div>',
    '<div><dt>使える決済方法</dt><dd>' + campaign.paymentMethods + '</dd></div>',
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
  showCampaigns();
});

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

showTopPicks();
showSavedCampaigns();
showTodayEndingCampaigns();
showCampaigns();
