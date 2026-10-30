import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';
import { length_SkillGroup_Data, mass_SkillGroup_Data, capacity_SkillGroup_Data, temperature_SkillGroup_Data, general_SkillGroup_Data } from './index';

export const measurement_SkillDomain_Data = buildSkillDomainConfig({
  id: '01fcc12a-a71d-4741-a245-e3a4e045f9cd',
  name: {
    en: "Measurement",
    lt: "Matavimas",
    lv: "Mērīšana",
    et: "Mõõtmine",
    be: "Вымярэньне",
    ka: "გაზომვა",
    kk: "Өлшеу",
    zh: "测量",
    hi: "मापन",
    es: "Medición",
    ar: "القياس",
    fr: "Mesure",
    bn: "পরিমাপ",
    pt: "Medição",
    ur: "پیمائش",
    id: "Pengukuran",
    de: "Messen",
    ja: "測定",
    ko: "측정",
    tr: "Ölçme",
    vi: "Đo lường",
    ta: "அளவீடு",
    te: "కొలత",
    mr: "मापन",
    ms: "Pengukuran",
    he: "מדידה",
    pl: "Pomiary",
    uk: "Вимірювання"
  },
  groupIds: {
    length: length_SkillGroup_Data.id,
    mass: mass_SkillGroup_Data.id,
    capacity: capacity_SkillGroup_Data.id,
    temperature: temperature_SkillGroup_Data.id,
    general: general_SkillGroup_Data.id,
  },
  description: { methodological: "Measurement of physical quantities by comparison with units, instruments, and scales, covering length, mass, capacity, temperature, and consistent use of units." },
});
