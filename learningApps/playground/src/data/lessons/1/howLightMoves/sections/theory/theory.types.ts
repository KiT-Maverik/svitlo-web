import {LightRayDiagram_Locale} from './scenes/LightRayDiagram/LightRayDiagram.types';
import {LightPropagationSimulation_Locale} from './scenes/LightPropagationSimulation/LightPropagationSimulation.types';
import {Checkpoint_Locale} from './scenes/Checkpoint/Checkpoint.types';

export type Theory_Section_Locale = {
  name: string;
  markdown: {
    p1: string;
    p2: string;
    p3: string;
  }
  scene: {
    checkpoint: Checkpoint_Locale;
    lightRayDiagram: LightRayDiagram_Locale;
    LightPropagationSimulation: LightPropagationSimulation_Locale;
  }
}
