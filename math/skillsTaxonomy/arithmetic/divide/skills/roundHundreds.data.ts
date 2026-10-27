import { buildSkillConfig } from '@/utils';
import { divide_Skills_Ids } from './index.ids';

export const roundHundreds_Skill_Data = buildSkillConfig({
  id: divide_Skills_Ids.roundHundreds,
  name: {
    en: "Division — Whole hundreds",
    zh: "除法 — 整百数",
    hi: "भाग — पूरे सैकड़े",
    es: "División — Centenas completas",
    ar: "القسمة — المئات الكاملة",
    fr: "Division — Centaines entières",
    bn: "ভাগ — পূর্ণ শতক",
    pt: "Divisão — Centenas exatas",
    ur: "تقسیم — پورے سینکڑے",
    id: "Pembagian — Ratusan penuh",
    de: "Division — Ganze Hunderter",
    ja: "除法 — 100のまとまり",
    ko: "나눗셈 — 백의 배수",
    tr: "Bölme — Tam yüzlükler",
    vi: "Phép chia — Số tròn trăm",
    ta: "வகுத்தல் — முழு நூறுகள்",
    te: "భాగహారం — పూర్తి వందలు",
    mr: "भागाकार — पूर्ण शेकडे",
    ms: "Pembahagian — Ratus penuh",
    he: "חילוק — מאות שלמות",
    pl: "Dzielenie — Pełne setki",
    uk: "Ділення — Круглі сотні",
  },
});
