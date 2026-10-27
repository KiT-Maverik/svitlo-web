import { buildSkillGroupConfig } from '@/utils';
import { ordinal_SkillGroup_Ids } from './ordinal.ids';
import { ordinal_Skills_Ids } from './skills/index.ids';

export const ordinal_SkillGroup_Data = buildSkillGroupConfig({
  id: ordinal_SkillGroup_Ids.ordinal,
  name: {
    "en-US": "Ordinal counting",
    "zh-Hans-CN": "顺序计数",
    "hi-IN": "क्रमसूचक गिनती",
    "es-ES": "Conteo ordinal",
    "ar-SA": "العد الترتيبي",
    "fr-FR": "Comptage ordinal",
    "bn-BD": "ক্রমিক গণনা",
    "pt-BR": "Contagem ordinal",
    "ur-PK": "ترتیبی گنتی",
    "id-ID": "Bilangan urutan",
    "de-DE": "Ordnungszahlen",
    "ja-JP": "順番を数えること",
    "ko-KR": "순서 세기",
    "tr-TR": "Sıra sayıları",
    "vi-VN": "Đếm thứ tự",
    "ta-IN": "வரிசை எண்ணுதல்",
    "te-IN": "క్రమసంఖ్యల లెక్కింపు",
    "mr-IN": "क्रमसूचक मोजणी",
    "ms-MY": "Bilangan ordinal",
    "he-IL": "ספירה סודרת",
    "pl-PL": "Liczenie porządkowe",
    "uk-UA": "Порядкова лічба",
  },
  skillIds: ordinal_Skills_Ids,
});
