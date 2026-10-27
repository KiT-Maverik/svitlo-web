import { buildSkillDomainConfig } from '@/utils';
import { measurement_SkillDomain_Ids } from './measurement.ids';
import { measurement_SkillGroups_Ids } from './index.ids';

export const measurement_SkillDomain_Data = buildSkillDomainConfig({
  id: measurement_SkillDomain_Ids.measurement,
  name: {
    en: 'Measurement',
    zh: '测量',
    hi: 'मापन',
    es: 'Medición',
    ar: 'القياس',
    fr: 'Mesure',
    bn: 'পরিমাপ',
    pt: 'Medição',
    ur: 'پیمائش',
    id: 'Pengukuran',
    de: 'Messen',
    ja: '測定',
    ko: '측정',
    tr: 'Ölçme',
    vi: 'Đo lường',
    ta: 'அளவீடு',
    te: 'కొలత',
    mr: 'मापन',
    ms: 'Pengukuran',
    he: 'מדידה',
    pl: 'Pomiary',
    uk: 'Вимірювання',
  },
  groupIds: measurement_SkillGroups_Ids,
});
