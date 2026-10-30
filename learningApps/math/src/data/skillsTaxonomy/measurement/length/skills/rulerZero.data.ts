import { buildSkillConfig } from '@svitlo/engine/taxonomy';
import { length_Skills_Ids } from './index.ids';

export const rulerZero_Skill_Data = buildSkillConfig({
  id: length_Skills_Ids.rulerZero,
  name: {
    "en": "Starting ruler measurements at zero",
    "lt": "Matavimo liniuote pradžia nuo nulio",
    "lv": "Mērīšanas sākšana pie lineāla nulles",
    "et": "Joonlauaga mõõtmise alustamine nullist",
    "be": "Пачатак вымярэньня лінейкай ад нуля",
    "ka": "სახაზავით გაზომვის ნულიდან დაწყება",
    "kk": "Сызғышпен өлшеуді нөлден бастау",
    "zh": "从尺子的零刻度开始测量",
    "hi": "पैमाने के शून्य चिह्न से माप शुरू करना",
    "es": "Empezar a medir desde el cero de la regla",
    "ar": "بدء القياس من علامة الصفر على المسطرة",
    "fr": "Commencer la mesure au zéro de la règle",
    "bn": "স্কেলের শূন্য চিহ্ন থেকে মাপা শুরু করা",
    "pt": "Começar a medir no zero da régua",
    "ur": "پیمانے پر صفر کے نشان سے ناپنا شروع کرنا",
    "id": "Memulai pengukuran dari angka nol pada penggaris",
    "de": "Am Nullpunkt des Lineals messen",
    "ja": "定規の0の目盛りから測る",
    "ko": "자의 0 눈금에서 측정 시작하기",
    "tr": "Cetvelde sıfır noktasından ölçmeye başlama",
    "vi": "Bắt đầu đo từ vạch số không trên thước",
    "ta": "அளவுகோலின் பூஜ்ஜியக் குறியிலிருந்து அளத்தல்",
    "te": "రూలర్‌పై సున్నా గుర్తు నుండి కొలవడం ప్రారంభించడం",
    "mr": "पट्टीवरील शून्य चिन्हापासून मोजणे",
    "ms": "Memulakan ukuran dari tanda sifar pada pembaris",
    "he": "התחלת מדידה מסימון האפס בסרגל",
    "pl": "Rozpoczynanie pomiaru od zera na linijce",
    "uk": "Вимірювання лінійкою від нульової позначки"
  },
  description: { methodological: "A ruler scale counts intervals between tick marks, not the number of printed labels; when starting at the zero mark, the reading at the endpoint gives the measured length." },
});
