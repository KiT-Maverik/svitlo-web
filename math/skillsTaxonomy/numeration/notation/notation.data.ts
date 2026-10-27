import { buildSkillGroupConfig } from '@/utils';
import { notation_SkillGroup_Ids } from './notation.ids';
import { notation_Skills_Ids } from './skills/index.ids';

export const notation_SkillGroup_Data = buildSkillGroupConfig({
  id: notation_SkillGroup_Ids.notation,
  name: {
    en: 'Numeral notation',
    zh: '数字记法',
    hi: 'संख्याओं का अंकन',
    es: 'Notación numérica',
    ar: 'كتابة الأعداد',
    fr: 'Écriture des nombres',
    bn: 'সংখ্যা লেখার পদ্ধতি',
    pt: 'Notação numérica',
    ur: 'اعداد کی تحریر',
    id: 'Penulisan bilangan',
    de: 'Zahlenschreibweise',
    ja: '数字の表記',
    ko: '수의 표기',
    tr: 'Sayıların yazılışı',
    vi: 'Cách viết số',
    ta: 'எண் குறியீட்டு முறை',
    te: 'సంఖ్యల లిపి',
    mr: 'संख्या लेखनपद्धती',
    ms: 'Penulisan nombor',
    he: 'כתיבת מספרים',
    pl: 'Zapis liczb',
    uk: 'Числовий запис',
  },
  skillIds: notation_Skills_Ids,
});
