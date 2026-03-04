import { useState } from "react";

const cards = [
  {
    id: "amex-platinum",
    name: "Amex Platinum",
    issuer: "AMERICAN EXPRESS · AMEX",
    color: "#B8860B",
    gradient: "linear-gradient(135deg, #B8860B, #FFD700, #B8860B)",
    annualFee: 895,
    pointType: "MR Points",
    earning: [
      { cat: "機票（直飛 or Amex Travel）", rate: 5, note: "" },
      { cat: "Amex Travel 訂飯店", rate: 5, note: "" },
      { cat: "其他消費", rate: 1, note: "" },
    ],
    highlights: ["機場貴賓室 5x", "Amex Lounge", "全球貴賓室"],
    credits: [
      { name: "$600 飯店 Credit", amt: 600, note: "每半年 $300，Fine Hotels & Resorts 或 Hotel Collection" },
      { name: "$400 Resy 餐廳 Credit", amt: 400, note: "每季 $100，Resy 訂位餐廳" },
      { name: "$300 娛樂 Credit", amt: 300, note: "Disney+、Hulu、ESPN+ 等流媒體" },
      { name: "$200 航空雜費 Credit", amt: 200, note: "指定航空行李費/座位升級等" },
      { name: "$200 飯店 Credit", amt: 200, note: "FHR 或 Hotel Collection 2 晚以上" },
      { name: "$120 Uber Cash", amt: 120, note: "每月 $10 Uber / Uber Eats ✅ 台灣可用" },
      { name: "$120 Uber One 會員", amt: 120, note: "Uber One 訂閱費 Credit" },
      { name: "$300 Lululemon Credit", amt: 300, note: "全年 Lululemon 消費回饋" },
      { name: "$200 Oura Ring Credit", amt: 200, note: "購買 Oura Ring 智慧戒指" },
    ],
    perks: [
      "全球機場貴賓室（Amex Centurion + Priority Pass + Delta Sky Club）",
      "Marriott Gold / Hilton Gold 身份",
      "Global Entry / TSA PreCheck 費用 Credit",
      "無外幣手續費",
    ],
  },
  {
    id: "hilton-aspire",
    name: "Hilton Aspire",
    issuer: "AMERICAN EXPRESS · AMEX",
    color: "#1a1a6e",
    gradient: "linear-gradient(135deg, #1a1a6e, #2e2eb8, #1a1a6e)",
    annualFee: 550,
    pointType: "Hilton Points",
    earning: [
      { cat: "Hilton 飯店消費", rate: 14, note: "" },
      { cat: "直飛 / Amex Travel 機票", rate: 7, note: "" },
      { cat: "指定租車公司", rate: 7, note: "" },
      { cat: "美國境內餐廳", rate: 7, note: "含外賣、外送" },
      { cat: "其他消費", rate: 3, note: "" },
    ],
    highlights: ["Hilton 14x", "Diamond 身份", "每年免費夜"],
    credits: [
      { name: "$400 Hilton 度假村 Credit", amt: 400, note: "每半年 $200，入住 Hilton 參與度假村" },
      { name: "$200 航空 Credit", amt: 200, note: "每季 $50，直飛或 Amex Travel 購票" },
      { name: "$209 CLEAR+ Credit", amt: 209, note: "CLEAR+ 會員費（美國機場快速安檢）" },
    ],
    perks: [
      "自動 Hilton Diamond 頂級身份（含免費早餐/升等）",
      "每年 1 張免費夜券（住滿 $30K 再送 1 張，$60K 再送 1 張）",
      "Priority Pass 含 2 名同伴",
      "$100 Waldorf/Conrad 住宿 Credit（訂 Aspire 專屬套房）",
      "無外幣手續費",
    ],
  },
  {
    id: "marriott-brilliant",
    name: "Marriott Brilliant",
    issuer: "AMERICAN EXPRESS · AMEX",
    color: "#8B0000",
    gradient: "linear-gradient(135deg, #8B0000, #cc2200, #8B0000)",
    annualFee: 650,
    pointType: "Bonvoy Points",
    earning: [
      { cat: "Marriott 飯店消費", rate: 6, note: "" },
      { cat: "機票（直飛）", rate: 3, note: "" },
      { cat: "餐廳消費", rate: 3, note: "" },
      { cat: "其他消費", rate: 2, note: "" },
    ],
    highlights: ["Marriott 6x", "Platinum 身份", "$300 餐廳 Credit"],
    credits: [
      { name: "$300 餐廳 Credit", amt: 300, note: "每月 $25 自動回饋，全球餐廳" },
      { name: "$100 屬性 Credit", amt: 100, note: "入住 Ritz-Carlton 或 St. Regis 2 晚以上" },
    ],
    perks: [
      "自動 Marriott Bonvoy Platinum 身份（含免費早餐/升等/歡迎禮）",
      "每年 1 張 85,000 點免費夜券（卡週年贈）",
      "25 個 Elite 夜數（加速升等）",
      "Priority Pass（機場貴賓室）",
      "無外幣手續費",
    ],
  },
  {
    id: "cap1-quicksilver",
    name: "Capital One Quicksilver",
    issuer: "CAPITAL ONE · VISA",
    color: "#c41230",
    gradient: "linear-gradient(135deg, #8B0000, #c41230, #8B0000)",
    annualFee: 0,
    pointType: "現金回饋",
    earning: [
      { cat: "Capital One Travel 訂飯店/租車/度假村", rate: 5, note: "透過 Capital One Travel 平台" },
      { cat: "Capital One Entertainment 購票", rate: 5, note: "透過 Capital One Entertainment" },
      { cat: "所有其他消費", rate: 1.5, note: "無上限無類別限制" },
    ],
    highlights: ["所有消費 1.5%", "無年費", "無外幣手續費"],
    credits: [],
    perks: [
      "無年費",
      "無外幣手續費（適合台灣海外消費）",
      "現金回饋不過期",
      "Hertz Five Star 租車身份",
      "基本旅遊保險",
    ],
  },
  {
    id: "hsbc-elite",
    name: "HSBC US Elite",
    issuer: "HSBC · MASTERCARD",
    color: "#cc0000",
    gradient: "linear-gradient(135deg, #8B0000, #cc0000, #8B0000)",
    annualFee: 495,
    pointType: "HSBC Points",
    earning: [
      { cat: "旅行（航班/飯店/租車）", rate: 5, note: "透過 HSBC Travel / Priceline" },
      { cat: "餐廳消費", rate: 2, note: "" },
      { cat: "其他消費", rate: 1, note: "" },
    ],
    highlights: ["旅行 5x", "Priority Pass 含 2 伴", "$400 旅行 Credit"],
    credits: [
      { name: "$400 旅行 Credit", amt: 400, note: "透過 HSBC Travel 訂機票/飯店/租車" },
      { name: "$120 Rideshare Credit", amt: 120, note: "每月自動 $10，Uber ✅ 台灣可用（需設定美國付款）" },
      { name: "$120 Global Entry/TSA PreCheck Credit", amt: 120, note: "每 54 個月一次（含 CLEAR）" },
    ],
    perks: [
      "Priority Pass 含 2 名同伴（1,300+ 貴賓室）",
      "HSBC 11 個航空 + 2 個飯店點數轉讓夥伴",
      "Soho House 會籍 + $100 住宿 Credit",
      "無外幣手續費",
      "注意：點數兌換旅行 2025/6/30 後降為 $0.01/點",
    ],
  },
  {
    id: "chase-csp",
    name: "Chase Sapphire Preferred",
    issuer: "CHASE · VISA",
    color: "#1a3a6e",
    gradient: "linear-gradient(135deg, #0d2240, #1a3a6e, #0d2240)",
    annualFee: 95,
    pointType: "UR Points",
    earning: [
      { cat: "Chase Travel 平台訂購", rate: 5, note: "" },
      { cat: "餐廳（含外賣外送）", rate: 3, note: "" },
      { cat: "精選串流平台", rate: 3, note: "Netflix / Spotify 等" },
      { cat: "線上超市購物", rate: 3, note: "不含 Target / Walmart" },
      { cat: "其他旅行消費", rate: 2, note: "非 Chase Travel 平台" },
      { cat: "Lyft（僅限 Lyft App）", rate: 5, note: "⚠️ 台灣無 Lyft，Uber 僅 2x（旅行類別）" },
      { cat: "Peloton 器材（$150+）", rate: 5, note: "至 2027/12，限額 25,000 點" },
      { cat: "其他消費", rate: 1, note: "" },
    ],
    highlights: ["Chase Travel 5x", "餐廳 3x", "週年 10% 加碼"],
    credits: [
      { name: "$50 飯店 Credit", amt: 50, note: "每年透過 Chase Travel 訂飯店自動回饋" },
    ],
    perks: [
      "卡週年消費 10% 點數加碼（前一年消費 $1 = 0.1 點加碼）",
      "DashPass 免費會員（DoorDash，美國）",
      "旅遊取消 / 中斷保險（每人最高 $10,000）",
      "行李延誤保險（超過 6 小時，每日最高 $100 x 5 天）",
      "UR 點數可轉讓 14+ 航空飯店夥伴（United / Hyatt / Singapore Airlines 等）",
      "無外幣手續費",
    ],
  },
  {
    id: "chase-marriott",
    name: "Chase Marriott Boundless",
    issuer: "CHASE · VISA",
    color: "#1a4a1a",
    gradient: "linear-gradient(135deg, #0d2f0d, #1a4a1a, #0d2f0d)",
    annualFee: 95,
    pointType: "Bonvoy Points",
    earning: [
      { cat: "Marriott 飯店消費", rate: 6, note: "" },
      { cat: "餐廳消費", rate: 3, note: "前 $6,000/年" },
      { cat: "超市購物", rate: 3, note: "前 $6,000/年" },
      { cat: "加油站", rate: 3, note: "前 $6,000/年" },
      { cat: "其他消費", rate: 2, note: "" },
    ],
    highlights: ["Marriott 6x", "35K 免費夜券", "Silver 身份"],
    credits: [
      { name: "$100 航空 Credit", amt: 100, note: "Chase Travel 訂購機票回饋" },
    ],
    perks: [
      "每年 1 張 35,000 點免費夜券（可搭配 15,000 點升級）",
      "自動 Marriott Silver 身份（10 個精英夜數）",
      "15 個精英夜數（每年），加速升等",
      "無外幣手續費",
    ],
  },
];

const travelTips = [
  {
    phase: "出發前",
    tips: [
      "查詢目的地有無 Priority Pass 貴賓室（HSBC Elite / Hilton Aspire 可帶 2 名同伴）",
      "用 CSP 或 HSBC Elite 買機票（5x 點數）",
      "Global Entry / TSA PreCheck 用 HSBC Elite 報名（$120 Credit）",
    ],
  },
  {
    phase: "機場",
    tips: [
      "Amex Platinum：Centurion Lounge + Priority Pass + Delta Sky Club（最強）",
      "HSBC Elite / Hilton Aspire：Priority Pass（含 2 伴免費）",
      "CLEAR 費用：Hilton Aspire $209 Credit 最划算",
    ],
  },
  {
    phase: "Hilton 飯店",
    tips: [
      "住宿刷 Hilton Aspire：14x 點數 + Diamond 免費早餐 + 升等",
      "$400 度假村 Credit 每半年 $200（記得用度假村類型物業）",
      "住滿 5 晚免 1 晚（Diamond 福利）",
    ],
  },
  {
    phase: "Marriott 飯店",
    tips: [
      "住宿刷 Marriott Brilliant：6x 點數 + Platinum 免費早餐 + 升等",
      "$300 餐廳 Credit（每月 $25 自動回饋）",
      "用 85K 免費夜券入住高階物業",
    ],
  },
  {
    phase: "Credits 使用順序",
    tips: [
      "Amex Platinum $120 Uber Cash：每月 $10，設成自動用於 Uber/Uber Eats",
      "HSBC Elite $120 Rideshare：每月 $10 自動抵扣（Uber ✅）",
      "Hilton Aspire $200 航空：每季 $50，買機票或儲值航空帳戶",
      "Marriott Brilliant $300 餐廳：每月 $25 自動，全球餐廳適用",
    ],
  },
  {
    phase: "點數轉讓",
    tips: [
      "UR → United / Hyatt / Singapore Airlines（CSP）",
      "MR → ANA / Singapore Airlines / Air France（Amex Platinum）",
      "HSBC → British Airways / Turkish Miles&Smiles / EVA Air 等 11 個航空夥伴",
      "Hilton → 不建議轉航空（比例 10:1 太差）",
    ],
  },
];

export default function App() {
  const [tab, setTab] = useState("cards");
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedCat, setSelectedCat] = useState("");

  const categories = [
    "機票", "飯店（Hilton）", "飯店（Marriott）", "餐廳", "超市",
    "叫車（Uber）", "串流平台", "租車", "其他消費",
  ];

  const catMap = {
    "機票": [
      { card: "Amex Platinum", rate: 5, note: "直飛或 Amex Travel" },
      { card: "HSBC Elite", rate: 5, note: "透過 HSBC Travel" },
      { card: "Hilton Aspire", rate: 7, note: "直飛或 Amex Travel（Hilton 點數）" },
      { card: "Chase CSP", rate: 3, note: "⚠️ 非 Chase Travel 平台為 2x" },
      { card: "Marriott Brilliant", rate: 3, note: "直飛" },
      { card: "Chase Marriott", rate: 2, note: "" },
      { card: "Cap1 Quicksilver", rate: 1.5, note: "現金回饋" },
    ],
    "飯店（Hilton）": [
      { card: "Hilton Aspire", rate: 14, note: "Hilton Points（最強）" },
      { card: "Amex Platinum", rate: 5, note: "透過 Amex Travel" },
      { card: "Cap1 Quicksilver", rate: 1.5, note: "現金回饋" },
    ],
    "飯店（Marriott）": [
      { card: "Marriott Brilliant", rate: 6, note: "Bonvoy Points（最強）" },
      { card: "Chase Marriott", rate: 6, note: "Bonvoy Points" },
      { card: "HSBC Elite", rate: 5, note: "透過 HSBC Travel" },
      { card: "Cap1 Quicksilver", rate: 1.5, note: "現金回饋" },
    ],
    "餐廳": [
      { card: "Hilton Aspire", rate: 7, note: "僅限美國境內餐廳（Hilton 點數）" },
      { card: "Chase CSP", rate: 3, note: "UR 點數，全球餐廳" },
      { card: "Marriott Brilliant", rate: 3, note: "Bonvoy 點數，全球餐廳" },
      { card: "Chase Marriott", rate: 3, note: "前 $6K/年" },
      { card: "HSBC Elite", rate: 2, note: "HSBC 點數" },
      { card: "Cap1 Quicksilver", rate: 1.5, note: "現金回饋" },
      { card: "Amex Platinum", rate: 1, note: "" },
    ],
    "超市": [
      { card: "Chase CSP", rate: 3, note: "線上超市，不含 Target/Walmart" },
      { card: "Chase Marriott", rate: 3, note: "前 $6K/年" },
      { card: "Cap1 Quicksilver", rate: 1.5, note: "現金回饋" },
    ],
    "叫車（Uber）": [
      { card: "Amex Platinum", rate: "每月 $10", note: "Uber Cash Credit（⚠️ 僅限美國境內）" },
      { card: "HSBC Elite", rate: "每月 $10", note: "Rideshare Credit 自動抵扣（✅ 台灣可用）" },
      { card: "Chase CSP", rate: 2, note: "旅行類別 2x（⚠️ Lyft 才有 5x，台灣無 Lyft）" },
      { card: "Cap1 Quicksilver", rate: 1.5, note: "現金回饋" },
      { card: "Hilton Aspire", rate: 3, note: "其他消費類別" },
    ],
    "串流平台": [
      { card: "Chase CSP", rate: 3, note: "Netflix、Spotify、Disney+ 等精選" },
      { card: "Cap1 Quicksilver", rate: 1.5, note: "現金回饋" },
      { card: "Amex Platinum", rate: 1, note: "（但有 $300 娛樂 Credit 可用）" },
    ],
    "租車": [
      { card: "Hilton Aspire", rate: 7, note: "指定租車公司（Hilton 點數）" },
      { card: "HSBC Elite", rate: 5, note: "透過 HSBC Travel" },
      { card: "Chase CSP", rate: 5, note: "透過 Chase Travel" },
      { card: "Cap1 Quicksilver", rate: 5, note: "透過 Capital One Travel" },
      { card: "Marriott Brilliant", rate: 3, note: "" },
    ],
    "其他消費": [
      { card: "Cap1 Quicksilver", rate: 1.5, note: "現金回饋，最簡單" },
      { card: "Marriott Brilliant", rate: 2, note: "Bonvoy 點數" },
      { card: "Chase Marriott", rate: 2, note: "Bonvoy 點數" },
      { card: "Hilton Aspire", rate: 3, note: "Hilton 點數" },
      { card: "Amex Platinum", rate: 1, note: "" },
      { card: "HSBC Elite", rate: 1, note: "" },
      { card: "Chase CSP", rate: 1, note: "" },
    ],
  };

  const annualCredits = [
    {
      card: "Amex Platinum",
      fee: 895,
      credits: [
        { name: "$600 飯店 Credit", amt: 600 },
        { name: "$400 Resy 餐廳 Credit", amt: 400 },
        { name: "$300 娛樂 Credit", amt: 300 },
        { name: "$200 航空雜費", amt: 200 },
        { name: "$200 飯店 Credit（FHR）", amt: 200 },
        { name: "$120 Uber Cash", amt: 120 },
        { name: "$120 Uber One", amt: 120 },
        { name: "$300 Lululemon", amt: 300 },
        { name: "$200 Oura Ring", amt: 200 },
      ],
    },
    {
      card: "Hilton Aspire",
      fee: 550,
      credits: [
        { name: "$400 度假村 Credit", amt: 400 },
        { name: "$200 航空 Credit", amt: 200 },
        { name: "$209 CLEAR+", amt: 209 },
      ],
    },
    {
      card: "Marriott Brilliant",
      fee: 650,
      credits: [
        { name: "$300 餐廳 Credit", amt: 300 },
        { name: "$100 屬性 Credit", amt: 100 },
      ],
    },
    {
      card: "HSBC Elite",
      fee: 495,
      credits: [
        { name: "$400 旅行 Credit", amt: 400 },
        { name: "$120 Rideshare（Uber ✅）", amt: 120 },
        { name: "$120 Global Entry", amt: 120 },
      ],
    },
    {
      card: "Chase CSP",
      fee: 95,
      credits: [
        { name: "$50 飯店 Credit", amt: 50 },
      ],
    },
    {
      card: "Chase Marriott",
      fee: 95,
      credits: [
        { name: "$100 航空 Credit", amt: 100 },
      ],
    },
    {
      card: "Cap1 Quicksilver",
      fee: 0,
      credits: [],
    },
  ];

  const styles = {
    container: { minHeight: "100vh", background: "#0a0a0a", color: "#fff", fontFamily: "'Segoe UI', sans-serif", padding: "0" },
    header: { background: "linear-gradient(135deg, #111, #1a1a2e)", padding: "20px 20px 0", borderBottom: "1px solid #333" },
    title: { fontSize: 22, fontWeight: 900, background: "linear-gradient(90deg, #ffd700, #ff8c00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0 },
    subtitle: { fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 4, marginBottom: 16 },
    tabs: { display: "flex", gap: 0, borderBottom: "none" },
    tab: (active) => ({ padding: "10px 14px", fontSize: 12, cursor: "pointer", background: "none", border: "none", color: active ? "#ffd700" : "rgba(255,255,255,0.4)", borderBottom: active ? "2px solid #ffd700" : "2px solid transparent", fontWeight: active ? 700 : 400, transition: "all 0.2s" }),
    content: { padding: "16px" },
    card: (gradient) => ({ background: gradient, borderRadius: 14, padding: "16px", marginBottom: 12, cursor: "pointer", border: "1px solid rgba(255,255,255,0.1)", transition: "transform 0.2s", position: "relative", overflow: "hidden" }),
    cardIssuer: { fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: 1, marginBottom: 4 },
    cardName: { fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 6 },
    tag: { display: "inline-block", background: "rgba(0,0,0,0.35)", borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#fff", marginRight: 6, marginBottom: 4 },
    expandedSection: { background: "rgba(0,0,0,0.4)", borderRadius: 10, padding: "14px", marginTop: 12 },
    sectionTitle: { fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: 1, marginBottom: 8, textTransform: "uppercase" },
    earningRow: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" },
    rateText: { fontSize: 18, fontWeight: 900, color: "#ffd700" },
    catSelect: { width: "100%", background: "#1a1a2e", color: "#fff", border: "1px solid #333", borderRadius: 10, padding: "12px", fontSize: 14, marginBottom: 16, outline: "none" },
    resultCard: (i) => ({ background: i === 0 ? "linear-gradient(135deg, #1a3a1a, #2a5a2a)" : "rgba(255,255,255,0.04)", borderRadius: 10, padding: "12px 14px", marginBottom: 8, border: i === 0 ? "1px solid #4a8a4a" : "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }),
    creditCard: { background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "16px", marginBottom: 14, border: "1px solid rgba(255,255,255,0.1)" },
    creditRow: { display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", alignItems: "flex-start" },
    summaryBox: { background: "linear-gradient(135deg, #141428,#0d0d1e)", border: "1px solid rgba(123,97,255,0.3)", borderRadius: 14, padding: "18px 16px", textAlign: "center" },
    tipPhase: { background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "14px", marginBottom: 12, border: "1px solid rgba(255,255,255,0.08)" },
    perkRow: { display: "flex", alignItems: "flex-start", gap: 8, padding: "4px 0" },
  };

  const renderCards = () => (
    <div>
      {cards.map(c => (
        <div key={c.id} style={styles.card(c.gradient)} onClick={() => setExpandedCard(expandedCard === c.id ? null : c.id)}>
          <div style={styles.cardIssuer}>{c.issuer}</div>
          <div style={styles.cardName}>{c.name}</div>
          <div style={{ marginBottom: 8 }}>
            <span style={styles.tag}>{c.pointType}</span>
            <span style={styles.tag}>年費 ${c.annualFee}</span>
          </div>
          <div>
            {c.highlights.map((h, i) => <span key={i} style={{ ...styles.tag, background: "rgba(255,215,0,0.2)", color: "#ffd700" }}>{h}</span>)}
          </div>
          {expandedCard === c.id && (
            <div style={styles.expandedSection} onClick={e => e.stopPropagation()}>
              <div style={styles.sectionTitle}>消費倍率</div>
              {c.earning.map((e, i) => (
                <div key={i} style={styles.earningRow}>
                  <div>
                    <div style={{ fontSize: 13 }}>{e.cat}</div>
                    {e.note && <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{e.note}</div>}
                  </div>
                  <div style={styles.rateText}>{typeof e.rate === 'number' ? `${e.rate}x` : e.rate}</div>
                </div>
              ))}
              {c.credits.length > 0 && (
                <>
                  <div style={{ ...styles.sectionTitle, marginTop: 14 }}>年度 Credits</div>
                  {c.credits.map((cr, i) => (
                    <div key={i} style={styles.earningRow}>
                      <div>
                        <div style={{ fontSize: 13 }}>{cr.name}</div>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{cr.note}</div>
                      </div>
                      <div style={{ ...styles.rateText, color: "#4caf50" }}>${cr.amt}</div>
                    </div>
                  ))}
                </>
              )}
              {c.perks.length > 0 && (
                <>
                  <div style={{ ...styles.sectionTitle, marginTop: 14 }}>特殊福利</div>
                  {c.perks.map((p, i) => (
                    <div key={i} style={styles.perkRow}>
                      <span style={{ color: "#ffd700", fontSize: 12 }}>✦</span>
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)" }}>{p}</span>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderOptimize = () => (
    <div>
      <select style={styles.catSelect} value={selectedCat} onChange={e => setSelectedCat(e.target.value)}>
        <option value="">— 選擇消費類別 —</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      {selectedCat && catMap[selectedCat] && (
        <div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>
            「{selectedCat}」最佳刷卡順序：
          </div>
          {catMap[selectedCat].map((r, i) => (
            <div key={i} style={styles.resultCard(i)}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{r.card}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{r.note}</div>
              </div>
              <div style={{ fontSize: 20, fontWeight: 900, color: i === 0 ? "#4caf50" : "#ffd700" }}>
                {typeof r.rate === 'number' ? `${r.rate}x` : r.rate}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderTravel = () => (
    <div>
      {travelTips.map((t, i) => (
        <div key={i} style={styles.tipPhase}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#ffd700", marginBottom: 10 }}>📍 {t.phase}</div>
          {t.tips.map((tip, j) => (
            <div key={j} style={styles.perkRow}>
              <span style={{ color: "#ffd700", fontSize: 12 }}>▸</span>
              <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>{tip}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  const renderCredits = () => (
    <div>
      {annualCredits.map((card, idx) => {
        const total = card.credits.reduce((s, c) => s + c.amt, 0);
        const net = total - card.fee;
        return (
          <div key={idx} style={styles.creditCard}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{card.card}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>年費 ${card.fee}</div>
            </div>
            {card.credits.length === 0 && (
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>無 Credit（但無年費）</div>
            )}
            {card.credits.map((cr, i) => (
              <div key={i} style={styles.creditRow}>
                <div style={{ fontSize: 12, flex: 1 }}>{cr.name}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#4caf50", minWidth: 50, textAlign: "right" }}>${cr.amt}</div>
              </div>
            ))}
            {card.credits.length > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 10, marginTop: 6 }}>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>Credits 總計</div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: "#ffd700" }}>${total.toLocaleString()}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>扣除年費後</div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: net >= 0 ? "#4caf50" : "#f44336" }}>{net >= 0 ? "+" : ""}{net.toLocaleString()}</div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div style={styles.summaryBox}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>全部卡片 · Credits 總計（充分使用時）</div>
        <div style={{ fontSize: 36, fontWeight: 900, color: "#ffd700" }}>
          ${annualCredits.reduce((s, i) => s + i.credits.reduce((ss, c) => ss + c.amt, 0), 0).toLocaleString()}
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>
          年費總計 ${annualCredits.reduce((s, i) => s + i.fee, 0).toLocaleString()} ·
          淨節省 ${(annualCredits.reduce((s, i) => s + i.credits.reduce((ss, c) => ss + c.amt, 0), 0) - annualCredits.reduce((s, i) => s + i.fee, 0)).toLocaleString()}
        </div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", marginTop: 8 }}>*需實際使用所有 Credits 才能達到此金額</div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: 2, marginBottom: 4 }}>GRANT'S WALLET</div>
        <div style={styles.title}>信用卡策略筆記本</div>
        <div style={styles.subtitle}>7 張卡完整福利 · 消費最佳化 · 旅行攻略 · Credits 追蹤</div>
        <div style={styles.tabs}>
          {[["cards","卡片"],["optimize","消費"],["travel","旅行"],["credits","Credits"]].map(([k,v]) => (
            <button key={k} style={styles.tab(tab===k)} onClick={() => setTab(k)}>{v}</button>
          ))}
        </div>
      </div>
      <div style={styles.content}>
        {tab === "cards" && renderCards()}
        {tab === "optimize" && renderOptimize()}
        {tab === "travel" && renderTravel()}
        {tab === "credits" && renderCredits()}
      </div>
    </div>
  );
}
