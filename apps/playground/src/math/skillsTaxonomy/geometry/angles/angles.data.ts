import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { angles_SkillGroup_Ids } from './angles.ids';
import { angles_Skills_Ids } from './skills/index.ids';

export const angles_SkillGroup_Data = buildSkillGroupConfig({
  id: angles_SkillGroup_Ids.angles,
  name: {
    en: "Angles",
    "lt": "Kampai",
    "lv": "Leņķi",
    "et": "Nurgad",
    "be": "Куты",
    "ka": "კუთხეები",
    "kk": "Бұрыштар",
    zh: "角",
    hi: "कोण",
    es: "Ángulos",
    ar: "الزوايا",
    fr: "Angles",
    bn: "কোণ",
    pt: "Ângulos",
    ur: "زاویے",
    id: "Sudut",
    de: "Winkel",
    ja: "角",
    ko: "각",
    tr: "Açılar",
    vi: "Góc",
    ta: "கோணங்கள்",
    te: "కోణాలు",
    mr: "कोन",
    ms: "Sudut",
    he: "זוויות",
    pl: "Kąty",
    uk: "Кути",
  },
  skillIds: angles_Skills_Ids,
});
