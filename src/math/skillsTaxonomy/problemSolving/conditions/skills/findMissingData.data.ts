import { buildSkillConfig } from '@/utils';
import { conditions_Skills_Ids } from './index.ids';

export const findMissingData_Skill_Data = buildSkillConfig({
  id: conditions_Skills_Ids.findMissingData,
  name: {
    en: 'Identifying missing information',
    zh: '发现缺失信息',
    hi: 'अनुपस्थित जानकारी पहचानना',
    es: 'Detectar información faltante',
    ar: 'تحديد المعلومات الناقصة',
    fr: 'Repérer les données manquantes',
    bn: 'অনুপস্থিত তথ্য শনাক্ত করা',
    pt: 'Identificar informações ausentes',
    ur: 'نامکمل معلومات کی شناخت',
    id: 'Mengidentifikasi informasi yang kurang',
    de: 'Fehlende Angaben erkennen',
    ja: '不足している情報を見つける',
    ko: '부족한 정보 찾기',
    tr: 'Eksik bilgileri belirleme',
    vi: 'Xác định dữ kiện còn thiếu',
    ta: 'விடுபட்ட தகவலைக் கண்டறிதல்',
    te: 'లేని సమాచారాన్ని గుర్తించడం',
    mr: 'गहाळ माहिती ओळखणे',
    ms: 'Mengenal pasti maklumat yang kurang',
    he: 'זיהוי מידע חסר',
    pl: 'Rozpoznawanie brakujących danych',
    uk: 'Виявлення недостатніх даних',
  },
});
