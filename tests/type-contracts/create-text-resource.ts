import type { AllLocales, ChosenLocales } from '../../src/types/content/resources';
import type { Locale } from '../../src/types/languages';
import { createTextResource } from '../../src/utils/createTextResource/createTextResource';

declare const allValues: AllLocales;
const all = createTextResource('title', allValues);
const allLocales: true = all.allLocales;
const english: string = all.value['en-US'];
// @ts-expect-error Resource metadata is readonly.
all.id = 'other';
// @ts-expect-error Localized values are readonly.
all.value['en-US'] = 'Other';

const chosen = createTextResource('title', { 'uk-UA': 'Світло', 'pl-PL': 'Światło' }, {
  locales: { only: ['uk-UA', 'pl-PL'] },
});
const chosenLocales: false = chosen.allLocales;
const ukrainian: string = chosen.value['uk-UA'];
const polish: string = chosen.value['pl-PL'];
// @ts-expect-error Chosen locale values are readonly.
chosen.value['uk-UA'] = 'Other';
// @ts-expect-error Other locales are not present in the result.
const excluded = chosen.value['en-US'];

// @ts-expect-error Every selected locale needs a value.
createTextResource('title', { 'uk-UA': 'Світло' }, { locales: { only: ['uk-UA', 'pl-PL'] } });
// @ts-expect-error A locale outside only is not part of this value object.
createTextResource('title', { 'uk-UA': 'Світло', 'en-US': 'Light' }, { locales: { only: ['uk-UA'] } });
// @ts-expect-error Only cannot be combined with include or exclude.
createTextResource('title', { 'uk-UA': 'Світло' }, { locales: { only: ['uk-UA'], include: ['pl-PL'] } });

declare const withoutEnglish: ChosenLocales<Exclude<Locale, 'en-US'>>;
const filtered = createTextResource('title', withoutEnglish, { locales: { exclude: ['en-US'] } });
// @ts-expect-error Excluded locales are not present in the result.
const filteredEnglish = filtered.value['en-US'];

void [allLocales, english, chosenLocales, ukrainian, polish, excluded, filteredEnglish];
