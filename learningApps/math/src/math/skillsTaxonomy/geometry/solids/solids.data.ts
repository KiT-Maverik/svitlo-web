import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { solids_SkillGroup_Ids } from './solids.ids';
import { solids_Skills_Ids } from './skills/index.ids';

export const solids_SkillGroup_Data = buildSkillGroupConfig({
  id: solids_SkillGroup_Ids.solids,
  name: {
    en: "Solid figures",
    "lt": "Erdvinės figūros",
    "lv": "Telpiskas figūras",
    "et": "Ruumilised kujundid",
    "be": "Аб'ёмныя фігуры",
    "ka": "სივრცული ფიგურები",
    "kk": "Кеңістіктік фигуралар",
    zh: "立体图形",
    hi: "ठोस आकृतियाँ",
    es: "Cuerpos geométricos",
    ar: "المجسمات الهندسية",
    fr: "Solides géométriques",
    bn: "ঘনবস্তু",
    pt: "Sólidos geométricos",
    ur: "ٹھوس اشکال",
    id: "Bangun ruang",
    de: "Körpergeometrie",
    ja: "立体図形",
    ko: "입체도형",
    tr: "Geometrik cisimler",
    vi: "Hình khối",
    ta: "திண்ம வடிவங்கள்",
    te: "ఘనాకృతులు",
    mr: "घन आकृत्या",
    ms: "Bentuk tiga dimensi",
    he: "גופים גאומטריים",
    pl: "Bryły geometryczne",
    uk: "Просторові тіла",
  },
  skillIds: solids_Skills_Ids,
});
