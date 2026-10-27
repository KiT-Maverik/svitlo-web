import { buildSkillGroupConfig } from '@/utils';
import { addition_Ids } from './addition.ids';
import { addition_Skills_Ids } from './skills/index.ids';

export const addition = buildSkillGroupConfig({
  id: addition_Ids.addition,
  name: {
    "en-US": "Addition",
    "zh-Hans-CN": "加法",
    "hi-IN": "जोड़",
    "es-ES": "Suma",
    "ar-SA": "الجمع",
    "fr-FR": "Addition",
    "bn-BD": "যোগ",
    "pt-BR": "Adição",
    "ur-PK": "جمع",
    "id-ID": "Penjumlahan",
    "de-DE": "Addition",
    "ja-JP": "加法",
    "ko-KR": "덧셈",
    "tr-TR": "Toplama",
    "vi-VN": "Phép cộng",
    "ta-IN": "கூட்டல்",
    "te-IN": "కూడిక",
    "mr-IN": "बेरीज",
    "ms-MY": "Penambahan",
    "he-IL": "חיבור",
    "pl-PL": "Dodawanie",
    "uk-UA": "Додавання",
  },
  skillIds: addition_Skills_Ids,
});
