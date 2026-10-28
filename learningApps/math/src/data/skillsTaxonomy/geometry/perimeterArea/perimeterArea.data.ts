import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { perimeterArea_SkillGroup_Ids } from './perimeterArea.ids';
import { perimeterArea_Skills_Ids } from './skills/index.ids';

export const perimeterArea_SkillGroup_Data = buildSkillGroupConfig({
  id: perimeterArea_SkillGroup_Ids.perimeterArea,
  name: {
    en: "Relationship between perimeter and area",
    "lt": "Perimetro ir ploto ryšys",
    "lv": "Perimetra un laukuma saistība",
    "et": "Ümbermõõdu ja pindala seos",
    "be": "Сувязь пэрымэтру і плошчы",
    "ka": "პერიმეტრისა და ფართობის კავშირი",
    "kk": "Периметр мен ауданның байланысы",
    zh: "周长与面积的关系",
    hi: "परिमाप और क्षेत्रफल का संबंध",
    es: "Relación entre perímetro y área",
    ar: "العلاقة بين المحيط والمساحة",
    fr: "Relation entre périmètre et aire",
    bn: "পরিসীমা ও ক্ষেত্রফলের সম্পর্ক",
    pt: "Relação entre perímetro e área",
    ur: "محیط اور رقبے کا تعلق",
    id: "Hubungan keliling dan luas",
    de: "Zusammenhang zwischen Umfang und Flächeninhalt",
    ja: "周の長さと面積の関係",
    ko: "둘레와 넓이의 관계",
    tr: "Çevre ve alan ilişkisi",
    vi: "Mối quan hệ giữa chu vi và diện tích",
    ta: "சுற்றளவு மற்றும் பரப்பளவின் தொடர்பு",
    te: "చుట్టుకొలత మరియు వైశాల్యం మధ్య సంబంధం",
    mr: "परिमिती आणि क्षेत्रफळ यांतील संबंध",
    ms: "Hubungan antara perimeter dan luas",
    he: "הקשר בין היקף לשטח",
    pl: "Związek między obwodem a polem",
    uk: "Зв’язок периметра та площі",
  },
  skillIds: perimeterArea_Skills_Ids,
});
