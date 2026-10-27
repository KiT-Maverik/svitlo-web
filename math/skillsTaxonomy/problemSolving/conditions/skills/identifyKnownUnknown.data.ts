import { buildSkillConfig } from '@/utils';
import { conditions_Skills_Ids } from './index.ids';

export const identifyKnownUnknown_Skill_Data = buildSkillConfig({
  id: conditions_Skills_Ids.identifyKnownUnknown,
  name: {
    en: 'Identifying known and unknown quantities',
    zh: '识别已知量与未知量',
    hi: 'ज्ञात और अज्ञात राशियाँ पहचानना',
    es: 'Identificar datos conocidos e incógnitas',
    ar: 'تحديد المعطيات والمجهولات',
    fr: 'Identifier les données connues et inconnues',
    bn: 'জানা ও অজানা পরিমাণ শনাক্ত করা',
    pt: 'Identificar dados conhecidos e incógnitas',
    ur: 'معلوم اور نامعلوم مقداروں کی شناخت',
    id: 'Mengidentifikasi yang diketahui dan ditanya',
    de: 'Bekannte und unbekannte Größen erkennen',
    ja: '既知の量と未知の量を特定する',
    ko: '알려진 양과 미지수 찾기',
    tr: 'Bilinen ve bilinmeyenleri belirleme',
    vi: 'Xác định dữ kiện đã biết và chưa biết',
    ta: 'தெரிந்த மற்றும் தெரியாத அளவுகளைக் கண்டறிதல்',
    te: 'తెలిసిన, తెలియని పరిమాణాలను గుర్తించడం',
    mr: 'माहीत व अज्ञात परिमाणे ओळखणे',
    ms: 'Mengenal pasti maklumat diketahui dan tidak diketahui',
    he: 'זיהוי נתונים ידועים ונעלמים',
    pl: 'Wskazywanie danych i niewiadomych',
    uk: 'Визначення відомих і невідомих величин',
  },
});
