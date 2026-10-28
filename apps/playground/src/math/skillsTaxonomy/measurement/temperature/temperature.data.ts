import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { temperature_SkillGroup_Ids } from './temperature.ids';
import { temperature_Skills_Ids } from './skills/index.ids';

export const temperature_SkillGroup_Data = buildSkillGroupConfig({
  id: temperature_SkillGroup_Ids.temperature,
  name: {
    "en": "Temperature",
    "lt": "Temperatūra",
    "lv": "Temperatūra",
    "et": "Temperatuur",
    "be": "Тэмпэратура",
    "ka": "ტემპერატურა",
    "kk": "Температура",
    "zh": "温度",
    "hi": "तापमान",
    "es": "Temperatura",
    "ar": "درجة الحرارة",
    "fr": "Température",
    "bn": "তাপমাত্রা",
    "pt": "Temperatura",
    "ur": "درجہ حرارت",
    "id": "Suhu",
    "de": "Temperatur",
    "ja": "温度",
    "ko": "온도",
    "tr": "Sıcaklık",
    "vi": "Nhiệt độ",
    "ta": "வெப்பநிலை",
    "te": "ఉష్ణోగ్రత",
    "mr": "तापमान",
    "ms": "Suhu",
    "he": "טמפרטורה",
    "pl": "Temperatura",
    "uk": "Температура"
  },
  skillIds: temperature_Skills_Ids,
});
