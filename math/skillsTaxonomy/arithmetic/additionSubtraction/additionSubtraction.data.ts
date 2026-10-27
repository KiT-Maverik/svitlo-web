import { buildSkillGroupConfig } from '@/utils';
import { additionSubtraction_SkillGroup_Ids } from './additionSubtraction.ids';
import { additionSubtraction_Skills_Ids } from './skills/index.ids';

export const additionSubtraction_SkillGroup_Data = buildSkillGroupConfig({
  id: additionSubtraction_SkillGroup_Ids.additionSubtraction,
  name: {
    "en-US": "Combining addition and subtraction",
    "zh-Hans-CN": "加减法的结合运用",
    "hi-IN": "जोड़ और घटाव का संयुक्त प्रयोग",
    "es-ES": "Combinación de suma y resta",
    "ar-SA": "الجمع بين الجمع والطرح",
    "fr-FR": "Combiner l’addition et la soustraction",
    "bn-BD": "যোগ ও বিয়োগের সমন্বিত প্রয়োগ",
    "pt-BR": "Combinação de adição e subtração",
    "ur-PK": "جمع اور تفریق کا مشترکہ استعمال",
    "id-ID": "Menggabungkan penjumlahan dan pengurangan",
    "de-DE": "Addition und Subtraktion verbinden",
    "ja-JP": "加法と減法の組み合わせ",
    "ko-KR": "덧셈과 뺄셈의 결합 활용",
    "tr-TR": "Toplama ve çıkarmayı birleştirme",
    "vi-VN": "Kết hợp phép cộng và phép trừ",
    "ta-IN": "கூட்டலையும் கழித்தலையும் இணைத்தல்",
    "te-IN": "కూడిక మరియు తీసివేతను కలిపి ఉపయోగించడం",
    "mr-IN": "बेरीज आणि वजाबाकीचा संयुक्त वापर",
    "ms-MY": "Gabungan penambahan dan penolakan",
    "he-IL": "שילוב חיבור וחיסור",
    "pl-PL": "Łączenie dodawania i odejmowania",
    "uk-UA": "Поєднання додавання та віднімання",
  },
  skillIds: additionSubtraction_Skills_Ids,
});
