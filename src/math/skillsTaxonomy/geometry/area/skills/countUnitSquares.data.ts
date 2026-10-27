import { buildSkillConfig } from '@/utils';
import { area_Skills_Ids } from './index.ids';

export const countUnitSquares_Skill_Data = buildSkillConfig({
  id: area_Skills_Ids.countUnitSquares,
  name: {
    en: 'Determining area by counting unit squares',
    zh: '通过数单位正方形求面积',
    hi: 'इकाई वर्ग गिनकर क्षेत्रफल निकालना',
    es: 'Determinar el área contando cuadrados unidad',
    ar: 'تحديد المساحة بعدّ مربعات الوحدة',
    fr: 'Déterminer l’aire en comptant les carrés unités',
    bn: 'একক বর্গ গুনে ক্ষেত্রফল নির্ণয়',
    pt: 'Determinar a área contando quadrados unitários',
    ur: 'اکائی مربع گن کر رقبہ معلوم کرنا',
    id: 'Menentukan luas dengan menghitung persegi satuan',
    de: 'Flächeninhalt durch Zählen von Einheitsquadraten bestimmen',
    ja: '単位正方形を数えて面積を求める',
    ko: '단위 정사각형 수로 넓이 구하기',
    tr: 'Birim kareleri sayarak alan bulma',
    vi: 'Xác định diện tích bằng cách đếm ô vuông đơn vị',
    ta: 'அலகுச் சதுரங்களை எண்ணிப் பரப்பளவு காணுதல்',
    te: 'ఏకక చతురస్రాలను లెక్కించి వైశాల్యం కనుగొనడం',
    mr: 'एकक चौरस मोजून क्षेत्रफळ काढणे',
    ms: 'Menentukan luas dengan mengira petak unit',
    he: 'מציאת שטח בספירת ריבועי יחידה',
    pl: 'Wyznaczanie pola przez liczenie kwadratów jednostkowych',
    uk: 'Визначення площі підрахунком одиничних квадратів',
  },
});
