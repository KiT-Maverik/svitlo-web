import type { LanguageCode } from '../languages';

/** GitHub pull request numbers for completed content reviews. */
export type Review = {
  ai?: number;
  scientific?: number;
  languages?: Partial<Record<LanguageCode, number>>;
};
