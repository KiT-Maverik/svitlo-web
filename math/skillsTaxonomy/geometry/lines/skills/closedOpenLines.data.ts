import { buildSkillConfig } from '@/utils';
import { lines_Skills_Ids } from './index.ids';

export const closedOpenLines_Skill_Data = buildSkillConfig({
  id: lines_Skills_Ids.closedOpenLines,
  name: {
    en: 'Identifying closed and open lines',
    zh: '识别封闭线和开放线',
    hi: 'बंद और खुली रेखाएँ पहचानना',
    es: 'Identificar líneas cerradas y abiertas',
    ar: 'تمييز الخطوط المغلقة والمفتوحة',
    fr: 'Reconnaître les lignes fermées et ouvertes',
    bn: 'বন্ধ ও খোলা রেখা চেনা',
    pt: 'Identificar linhas fechadas e abertas',
    ur: 'بند اور کھلی لکیروں کی شناخت',
    id: 'Mengenali garis tertutup dan terbuka',
    de: 'Geschlossene und offene Linien erkennen',
    ja: '閉じた線と開いた線を見分ける',
    ko: '닫힌 선과 열린 선 구별하기',
    tr: 'Kapalı ve açık çizgileri tanıma',
    vi: 'Nhận biết đường khép kín và đường không khép kín',
    ta: 'மூடிய திறந்த கோடுகளை அறிதல்',
    te: 'మూసిన మరియు తెరిచిన రేఖలను గుర్తించడం',
    mr: 'बंद आणि उघड्या रेषा ओळखणे',
    ms: 'Mengenal pasti garisan tertutup dan terbuka',
    he: 'זיהוי קווים סגורים ופתוחים',
    pl: 'Rozpoznawanie linii zamkniętych i otwartych',
    uk: 'Розпізнавання замкнених і незамкнених ліній',
  },
});
