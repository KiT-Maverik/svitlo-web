import { buildSkillGroupConfig } from '@/utils';
import { verification_SkillGroup_Ids } from './verification.ids';
import { verification_Skills_Ids } from './skills/index.ids';

export const verification_SkillGroup_Data = buildSkillGroupConfig({
  id: verification_SkillGroup_Ids.verification,
  name: {
    en: 'Checking solutions',
    zh: '检验解答',
    hi: 'उत्तरों की जाँच',
    es: 'Comprobación de soluciones',
    ar: 'التحقق من الحلول',
    fr: 'Vérification des solutions',
    bn: 'সমাধান যাচাই',
    pt: 'Verificação de soluções',
    ur: 'حل کی جانچ',
    id: 'Memeriksa penyelesaian',
    de: 'Überprüfen von Lösungen',
    ja: '解答の検証',
    ko: '풀이 검증',
    tr: 'Çözümleri kontrol etme',
    vi: 'Kiểm tra lời giải',
    ta: 'தீர்வுகளைச் சரிபார்த்தல்',
    te: 'పరిష్కారాలను తనిఖీ చేయడం',
    mr: 'उत्तरे तपासणे',
    ms: 'Menyemak penyelesaian',
    he: 'בדיקת פתרונות',
    pl: 'Sprawdzanie rozwiązań',
    uk: 'Перевірка розв’язань',
  },
  skillIds: verification_Skills_Ids,
});
