import { orientation_SkillGroup_Ids } from './orientation/orientation.ids';
import { figures_SkillGroup_Ids } from './figures/figures.ids';
import { solids_SkillGroup_Ids } from './solids/solids.ids';
import { lines_SkillGroup_Ids } from './lines/lines.ids';
import { angles_SkillGroup_Ids } from './angles/angles.ids';
import { circles_SkillGroup_Ids } from './circles/circles.ids';
import { transformations_SkillGroup_Ids } from './transformations/transformations.ids';
import { perimeter_SkillGroup_Ids } from './perimeter/perimeter.ids';
import { area_SkillGroup_Ids } from './area/area.ids';
import { perimeterArea_SkillGroup_Ids } from './perimeterArea/perimeterArea.ids';

export const geometry_SkillGroups_Ids = {
  orientation: orientation_SkillGroup_Ids.orientation,
  figures: figures_SkillGroup_Ids.figures,
  solids: solids_SkillGroup_Ids.solids,
  lines: lines_SkillGroup_Ids.lines,
  angles: angles_SkillGroup_Ids.angles,
  circles: circles_SkillGroup_Ids.circles,
  transformations: transformations_SkillGroup_Ids.transformations,
  perimeter: perimeter_SkillGroup_Ids.perimeter,
  area: area_SkillGroup_Ids.area,
  perimeterArea: perimeterArea_SkillGroup_Ids.perimeterArea,
} as const;
