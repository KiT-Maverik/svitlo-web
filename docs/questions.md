# Інтерактивні запитання — задача №1

Демонстрація: `/questions` (посилання на головній сторінці). Кожен приклад має незалежний локальний стан. Дані: `src/features/questions/examples.ts`.

## Дані автора

Усі визначення мають `id`, `type`, `prompt`, `explanation`. Це JSON-сумісні дані: без JSX, функцій, React-компонентів. Використовуйте `satisfies Question[]` для перевірки даних TypeScript. Кожне питання й кожен його елемент мають стабільний непорожній ID; написи можуть повторюватись. ID у межах окремого списку унікальні. Питання з даним ID вважається незмінним; при заміні визначення задайте новий ID, щоб скинути спробу.

| type | Поля визначення | value користувача |
| --- | --- | --- |
| `single-select` | `options: {id,label}[]`, `correctId` | ID або `null` |
| `multiple-select` | `options`, `correctIds: string[]` | масив ID |
| `matching` | `left`, `right`: списки `{id,label}`; `pairs: {id,leftId,rightId}[]` | об’єкт `leftId → rightId` |
| `short-text` | `acceptedAnswers: string[]`, `normalization: {trim,ignoreCase,collapseWhitespace}` | рядок |
| `numeric` | `expected: number`, `tolerance: number >= 0`, необов’язковий `unit` | сирий рядок |
| `ordering` | `items`, `correctOrder: string[]` | впорядкований масив усіх ID |
| `block-builder` | `blocks`, `acceptedSequences: string[][]` | масив вибраних ID |

Для matching кожен лівий і правий елемент має рівно одну пару. Ordering містить усі елементи рівно один раз. Block-builder може мати зайві блоки та альтернативні допустимі послідовності; кожен блок використовується максимум один раз. Наприклад, два блоки `1` мають різні ID `one-a`, `one-b`; якщо перестановка обох одиниць допустима, автор явно додає обидві послідовності. Повні приклади всіх семи типів наведені в `examples.ts`.

```ts
import type { Question } from '@/features/questions/model';
const question = {
  id: 'sum-v1', type: 'numeric', prompt: 'Скільки буде 2 + 2?',
  expected: 4, tolerance: 0, explanation: '2 + 2 = 4.',
} satisfies Question;
```

## Використання

```tsx
import { QuestionAttempt } from '@/features/questions/QuestionAttempt';
// Працює також із Server Component: передаємо лише серіалізовані дані.
<QuestionAttempt question={question} />
```

`QuestionAttempt` керує відповіддю, перевіркою та кнопками. Кожен результат (включно з incomplete/invalid) блокує редагування до «Спробувати ще раз». Повторна спроба зберігає введене та прибирає результат. «Скинути» відновлює початкове значення й прибирає результат: порожнє введення/вибір; для ordering — початковий порядок усіх елементів. `disabled` і `readOnly` блокують взаємодію й кнопки керування.

Для власного контролера використовуйте керований `QuestionView` у Client Component:

```tsx
const [value, setValue] = useState('');
<QuestionView type="numeric" question={question} value={value}
  onChange={setValue} result={result} readOnly={result !== null} />
```

`QuestionViewProps` — discriminated union з корельованими `type`, `question`, `value`, `onChange`; помилкові поєднання відхиляє TypeScript. View лише відображає переданий результат: блокування після перевірки — відповідальність зовнішнього контролера. Окремі взаємодії не знають про уроки чи прогрес. `QuestionResult` відповідає за доступне текстове повідомлення та пояснення; пояснення відображається лише після correct/incorrect.

## Перевірка

`check.ts` не імпортує React чи DOM. `checkers` — типізований реєстр чистих функцій; `checkAnswer({question, answer: {type, value}})` — корельований публічний API. Визначення правила перевірки зберігається окремо від стану відповіді й коду UI.

Результати: `{status:'correct'}`, `{status:'incorrect'}`, `{status:'incomplete',reason}` або `{status:'invalid',reason}`. Немає часткових балів. Порожні відповіді, незавершені matching/ordering і правильні префікси block-builder — incomplete. Непорожня множина multiple-select уже оцінюється як остаточний вибір. Інші неуспішні допустимі послідовності блоків — incorrect. Невідомі/повторені ID, некоректні числа та порушені авторські інваріанти — invalid.

Текст: кожна нормалізація вмикається явно; collapseWhitespace замінює послідовність Unicode-пробільних символів одним пробілом, ignoreCase застосовує `toLowerCase`, trim обрізає краї. Немає нечіткого порівняння, автоматичної транслітерації чи Unicode-нормалізації.

Числа: десяткова крапка/кома, знак і пробіли лише на краях; `,5` допустиме. Порожній рядок не стає нулем; немає часткового parse, експонент, hex, Infinity чи роздільників тисяч. `1,234` означає десяткове 1.234. Межі абсолютної похибки включні з мінімальною поправкою на IEEE-754 округлення; нульова похибка вимагає точного числового збігу. Одиниця — лише підпис, без конвертації.

## Додавання типу

1. Додайте поля в `DefinitionMap` і форму відповіді в `AnswerMap` (`src/types/questions/index.ts`).
2. Додайте чистий checker у `checkers` і гілку `checkAnswer`; додайте unit-тести.
3. Створіть керований компонент `InteractionProps<'new-type'>` з `value/onChange`, disabled/readOnly.
4. Зареєструйте `Interaction`, `check`, `initial` у `questionRegistry` і додайте гілки в `QuestionView` / `QuestionAttempt`. Типізовані реєстри вимагають повного набору ключів.
5. Додайте дані прикладу й браузерний сценарій.

UI-написи винесені до `messages.ts`; проєкт наразі не має механізму локалізації. Текст ніколи не використовується як ID. Обмеження першої версії: одна послідовність блоків з переносом рядка, без бекенду, збереження прогресу, AI-перевірки та інтервального повторення. JSON із зовнішніх недовірених джерел потребуватиме окремої runtime-схеми валідації: TypeScript перевіряє авторські дані під час розробки, checkers перевіряють інваріанти вже типізованих визначень.

## Перевірки

- `npm run typecheck` — Next route types та TypeScript, включно з негативними compile-time прикладами `tests/type-contracts/types.ts`.
- `npm test` — Node test runner; TypeScript компілює чистий модуль і тести до ігнорованого `.test-build` (без нового unit-фреймворку).
- `npm run lint` — ESLint.
- `npm run build` — production build.
- `npx playwright install --with-deps chromium`, `npm run test:e2e` після build — основні сценарії для всіх семи типів, keyboard, mobile і desktop.

GitHub Actions виконує цей самий набір перевірок для PR. E2E запускає production server; використовує ButtonBase перемикачі для вибору відповіді, нативні input та SVG-зв’язки matching та @dnd-kit для впорядкування. Артефакти trace зберігаються при помилках.


## Вигляд і впорядкування

Вміст карток, заголовки та кнопки відцентровані. Колонки варіантів мають `max-content` ширину найдовшого елемента з обмеженням до ширини контейнера; текст у рядках вирівняний ліворуч. `AnswerOption` — спільний ButtonBase для single/multiple-select: `aria-pressed`, тонка рамка вибраного, підсвічування всієї зони при наведенні, хрестик для зняття вибору при hover/focus. Повторний клік знімає вибір і в single-select. Tab переходить між варіантами, Space/Enter перемикає вибір.

Ordering використовує @dnd-kit: нумерація відділена вертикальним divider, праворуч є drag-маркер. Миша: перетягування рядка; сенсорний екран: затримайте дотик на 200 мс і перетягніть (рух до затримки залишає прокручування сторінки). Клавіатура: Tab до елемента, Space/Enter підняти, стрілки вгору/вниз перемістити, Space/Enter опустити, Escape скасувати. Повідомлення для screen reader українською. Disabled/readOnly та перевірений результат блокують перетягування.

## Візуальне matching і два UI для блоків

Matching — дві колонки з кнопками та SVG-кривими між центрами бічних країв. Оберіть лівий елемент, потім правий: миша бачить попередню лінію до курсора, дотик і клавіатура працюють через послідовний вибір. Нове з’єднання замінює попередній зв’язок обох зайнятих кінців. Escape скасовує незавершене з’єднання. Наведення на криву піднімає її над іншими, показує ореол і хрестик посередині. Клавіатура: Tab до зв’язку, Enter/Space видаляє його; на сенсорному екрані торкніться лінії, потім хрестика. Геометрія оновлюється через ResizeObserver при зміні розмірів.

Block-builder має один інтерфейс `DragBlockBuilder` (реекспорт `BlockBuilder`): чіпи підтримують Click/Enter для додавання/повернення, mouse/touch drag між двома зонами та сортування відповіді пробілом і стрілками. Поле `interaction` і окремий `ClickBlockBuilder` прибрані. На `/questions` сім прикладів, по одному на тип. Під час drag сірий чіп показує місце вставки; вимірювання цілей фіксуються на початку перетягування, щоб preview не пересував власну ціль. Натискання одразу оновлює контрольовану відповідь: декоративна копія стискається в попередній зоні, а чіп з’являється з grow-переходом у новій. Анімація не затримує введення та не має відкладених змін відповіді. Системний `prefers-reduced-motion` вимикає ці переходи. Дублікати написів розрізняються за ID. Окремої кнопки очищення немає — використовуйте спільну іконку скидання.

Кожна взаємодія має окремий файл: SingleSelect, MultipleSelect, Matching, ShortText, Numeric, Ordering, DragBlockBuilder. `interactions.tsx` лише реекспортує компоненти. `AnswerOption` після вибору показує вибраний кружок; хрестик з’являється після виходу й повторного наведення (або повторного фокуса клавіатурою), а не одразу після кліку.


## Рефактор API: домен, розширення, події та слоти

Канонічні доменні контракти тепер у `src/types/questions/`: `base.ts`, окремий файл кожного типу, `answers.ts`, `results.ts` і `index.ts`. Домен не залежить від React. `QuestionType.Numeric` тощо — сталі рядкові дискримінатори, сумісні з JSON. `QuestionOf<'numeric'>` і конкретний `NumericQuestion` означають ту саму форму даних. `model.ts` залишається сумісним шляхом реекспорту; UI-пропси винесені в `interaction-props.ts`, `attempt-model.ts` та `slots.ts`.

Кожен конкретний тип успадковує власний відкритий інтерфейс `*QuestionExtensions`. Наприклад:

```ts
// author-question-extensions.d.ts — файл повинен входити до tsconfig автора.
import '@/types/questions/multiple-select';

declare module '@/types/questions/multiple-select' {
  interface MultipleSelectQuestionExtensions {
    curriculum?: { topicId: string; objectives: string[] };
  }
}
```

Це додає типізовані авторські поля до multiple-select, які стандартний UI і checker ігнорують. Несумісне перевизначення стандартних полів відхиляється успадкуванням інтерфейсів. Розширення діє на весь compilation unit: обов’язкове поле стане обов’язковим для всіх запитань цього типу. Зберігайте розширення JSON-сумісними: декларація TypeScript сама по собі не виключає ReactNode, функції чи класи. Compile-time приклади augmentation та помилкових відповідей ізольовані в `tests/type-contracts` і перевіряються окремим `tsconfig.types.json`, не змінюючи контракти production build.

### Події та стан

`controller.ts` — незалежна від React машина стану, яку використовує `QuestionAttempt` для всіх семи типів. Події викликаються лише діями користувача/контролера, не render чи effects.

| Callback | Семантика |
| --- | --- |
| `onChange` | Відповідь справді змінилась; ідентична відповідь не генерує подію |
| `onCheck` | Будь-яка виконана перевірка, включно з incomplete/invalid |
| `onAnswer` | Лише завершена відповідь correct/incorrect |
| `onCorrect` / `onIncorrect` | Відповідний бінарний результат |
| `onRetry` | Прибрано перевірку, введення збережено |
| `onReset` | Повернуто початковий стан |

Порядок при оцінюванні: `onCheck → onAnswer → onCorrect/onIncorrect`; в автоматичному режимі перед цим іде `onChange`. Payload містить `question`, snapshot `answer`, `result`, `attemptNumber` і прапорці стану. Копії payload захищають стан відповіді від мутації з callback; повторний `check()` після блокування не дублює подій. Неправильна відповідь не є технічною помилкою, тому `onError` не використовується. Події `onFinal` немає, оскільки кількість повторних спроб необмежена.

- `hasInteracted`: була хоча б одна зміна відповіді, навіть якщо потім повернули початкову. Hover/focus його не змінюють.
- `isModified`: відповідь відрізняється від початкової. Для multiple-select порядок множини не враховується; для matching порядок ключів неважливий.
- `hasChecked`: у поточній спробі вже виконана перевірка.
- `attemptNumber`: починається з 1, збільшується після retry перевіреної спроби; reset повертає 1.

Retry зберігає `hasInteracted` та відповідь, прибирає `result/hasChecked`. Reset скидає все; ordering відновлює початкову послідовність.

### Режими перевірки та показ результатів

```tsx
<QuestionAttempt question={question}
  checkMode="on-change" showResult={true} showExplanation={false}
  onAnswer={event => recordAnswer(event)} />
```

`checkMode="manual"` — типовий режим, перевірка кнопкою. `on-change` перевіряє кожну нову завершену валідну відповідь одразу та блокує її до retry; кнопка перевірки прихована. Порожні, неповні та невалідні зміни залишаються редагованими й не генерують onAnswer. Для single-select зняття вибору не завершує спробу. Режим доступний всім типам, але текстові/числові відповіді можуть стати валідними до завершення введення, тому для них зазвичай потрібний manual.

`showResult={false}` приховує стандартне повідомлення разом із поясненням, але не вимикає оцінювання, блокування та callbacks. `showExplanation={false}` окремо приховує пояснення. Підсвічування обраного варіанта саме по собі не означає оцінку правильності.

### Чотири слоти

`QuestionAttempt` має однаковий API для кожного типу: `root`, `question`, `answers`, `actions`. Це render-функції, не before/after позиції. Вони отримують `QuestionSlotContext<K>`:

- типізовані `question`, `answer`, `result` та повні UI `props`;
- `hasInteracted`, `isModified`, `hasChecked`, `attemptNumber`, `isLocked`, `canCheck`;
- захищені дії `setAnswer`, `check`, `retry`, `reset`;
- `children` — стандартний вміст саме цього слота; можна обгорнути, доповнити або повністю замінити;
- для власного root — `rootProps`, які слід передати своєму MUI-контейнеру, щоб зберегти доступну назву, стилі та пропси root.

```tsx
<QuestionAttempt question={question}
  slotProps={{
    root: { sx: { borderRadius: 3 } },
    answers: context => ({ sx: { opacity: context.isLocked ? 0.7 : 1 } }),
  }}
  slots={{
    root: context => <Paper {...context.rootProps}>{context.children}</Paper>,
    question: context => <>{context.children}<CustomIllustration /></>,
    answers: context => <CustomAnswers question={context.question}
      value={context.answer} onChange={context.setAnswer} disabled={context.isLocked} />,
    actions: context => <Button disabled={!context.canCheck}
      onClick={context.check}>Перевірити</Button>,
  }} />
```

`slotProps` приймає об’єкт або функцію від того самого контексту: root — PaperProps, question/answers — BoxProps, actions — StackProps. `sx` композиційно додається після стандартних стилів. Для question/answers/actions зберігаються зовнішні контейнери з потрібними ідентифікаторами/доступністю; slot renderer замінює їхній вміст. Root renderer повністю замінює контейнер. Результат залишається відповідальністю контролера та керується showResult/showExplanation.

Вставляйте додатковий React-контент у потрібний слот, поряд із `context.children`. Він не входить у JSON-визначення. Дії контролера перевіряють disabled/readOnly/блокування незалежно від того, чи власна кнопка правильно виставила disabled. Власні відповіді/дії повинні користуватись цими діями, а не змінювати snapshot. Render-функції мають бути чистими; для hook-логіки рендерте власний React-компонент усередині слота.

Живі приклади: `/questions/api` — manual, on-change з прихованим результатом, журнал подій і повністю власні чотири слоти. Там також показані hasInteracted/isModified та захист кастомних дій у disabled/readOnly.


Кнопка скидання — кругла `IconButton` зі стрілкою, tooltip і доступною назвою «Скинути». Кнопка репорту без видимого тексту, зі збереженою доступною назвою, розташована в правому нижньому куті картки через actions slot. `AnswerOption` плавно змінює рамку, колір та іконку за 180 мс ease-in-out, поважаючи reduced motion. Чіпи блоків мають прозоре тло й природну висоту, без іконок drag; ordering зберігає DragIndicator. Скидання без рамки розташоване ліворуч від перевірки.
