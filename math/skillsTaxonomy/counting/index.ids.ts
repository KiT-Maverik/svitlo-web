import { sequence_Ids } from './sequence/sequence.ids';
import { cardinality_Ids } from './cardinality/cardinality.ids';
import { steps_Ids } from './steps/steps.ids';
import { ordinal_Ids } from './ordinal/ordinal.ids';
import { parity_Ids } from './parity/parity.ids';

export const counting_Groups_Ids = {
  sequence: sequence_Ids.sequence,
  cardinality: cardinality_Ids.cardinality,
  steps: steps_Ids.steps,
  ordinal: ordinal_Ids.ordinal,
  parity: parity_Ids.parity,
} as const;
