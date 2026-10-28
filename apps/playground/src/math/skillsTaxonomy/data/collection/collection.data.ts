import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { collection_SkillGroup_Ids } from './collection.ids';
import { collection_Skills_Ids } from './skills/index.ids';

export const collection_SkillGroup_Data = buildSkillGroupConfig({
  id: collection_SkillGroup_Ids.collection,
  name: {
    en: "Data collection",
    "lt": "Duomenų rinkimas",
    "lv": "Datu vākšana",
    "et": "Andmete kogumine",
    "be": "Збор зьвестак",
    "ka": "მონაცემების შეგროვება",
    "kk": "Деректерді жинау",
    zh: "数据收集",
    hi: "आँकड़ों का संग्रह",
    es: "Recopilación de datos",
    ar: "جمع البيانات",
    fr: "Collecte des données",
    bn: "উপাত্ত সংগ্রহ",
    pt: "Coleta de dados",
    ur: "اعداد و شمار جمع کرنا",
    id: "Pengumpulan data",
    de: "Datenerhebung",
    ja: "データの収集",
    ko: "자료 수집",
    tr: "Veri toplama",
    vi: "Thu thập dữ liệu",
    ta: "தரவு சேகரிப்பு",
    te: "దత్తాంశ సేకరణ",
    mr: "माहिती संकलन",
    ms: "Pengumpulan data",
    he: "איסוף נתונים",
    pl: "Zbieranie danych",
    uk: "Збирання даних",
  },
  skillIds: collection_Skills_Ids,
});
