import { buildSkillGroupConfig } from '@/utils';
import { mass_SkillGroup_Ids } from './mass.ids';
import { mass_Skills_Ids } from './skills/index.ids';

export const mass_SkillGroup_Data = buildSkillGroupConfig({
  id: mass_SkillGroup_Ids.mass,
  name: {
    "en": "Mass",
    "lt": "Masė",
    "lv": "Masa",
    "et": "Mass",
    "be": "Маса",
    "ka": "მასა",
    "kk": "Масса",
    "zh": "质量",
    "hi": "द्रव्यमान",
    "es": "Masa",
    "ar": "الكتلة",
    "fr": "Masse",
    "bn": "ভর",
    "pt": "Massa",
    "ur": "کمیت",
    "id": "Massa",
    "de": "Masse",
    "ja": "質量",
    "ko": "질량",
    "tr": "Kütle",
    "vi": "Khối lượng",
    "ta": "நிறை",
    "te": "ద్రవ్యరాశి",
    "mr": "वस्तुमान",
    "ms": "Jisim",
    "he": "מסה",
    "pl": "Masa",
    "uk": "Маса"
  },
  skillIds: mass_Skills_Ids,
});
