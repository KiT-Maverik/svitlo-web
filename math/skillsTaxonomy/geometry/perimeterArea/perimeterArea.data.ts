import { buildSkillGroupConfig } from '@/utils';
import { perimeterArea_Ids } from './perimeterArea.ids';
import { perimeterArea_Skills_Ids } from './skills/index.ids';

export const perimeterArea = buildSkillGroupConfig({
  id: perimeterArea_Ids.perimeterArea,
  name: {
    "en-US": "Relationship between perimeter and area",
    "zh-Hans-CN": "周长与面积的关系",
    "hi-IN": "परिमाप और क्षेत्रफल का संबंध",
    "es-ES": "Relación entre perímetro y área",
    "ar-SA": "العلاقة بين المحيط والمساحة",
    "fr-FR": "Relation entre périmètre et aire",
    "bn-BD": "পরিসীমা ও ক্ষেত্রফলের সম্পর্ক",
    "pt-BR": "Relação entre perímetro e área",
    "ur-PK": "محیط اور رقبے کا تعلق",
    "id-ID": "Hubungan keliling dan luas",
    "de-DE": "Zusammenhang zwischen Umfang und Flächeninhalt",
    "ja-JP": "周の長さと面積の関係",
    "ko-KR": "둘레와 넓이의 관계",
    "tr-TR": "Çevre ve alan ilişkisi",
    "vi-VN": "Mối quan hệ giữa chu vi và diện tích",
    "ta-IN": "சுற்றளவு மற்றும் பரப்பளவின் தொடர்பு",
    "te-IN": "చుట్టుకొలత మరియు వైశాల్యం మధ్య సంబంధం",
    "mr-IN": "परिमिती आणि क्षेत्रफळ यांतील संबंध",
    "ms-MY": "Hubungan antara perimeter dan luas",
    "he-IL": "הקשר בין היקף לשטח",
    "pl-PL": "Związek między obwodem a polem",
    "uk-UA": "Зв’язок периметра та площі",
  },
  skillIds: perimeterArea_Skills_Ids,
});
