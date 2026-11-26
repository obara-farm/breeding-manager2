// ===== 小原農場の設定 =====
// このファイルは index.html と同じ場所に置きます。index.html を新しくするときも、このファイルはそのまま残してください。
window.FARM_CONFIG = {
  farmId: 'obara',
  // Firebase のつなぎ先
  firebase: {
    apiKey: "AIzaSyCer9Gz8nMbP3hBod3O_66oVQGEKsUfXVo",
    authDomain: "breeding-manager5.firebaseapp.com",
    databaseURL: "https://breeding-manager5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "breeding-manager5",
    storageBucket: "breeding-manager5.firebasestorage.app",
    messagingSenderId: "663663293010",
    appId: "1:663663293010:web:eaef68dee692fe1322258b"
  },
  dataPath: 'data/FhVF92oHJXMwK01gakK1Mms4HGP2',   // 繁殖データの置き場所
  vetPath: 'vet/FhVF92oHJXMwK01gakK1Mms4HGP2',     // 薬品管理データの置き場所
  // 農場の情報（証明書・印刷物に出ます）
  farm: {
    name: '小原農場',
    owner: '小原秀樹',
    ownerSpaced: '小原　秀樹',
    zip: '〒083-0042',
    address: '北海道中川郡池田町字千代田697番地',
    addressShort: '池田町字千代田697番地',
    addressCounty: '中川郡池田町字千代田697番地',
    addressArea: '池田町千代田',
    vetName: '小原千佳',
    vetNameSpaced: '小原　千佳',
    vetRegNo: '60937',
    license: '01L237',
    clinicName: '小原家畜診療所',
    aiStationName: '小原家畜人工授精所'
  },
  // 妊鑑の日程（妊娠日数。ETは移植日の7日前から数える）
  preg: { ai: [30, 45], et: [30, 45] },
  // ET受胎率の集計から外す期間と、外す年の胚
  etRateExclude: [{ from: '2026-01-01', to: '2026-02-28', label: 'R8年1〜2月（融解方法の誤りのため）' }],
  excludeEmbryoYear: 'R6',
  // ===== この農場だけの決まり（2026/11/26 に本体から移した。本体にも同じ値があるので、ここに無くても今と同じに動く） =====
  role: 'vet',                 // 獣医さんのツール（農家さんのツールとつなぐ・移植の記録を渡す側）
  newUI: true,                 // 新しい画面（ホーム・下のメニュー5つ）
  vetTool: true,               // 小原家畜診療所の薬品管理ツールを埋め込む
  baseData: true,              // 昔の台帳の基礎データ（牛の一覧・昔の授精簿）を使う
  advRepro: true,              // くわしい繁殖の機能（オブシンク・卵巣の所見・エコー・黄体）
  legacyFixes: true,           // 前の版の不具合の直しを動かす（前から使っている農場だけ）
  contactName: '千佳さん',     // 困ったときの連絡先として画面に出す名前
  donorProgName: '小原式',     // 採卵プログラムの名前に付ける言葉
  defaultOperator: 'TBS',      // 他農家に渡す胚の術者の最初の値
  regOrgDefault: '日本あか牛登録協会',   // 登録協会の最初の値
  ownFarmMatch: '小原',        // 肥育成績で「自分の牧場」と見分ける文字
  activeFarmers: ['小原', '朝川', '長島', '市川', '太田', '納'],   // 肥育成績の「現役の生産者」
  fnBreedRule: { F: 'F1', '*': '褐毛' },  // ファームノートの取り込み：耳標の頭の文字から品種
};
