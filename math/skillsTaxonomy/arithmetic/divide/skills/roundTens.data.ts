import { buildSkillConfig } from '@/utils';
import { divide_Skills_Ids } from './index.ids';

export const roundTens_Skill_Data = buildSkillConfig({
  id: divide_Skills_Ids.roundTens,
  name: {
    en: 'Division — Whole tens',
    zh: '除法 — 整十数',
    hi: 'भाग — पूरे दहाई',
    es: 'División — Decenas completas',
    ar: 'القسمة — العشرات الكاملة',
    fr: 'Division — Dizaines entières',
    bn: 'ভাগ — পূর্ণ দশক',
    pt: 'Divisão — Dezenas exatas',
    ur: 'تقسیم — پورے دہائی',
    id: 'Pembagian — Puluhan penuh',
    de: 'Division — Ganze Zehner',
    ja: '除法 — 10のまとまり',
    ko: '나눗셈 — 십의 배수',
    tr: 'Bölme — Tam onluklar',
    vi: 'Phép chia — Số tròn chục',
    ta: 'வகுத்தல் — முழுப் பத்துகள்',
    te: 'భాగహారం — పూర్తి పదులు',
    mr: 'भागाकार — पूर्ण दहाच्या संख्या',
    ms: 'Pembahagian — Puluh penuh',
    he: 'חילוק — עשרות שלמות',
    pl: 'Dzielenie — Pełne dziesiątki',
    uk: 'Ділення — Круглі десятки',
  },
});
