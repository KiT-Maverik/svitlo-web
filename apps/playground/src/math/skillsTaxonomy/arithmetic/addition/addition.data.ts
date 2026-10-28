import { buildSkillGroupConfig } from '@/utils';
import { addition_SkillGroup_Ids } from './addition.ids';
import { addition_Skills_Ids } from './skills/index.ids';

export const addition_SkillGroup_Data = buildSkillGroupConfig({
  id: addition_SkillGroup_Ids.addition,
  name: {
    en: "Addition",
    "lt": "Sudėtis",
    "lv": "Saskaitīšana",
    "et": "Liitmine",
    "be": "Складаньне",
    "ka": "შეკრება",
    "kk": "Қосу",
    zh: "加法",
    hi: "जोड़",
    es: "Suma",
    ar: "الجمع",
    fr: "Addition",
    bn: "যোগ",
    pt: "Adição",
    ur: "جمع",
    id: "Penjumlahan",
    de: "Addition",
    ja: "加法",
    ko: "덧셈",
    tr: "Toplama",
    vi: "Phép cộng",
    ta: "கூட்டல்",
    te: "కూడిక",
    mr: "बेरीज",
    ms: "Penambahan",
    he: "חיבור",
    pl: "Dodawanie",
    uk: "Додавання",
  },
  skillIds: addition_Skills_Ids,
});
