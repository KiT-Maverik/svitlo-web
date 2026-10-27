import { buildSkillConfig } from '@/utils';
import { perimeter_Skills_Ids } from './index.ids';

export const unknownSideFromPerimeter_Skill_Data = buildSkillConfig({
  id: perimeter_Skills_Ids.unknownSideFromPerimeter,
  name: {
    en: 'Finding an unknown rectangle side from its perimeter',
    zh: '根据长方形周长求未知边长',
    hi: 'परिमाप से आयत की अज्ञात भुजा निकालना',
    es: 'Hallar un lado desconocido a partir del perímetro',
    ar: 'إيجاد ضلع مجهول في المستطيل من محيطه',
    fr: 'Trouver un côté inconnu à partir du périmètre',
    bn: 'পরিসীমা থেকে আয়তক্ষেত্রের অজানা বাহু নির্ণয়',
    pt: 'Encontrar um lado desconhecido pelo perímetro',
    ur: 'محیط سے مستطیل کی نامعلوم ضلع معلوم کرنا',
    id: 'Menentukan sisi persegi panjang dari keliling',
    de: 'Unbekannte Rechteckseite aus dem Umfang bestimmen',
    ja: '周の長さから長方形の未知の辺を求める',
    ko: '둘레로 직사각형의 미지의 변 구하기',
    tr: 'Çevreden dikdörtgenin bilinmeyen kenarını bulma',
    vi: 'Tìm cạnh chưa biết của hình chữ nhật từ chu vi',
    ta: 'சுற்றளவிலிருந்து செவ்வகத்தின் தெரியாத பக்கத்தைக் கண்டறிதல்',
    te: 'పరిధి ఆధారంగా దీర్ఘచతురస్ర తెలియని భుజాన్ని కనుగొనడం',
    mr: 'परिमितीवरून आयताची अज्ञात बाजू शोधणे',
    ms: 'Mencari sisi segi empat tepat daripada perimeter',
    he: 'מציאת צלע חסרה במלבן לפי ההיקף',
    pl: 'Wyznaczanie nieznanego boku prostokąta z obwodu',
    uk: 'Знаходження невідомої сторони прямокутника за периметром',
  },
});
