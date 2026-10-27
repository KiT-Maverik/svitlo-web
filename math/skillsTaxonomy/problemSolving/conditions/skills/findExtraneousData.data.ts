import { buildSkillConfig } from '@/utils';
import { conditions_Skills_Ids } from './index.ids';

export const findExtraneousData_Skill_Data = buildSkillConfig({
  id: conditions_Skills_Ids.findExtraneousData,
  name: {
    en: "Recognizing irrelevant information",
    zh: "识别无关信息",
    hi: "अनावश्यक जानकारी पहचानना",
    es: "Reconocer información irrelevante",
    ar: "تمييز المعلومات غير الضرورية",
    fr: "Repérer les données inutiles",
    bn: "অপ্রয়োজনীয় তথ্য শনাক্ত করা",
    pt: "Reconhecer informações irrelevantes",
    ur: "غیر ضروری معلومات کی شناخت",
    id: "Mengenali informasi tidak relevan",
    de: "Überflüssige Angaben erkennen",
    ja: "不要な情報を見分ける",
    ko: "불필요한 정보 찾기",
    tr: "Gereksiz bilgileri belirleme",
    vi: "Nhận biết dữ kiện thừa",
    ta: "தேவையற்ற தகவலைக் கண்டறிதல்",
    te: "అనవసర సమాచారాన్ని గుర్తించడం",
    mr: "अनावश्यक माहिती ओळखणे",
    ms: "Mengenal pasti maklumat tidak berkaitan",
    he: "זיהוי מידע מיותר",
    pl: "Rozpoznawanie zbędnych danych",
    uk: "Виявлення зайвих даних",
  },
});
