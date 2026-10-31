import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { ceramicsAndAssemblage_SkillGroup_Data } from './ceramicsAndAssemblage/ceramicsAndAssemblage.data';
import { printmaking_SkillGroup_Data } from './printmaking/printmaking.data';
import { sculpturalForm_SkillGroup_Data } from './sculpturalForm/sculpturalForm.data';
import { textilesAndDecorativeArts_SkillGroup_Data } from './textilesAndDecorativeArts/textilesAndDecorativeArts.data';

export const sculptureAndMaterialArts_SkillDomain_Data = buildSkillDomainConfig({
  slug: "sculptureAndMaterialArts",
  id: "a30b85bf-1f13-4ac9-bcdb-57d3d5531a12",
  name: {
    en: "Sculpture and Material Arts",
  },
  groups: {
    ceramicsAndAssemblage: ceramicsAndAssemblage_SkillGroup_Data,
    printmaking: printmaking_SkillGroup_Data,
    sculpturalForm: sculpturalForm_SkillGroup_Data,
    textilesAndDecorativeArts: textilesAndDecorativeArts_SkillGroup_Data,
  },
  description: {
    methodological: "Physical media can be shaped, assembled, printed or woven to produce objects, editions and decorative surfaces. This domain concerns expressive material practices rather than engineering manufacture.",
    frontend: {
      en: "Create expressive physical objects using shaping, printing, clay, fabric and other materials.",
    },
  },
});
