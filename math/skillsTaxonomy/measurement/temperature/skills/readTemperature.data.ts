import { buildSkillConfig } from '@/utils';
import { temperature_Skills_Ids } from './index.ids';

export const readTemperature_Skill_Data = buildSkillConfig({
  id: temperature_Skills_Ids.readTemperature,
  name: {
    "en": "Reading nonnegative temperatures on a thermometer",
    "lt": "Teigiamos ir nulinės temperatūros skaitymas termometre",
    "lv": "Nenegatīvu temperatūru nolasīšana termometrā",
    "et": "Mitte-negatiivsete temperatuuride lugemine termomeetrilt",
    "be": "Чытаньне неадмоўных тэмпэратураў на тэрмомэтры",
    "ka": "არაუარყოფითი ტემპერატურის თერმომეტრზე წაკითხვა",
    "kk": "Термометрден теріс емес температураларды оқу",
    "zh": "读取温度计上的非负温度",
    "hi": "थर्मामीटर पर शून्य या उससे ऊपर का तापमान पढ़ना",
    "es": "Leer temperaturas no negativas en un termómetro",
    "ar": "قراءة درجات الحرارة غير السالبة على ميزان الحرارة",
    "fr": "Lire des températures positives ou nulles sur un thermomètre",
    "bn": "থার্মোমিটারে শূন্য বা ধনাত্মক তাপমাত্রা পড়া",
    "pt": "Ler temperaturas não negativas em um termômetro",
    "ur": "تھرمامیٹر پر صفر یا مثبت درجہ حرارت پڑھنا",
    "id": "Membaca suhu nol atau lebih pada termometer",
    "de": "Nichtnegative Temperaturen am Thermometer ablesen",
    "ja": "温度計で0度以上の温度を読む",
    "ko": "온도계에서 0도 이상의 온도 읽기",
    "tr": "Termometrede sıfır ve üzeri sıcaklıkları okuma",
    "vi": "Đọc nhiệt độ không âm trên nhiệt kế",
    "ta": "வெப்பமானியில் பூஜ்ஜியம் மற்றும் அதற்கு மேற்பட்ட வெப்பநிலையை வாசித்தல்",
    "te": "థర్మామీటరులో సున్నా లేదా అంతకంటే ఎక్కువ ఉష్ణోగ్రత చదవడం",
    "mr": "तापमापकावर शून्य किंवा धन तापमान वाचणे",
    "ms": "Membaca suhu sifar atau lebih pada termometer",
    "he": "קריאת טמפרטורות שאינן שליליות במדחום",
    "pl": "Odczytywanie temperatur nieujemnych na termometrze",
    "uk": "Зчитування невід’ємної температури за термометром"
  },
});
