import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { harmonyAndMusicalForm_SkillGroup_Data } from './harmonyAndMusicalForm/harmonyAndMusicalForm.data';
import { musicalSoundAndTexture_SkillGroup_Data } from './musicalSoundAndTexture/musicalSoundAndTexture.data';
import { pitchAndMelody_SkillGroup_Data } from './pitchAndMelody/pitchAndMelody.data';
import { pulseAndRhythm_SkillGroup_Data } from './pulseAndRhythm/pulseAndRhythm.data';

export const musicTheoryAndListening_SkillDomain_Data = buildSkillDomainConfig({
  slug: "musicTheoryAndListening",
  id: "8afffe49-bea2-4c5a-ae83-a35f8ae90a21",
  name: {
    en: "Music Theory and Listening",
  },
  groups: {
    harmonyAndMusicalForm: harmonyAndMusicalForm_SkillGroup_Data,
    musicalSoundAndTexture: musicalSoundAndTexture_SkillGroup_Data,
    pitchAndMelody: pitchAndMelody_SkillGroup_Data,
    pulseAndRhythm: pulseAndRhythm_SkillGroup_Data,
  },
  description: {
    methodological: "Musical listening distinguishes acoustic character and patterned relationships among events. Theoretical models vary across traditions and are not confined to Western staff notation.",
    frontend: {
      en: "Explore how music creates patterns of sound, rhythm, melody and form across different traditions.",
    },
  },
});
