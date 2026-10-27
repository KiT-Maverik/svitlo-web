import { buildSkillConfig } from '@/utils';
import { cardinality_Skills_Ids } from './index.ids';

export const basicCardinality = buildSkillConfig({
  id: cardinality_Skills_Ids.basicCardinality,
  name: {
    "en-US": "Determining how many objects are in a set",
    "zh-Hans-CN": "确定一组物品的数量",
    "hi-IN": "समूह में वस्तुओं की संख्या निर्धारित करना",
    "es-ES": "Determinar cuántos elementos hay en un conjunto",
    "ar-SA": "تحديد عدد العناصر في مجموعة",
    "fr-FR": "Déterminer le nombre d’éléments d’un ensemble",
    "bn-BD": "একটি দলে বস্তুগুলোর সংখ্যা নির্ণয়",
    "pt-BR": "Determinar a quantidade de elementos de um conjunto",
    "ur-PK": "ایک مجموعے میں اشیا کی تعداد معلوم کرنا",
    "id-ID": "Menentukan banyaknya benda dalam kelompok",
    "de-DE": "Anzahl der Elemente einer Menge bestimmen",
    "ja-JP": "集合にあるものの個数を求める",
    "ko-KR": "집합에 있는 물건의 개수 알아내기",
    "tr-TR": "Bir kümedeki nesnelerin sayısını belirleme",
    "vi-VN": "Xác định số lượng đồ vật trong một nhóm",
    "ta-IN": "ஒரு தொகுப்பிலுள்ள பொருள்களின் எண்ணிக்கையை அறிதல்",
    "te-IN": "ఒక సమూహంలోని వస్తువుల సంఖ్యను గుర్తించడం",
    "mr-IN": "संचातील वस्तूंची संख्या ठरवणे",
    "ms-MY": "Menentukan bilangan objek dalam kumpulan",
    "he-IL": "קביעת מספר הפריטים בקבוצה",
    "pl-PL": "Określanie liczby elementów zbioru",
    "uk-UA": "Визначення кількості предметів у множині",
  },
});
