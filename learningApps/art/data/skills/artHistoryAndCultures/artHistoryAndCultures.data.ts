import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { asianArtisticTraditions_SkillGroup_Data } from './asianArtisticTraditions/asianArtisticTraditions.data';
import { culturalHeritage_SkillGroup_Data } from './culturalHeritage/culturalHeritage.data';
import { earlyImagesAndAntiquity_SkillGroup_Data } from './earlyImagesAndAntiquity/earlyImagesAndAntiquity.data';
import { historicalFilmMovements_SkillGroup_Data } from './historicalFilmMovements/historicalFilmMovements.data';
import { indigenousArtisticTraditionsOfTheAmericas_SkillGroup_Data } from './indigenousArtisticTraditionsOfTheAmericas/indigenousArtisticTraditionsOfTheAmericas.data';
import { lateModernAndContemporaryPractices_SkillGroup_Data } from './lateModernAndContemporaryPractices/lateModernAndContemporaryPractices.data';
import { latinAmericanArtMovements_SkillGroup_Data } from './latinAmericanArtMovements/latinAmericanArtMovements.data';
import { medievalAndEarlyModernArts_SkillGroup_Data } from './medievalAndEarlyModernArts/medievalAndEarlyModernArts.data';
import { modernArtMovements_SkillGroup_Data } from './modernArtMovements/modernArtMovements.data';
import { oceaniaArtisticTraditions_SkillGroup_Data } from './oceaniaArtisticTraditions/oceaniaArtisticTraditions.data';
import { performingArtTraditions_SkillGroup_Data } from './performingArtTraditions/performingArtTraditions.data';
import { socialContextAndExchange_SkillGroup_Data } from './socialContextAndExchange/socialContextAndExchange.data';
import { ukrainianArtisticTraditions_SkillGroup_Data } from './ukrainianArtisticTraditions/ukrainianArtisticTraditions.data';
import { westAndCentralAfricanTraditions_SkillGroup_Data } from './westAndCentralAfricanTraditions/westAndCentralAfricanTraditions.data';

export const artHistoryAndCultures_SkillDomain_Data = buildSkillDomainConfig({
  slug: "artHistoryAndCultures",
  id: "08efb56e-fef3-43ba-8661-d47866a92834",
  name: {
    en: "Art History and Cultures",
  },
  groups: {
    asianArtisticTraditions: asianArtisticTraditions_SkillGroup_Data,
    culturalHeritage: culturalHeritage_SkillGroup_Data,
    earlyImagesAndAntiquity: earlyImagesAndAntiquity_SkillGroup_Data,
    historicalFilmMovements: historicalFilmMovements_SkillGroup_Data,
    indigenousArtisticTraditionsOfTheAmericas: indigenousArtisticTraditionsOfTheAmericas_SkillGroup_Data,
    lateModernAndContemporaryPractices: lateModernAndContemporaryPractices_SkillGroup_Data,
    latinAmericanArtMovements: latinAmericanArtMovements_SkillGroup_Data,
    medievalAndEarlyModernArts: medievalAndEarlyModernArts_SkillGroup_Data,
    modernArtMovements: modernArtMovements_SkillGroup_Data,
    oceaniaArtisticTraditions: oceaniaArtisticTraditions_SkillGroup_Data,
    performingArtTraditions: performingArtTraditions_SkillGroup_Data,
    socialContextAndExchange: socialContextAndExchange_SkillGroup_Data,
    ukrainianArtisticTraditions: ukrainianArtisticTraditions_SkillGroup_Data,
    westAndCentralAfricanTraditions: westAndCentralAfricanTraditions_SkillGroup_Data,
  },
  description: {
    methodological: "Artworks and artistic practices develop within particular communities, historical debates, patrons and material technologies. Study of art history distinguishes movements and named traditions through their own works and contexts rather than treating an entire continent or historical era as a single skill. This domain examines art-historical interpretation, not general political chronology.",
    frontend: {
      en: "Explore how works of art reflect particular places, communities, periods and artistic debates.",
    },
  },
});
