import type { LanguageCode } from '../../types/languages';
import type { TextContentBlock_AllLanguages_Config, TextContentBlock_ChosenLanguages_Config } from '../../content';
import { createTextContentBlock } from './createTextContentBlock.utils';

declare const allValues: TextContentBlock_AllLanguages_Config;
const all = createTextContentBlock('title', allValues);
const allLocales: true = all.allLocales;
const english: string = all.value['en'];
// @ts-expect-error ContentBlock metadata is readonly.
all.id = 'other';
// @ts-expect-error Localized values are readonly.
all.value['en'] = 'Other';

const chosen = createTextContentBlock(
  'title',
  { uk: 'Світло', pl: 'Światło' },
  {
    locales: { only: ['uk', 'pl'] },
  },
);
const chosenLocales: false = chosen.allLocales;
const ukrainian: string = chosen.value['uk'];
const polish: string = chosen.value['pl'];
// @ts-expect-error Chosen locale values are readonly.
chosen.value['uk'] = 'Other';
// @ts-expect-error Other locales are not present in the result.
const excluded = chosen.value['en'];

// @ts-expect-error Every selected locale needs a value.
createTextContentBlock('title', { uk: 'Світло' }, { locales: { only: ['uk', 'pl'] } });
// @ts-expect-error A locale outside only is not part of this value object.
createTextContentBlock('title', { uk: 'Світло', en: 'Light' }, { locales: { only: ['uk'] } });
// @ts-expect-error Only cannot be combined with include or exclude.
createTextContentBlock('title', { uk: 'Світло' }, { locales: { only: ['uk'], include: ['pl'] } });

declare const withoutEnglish: TextContentBlock_ChosenLanguages_Config<Exclude<LanguageCode, 'en'>>;
const filtered = createTextContentBlock('title', withoutEnglish, { locales: { exclude: ['en'] } });
// @ts-expect-error Excluded locales are not present in the result.
const filteredEnglish = filtered.value['en'];

void [allLocales, english, chosenLocales, ukrainian, polish, excluded, filteredEnglish];
