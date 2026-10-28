import { buildSkillGroupConfig } from '@/utils';
import { presentation_SkillGroup_Ids } from './presentation.ids';
import { presentation_Skills_Ids } from './skills/index.ids';

export const presentation_SkillGroup_Data = buildSkillGroupConfig({
  id: presentation_SkillGroup_Ids.presentation,
  name: {
    en: "Data representation",
    "lt": "Duomenų pateikimas",
    "lv": "Datu attēlošana",
    "et": "Andmete esitamine",
    "be": "Прадстаўленьне зьвестак",
    "ka": "მონაცემების წარმოდგენა",
    "kk": "Деректерді ұсыну",
    zh: "数据呈现",
    hi: "आँकड़ों का निरूपण",
    es: "Representación de datos",
    ar: "تمثيل البيانات",
    fr: "Représentation des données",
    bn: "উপাত্ত উপস্থাপন",
    pt: "Representação de dados",
    ur: "اعداد و شمار کی نمائندگی",
    id: "Penyajian data",
    de: "Datendarstellung",
    ja: "データの表現",
    ko: "자료 표현",
    tr: "Veri gösterimi",
    vi: "Biểu diễn dữ liệu",
    ta: "தரவுக் காட்சிப்படுத்தல்",
    te: "దత్తాంశ ప్రదర్శన",
    mr: "माहितीचे सादरीकरण",
    ms: "Perwakilan data",
    he: "ייצוג נתונים",
    pl: "Przedstawianie danych",
    uk: "Подання даних",
  },
  skillIds: presentation_Skills_Ids,
});
