import { buildSkillGroupConfig } from '@/utils';
import { denominations_SkillGroup_Ids } from './denominations.ids';
import { denominations_Skills_Ids } from './skills/index.ids';

export const denominations_SkillGroup_Data = buildSkillGroupConfig({
  id: denominations_SkillGroup_Ids.denominations,
  name: {
    en: "Money amounts",
    "lt": "Pinigų sumos",
    "lv": "Naudas summas",
    "et": "Rahasummad",
    "be": "Сумы грошай",
    "ka": "ფულადი თანხები",
    "kk": "Ақша сомалары",
    zh: "货币金额",
    hi: "धनराशियाँ",
    es: "Cantidades de dinero",
    ar: "المبالغ النقدية",
    fr: "Sommes d’argent",
    bn: "অর্থের পরিমাণ",
    pt: "Quantias em dinheiro",
    ur: "رقوم",
    id: "Jumlah uang",
    de: "Geldbeträge",
    ja: "金額",
    ko: "금액",
    tr: "Para tutarları",
    vi: "Số tiền",
    ta: "பணத் தொகைகள்",
    te: "డబ్బు మొత్తాలు",
    mr: "पैशांच्या रकमा",
    ms: "Jumlah wang",
    he: "סכומי כסף",
    pl: "Kwoty pieniędzy",
    uk: "Грошові суми",
  },
  skillIds: denominations_Skills_Ids,
});
