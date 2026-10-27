import { buildSkillConfig } from '@/utils';
import { placeValue_Skills_Ids } from './index.ids';

export const makeTen_Skill_Data = buildSkillConfig({
  id: placeValue_Skills_Ids.makeTen,
  name: {
    en: 'Grouping and ungrouping ten ones',
    zh: '十个一组成一个十及逆向拆分',
    hi: 'दस इकाइयों का एक दहाई में समूह और विघटन',
    es: 'Agrupar y desagrupar diez unidades',
    ar: 'تجميع عشر وحدات في عشرة وتفكيكها',
    fr: 'Regrouper et décomposer dix unités',
    bn: 'দশটি একককে এক দশকে গঠন ও ভাঙা',
    pt: 'Agrupar e desagrupar dez unidades',
    ur: 'دس اکائیوں کو ایک دہائی بنانا اور کھولنا',
    id: 'Mengelompokkan dan menguraikan sepuluh satuan',
    de: 'Zehn Einer bündeln und entbündeln',
    ja: '10個の一を十にまとめたり分けたりする',
    ko: '낱개 열 개를 십으로 묶고 풀기',
    tr: 'On birliği bir onluk yapma ve ayırma',
    vi: 'Gộp và tách mười đơn vị',
    ta: 'பத்து ஒன்றுகளை ஒரு பத்தாகத் தொகுத்து பிரித்தல்',
    te: 'పది ఒకట్లను ఒక పదిగా కట్టి విడదీయడం',
    mr: 'दहा एककांचा एक दशक करणे व वेगळे करणे',
    ms: 'Mengumpul dan mengurai sepuluh unit',
    he: 'קיבוץ עשר יחידות לעשרת ופירוקן',
    pl: 'Grupowanie i rozdzielanie dziesięciu jedności',
    uk: 'Утворення десятка з одиниць і зворотне розгрупування',
  },
});
