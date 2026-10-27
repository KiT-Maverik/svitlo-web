import { buildSkillGroupConfig } from '@/utils';
import { numberLine_SkillGroup_Ids } from './numberLine.ids';
import { numberLine_Skills_Ids } from './skills/index.ids';

export const numberLine_SkillGroup_Data = buildSkillGroupConfig({
  id: numberLine_SkillGroup_Ids.numberLine,
  name: {
    en: "Number line",
    "lt": "Skaičių tiesė",
    "lv": "Skaitļu taisne",
    "et": "Arvkiir",
    "be": "Лікавая прамая",
    "ka": "რიცხვითი ღერძი",
    "kk": "Сан сәулесі",
    zh: "数轴",
    hi: "संख्या रेखा",
    es: "Recta numérica",
    ar: "خط الأعداد",
    fr: "Droite numérique",
    bn: "সংখ্যারেখা",
    pt: "Reta numérica",
    ur: "خطِ اعداد",
    id: "Garis bilangan",
    de: "Zahlenstrahl",
    ja: "数直線",
    ko: "수직선",
    tr: "Sayı doğrusu",
    vi: "Trục số",
    ta: "எண் கோடு",
    te: "సంఖ్యారేఖ",
    mr: "संख्यारेषा",
    ms: "Garis nombor",
    he: "ציר המספרים",
    pl: "Oś liczbowa",
    uk: "Числова пряма",
  },
  skillIds: numberLine_Skills_Ids,
});
