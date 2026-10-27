import { buildSkillGroupConfig } from '@/utils';
import { logic_SkillGroup_Ids } from './logic.ids';
import { logic_Skills_Ids } from './skills/index.ids';

export const logic_SkillGroup_Data = buildSkillGroupConfig({
  id: logic_SkillGroup_Ids.logic,
  name: {
    en: 'Logical reasoning',
    zh: '逻辑推理',
    hi: 'तार्किक चिंतन',
    es: 'Razonamiento lógico',
    ar: 'التفكير المنطقي',
    fr: 'Raisonnement logique',
    bn: 'যৌক্তিক চিন্তা',
    pt: 'Raciocínio lógico',
    ur: 'منطقی استدلال',
    id: 'Penalaran logis',
    de: 'Logisches Denken',
    ja: '論理的推論',
    ko: '논리적 추론',
    tr: 'Mantıksal akıl yürütme',
    vi: 'Suy luận logic',
    ta: 'தர்க்கரீதியான சிந்தனை',
    te: 'తార్కిక తర్కం',
    mr: 'तार्किक विचार',
    ms: 'Penaakulan logik',
    he: 'חשיבה לוגית',
    pl: 'Rozumowanie logiczne',
    uk: 'Логічне мислення',
  },
  skillIds: logic_Skills_Ids,
});
