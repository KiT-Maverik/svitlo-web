import { buildSkillDomainConfig } from '@/utils';

import {counting_Ids} from './counting.ids'
import {steps_Ids} from './steps/steps.ids'

export const counting_Data = buildSkillDomainConfig({
  id: counting_Ids.counting,
  name: {
    "en-US": "Counting",
    "zh-Hans-CN": "计数",
    "hi-IN": "गिनती",
    "es-ES": "Conteo",
    "ar-SA": "العد",
    "fr-FR": "Dénombrement",
    "bn-BD": "গণনা",
    "pt-BR": "Contagem",
    "ur-PK": "گنتی",
    "id-ID": "Menghitung",
    "de-DE": "Zählen",
    "ja-JP": "数えること",
    "ko-KR": "수 세기",
    "tr-TR": "Sayma",
    "vi-VN": "Đếm",
    "ta-IN": "எண்ணுதல்",
    "te-IN": "లెక్కింపు",
    "mr-IN": "मोजणी",
    "ms-MY": "Membilang",
    "he-IL": "ספירה",
    "pl-PL": "Liczenie",
    "uk-UA": "Лічба",
  },
  groupIds: [
    "math.counting.sequence",
    "math.counting.cardinality",
      ...steps_Ids,
    "math.counting.ordinal",
    "math.counting.parity",
  ],
});
