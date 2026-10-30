import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { general_SkillGroup_Ids } from './general.ids';
import { general_Skills_Ids } from './skills/index.ids';

export const general_SkillGroup_Data = buildSkillGroupConfig({
  id: general_SkillGroup_Ids.general,
  name: {
    en: "General measurement skills",
    lt: "Bendrieji matavimo įgūdžiai",
    lv: "Vispārīgās mērīšanas prasmes",
    et: "Üldised mõõtmisoskused",
    be: "Агульныя навыкі вымярэньня",
    ka: "გაზომვის ზოგადი უნარები",
    kk: "Жалпы өлшеу дағдылары",
    zh: "通用测量技能",
    hi: "सामान्य मापन कौशल",
    es: "Habilidades generales de medición",
    ar: "مهارات القياس العامة",
    fr: "Compétences générales de mesure",
    bn: "সাধারণ পরিমাপ দক্ষতা",
    pt: "Competências gerais de medição",
    ur: "پیمائش کی عمومی مہارتیں",
    id: "Keterampilan pengukuran umum",
    de: "Allgemeine Messfertigkeiten",
    ja: "測定の基本技能",
    ko: "일반 측정 기능",
    tr: "Genel ölçme becerileri",
    vi: "Kỹ năng đo lường chung",
    ta: "பொதுவான அளவீட்டுத் திறன்கள்",
    te: "సాధారణ కొలత నైపుణ్యాలు",
    mr: "सर्वसाधारण मापन कौशल्ये",
    ms: "Kemahiran pengukuran umum",
    he: "מיומנויות מדידה כלליות",
    pl: "Ogólne umiejętności mierzenia",
    uk: "Загальні вимірювальні навички"
  },
  skillIds: general_Skills_Ids,
  description: { methodological: "General principles for choosing units, reconciling measurements, and calculating with comparable quantities." },
});
