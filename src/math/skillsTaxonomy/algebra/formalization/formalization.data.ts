import { buildSkillGroupConfig } from '@/utils';
import { formalization_SkillGroup_Ids } from './formalization.ids';
import { formalization_Skills_Ids } from './skills/index.ids';

export const formalization_SkillGroup_Data = buildSkillGroupConfig({
  id: formalization_SkillGroup_Ids.formalization,
  name: {
    en: "Symbolic modeling",
    "lt": "Simbolinis modeliavimas",
    "lv": "Simboliskā modelēšana",
    "et": "Sümbolmudelite koostamine",
    "be": "Сымбалічнае мадэляваньне",
    "ka": "სიმბოლური მოდელირება",
    "kk": "Символдық модельдеу",
    zh: "符号建模",
    hi: "प्रतीकात्मक निरूपण",
    es: "Modelización simbólica",
    ar: "النمذجة الرمزية",
    fr: "Modélisation symbolique",
    bn: "প্রতীকী মডেলিং",
    pt: "Modelagem simbólica",
    ur: "علامتی ماڈل سازی",
    id: "Pemodelan simbolis",
    de: "Symbolisches Modellieren",
    ja: "記号によるモデル化",
    ko: "기호로 모델링하기",
    tr: "Sembolik modelleme",
    vi: "Mô hình hóa bằng ký hiệu",
    ta: "குறியீட்டு மாதிரியாக்கம்",
    te: "సంకేత నమూనా నిర్మాణం",
    mr: "प्रतीकात्मक प्रतिकृतीकरण",
    ms: "Pemodelan simbolik",
    he: "מידול סמלי",
    pl: "Modelowanie symboliczne",
    uk: "Символьне моделювання",
  },
  skillIds: formalization_Skills_Ids,
});
