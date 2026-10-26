import { uk } from './FillBlanksWithText.locale';

export const aria = { blankInput: uk.blankInput } as const;
export const testId = { blankInput: (id: string) => `fill-blanks-text-${id}` } as const;
