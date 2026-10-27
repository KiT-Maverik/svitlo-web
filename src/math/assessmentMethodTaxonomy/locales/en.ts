import type { AssessmentMethodKey } from '../../../src/types/content/assessmentMethod.types';

export const en_AssessmentMethod_Locale = {
  retrieval: {
    title: 'Retrieval',
    description:
      'Recall previously learned facts or definitions from memory without substantial new inference. The assessment measures this cognitive operation rather than the answer format.',
  },
  interpretation: {
    title: 'Interpretation',
    description:
      'Explain the meaning of a concept, statement, symbol or representation. The assessment measures this cognitive operation rather than the answer format.',
  },
  application: {
    title: 'Application',
    description:
      'Use an established rule, procedure or algorithm to solve a relevant problem. The assessment measures this cognitive operation rather than the answer format.',
  },
  classification: {
    title: 'Classification',
    description:
      'Recognize defining properties and assign objects or ideas to appropriate categories. The assessment measures this cognitive operation rather than the answer format.',
  },
  relationshipMapping: {
    title: 'Relationship mapping',
    description:
      'Identify meaningful relationships or dependencies among concepts, entities or processes. The assessment measures this cognitive operation rather than the answer format.',
  },
  representationTranslation: {
    title: 'Representation translation',
    description:
      'Express equivalent knowledge in a different form while preserving its meaning. The assessment measures this cognitive operation rather than the answer format.',
  },
  missingInformationInference: {
    title: 'Missing-information inference',
    description:
      'Infer unknown information from known facts, constraints and logical relationships. The assessment measures this cognitive operation rather than the answer format.',
  },
  structuralAnalysis: {
    title: 'Structural analysis',
    description:
      'Break a complex whole into components and explain their contributions. The assessment measures this cognitive operation rather than the answer format.',
  },
  patternGeneralization: {
    title: 'Pattern generalization',
    description:
      'Identify a recurring pattern and develop a rule that applies beyond observed examples. The assessment measures this cognitive operation rather than the answer format.',
  },
  analogicalReasoning: {
    title: 'Analogical reasoning',
    description:
      'Use structural similarities between different situations to reason about an unfamiliar case. The assessment measures this cognitive operation rather than the answer format.',
  },
  knowledgeTransfer: {
    title: 'Knowledge transfer',
    description:
      'Apply existing knowledge in a novel or substantially different context. The assessment measures this cognitive operation rather than the answer format.',
  },
  prediction: {
    title: 'Prediction',
    description:
      'Anticipate outcomes from known principles when relevant conditions change. The assessment measures this cognitive operation rather than the answer format.',
  },
  errorDiagnosis: {
    title: 'Error diagnosis',
    description:
      'Locate an incorrect result or assumption and identify the underlying cause. The assessment measures this cognitive operation rather than the answer format.',
  },
  verification: {
    title: 'Verification',
    description:
      'Independently test whether a proposed result, solution or statement is correct. The assessment measures this cognitive operation rather than the answer format.',
  },
  justification: {
    title: 'Justification',
    description:
      'Support a conclusion with a coherent logical explanation or argument. The assessment measures this cognitive operation rather than the answer format.',
  },
  knowledgeConstruction: {
    title: 'Knowledge construction',
    description:
      'Create a valid example, model, explanation or solution independently. The assessment measures this cognitive operation rather than the answer format.',
  },
} as const satisfies Record<AssessmentMethodKey, { title: string; description: string }>;
