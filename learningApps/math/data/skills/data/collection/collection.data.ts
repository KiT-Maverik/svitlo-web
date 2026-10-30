import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { formulateInvestigationQuestion_Skill_Data, collectCounts_Skill_Data, tallyMarks_Skill_Data, fillSimpleTable_Skill_Data } from './skills';

export const collection_SkillGroup_Data = buildSkillGroupConfig({
  id: 'fbff6de3-3855-4c1f-9ec6-025693e12adf',
  name: {
    en: "Data collection",
    lt: "Duomenų rinkimas",
    lv: "Datu vākšana",
    et: "Andmete kogumine",
    be: "Збор зьвестак",
    ka: "მონაცემების შეგროვება",
    kk: "Деректерді жинау",
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
  skillIds: {
    formulateInvestigationQuestion: formulateInvestigationQuestion_Skill_Data.id,
    collectCounts: collectCounts_Skill_Data.id,
    tallyMarks: tallyMarks_Skill_Data.id,
    fillSimpleTable: fillSimpleTable_Skill_Data.id,
  },
  description: { methodological: "Formulating an investigation question, selecting classification attributes, counting occurrences, and recording observations." },
});
