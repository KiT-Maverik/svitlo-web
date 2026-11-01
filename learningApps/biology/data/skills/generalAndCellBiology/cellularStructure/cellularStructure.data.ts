import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { distinguishPlantAndAnimalCellsByStructuralFeatures_Skill_Data, distinguishUnicellularAndMulticellularOrganisms_Skill_Data, recognizeTheCellAsAStructuralUnit_Skill_Data, relateMajorCellStructuresToTheirFunctions_Skill_Data } from './skills';

export const cellularStructure_SkillGroup_Data = buildSkillGroupConfig({
  slug: "cellularStructure",
  id: "cc5f3367-c53e-409c-90ec-9b0e6777dbd4",
  name: {
    en: "Cellular Structure",
  },
  skills: {
    distinguishPlantAndAnimalCellsByStructuralFeatures: distinguishPlantAndAnimalCellsByStructuralFeatures_Skill_Data,
    distinguishUnicellularAndMulticellularOrganisms: distinguishUnicellularAndMulticellularOrganisms_Skill_Data,
    recognizeTheCellAsAStructuralUnit: recognizeTheCellAsAStructuralUnit_Skill_Data,
    relateMajorCellStructuresToTheirFunctions: relateMajorCellStructuresToTheirFunctions_Skill_Data,
  },
  description: {
    methodological: "Cells have membranes and internal components that sustain life processes; diagrams help reveal commonalities and differences among different cells.",
    frontend: {
      en: "Learn what cells are made of and how their structures help them function.",
    },
  },
});
