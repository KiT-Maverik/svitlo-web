import { locales } from './FillBlanksWithText.locale';

export const aria = { blankInput: locales.uk.blankInput } as const;
export const testId = { blankInput: (id: string) => `fill-blanks-text-${id}` } as const;
