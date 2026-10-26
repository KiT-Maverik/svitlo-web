import type { Locale } from '@types';
import { mediumPracticeLocales } from './scenes/MediumPractice/MediumPractice.locale';
import { locales as rayLocales } from './scenes/LightRayDiagram/lightRayDiagram.locale';
import { locales as simulationLocales } from './scenes/LightPropagationSimulation/lightPropagationSimulation.locale';
import { theoryKnowledgeCheckpointLocales as checkpointLocales } from './sections/theory/knowledgeCheckpoint.locale';
import type { LightSceneLocales } from './sceneLocales.types';

export const lightSceneLocales = {
  'en-US': { ray: rayLocales['en-US'], simulation: simulationLocales['en-US'], checkpoint: checkpointLocales['en-US'], practice: mediumPracticeLocales['en-US'] },
  'zh-Hans-CN': { ray: rayLocales['zh-Hans-CN'], simulation: simulationLocales['zh-Hans-CN'], checkpoint: checkpointLocales['zh-Hans-CN'], practice: mediumPracticeLocales['zh-Hans-CN'] },
  'hi-IN': { ray: rayLocales['hi-IN'], simulation: simulationLocales['hi-IN'], checkpoint: checkpointLocales['hi-IN'], practice: mediumPracticeLocales['hi-IN'] },
  'es-ES': { ray: rayLocales['es-ES'], simulation: simulationLocales['es-ES'], checkpoint: checkpointLocales['es-ES'], practice: mediumPracticeLocales['es-ES'] },
  'ar-SA': { ray: rayLocales['ar-SA'], simulation: simulationLocales['ar-SA'], checkpoint: checkpointLocales['ar-SA'], practice: mediumPracticeLocales['ar-SA'] },
  'fr-FR': { ray: rayLocales['fr-FR'], simulation: simulationLocales['fr-FR'], checkpoint: checkpointLocales['fr-FR'], practice: mediumPracticeLocales['fr-FR'] },
  'bn-BD': { ray: rayLocales['bn-BD'], simulation: simulationLocales['bn-BD'], checkpoint: checkpointLocales['bn-BD'], practice: mediumPracticeLocales['bn-BD'] },
  'pt-BR': { ray: rayLocales['pt-BR'], simulation: simulationLocales['pt-BR'], checkpoint: checkpointLocales['pt-BR'], practice: mediumPracticeLocales['pt-BR'] },
  'ur-PK': { ray: rayLocales['ur-PK'], simulation: simulationLocales['ur-PK'], checkpoint: checkpointLocales['ur-PK'], practice: mediumPracticeLocales['ur-PK'] },
  'id-ID': { ray: rayLocales['id-ID'], simulation: simulationLocales['id-ID'], checkpoint: checkpointLocales['id-ID'], practice: mediumPracticeLocales['id-ID'] },
  'de-DE': { ray: rayLocales['de-DE'], simulation: simulationLocales['de-DE'], checkpoint: checkpointLocales['de-DE'], practice: mediumPracticeLocales['de-DE'] },
  'ja-JP': { ray: rayLocales['ja-JP'], simulation: simulationLocales['ja-JP'], checkpoint: checkpointLocales['ja-JP'], practice: mediumPracticeLocales['ja-JP'] },
  'ko-KR': { ray: rayLocales['ko-KR'], simulation: simulationLocales['ko-KR'], checkpoint: checkpointLocales['ko-KR'], practice: mediumPracticeLocales['ko-KR'] },
  'tr-TR': { ray: rayLocales['tr-TR'], simulation: simulationLocales['tr-TR'], checkpoint: checkpointLocales['tr-TR'], practice: mediumPracticeLocales['tr-TR'] },
  'vi-VN': { ray: rayLocales['vi-VN'], simulation: simulationLocales['vi-VN'], checkpoint: checkpointLocales['vi-VN'], practice: mediumPracticeLocales['vi-VN'] },
  'ta-IN': { ray: rayLocales['ta-IN'], simulation: simulationLocales['ta-IN'], checkpoint: checkpointLocales['ta-IN'], practice: mediumPracticeLocales['ta-IN'] },
  'te-IN': { ray: rayLocales['te-IN'], simulation: simulationLocales['te-IN'], checkpoint: checkpointLocales['te-IN'], practice: mediumPracticeLocales['te-IN'] },
  'mr-IN': { ray: rayLocales['mr-IN'], simulation: simulationLocales['mr-IN'], checkpoint: checkpointLocales['mr-IN'], practice: mediumPracticeLocales['mr-IN'] },
  'ms-MY': { ray: rayLocales['ms-MY'], simulation: simulationLocales['ms-MY'], checkpoint: checkpointLocales['ms-MY'], practice: mediumPracticeLocales['ms-MY'] },
  'he-IL': { ray: rayLocales['he-IL'], simulation: simulationLocales['he-IL'], checkpoint: checkpointLocales['he-IL'], practice: mediumPracticeLocales['he-IL'] },
  'pl-PL': { ray: rayLocales['pl-PL'], simulation: simulationLocales['pl-PL'], checkpoint: checkpointLocales['pl-PL'], practice: mediumPracticeLocales['pl-PL'] },
  'uk-UA': { ray: rayLocales['uk-UA'], simulation: simulationLocales['uk-UA'], checkpoint: checkpointLocales['uk-UA'], practice: mediumPracticeLocales['uk-UA'] },
} satisfies Record<Locale, LightSceneLocales>;
