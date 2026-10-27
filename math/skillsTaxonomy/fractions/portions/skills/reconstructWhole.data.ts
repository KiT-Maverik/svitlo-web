import { buildSkillConfig } from '@/utils';
import { portions_Skills_Ids } from './index.ids';

export const reconstructWhole_Skill_Data = buildSkillConfig({
  id: portions_Skills_Ids.reconstructWhole,
  name: {
    en: 'Finding the whole from a known unit fraction',
    zh: '根据已知的单位分数求整体',
    hi: 'ज्ञात इकाई भाग से पूरा ज्ञात करना',
    es: 'Hallar el entero a partir de una fracción unitaria conocida',
    ar: 'إيجاد الكل من جزء وحدي معلوم',
    fr: "Retrouver le tout à partir d'une fraction unitaire connue",
    bn: 'জানা একক অংশ থেকে সম্পূর্ণ নির্ণয়',
    pt: 'Encontrar o todo a partir de uma parte unitária conhecida',
    ur: 'معلوم اکائی حصے سے کل تلاش کرنا',
    id: 'Menentukan keseluruhan dari bagian satuan yang diketahui',
    de: 'Das Ganze aus einem bekannten Stammbruchteil bestimmen',
    ja: '既知の単位分数から全体を求める',
    ko: '알려진 단위 부분에서 전체 구하기',
    tr: 'Bilinen birim parçadan bütünü bulma',
    vi: 'Tìm toàn thể khi biết một phần đơn vị',
    ta: 'அறியப்பட்ட அலகுப் பகுதியிலிருந்து முழுமையைக் காணுதல்',
    te: 'తెలిసిన ఏకక భాగం నుండి మొత్తాన్ని కనుగొనడం',
    mr: 'माहित असलेल्या एकक भागावरून पूर्ण शोधणे',
    ms: 'Mencari keseluruhan daripada bahagian unit yang diketahui',
    he: 'מציאת השלם על סמך חלק יחידה ידוע',
    pl: 'Wyznaczanie całości na podstawie znanej części jednostkowej',
    uk: 'Знаходження цілого за відомою одиничною частиною',
  },
});
