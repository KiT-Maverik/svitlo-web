import type { MediumPractice_Locale } from './scenes/MediumPractice/MediumPractice.locale';
import type { LightRayDiagram_Locale } from './scenes/LightRayDiagram/lightRayDiagram.locale';
import type { LightPropagationSimulation_Locale } from './scenes/LightPropagationSimulation/lightPropagationSimulation.locale';
import type { TheoryKnowledgeCheckpoint_Locale } from './sections/theory/knowledgeCheckpoint.locale';

export interface LightSceneLocales {
  ray: LightRayDiagram_Locale;
  simulation: LightPropagationSimulation_Locale;
  checkpoint: TheoryKnowledgeCheckpoint_Locale;
  practice: MediumPractice_Locale;
}
