import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';
import { data_SkillDomain_Ids } from './data.ids';
import { data_SkillGroups_Ids } from './index.ids';

export const data_SkillDomain_Data = buildSkillDomainConfig({
  id: data_SkillDomain_Ids.data,
  name: {
    en: "Data",
    lt: "Duomenys",
    lv: "Dati",
    et: "Andmed",
    be: "Зьвесткі",
    ka: "მონაცემები",
    kk: "Деректер",
    zh: "数据",
    hi: "आँकड़े",
    es: "Datos",
    ar: "البيانات",
    fr: "Données",
    bn: "উপাত্ত",
    pt: "Dados",
    ur: "اعداد و شمار",
    id: "Data",
    de: "Daten",
    ja: "データ",
    ko: "자료",
    tr: "Veri",
    vi: "Dữ liệu",
    ta: "தரவுகள்",
    te: "దత్తాంశం",
    mr: "माहिती",
    ms: "Data",
    he: "נתונים",
    pl: "Dane",
    uk: "Дані",
  },
  groupIds: data_SkillGroups_Ids,
  description: { methodological: "Formulating questions, collecting and classifying information, representing it in tables and charts, and drawing conclusions supported by the data." },
});
