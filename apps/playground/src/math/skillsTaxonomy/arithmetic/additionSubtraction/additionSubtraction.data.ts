import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { additionSubtraction_SkillGroup_Ids } from './additionSubtraction.ids';
import { additionSubtraction_Skills_Ids } from './skills/index.ids';

export const additionSubtraction_SkillGroup_Data = buildSkillGroupConfig({
  id: additionSubtraction_SkillGroup_Ids.additionSubtraction,
  name: {
    en: "Combining addition and subtraction",
    "lt": "Sudėties ir atimties derinimas",
    "lv": "Saskaitīšanas un atņemšanas apvienošana",
    "et": "Liitmise ja lahutamise ühendamine",
    "be": "Спалучэньне складаньня і адніманьня",
    "ka": "შეკრებისა და გამოკლების გაერთიანება",
    "kk": "Қосу мен азайтуды біріктіру",
    zh: "加减法的结合运用",
    hi: "जोड़ और घटाव का संयुक्त प्रयोग",
    es: "Combinación de suma y resta",
    ar: "الجمع بين الجمع والطرح",
    fr: "Combiner l’addition et la soustraction",
    bn: "যোগ ও বিয়োগের সমন্বিত প্রয়োগ",
    pt: "Combinação de adição e subtração",
    ur: "جمع اور تفریق کا مشترکہ استعمال",
    id: "Menggabungkan penjumlahan dan pengurangan",
    de: "Addition und Subtraktion verbinden",
    ja: "加法と減法の組み合わせ",
    ko: "덧셈과 뺄셈의 결합 활용",
    tr: "Toplama ve çıkarmayı birleştirme",
    vi: "Kết hợp phép cộng và phép trừ",
    ta: "கூட்டலையும் கழித்தலையும் இணைத்தல்",
    te: "కూడిక మరియు తీసివేతను కలిపి ఉపయోగించడం",
    mr: "बेरीज आणि वजाबाकीचा संयुक्त वापर",
    ms: "Gabungan penambahan dan penolakan",
    he: "שילוב חיבור וחיסור",
    pl: "Łączenie dodawania i odejmowania",
    uk: "Поєднання додавання та віднімання",
  },
  skillIds: additionSubtraction_Skills_Ids,
});
