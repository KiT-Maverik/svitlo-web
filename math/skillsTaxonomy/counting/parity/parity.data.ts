import { buildSkillGroupConfig } from '@/utils';
import { parity_SkillGroup_Ids } from './parity.ids';
import { parity_Skills_Ids } from './skills/index.ids';

export const parity_SkillGroup_Data = buildSkillGroupConfig({
  id: parity_SkillGroup_Ids.parity,
  name: {
    "en-US": "Even and odd numbers",
    "zh-Hans-CN": "奇数与偶数",
    "hi-IN": "सम और विषम संख्याएँ",
    "es-ES": "Paridad",
    "ar-SA": "الزوجية والفردية",
    "fr-FR": "Parité",
    "bn-BD": "জোড় ও বিজোড় সংখ্যা",
    "pt-BR": "Paridade",
    "ur-PK": "جفت اور طاق اعداد",
    "id-ID": "Bilangan genap dan ganjil",
    "de-DE": "Gerade und ungerade Zahlen",
    "ja-JP": "偶数と奇数",
    "ko-KR": "짝수와 홀수",
    "tr-TR": "Tek ve çift sayılar",
    "vi-VN": "Số chẵn và số lẻ",
    "ta-IN": "இரட்டை மற்றும் ஒற்றை எண்கள்",
    "te-IN": "సరి మరియు బేసి సంఖ్యలు",
    "mr-IN": "सम व विषम संख्या",
    "ms-MY": "Nombor genap dan ganjil",
    "he-IL": "מספרים זוגיים ואי־זוגיים",
    "pl-PL": "Liczby parzyste i nieparzyste",
    "uk-UA": "Парність",
  },
  skillIds: parity_Skills_Ids,
});
