import { buildSkillGroupConfig } from '@/utils';
import { representation_SkillGroup_Ids } from './representation.ids';
import { representation_Skills_Ids } from './skills/index.ids';

export const representation_SkillGroup_Data = buildSkillGroupConfig({
  id: representation_SkillGroup_Ids.representation,
  name: {
    en: "Representing fractions",
    zh: "分数的表示",
    hi: "भिन्नों का निरूपण",
    es: "Representación de fracciones",
    ar: "تمثيل الكسور",
    fr: "Représentation des fractions",
    bn: "ভগ্নাংশের উপস্থাপন",
    pt: "Representação de frações",
    ur: "کسروں کی نمائندگی",
    id: "Representasi pecahan",
    de: "Darstellung von Brüchen",
    ja: "分数の表し方",
    ko: "분수의 표현",
    tr: "Kesirlerin gösterimi",
    vi: "Biểu diễn phân số",
    ta: "பின்னங்களைப் பிரதிநிதித்துவப்படுத்துதல்",
    te: "భిన్నాల ప్రాతినిధ్యం",
    mr: "अपूर्णांकांचे निरूपण",
    ms: "Perwakilan pecahan",
    he: "ייצוג שברים",
    pl: "Przedstawianie ułamków",
    uk: "Представлення дробів",
  },
  skillIds: representation_Skills_Ids,
});
