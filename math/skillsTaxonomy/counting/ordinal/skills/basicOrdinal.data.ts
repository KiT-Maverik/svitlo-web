import { buildSkillConfig } from '@/utils';
import { ordinal_Skills_Ids } from './index.ids';

export const basicOrdinal = buildSkillConfig({
  id: ordinal_Skills_Ids.basicOrdinal,
  name: {
    "en-US": "Recognizing ordinal position",
    "zh-Hans-CN": "确定物品的顺序位置",
    "hi-IN": "क्रम में स्थान निर्धारित करना",
    "es-ES": "Reconocer la posición ordinal",
    "ar-SA": "تحديد الترتيب التسلسلي للأشياء",
    "fr-FR": "Reconnaître le rang d’un élément",
    "bn-BD": "ক্রমিক অবস্থান শনাক্ত করা",
    "pt-BR": "Reconhecer a posição ordinal",
    "ur-PK": "ترتیب میں مقام پہچاننا",
    "id-ID": "Mengenali posisi urutan",
    "de-DE": "Ordnungszahlen und Positionen bestimmen",
    "ja-JP": "順序と何番目かを理解する",
    "ko-KR": "순서에서 몇 번째인지 알아보기",
    "tr-TR": "Sıra bildiren konumu tanıma",
    "vi-VN": "Nhận biết vị trí thứ tự",
    "ta-IN": "வரிசை நிலையை அறிதல்",
    "te-IN": "వరుసలో స్థానాన్ని గుర్తించడం",
    "mr-IN": "क्रमातील स्थान ओळखणे",
    "ms-MY": "Mengenal kedudukan dalam turutan",
    "he-IL": "זיהוי מיקום סודר",
    "pl-PL": "Rozpoznawanie pozycji w kolejności",
    "uk-UA": "Визначення порядкового номера об’єкта",
  },
});
