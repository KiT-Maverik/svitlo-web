import { buildSkillGroupConfig } from '@/utils';
import { steps_SkillGroup_Ids } from './steps.ids';
import { steps_Skills_Ids } from './skills/index.ids';

export const steps_SkillGroup_Data = buildSkillGroupConfig({
  id: steps_SkillGroup_Ids.steps,
  name: {
    en: 'Skip counting',
    zh: '跳数计数',
    hi: 'अंतराल से गिनती',
    es: 'Conteo por intervalos',
    ar: 'العد بالقفزات',
    fr: 'Comptage par intervalles',
    bn: 'লাফিয়ে গণনা',
    pt: 'Contagem por intervalos',
    ur: 'وقفوں سے گنتی',
    id: 'Membilang loncat',
    de: 'Zählen in Schritten',
    ja: 'とび数え',
    ko: '뛰어 세기',
    tr: 'Ritmik sayma',
    vi: 'Đếm cách quãng',
    ta: 'தாவி எண்ணுதல்',
    te: 'దాటవేసి లెక్కించడం',
    mr: 'उड्या मारत मोजणे',
    ms: 'Membilang secara langkau',
    he: 'ספירה בדילוגים',
    pl: 'Liczenie skokowe',
    uk: 'Крокова лічба',
  },
  skillIds: steps_Skills_Ids,
});
