import { perimeter_Ids } from './perimeter/perimeter.ids';
import { area_Ids } from './area/area.ids';
import { perimeterArea_Ids } from './perimeterArea/perimeterArea.ids';

export const geometry_Groups_Ids = {
  orientation: 'f4986b8c-60ea-4f06-aed5-0458fa8d3e08',
  figures: 'd4c9c57c-09a9-43f5-a7c5-3544d3133e51',
  solids: 'bdf41fea-033a-41dd-8f37-8ab78f9a45cf',
  lines: 'a79b4663-5dd1-4d85-9500-aacd06128d88',
  angles: '06ab1925-9cd5-41fc-ad2d-52d76270a2cd',
  circles: 'fdca56d5-299f-4755-b87f-dd7d46f5d851',
  transformations: '41302cd8-48f9-4734-96a2-7c32e26a4361',
  perimeter: perimeter_Ids.perimeter,
  area: area_Ids.area,
  perimeterArea: perimeterArea_Ids.perimeterArea,
} as const;
