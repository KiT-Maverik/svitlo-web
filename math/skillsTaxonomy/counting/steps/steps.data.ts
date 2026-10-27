import { buildSkillGroupConfig } from '@/utils';
import { steps_Ids } from './steps.ids';
import { steps_Skills_Ids } from './skills/index.ids';

export const stepsGroup = buildSkillGroupConfig({
  id: steps_Ids.steps,
  name: {
    "en-US": "Skip counting",
    "zh-Hans-CN": "跳数计数",
    "hi-IN": "अंतराल से गिनती",
    "es-ES": "Conteo por intervalos",
    "ar-SA": "العد بالقفزات",
    "fr-FR": "Comptage par intervalles",
    "bn-BD": "লাফিয়ে গণনা",
    "pt-BR": "Contagem por intervalos",
    "ur-PK": "وقفوں سے گنتی",
    "id-ID": "Membilang loncat",
    "de-DE": "Zählen in Schritten",
    "ja-JP": "とび数え",
    "ko-KR": "뛰어 세기",
    "tr-TR": "Ritmik sayma",
    "vi-VN": "Đếm cách quãng",
    "ta-IN": "தாவி எண்ணுதல்",
    "te-IN": "దాటవేసి లెక్కించడం",
    "mr-IN": "उड्या मारत मोजणे",
    "ms-MY": "Membilang secara langkau",
    "he-IL": "ספירה בדילוגים",
    "pl-PL": "Liczenie skokowe",
    "uk-UA": "Крокова лічба",
  },
  skillIds: steps_Skills_Ids,
});
