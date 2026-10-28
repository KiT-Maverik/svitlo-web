import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { representations_SkillGroup_Ids } from './representations.ids';
import { representations_Skills_Ids } from './skills/index.ids';

export const representations_SkillGroup_Data = buildSkillGroupConfig({
  id: representations_SkillGroup_Ids.representations,
  name: {
    en: "Mathematical representations",
    "lt": "Matematiniai vaizdiniai",
    "lv": "Matemātiskie attēlojumi",
    "et": "Matemaatilised esitused",
    "be": "Матэматычныя прадстаўленьні",
    "ka": "მათემატიკური წარმოდგენები",
    "kk": "Математикалық бейнелеулер",
    zh: "数学表示",
    hi: "गणितीय निरूपण",
    es: "Representaciones matemáticas",
    ar: "التمثيلات الرياضية",
    fr: "Représentations mathématiques",
    bn: "গাণিতিক উপস্থাপন",
    pt: "Representações matemáticas",
    ur: "ریاضی نمائندگی",
    id: "Representasi matematika",
    de: "Mathematische Darstellungen",
    ja: "数学的な表現",
    ko: "수학적 표현",
    tr: "Matematiksel gösterimler",
    vi: "Biểu diễn toán học",
    ta: "கணிதப் பிரதிநிதித்துவங்கள்",
    te: "గణిత ప్రాతినిధ్యాలు",
    mr: "गणितीय निरूपणे",
    ms: "Perwakilan matematik",
    he: "ייצוגים מתמטיים",
    pl: "Reprezentacje matematyczne",
    uk: "Математичні представлення",
  },
  skillIds: representations_Skills_Ids,
});
