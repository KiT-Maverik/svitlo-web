import { buildSkillGroupConfig } from '@/utils';
import { orientation_SkillGroup_Ids } from './orientation.ids';
import { orientation_Skills_Ids } from './skills/index.ids';

export const orientation_SkillGroup_Data = buildSkillGroupConfig({
  id: orientation_SkillGroup_Ids.orientation,
  name: {
    en: "Spatial orientation",
    "lt": "Orientavimasis erdvėje",
    "lv": "Orientēšanās telpā",
    "et": "Ruumiline orienteerumine",
    "be": "Арыентацыя ў прасторы",
    "ka": "სივრცეში ორიენტირება",
    "kk": "Кеңістікте бағдарлау",
    zh: "空间方位",
    hi: "स्थानिक दिशा ज्ञान",
    es: "Orientación espacial",
    ar: "التوجه المكاني",
    fr: "Repérage spatial",
    bn: "স্থানিক দিকনির্দেশনা",
    pt: "Orientação espacial",
    ur: "مکانی سمت شناسی",
    id: "Orientasi spasial",
    de: "Räumliche Orientierung",
    ja: "空間的な位置関係",
    ko: "공간 방향 감각",
    tr: "Uzamsal yönelim",
    vi: "Định hướng không gian",
    ta: "இடஞ்சார்ந்த திசையறிதல்",
    te: "ప్రాదేశిక దిశా అవగాహన",
    mr: "अवकाशीय दिशाज्ञान",
    ms: "Orientasi ruang",
    he: "התמצאות במרחב",
    pl: "Orientacja przestrzenna",
    uk: "Просторова орієнтація",
  },
  skillIds: orientation_Skills_Ids,
});
