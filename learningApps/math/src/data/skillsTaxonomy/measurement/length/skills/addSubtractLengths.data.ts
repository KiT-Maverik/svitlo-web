import { buildSkillConfig } from '@svitlo/engine/taxonomy';
import { length_Skills_Ids } from './index.ids';

export const addSubtractLengths_Skill_Data = buildSkillConfig({
  id: length_Skills_Ids.addSubtractLengths,
  name: {
    "en": "Adding and subtracting lengths in compatible units",
    "lt": "Ilgių sudėtis ir atimtis suderinamais vienetais",
    "lv": "Garumu saskaitīšana un atņemšana saderīgās mērvienībās",
    "et": "Pikkuste liitmine ja lahutamine sobivates ühikutes",
    "be": "Складаньне і адніманьне даўжыняў у сумяшчальных адзінках",
    "ka": "სიგრძეების შეკრება და გამოკლება თავსებადი ერთეულებით",
    "kk": "Сәйкес бірліктердегі ұзындықтарды қосу және азайту",
    "zh": "使用一致的单位加减长度",
    "hi": "संगत इकाइयों में लंबाइयों को जोड़ना और घटाना",
    "es": "Sumar y restar longitudes en unidades compatibles",
    "ar": "جمع الأطوال وطرحها بوحدات متوافقة",
    "fr": "Additionner et soustraire des longueurs dans des unités compatibles",
    "bn": "সামঞ্জস্যপূর্ণ এককে দৈর্ঘ্য যোগ ও বিয়োগ",
    "pt": "Somar e subtrair comprimentos em unidades compatíveis",
    "ur": "ہم آہنگ اکائیوں میں لمبائیوں کا جمع اور تفریق",
    "id": "Menjumlahkan dan mengurangkan panjang dalam satuan yang sesuai",
    "de": "Längen in passenden Einheiten addieren und subtrahieren",
    "ja": "対応する単位で長さを足し引きする",
    "ko": "호환되는 단위로 길이 더하고 빼기",
    "tr": "Uyumlu birimlerle uzunlukları toplama ve çıkarma",
    "vi": "Cộng và trừ độ dài với đơn vị phù hợp",
    "ta": "பொருந்தும் அலகுகளில் நீளங்களைக் கூட்டிக் கழித்தல்",
    "te": "అనుకూల ప్రమాణాల్లో పొడవులను కూడడం మరియు తీసివేయడం",
    "mr": "सुसंगत एककांत लांबीची बेरीज व वजाबाकी",
    "ms": "Menambah dan menolak panjang dalam unit yang serasi",
    "he": "חיבור וחיסור אורכים ביחידות תואמות",
    "pl": "Dodawanie i odejmowanie długości w zgodnych jednostkach",
    "uk": "Додавання й віднімання довжин в узгоджених одиницях"
  },
  description: { methodological: "Adding and subtracting lengths requires quantities of the same physical dimension. Convert to a common scale or explicitly account for unit changes; the result must remain a length." },
});
