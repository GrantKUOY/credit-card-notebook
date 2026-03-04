import { useState } from "react";

// ═══════════════════════════════════════════════════════════
// 2025/2026 最新資料 — 基於官方網站查詢
// ═══════════════════════════════════════════════════════════
const cards = [
  {
    id: "amex-plat",
    name: "Amex Platinum",
    shortName: "Platinum",
    issuer: "American Express",
    network: "Amex",
    annualFee: 895,
    gradient: ["#b8941f", "#f0d060", "#b8941f"],
    text: "#1a0e00",
    rewardType: "MR Points",
    multipliers: {
      flights: 5,       // 直接向航空公司或 Amex Travel 訂購
      hotels: 5,        // Amex Travel 預訂飯店
      dining: 1,        // 一般消費 1x（需搭配 Gold Card）
      grocery: 1,
      rideshare: 1,
      other: 1,
    },
    benefits: [
      { icon: "✈️", cat: "PPS", label: "Priority Pass 無限次", detail: "含 2 位同行免費，全球 1,400+ 貴賓室" },
      { icon: "🏛️", cat: "Lounge", label: "Amex Centurion Lounge", detail: "Amex 自有頂級貴賓室，品質最高" },
      { icon: "🏨", cat: "Credit", label: "$600 飯店 Credit", detail: "Fine Hotels+Resorts 或 The Hotel Collection，每半年 $300" },
      { icon: "🍽️", cat: "Credit", label: "$400 Resy 餐廳 Credit", detail: "每季 $100，全美 10,000+ Resy 餐廳" },
      { icon: "🎬", cat: "Credit", label: "$300 數位娛樂 Credit", detail: "每月 $25：Disney+, YouTube Premium, Peacock 等" },
      { icon: "🚗", cat: "Credit", label: "$200 Uber Cash", detail: "每月 $15 + 12月額外 $20" },
      { icon: "🛡️", cat: "Credit", label: "$120 Uber One Credit", detail: "每年 $120 Uber One 會員費補貼" },
      { icon: "✈️", cat: "Credit", label: "$200 航空附加費 Credit", detail: "每年指定一家航空的附加費（行李/座位）" },
      { icon: "💪", cat: "Credit", label: "$300 Equinox Credit", detail: "健身房會員費補貼" },
      { icon: "🔵", cat: "Credit", label: "$209 CLEAR+ Credit", detail: "機場安檢快速通道會員費" },
      { icon: "🛒", cat: "Credit", label: "$155 Walmart+ Credit", detail: "每月 $12.95 Walmart+ 會費" },
      { icon: "💍", cat: "Credit", label: "$200 Oura Ring Credit", detail: "智慧健康戒指購買補貼" },
      { icon: "👗", cat: "Credit", label: "$300 Lululemon Credit", detail: "每季 $75，美國門市和官網" },
      { icon: "🌐", cat: "Credit", label: "$100 Saks Credit", detail: "每半年 $50，Saks Fifth Avenue" },
      { icon: "🛡️", cat: "Travel", label: "Global Entry/TSA $120", detail: "每 4.5 年補貼一次" },
      { icon: "🏨", cat: "Status", label: "Hilton Gold + Marriott Gold", detail: "兩大飯店集團 Gold 身份" },
    ],
    bestFor: ["機票 5x", "Amex Lounge", "頂級 Credits 最多"],
    note: "2025年9月大改版，年費漲至 $895，但 Credits 總額超過 $3,500",
  },
  {
    id: "amex-hilton",
    name: "Hilton Aspire",
    shortName: "Aspire",
    issuer: "American Express",
    network: "Amex",
    annualFee: 550,
    gradient: ["#1a3a6b", "#2756a8", "#0d1f3c"],
    text: "#ffffff",
    rewardType: "Hilton Points",
    multipliers: {
      flights: 7,       // 直接向航空公司訂購或 Amex Travel
      hotels: 14,       // Hilton 飯店
      dining: 7,        // 美國餐廳
      grocery: 3,
      rideshare: 3,
      other: 3,
    },
    benefits: [
      { icon: "💎", cat: "Status", label: "Hilton Diamond 身份", detail: "最高等級，自動升等、行政廊、免費早餐（部分品牌）" },
      { icon: "🌙", cat: "FreeNight", label: "年度免費夜（無上限）", detail: "每年一張，可用於任何 Hilton 飯店，無點數上限" },
      { icon: "✈️", cat: "PPS", label: "Priority Pass 無限次", detail: "含 2 位同行，全球機場貴賓室" },
      { icon: "🏨", cat: "Credit", label: "$400 Hilton 渡假村 Credit", detail: "每半年 $200，指定 Hilton Resorts 消費" },
      { icon: "✈️", cat: "Credit", label: "$200 航空 Credit", detail: "每季 $50，直接向航空公司購買" },
      { icon: "🔵", cat: "Credit", label: "$209 CLEAR+ Credit", detail: "機場安檢快速通道" },
      { icon: "🏨", cat: "Credit", label: "$100 Waldorf/Conrad Credit", detail: "訂 2 晚以上可享 $100 房內消費" },
    ],
    bestFor: ["Hilton 飯店 14x", "Diamond 身份", "無上限免費夜"],
    note: "免費夜無點數上限是最大亮點，Diamond 身份含自動升等",
  },
  {
    id: "amex-marriott",
    name: "Marriott Brilliant",
    shortName: "Brilliant",
    issuer: "American Express",
    network: "Amex",
    annualFee: 650,
    gradient: ["#6b1a1a", "#a83232", "#4a0e0e"],
    text: "#ffffff",
    rewardType: "Bonvoy Points",
    multipliers: {
      flights: 3,       // 直接向航空公司訂購
      hotels: 6,        // Marriott Bonvoy 飯店
      dining: 3,        // 全球餐廳
      grocery: 2,
      rideshare: 2,
      other: 2,
    },
    benefits: [
      { icon: "🏅", cat: "Status", label: "Marriott Platinum Elite", detail: "含套房升等、4pm 晚退、行政廊、免費早餐（部分飯店）" },
      { icon: "🌙", cat: "FreeNight", label: "年度免費夜（85K 以內）", detail: "每年一張，可用於 85,000 點以內的 Marriott 飯店" },
      { icon: "✈️", cat: "PPS", label: "Priority Pass 無限次", detail: "含同行，全球 1,200+ 機場貴賓室" },
      { icon: "🍽️", cat: "Credit", label: "$300 全球餐廳 Credit", detail: "每月 $25，全球所有餐廳消費" },
      { icon: "🏨", cat: "Credit", label: "$100 飯店住宿 Credit", detail: "訂 Marriott/Ritz/St.Regis 特定房型可享 $100 消費" },
      { icon: "⭐", cat: "Status", label: "25 Elite 夜點數", detail: "每年自動獲得 25 夜 Elite Credits，衝 Titanium 用" },
    ],
    bestFor: ["Marriott 飯店 6x", "Platinum 身份", "$300 餐廳 Credit"],
    note: "每月 $25 餐廳 Credit 最好用，記得每月都要刷",
  },
  {
    id: "cap1-qs",
    name: "Capital One Quicksilver",
    shortName: "Quicksilver",
    issuer: "Capital One",
    network: "Visa",
    annualFee: 0,
    gradient: ["#1c1c2e", "#2d2d44", "#1c1c2e"],
    text: "#e94560",
    rewardType: "現金回饋 1.5%",
    multipliers: {
      flights: 1.5,
      hotels: 1.5,
      dining: 1.5,
      grocery: 1.5,
      rideshare: 1.5,
      other: 1.5,
    },
    benefits: [
      { icon: "💵", cat: "Cashback", label: "1.5% 無上限現金回饋", detail: "所有消費均享 1.5% Cash Back，無分類限制" },
      { icon: "🌍", cat: "Travel", label: "0% 外幣手續費", detail: "海外刷卡不收手續費" },
      { icon: "🛡️", cat: "Travel", label: "旅遊意外保險", detail: "旅遊取消、延誤等基本保障" },
    ],
    bestFor: ["無年費保底卡", "雜項 1.5%", "海外不收手續費"],
    note: "雜項消費最佳保底卡，無年費壓力",
  },
  {
    id: "hsbc-elite",
    name: "HSBC US Elite",
    shortName: "HSBC Elite",
    issuer: "HSBC",
    network: "Mastercard",
    annualFee: 495,
    gradient: ["#cc0000", "#990000", "#660000"],
    text: "#ffffff",
    rewardType: "HSBC Points",
    multipliers: {
      flights: 5,       // 透過 HSBC Travel (Priceline) 訂購
      hotels: 5,        // 透過 HSBC Travel
      dining: 2,        // 餐廳
      grocery: 1,
      rideshare: 1,
      other: 1,
    },
    benefits: [
      { icon: "✈️", cat: "PPS", label: "Priority Pass 無限次", detail: "含 2 位同行，全球 1,300+ 機場貴賓室" },
      { icon: "💰", cat: "Credit", label: "$400 旅行 Credit", detail: "透過 HSBC Travel (Priceline) 訂機票/飯店/租車" },
      { icon: "🚗", cat: "Credit", label: "$120 Rideshare Credit", detail: "每月 $10，Uber/Lyft 等叫車服務" },
      { icon: "🛡️", cat: "Credit", label: "$120 Global Entry/TSA", detail: "每 4.5 年補貼一次" },
      { icon: "🔄", cat: "Travel", label: "Points 轉讓 13 個夥伴", detail: "可轉 Aeroplan, British Airways, EVA Air, Qantas 等" },
      { icon: "🏠", cat: "Credit", label: "$100 Soho House Credit", detail: "Soho House 會員房間消費補貼" },
    ],
    bestFor: ["HSBC Travel 訂票 5x", "PPS 含 2 同伴", "Points 轉讓航空"],
    note: "消費倍率是 Points 制非現金，需透過 HSBC Travel 才能拿 5x",
  },
  {
    id: "csp",
    name: "Chase Sapphire Preferred",
    shortName: "CSP",
    issuer: "Chase",
    network: "Visa",
    annualFee: 95,
    gradient: ["#003087", "#0050b3", "#001a5e"],
    text: "#c8a84b",
    rewardType: "UR Points",
    multipliers: {
      flights: 5,       // 透過 Chase Travel
      hotels: 5,        // 透過 Chase Travel
      dining: 3,        // 餐廳（含外送）
      grocery: 3,       // 線上超市
      rideshare: 5,     // Lyft
      other: 1,
    },
    benefits: [
      { icon: "🔄", cat: "Transfer", label: "UR 1:1 轉讓 14 個夥伴", detail: "United, Hyatt, SW, Singapore, Air France 等" },
      { icon: "🍽️", cat: "Reward", label: "3x 餐廳 + 外送", detail: "含 DoorDash, Uber Eats 等外送服務" },
      { icon: "🛒", cat: "Reward", label: "3x 線上超市", detail: "Amazon Fresh, Instacart 等線上超市" },
      { icon: "✈️", cat: "Reward", label: "5x Chase Travel", detail: "透過 Chase Travel 訂機票/飯店享 5x" },
      { icon: "🎁", cat: "Credit", label: "$50 飯店 Credit", detail: "每年透過 Chase Travel 訂飯店可獲 $50 補貼" },
      { icon: "🎂", cat: "Bonus", label: "10% 週年加碼", detail: "每年周年日，前一年消費額的 10% 額外點數" },
      { icon: "🚗", cat: "Travel", label: "主要租車保險", detail: "Primary CDW，不需動用個人保險" },
      { icon: "🍕", cat: "Benefit", label: "免費 DashPass", detail: "一年 DashPass 會員，$0 外送費" },
    ],
    bestFor: ["UR 轉 Hyatt 最高價值", "餐廳/線上超市 3x", "$95 低年費"],
    note: "UR 轉 Hyatt 是最高 CP 值用法，1 UR ≈ 2 cents",
  },
  {
    id: "chase-marriott",
    name: "Chase Marriott Boundless",
    shortName: "Boundless",
    issuer: "Chase",
    network: "Visa",
    annualFee: 95,
    gradient: ["#3d1f00", "#7a3f00", "#2a1400"],
    text: "#ffd700",
    rewardType: "Bonvoy Points",
    multipliers: {
      flights: 2,       // 其他旅行
      hotels: 6,        // Marriott Bonvoy 飯店
      dining: 3,        // 餐廳/超市/加油（前 $6,000）
      grocery: 3,       // 前 $6,000 合計
      rideshare: 2,
      other: 2,
    },
    benefits: [
      { icon: "🌙", cat: "FreeNight", label: "年度免費夜（35K 以內）", detail: "每年一張，可搭配最多 15,000 點使用" },
      { icon: "🥈", cat: "Status", label: "Marriott Silver Elite 身份", detail: "含 10% 點數加成、晚退、免費 Wi-Fi" },
      { icon: "⭐", cat: "Status", label: "15 Elite 夜點數", detail: "每年自動 15 夜 Elite Credits" },
      { icon: "✈️", cat: "Credit", label: "$100 航空 Credit", detail: "2026 年每半年 $50，花 $250 以上觸發" },
      { icon: "🏨", cat: "Reward", label: "6x Marriott 飯店", detail: "Marriott Bonvoy 旗下 7,000+ 飯店" },
    ],
    bestFor: ["Marriott 入門免費夜", "低年費 Bonvoy 累積"],
    note: "35K 免費夜可搭配最多 15,000 點，實際可用 50K 以內飯店",
  },
];

const categories = [
  { id: "flights",   icon: "✈️", label: "機票" },
  { id: "hotels",    icon: "🏨", label: "飯店" },
  { id: "dining",    icon: "🍽️", label: "餐廳" },
  { id: "grocery",   icon: "🛒", label: "超市" },
  { id: "rideshare", icon: "🚗", label: "叫車" },
  { id: "other",     icon: "🌀", label: "其他" },
];

const travelGuide = [
  {
    phase: "📅 出發前訂購",
    color: "#0f3460",
    steps: [
      { action: "訂機票（直接向航空）", card: "Amex Platinum", reason: "5x MR + 旅遊保險" },
      { action: "訂機票（透過 Chase Travel）", card: "Chase Sapphire Preferred", reason: "5x UR + 主要租車保" },
      { action: "訂 Hilton 飯店", card: "Hilton Aspire", reason: "14x + Diamond 升等" },
      { action: "訂 Marriott 飯店", card: "Marriott Brilliant", reason: "6x + Platinum 升等" },
      { action: "訂其他飯店（FHR）", card: "Amex Platinum", reason: "Fine Hotels 升等+早餐+$600 Credit" },
      { action: "訂租車", card: "Chase Sapphire Preferred", reason: "主要 CDW 保險，不動個人險" },
    ],
  },
  {
    phase: "🛫 機場使用",
    color: "#1a3a6b",
    steps: [
      { action: "機場貴賓室（首選）", card: "Amex Platinum", reason: "Centurion Lounge 品質最高 + PPS" },
      { action: "機場貴賓室（含同伴）", card: "Amex Platinum", reason: "PPS 含 2 位同行免費" },
      { action: "備用貴賓室", card: "Hilton Aspire / Marriott Brilliant", reason: "PPS 無限次含同伴" },
      { action: "機場餐廳", card: "Chase Sapphire Preferred", reason: "3x UR 餐廳" },
      { action: "Uber 接送機", card: "Amex Platinum", reason: "先用 $200 Uber Cash Credit" },
    ],
  },
  {
    phase: "🏨 飯店入住",
    color: "#1a5228",
    steps: [
      { action: "Hilton 飯店消費", card: "Hilton Aspire", reason: "14x + Diamond 免費升等/早餐" },
      { action: "Marriott 飯店消費", card: "Marriott Brilliant", reason: "6x + Platinum 套房升等/早餐" },
      { action: "高端飯店餐廳", card: "Marriott Brilliant", reason: "3x + 每月 $25 餐廳 Credit" },
      { action: "Hilton 渡假村消費", card: "Hilton Aspire", reason: "觸發每半年 $200 渡假村 Credit" },
    ],
  },
  {
    phase: "🌍 海外日常消費",
    color: "#2d1a5a",
    steps: [
      { action: "餐廳用餐", card: "Chase Sapphire Preferred", reason: "3x UR，全球適用" },
      { action: "超市/便利店", card: "Chase Sapphire Preferred", reason: "3x 線上超市（視情況）" },
      { action: "叫車/交通", card: "Amex Platinum", reason: "先用 Uber Cash Credit 抵消費" },
      { action: "雜項消費", card: "Capital One Quicksilver", reason: "1.5% 保底，無外幣手續費" },
      { action: "Hilton/Marriott 以外消費", card: "HSBC US Elite", reason: "透過 HSBC Travel 5x" },
    ],
  },
  {
    phase: "💳 Credits 使用順序",
    color: "#3d1a00",
    steps: [
      { action: "每月 $15 Uber Cash", card: "Amex Platinum", reason: "月底失效，優先使用" },
      { action: "每月 $25 餐廳 Credit", card: "Marriott Brilliant", reason: "月底失效，每月必用" },
      { action: "每月 $10 Rideshare", card: "HSBC US Elite", reason: "月底失效，Uber/Lyft" },
      { action: "每季 $100 Resy Credit", card: "Amex Platinum", reason: "季底失效，去 Resy 餐廳" },
      { action: "每季 $50 航空 Credit", card: "Hilton Aspire", reason: "季底，直接向航空購買" },
      { action: "每半年 $200 渡假村 Credit", card: "Hilton Aspire", reason: "上/下半年各一次" },
      { action: "每半年 $300 飯店 Credit", card: "Amex Platinum", reason: "FHR 或 Hotel Collection" },
    ],
  },
  {
    phase: "🔄 點數轉讓策略",
    color: "#1a1a1a",
    steps: [
      { action: "MR Points → 商務艙", card: "轉 Aeroplan / ANA", reason: "商務艙 CP 值最高" },
      { action: "UR Points → 飯店", card: "轉 World of Hyatt", reason: "1 UR ≈ 2 cents，Hyatt 最划算" },
      { action: "Hilton Points → 高端渡假村", card: "Aspire 免費夜 + 點數", reason: "無上限免費夜最大化" },
      { action: "Bonvoy Points → Ritz/St.Regis", card: "Brilliant 85K 免費夜", reason: "85K 可用於頂級飯店" },
      { action: "HSBC Points → 航空里程", card: "轉 EVA Air / British Airways", reason: "13 個轉讓夥伴，EVA 含華航聯盟" },
    ],
  },
];

const annualCredits = [
  {
    card: "Amex Platinum",
    color: "#b8941f",
    fee: 895,
    credits: [
      { label: "飯店 Credit（FHR）", amt: 600 },
      { label: "Resy 餐廳 Credit", amt: 400 },
      { label: "Uber Cash", amt: 200 },
      { label: "數位娛樂 Credit", amt: 300 },
      { label: "航空附加費 Credit", amt: 200 },
      { label: "Uber One Credit", amt: 120 },
      { label: "CLEAR+ Credit", amt: 209 },
      { label: "Walmart+ Credit", amt: 155 },
      { label: "Equinox Credit", amt: 300 },
      { label: "Lululemon Credit", amt: 300 },
      { label: "Oura Ring Credit", amt: 200 },
      { label: "Saks Credit", amt: 100 },
    ],
  },
  {
    card: "Hilton Aspire",
    color: "#2756a8",
    fee: 550,
    credits: [
      { label: "Hilton 渡假村 Credit", amt: 400 },
      { label: "航空 Credit", amt: 200 },
      { label: "CLEAR+ Credit", amt: 209 },
      { label: "Waldorf/Conrad Credit", amt: 100 },
    ],
  },
  {
    card: "Marriott Brilliant",
    color: "#a83232",
    fee: 650,
    credits: [
      { label: "全球餐廳 Credit", amt: 300 },
      { label: "飯店住宿 Credit", amt: 100 },
    ],
  },
  {
    card: "HSBC US Elite",
    color: "#cc0000",
    fee: 495,
    credits: [
      { label: "旅行 Credit（HSBC Travel）", amt: 400 },
      { label: "Rideshare Credit", amt: 120 },
      { label: "Global Entry/TSA", amt: 120 },
    ],
  },
  {
    card: "Chase Sapphire Preferred",
    color: "#0050b3",
    fee: 95,
    credits: [
      { label: "Chase Travel 飯店 Credit", amt: 50 },
    ],
  },
];

// ═══════════════════════════════════════════════════════════
// 主元件
// ═══════════════════════════════════════════════════════════
export default function App() {
  const [tab, setTab] = useState("overview");
  const [expanded, setExpanded] = useState(null);
  const [category, setCategory] = useState("dining");
  const [benefitFilter, setBenefitFilter] = useState("all");

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  const ranked = [...cards]
    .map((c) => ({ ...c, rate: c.multipliers[category] }))
    .sort((a, b) => b.rate - a.rate);

  const topRate = ranked[0]?.rate;

  const tabs = [
    { id: "overview",   label: "📋 卡片" },
    { id: "optimizer",  label: "🎯 最佳化" },
    { id: "benefits",   label: "🎁 福利" },
    { id: "travel",     label: "✈️ 旅行" },
    { id: "credits",    label: "💰 Credits" },
  ];

  const s = {
    app: { minHeight:"100vh", background:"#080810", fontFamily:"'Segoe UI','PingFang TC',sans-serif", color:"#e0e0e8", maxWidth:540, margin:"0 auto", paddingBottom:48 },
    header: { background:"linear-gradient(135deg,#0d0d1e 0%,#141428 60%,#0a0a18 100%)", padding:"28px 20px 18px", borderBottom:"1px solid rgba(255,255,255,0.06)" },
    badge: { fontSize:10, letterSpacing:3, color:"#7b61ff", textTransform:"uppercase", marginBottom:4 },
    title: { fontSize:24, fontWeight:900, letterSpacing:-0.5, color:"#fff", marginBottom:2 },
    sub: { fontSize:12, color:"rgba(255,255,255,0.35)" },
    tabBar: { display:"flex", background:"#0d0d18", borderBottom:"1px solid #1a1a2a", overflowX:"auto", scrollbarWidth:"none" },
    tabBtn: (active) => ({ flex:"0 0 auto", padding:"13px 16px", background:"none", border:"none", borderBottom: active ? "2px solid #7b61ff" : "2px solid transparent", color: active ? "#7b61ff" : "rgba(255,255,255,0.35)", fontWeight: active ? 800 : 400, fontSize:13, cursor:"pointer", whiteSpace:"nowrap", transition:"all 0.2s" }),
    body: { padding:"18px 14px" },
    sectionLabel: { fontSize:10, letterSpacing:3, color:"#7b61ff", textTransform:"uppercase", marginBottom:10, marginTop:4 },
    chip: (active) => ({ padding:"8px 14px", borderRadius:20, border: active ? "1.5px solid #7b61ff" : "1.5px solid #222", background: active ? "rgba(123,97,255,0.12)" : "#111118", color: active ? "#7b61ff" : "rgba(255,255,255,0.5)", fontWeight: active ? 700 : 400, fontSize:13, cursor:"pointer", transition:"all 0.2s" }),
  };

  const CardItem = ({ card }) => {
    const open = expanded === card.id;
    return (
      <div onClick={() => toggle(card.id)} style={{ marginBottom:10, borderRadius:16, overflow:"hidden", cursor:"pointer", boxShadow: open ? "0 8px 40px rgba(0,0,0,0.5)" : "0 2px 12px rgba(0,0,0,0.3)", transition:"box-shadow 0.3s" }}>
        <div style={{ background:`linear-gradient(135deg,${card.gradient[0]},${card.gradient[1]},${card.gradient[2]})`, padding:"18px 20px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
            <div>
              <div style={{ fontSize:10, opacity:0.7, letterSpacing:2, textTransform:"uppercase", color:card.text, marginBottom:3 }}>{card.issuer} · {card.network}</div>
              <div style={{ fontSize:20, fontWeight:900, color:card.text, letterSpacing:-0.5 }}>{card.name}</div>
              <div style={{ fontSize:11, color:card.text, opacity:0.75, marginTop:3 }}>{card.rewardType} · 年費 {card.annualFee === 0 ? "免費" : `$${card.annualFee}`}</div>
            </div>
            <div style={{ fontSize:18, color:card.text, opacity:0.5 }}>{open ? "▲" : "▼"}</div>
          </div>
          {!open && (
            <div style={{ display:"flex", gap:6, marginTop:12, flexWrap:"wrap" }}>
              {card.bestFor.map(b => (
                <span key={b} style={{ background:"rgba(255,255,255,0.18)", borderRadius:20, padding:"3px 10px", fontSize:11, color:card.text, fontWeight:600 }}>{b}</span>
              ))}
            </div>
          )}
        </div>
        {open && (
          <div style={{ background:"#10101e", padding:"14px 16px" }}>
            {card.note && (
              <div style={{ background:"rgba(123,97,255,0.08)", border:"1px solid rgba(123,97,255,0.2)", borderRadius:8, padding:"8px 12px", fontSize:12, color:"rgba(200,180,255,0.8)", marginBottom:12 }}>
                💡 {card.note}
              </div>
            )}
            <div style={s.sectionLabel}>消費倍率</div>
            <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:14 }}>
              {categories.map(cat => {
                const val = card.multipliers[cat.id];
                const isTop = val >= 5;
                return (
                  <div key={cat.id} style={{ background: isTop ? "rgba(123,97,255,0.15)" : "#1a1a2a", border: isTop ? "1px solid rgba(123,97,255,0.4)" : "1px solid #222", borderRadius:10, padding:"7px 10px", textAlign:"center", minWidth:48 }}>
                    <div style={{ fontSize:15 }}>{cat.icon}</div>
                    <div style={{ fontSize:14, fontWeight:900, color: isTop ? "#a08cff" : "#888" }}>{val}x</div>
                    <div style={{ fontSize:9, color:"rgba(255,255,255,0.4)" }}>{cat.label}</div>
                  </div>
                );
              })}
            </div>
            <div style={s.sectionLabel}>主要福利</div>
            {card.benefits.map(b => (
              <div key={b.label} style={{ display:"flex", gap:10, padding:"8px 0", borderBottom:"1px solid #1a1a2a" }}>
                <span style={{ fontSize:18, flexShrink:0 }}>{b.icon}</span>
                <div>
                  <div style={{ fontSize:13, fontWeight:700, color:"#fff" }}>{b.label}</div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.45)", marginTop:1 }}>{b.detail}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={s.app}>
      {/* Header */}
      <div style={s.header}>
        <div style={s.badge}>💳 Grant's Wallet</div>
        <div style={s.title}>信用卡策略筆記本</div>
        <div style={s.sub}>2025/2026 最新版 · {cards.length} 張美卡 · 資料已核實</div>
      </div>

      {/* Tabs */}
      <div style={s.tabBar}>
        {tabs.map(t => (
          <button key={t.id} style={s.tabBtn(tab === t.id)} onClick={() => setTab(t.id)}>{t.label}</button>
        ))}
      </div>

      <div style={s.body}>

        {/* ──── 卡片總覽 ──── */}
        {tab === "overview" && (
          <div>
            <div style={{ ...s.sectionLabel, marginBottom:14 }}>點擊卡片展開詳細資料 ↓</div>
            {cards.map(c => <CardItem key={c.id} card={c} />)}
          </div>
        )}

        {/* ──── 消費最佳化 ──── */}
        {tab === "optimizer" && (
          <div>
            <div style={{ fontSize:18, fontWeight:900, marginBottom:2 }}>今天消費，刷哪張？</div>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.35)", marginBottom:18 }}>選消費類別，系統自動排序</div>

            <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:24 }}>
              {categories.map(cat => (
                <button key={cat.id} style={s.chip(category === cat.id)} onClick={() => setCategory(cat.id)}>
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>

            <div style={s.sectionLabel}>推薦刷卡順序</div>
            {ranked.map((card, i) => {
              const isBest = card.rate === topRate;
              return (
                <div key={card.id} style={{ background:`linear-gradient(135deg,${card.gradient[0]},${card.gradient[1]})`, borderRadius:14, padding:"14px 16px", marginBottom:9, display:"flex", alignItems:"center", gap:14, opacity: card.rate < 1.5 ? 0.6 : 1 }}>
                  <div style={{ width:34, height:34, borderRadius:"50%", background:"rgba(255,255,255,0.18)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:16, color:card.text, flexShrink:0 }}>{i+1}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:15, fontWeight:800, color:card.text }}>{card.name}</div>
                    <div style={{ fontSize:11, color:card.text, opacity:0.75 }}>{card.rewardType}</div>
                  </div>
                  <div style={{ background: isBest ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.15)", borderRadius:20, padding:"5px 14px", fontWeight:900, fontSize:20, color:card.text }}>
                    {card.rate}x
                  </div>
                </div>
              );
            })}

            {/* 對照表 */}
            <div style={{ marginTop:28 }}>
              <div style={s.sectionLabel}>全卡對照表（🥇=最高倍率）</div>
              <div style={{ overflowX:"auto", borderRadius:12, border:"1px solid #1a1a2a" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:11 }}>
                  <thead>
                    <tr style={{ background:"#12121e" }}>
                      <th style={{ padding:"9px 10px", textAlign:"left", color:"rgba(255,255,255,0.4)", fontWeight:600, whiteSpace:"nowrap" }}>卡片</th>
                      {categories.map(c => (
                        <th key={c.id} style={{ padding:"9px 7px", textAlign:"center", color: category === c.id ? "#7b61ff" : "rgba(255,255,255,0.4)", fontWeight:600 }}>{c.icon}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cards.map((card, idx) => (
                      <tr key={card.id} style={{ background: idx%2===0 ? "#0f0f1a" : "#0b0b14", borderTop:"1px solid #1a1a2a" }}>
                        <td style={{ padding:"9px 10px", fontWeight:700, color:"#ccc", whiteSpace:"nowrap" }}>{card.shortName}</td>
                        {categories.map(cat => {
                          const val = card.multipliers[cat.id];
                          const best = Math.max(...cards.map(c => c.multipliers[cat.id]));
                          const isBest = val === best;
                          return (
                            <td key={cat.id} style={{ padding:"9px 7px", textAlign:"center" }}>
                              <span style={{ fontWeight: isBest ? 900 : 400, color: isBest ? "#ffd700" : "rgba(255,255,255,0.35)", fontSize: isBest ? 13 : 11 }}>
                                {isBest ? "🥇" : ""}{val}x
                              </span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ fontSize:10, color:"rgba(255,255,255,0.25)", marginTop:5, textAlign:"right" }}>* HSBC 5x 需透過 HSBC Travel 訂購 · CSP 5x 需透過 Chase Travel</div>
            </div>
          </div>
        )}

        {/* ──── 特殊福利 ──── */}
        {tab === "benefits" && (
          <div>
            <div style={{ fontSize:18, fontWeight:900, marginBottom:2 }}>特殊福利彙整</div>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.35)", marginBottom:18 }}>PPS · 免費夜 · 飯店身份 · 點數轉讓</div>

            <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:20 }}>
              {[{id:"all",l:"全部"},{id:"PPS",l:"✈️ 貴賓室"},{id:"FreeNight",l:"🌙 免費夜"},{id:"Status",l:"💎 身份"},{id:"Transfer",l:"🔄 轉讓"}].map(f => (
                <button key={f.id} style={s.chip(benefitFilter===f.id)} onClick={() => setBenefitFilter(f.id)}>{f.l}</button>
              ))}
            </div>

            {cards.map(card => {
              const filtered = card.benefits.filter(b => benefitFilter === "all" || b.cat === benefitFilter);
              if (filtered.length === 0) return null;
              return (
                <div key={card.id} style={{ marginBottom:14 }}>
                  <div style={{ background:`linear-gradient(90deg,${card.gradient[0]},${card.gradient[1]})`, borderRadius:"12px 12px 0 0", padding:"10px 14px", fontSize:13, fontWeight:800, color:card.text }}>{card.name}</div>
                  <div style={{ background:"#10101e", border:"1px solid #1a1a2a", borderTop:"none", borderRadius:"0 0 12px 12px" }}>
                    {filtered.map((b, i) => (
                      <div key={b.label} style={{ display:"flex", gap:10, padding:"10px 14px", borderBottom: i < filtered.length-1 ? "1px solid #1a1a2a" : "none" }}>
                        <span style={{ fontSize:20, flexShrink:0 }}>{b.icon}</span>
                        <div>
                          <div style={{ fontSize:13, fontWeight:700, color:"#fff" }}>{b.label}</div>
                          <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)", marginTop:1 }}>{b.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ──── 旅行攻略 ──── */}
        {tab === "travel" && (
          <div>
            <div style={{ fontSize:18, fontWeight:900, marginBottom:2 }}>旅行用卡攻略</div>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.35)", marginBottom:18 }}>每個場景的最優刷卡策略</div>
            {travelGuide.map(section => (
              <div key={section.phase} style={{ marginBottom:14 }}>
                <div style={{ background:section.color, borderRadius:"12px 12px 0 0", padding:"11px 14px", fontSize:14, fontWeight:800 }}>{section.phase}</div>
                <div style={{ background:"#10101e", border:"1px solid #1a1a2a", borderTop:"none", borderRadius:"0 0 12px 12px" }}>
                  {section.steps.map((step, i) => (
                    <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, padding:"11px 14px", borderBottom: i < section.steps.length-1 ? "1px solid #1a1a2a" : "none" }}>
                      <div>
                        <div style={{ fontSize:10, color:"rgba(255,255,255,0.3)", marginBottom:2 }}>消費情境</div>
                        <div style={{ fontSize:12, fontWeight:700, color:"#ddd" }}>{step.action}</div>
                      </div>
                      <div>
                        <div style={{ fontSize:12, color:"#7b61ff", fontWeight:700, marginBottom:2 }}>{step.card}</div>
                        <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)" }}>{step.reason}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ──── Credits 追蹤 ──── */}
        {tab === "credits" && (
          <div>
            <div style={{ fontSize:18, fontWeight:900, marginBottom:2 }}>年度 Credits 彙整</div>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.35)", marginBottom:18 }}>充分使用 Credits 是高年費卡的關鍵</div>

            {annualCredits.map(item => {
              const total = item.credits.reduce((s,c) => s+c.amt, 0);
              const net = total - item.fee;
              return (
                <div key={item.card} style={{ marginBottom:14, background:"#10101e", border:"1px solid #1a1a2a", borderRadius:14, overflow:"hidden" }}>
                  <div style={{ background:`linear-gradient(90deg,${item.color}99,${item.color}44)`, padding:"12px 14px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <div style={{ fontSize:14, fontWeight:800, color:"#fff" }}>{item.card}</div>
                    <div style={{ fontSize:11, color:"rgba(255,255,255,0.6)" }}>年費 ${item.fee}</div>
                  </div>
                  <div style={{ padding:"12px 14px" }}>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:7, marginBottom:12 }}>
                      {item.credits.map(c => (
                        <div key={c.label} style={{ background:"rgba(123,97,255,0.08)", border:"1px solid rgba(123,97,255,0.15)", borderRadius:8, padding:"5px 10px" }}>
                          <div style={{ fontSize:10, color:"rgba(255,255,255,0.4)" }}>{c.label}</div>
                          <div style={{ fontSize:15, fontWeight:900, color:"#a08cff" }}>${c.amt}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", borderTop:"1px solid #1a1a2a", paddingTop:10 }}>
                      <div>
                        <div style={{ fontSize:10, color:"rgba(255,255,255,0.35)" }}>Credits 總計</div>
                        <div style={{ fontSize:18, fontWeight:900, color:"#ffd700" }}>${total.toLocaleString()}</div>
                      </div>
                      <div style={{ textAlign:"right" }}>
                        <div style={{ fontSize:10, color:"rgba(255,255,255,0.35)" }}>扣除年費後</div>
                        <div style={{ fontSize:18, fontWeight:900, color: net >= 0 ? "#4caf50" : "#f44336" }}>{net >= 0 ? "+" : ""}${net.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* 總計 */}
            <div style={{ background:"linear-gradient(135deg,#141428,#0d0d1e)", border:"1px solid rgba(123,97,255,0.3)", borderRadius:14, padding:"18px 16px", textAlign:"center" }}>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.4)", marginBottom:6 }}>全部卡片 · Credits 總計（充分使用時）</div>
              <div style={{ fontSize:36, fontWeight:900, color:"#ffd700" }}>
                ${annualCredits.reduce((s,i) => s + i.credits.reduce((ss,c) => ss+c.amt, 0), 0).toLocaleString()}
              </div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.35)", marginTop:4 }}>
                年費總計 ${annualCredits.reduce((s,i) => s+i.fee, 0).toLocaleString()} ·
                淨節省 ${(annualCredits.reduce((s,i) => s + i.credits.reduce((ss,c) => ss+c.amt, 0), 0) - annualCredits.reduce((s,i) => s+i.fee, 0)).toLocaleString()}
              </div>
              <div style={{ fontSize:10, color:"rgba(255,255,255,0.25)", marginTop:8 }}>*需實際使用所有 Credits 才能達到此金額</div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
