import { buildSkillConfig } from '@/utils';
import { estimation_Skills_Ids } from './index.ids';

export const roundToHundred_Skill_Data = buildSkillConfig({
  id: estimation_Skills_Ids.roundToHundred,
  name: {
    en: 'Rounding to the nearest hundred',
    zh: '四舍五入到最接近的百',
    hi: 'निकटतम सैकड़े तक पूर्णांकन',
    es: 'Redondeo a la centena más cercana',
    ar: 'التقريب إلى أقرب مئة',
    fr: 'Arrondir à la centaine la plus proche',
    bn: 'নিকটতম শতকে পূর্ণায়ন',
    pt: 'Arredondamento à centena mais próxima',
    ur: 'قریب ترین سیکڑے تک گول کرنا',
    id: 'Membulatkan ke ratusan terdekat',
    de: 'Auf den nächsten Hunderter runden',
    ja: '最も近い百への四捨五入',
    ko: '가장 가까운 백으로 반올림',
    tr: 'En yakın yüzlüğe yuvarlama',
    vi: 'Làm tròn đến hàng trăm',
    ta: 'அருகிலுள்ள நூறுக்கு வட்டமிடுதல்',
    te: 'దగ్గరి వందకు సవరించడం',
    mr: 'जवळच्या शंभरापर्यंत पूर्णांकित करणे',
    ms: 'Membundarkan kepada ratus terdekat',
    he: 'עיגול למאה הקרובה',
    pl: 'Zaokrąglanie do najbliższej setki',
    uk: 'Округлення до найближчої сотні',
  },
});
