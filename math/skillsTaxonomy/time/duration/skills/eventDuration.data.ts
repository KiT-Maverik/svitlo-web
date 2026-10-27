import { buildSkillConfig } from '@/utils';
import { duration_Skills_Ids } from './index.ids';

export const eventDuration_Skill_Data = buildSkillConfig({
  id: duration_Skills_Ids.eventDuration,
  name: {
    en: 'Calculating elapsed time',
    zh: '计算经过的时间',
    hi: 'बीता हुआ समय निकालना',
    es: 'Calcular el tiempo transcurrido',
    ar: 'حساب الزمن المنقضي',
    fr: 'Calculer le temps écoulé',
    bn: 'অতিবাহিত সময় নির্ণয়',
    pt: 'Calcular o tempo decorrido',
    ur: 'گزرا ہوا وقت معلوم کرنا',
    id: 'Menghitung waktu yang berlalu',
    de: 'Verstrichene Zeit berechnen',
    ja: '経過時間を求める',
    ko: '경과 시간 계산하기',
    tr: 'Geçen süreyi hesaplama',
    vi: 'Tính thời gian đã trôi qua',
    ta: 'கழிந்த நேரத்தைக் கணக்கிடுதல்',
    te: 'గడిచిన సమయాన్ని లెక్కించడం',
    mr: 'गेलेला वेळ मोजणे',
    ms: 'Mengira masa yang berlalu',
    he: 'חישוב הזמן שחלף',
    pl: 'Obliczanie czasu, który upłynął',
    uk: 'Обчислення тривалості події',
  },
});
