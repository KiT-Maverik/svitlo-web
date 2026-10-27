import { buildSkillConfig } from '@/utils';
import { subtraction_Skills_Ids } from './index.ids';

export const crossTenSubtraction_Skill_Data = buildSkillConfig({
  id: subtraction_Skills_Ids.crossTenSubtraction,
  name: {
    en: 'Subtraction — Crossing ten',
    zh: '减法 — 跨十计算',
    hi: 'घटाव — दस पार करना',
    es: 'Resta — Cruzar la decena',
    ar: 'الطرح — تجاوز العشرة',
    fr: 'Soustraction — Passage de la dizaine',
    bn: 'বিয়োগ — দশক অতিক্রম',
    pt: 'Subtração — Passagem pela dezena',
    ur: 'تفریق — دس کی حد پار کرنا',
    id: 'Pengurangan — Melewati sepuluh',
    de: 'Subtraktion — Zehnerübergang',
    ja: '減法 — 10をまたぐ計算',
    ko: '뺄셈 — 10을 넘는 계산',
    tr: 'Çıkarma — Onluk aşımı',
    vi: 'Phép trừ — Qua chục',
    ta: 'கழித்தல் — பத்தைத் தாண்டுதல்',
    te: 'తీసివేత — పది దాటడం',
    mr: 'वजाबाकी — दहा ओलांडणे',
    ms: 'Penolakan — Merentasi sepuluh',
    he: 'חיסור — מעבר בעשרת',
    pl: 'Odejmowanie — Przekraczanie progu dziesiątkowego',
    uk: 'Віднімання — Перехід через десяток',
  },
});
