import { buildSkillConfig } from '@/utils';
import { divide_Skills_Ids } from './index.ids';

export const withRemainder_Skill_Data = buildSkillConfig({
  id: divide_Skills_Ids.withRemainder,
  name: {
    en: 'Division — Division with remainder',
    zh: '除法 — 有余数的除法',
    hi: 'भाग — शेषफल सहित भाग',
    es: 'División — División con resto',
    ar: 'القسمة — القسمة مع الباقي',
    fr: 'Division — Division avec reste',
    bn: 'ভাগ — ভাগশেষসহ ভাগ',
    pt: 'Divisão — Divisão com resto',
    ur: 'تقسیم — باقی کے ساتھ تقسیم',
    id: 'Pembagian — Pembagian bersisa',
    de: 'Division — Division mit Rest',
    ja: '除法 — 余りのある割り算',
    ko: '나눗셈 — 나머지가 있는 나눗셈',
    tr: 'Bölme — Kalanlı bölme',
    vi: 'Phép chia — Chia có dư',
    ta: 'வகுத்தல் — மீதியுடன் வகுத்தல்',
    te: 'భాగహారం — శేషంతో భాగహారం',
    mr: 'भागाकार — बाकीसह भागाकार',
    ms: 'Pembahagian — Pembahagian berbaki',
    he: 'חילוק — חילוק עם שארית',
    pl: 'Dzielenie — Dzielenie z resztą',
    uk: 'Ділення — Ділення з остачею',
  },
});
