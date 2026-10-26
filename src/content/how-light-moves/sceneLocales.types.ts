import type { MediumPracticeLocale } from './scenes/MediumPractice/MediumPractice.locale';
import type { LightRayDiagramLocale } from './scenes/LightRayDiagram/lightRayDiagram.locale';
import type { LightPropagationSimulationLocale } from './scenes/LightPropagationSimulation/lightPropagationSimulation.locale';
import type { TheoryKnowledgeCheckpointLocale } from './sections/theory/knowledgeCheckpoint.locale';

export interface LightSceneLocales {
  ray: LightRayDiagramLocale;
  simulation: LightPropagationSimulationLocale;
  checkpoint: TheoryKnowledgeCheckpointLocale;
  practice: MediumPracticeLocale;
}
