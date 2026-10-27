import { buildSkillConfig } from '@/utils';
import { duration_Skills_Ids } from './index.ids';

export const convertHoursMinutes_Skill_Data = buildSkillConfig({
  id: duration_Skills_Ids.convertHoursMinutes,
  name: {
    en: 'Converting hours and minutes',
    zh: '小时与分钟的换算',
    hi: 'घंटों और मिनटों का रूपांतरण',
    es: 'Convertir horas y minutos',
    ar: 'التحويل بين الساعات والدقائق',
    fr: 'Convertir heures et minutes',
    bn: 'ঘণ্টা ও মিনিটের রূপান্তর',
    pt: 'Converter horas e minutos',
    ur: 'گھنٹوں اور منٹوں کی تبدیلی',
    id: 'Mengonversi jam dan menit',
    de: 'Stunden und Minuten umrechnen',
    ja: '時間と分を換算する',
    ko: '시간과 분 변환하기',
    tr: 'Saat ve dakika dönüşümü yapma',
    vi: 'Đổi giờ và phút',
    ta: 'மணி மற்றும் நிமிடங்களை மாற்றுதல்',
    te: 'గంటలు, నిమిషాలను మార్చడం',
    mr: 'तास आणि मिनिटांचे रूपांतर करणे',
    ms: 'Menukar jam dan minit',
    he: 'המרה בין שעות לדקות',
    pl: 'Przeliczanie godzin i minut',
    uk: 'Перетворення годин на хвилини й навпаки',
  },
});
