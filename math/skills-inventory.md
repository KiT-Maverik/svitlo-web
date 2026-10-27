# Mathematics Skills Inventory — орієнтовний рівень 1–3 класів

> **Статус:** редакційний інвентар v0.6, для обговорення методистом; **не** державна програма, не затверджений навчальний план і не перелік уроків.

## Призначення

Це предметна інвентаризація **спостережуваних математичних умінь** для початкового етапу навчання (умовно рівень 1–3 класів). Вона допомагає виявити, *чого потрібно навчити*, перш ніж методист вирішить, які уроки створити, як їх об’єднати та як адаптувати до віку й контексту.

- **Skill** — перевірювана компетенція, а не назва уроку, класу, теми, вправи або конкретного типу запитання. Один урок може формувати декілька навичок, одна навичка може перевірятися багатьма питаннями.
- **Редакційний ID** у таблиці — семантичний ключ `math.*` для перегляду й простежуваності. **Runtime ID** вже реалізованих сутностей — статичний UUID у `*.ids.ts`; зв'язок із попередніми ключами збережено в [UUID-MIGRATION.md](./skillsTaxonomy/UUID-MIGRATION.md). Для ще не реалізованих навичок UUID можуть бути зарезервовані, але це не змінює їхнього статусу.
- **Орієнтир** (`1`, `2`, `3`, `1–3`, `3+`) — приблизний етап першого знайомства, **не атрибут Skill у runtime**, не вікове обмеження й не припис конкретної освітньої системи. Позначка `3+` означає факультативне поглиблення/міжпрограмну варіативність і не входить у мінімальне ядро всіх трьох років.
- **SkillDomain → SkillGroup → Skill** — навігаційна та каталогізаційна ієрархія, не граф передумов і не `topicIds` у моделі Skill.
- Навички не містять `prerequisites`, `assessmentDimensions`, `lessonIds`, `questionIds` чи інших зв’язків. Ці залежності можуть визначатися окремими шарами згодом.
- Формулювання починаються з дії, результат якої можна перевірити. Там, де «пояснювати» є результатом, питання має перевіряти **зміст пояснення**, а не відтворення завченого тексту.
- Повторення чи застосування тих самих навичок в інших класах не створює автоматично нових Skill. Новий Skill потрібен лише для нової змістової компетенції.

## Межі

Включено: числове відчуття та лічбу; десяткову позиційну систему до 1000; арифметичні дії та їхню перевірку; початкові дроби; вирази й невідомі; геометрію; вимірювання; гроші та час; дані; базові уявлення про ймовірність і випадковість; текстові задачі; математичну аргументацію. Рівень тем неоднаковий у різних країнах. Поділ за класами нижче **орієнтовний**, а не обов’язкова послідовність.

Свідомо **не** включено в ядро: від’ємні числа й операції з ними, десяткові дроби як систему числення, відсотки, формальні пропорції, письмове множення на багатоцифровий множник, формальну теорію ймовірностей та повний курс дробової арифметики. Це кандидати для наступного розширення бібліотеки.

## Інвентар навичок

Усього: **285** кандидатів у **60 SkillGroup**, організованих у **13 SkillDomain**. **15 навичок із конфігами мають статус Implemented; решта очікують реалізації**. **Кожен рядок — кандидат на один окремий файл Skill**, але не вимога створювати один урок на кожний Skill.

## Семантична таксономія (v0.6)

**Subject → SkillDomain → SkillGroup → Skill.** Кількість доменів/груп не обмежена, їхні назви мають описувати одну самостійну область. Ієрархія — каталог для UI, а не послідовність уроків або граф передумов. Група з одним Skill допустима.

Коми та сполучники — привід перевірити зміст, а не автоматичний роздільник. **Дві раніше неоднозначні групи розкладено на окремі та інтеграційні компетенції**; див. [методичний звіт](./skills-taxonomy-review.md). Усі **285** редакційних ідентифікаторів, описи й орієнтовні рівні залишилися без змін; **runtime ID у реалізованому коді тепер UUID**. Для двох реорганізованих областей створено типізовані конфіги груп і доменів; наявні Skill-файли не переписувалися.

| Domain ID | Домен | Груп | Навичок | Domain config | Group configs | Skill files |
|---|---|---:|---:|---|---:|---:|
| `math.counting` | Лічба | 5 | 15 | **Implemented** | 5/5 | 15/15 |
| `math.numeration` | Натуральні числа | 5 | 27 | — | 0/5 | 0/27 |
| `math.fractions` | Дроби | 4 | 19 | — | 0/4 | 0/19 |
| `math.arithmetic` | Арифметика | 5 | 79 | **Implemented** | 3/5 | 0/79 |
| `math.algebra` | Алгебра | 5 | 17 | — | 0/5 | 0/17 |
| `math.geometry` | Геометрія | 10 | 35 | **Implemented** | 3/10 | 0/35 |
| `math.measurement` | Вимірювання | 5 | 21 | — | 0/5 | 0/21 |
| `math.time` | Час | 3 | 13 | — | 0/3 | 0/13 |
| `math.money` | Гроші | 2 | 6 | — | 0/2 | 0/6 |
| `math.data` | Дані | 3 | 15 | — | 0/3 | 0/15 |
| `math.probability` | Ймовірність | 2 | 4 | — | 0/2 | 0/4 |
| `math.problemSolving` | Задачі | 7 | 23 | — | 0/7 | 0/23 |
| `math.reasoning` | Міркування | 4 | 11 | — | 0/4 | 0/11 |

**Редакційні `math.*` ID тут — історичні/семантичні позначення; runtime ID наявних конфігів — незмінні UUID з [`UUID-MIGRATION.md`](./skillsTaxonomy/UUID-MIGRATION.md). Статус `Implemented` означає наявність окремого `Skill` data-файлу, а не лише посилання на його UUID у конфігу групи.**

**Редакційні Domain/Group ID — робочі.** У реалізованому коді Domain має `groupIds`, Group — `skillIds` як іменовані словники UUID. Належність навички не виводиться з префікса редакційного ID; перегрупування не змінює runtime UUID.

**Правила статусів:** `Domain config` означає, що є локалізований Domain `.data.ts`; `Group configs` рахує тільки локалізовані Group `.data.ts` (навіть якщо решта груп ще не створена); `Skill files` рахує лише окремі локалізовані Skill `.data.ts`. **Статичні UUID/посилання самі по собі не означають `Implemented`.** Обробленими повністю є лише 15 Skill домену Counting. Для Arithmetic і Geometry створено домени та по 3 конфіги груп, але ще немає їхніх індивідуальних Skill-файлів.

## Інвентар за доменами

### Domain 1. Лічба (15)

**Implementation:** Domain + 5/5 Group configs + 15/15 individual Skills — **Complete**

**ID:** `math.counting`

#### SkillGroup 1.1. Числові послідовності (5)

**ID:** `math.counting.sequence`

**Implementation:** Implemented — Group config and all Skill files.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.count.one-to-one` | Перелічувати предмети без пропусків і повторів, встановлюючи відповідність «предмет — одне число» | 1 | **Implemented** |
| `math.count.forward-20` | Лічити вперед у межах 20, зокрема від довільного початкового числа | 1 | **Implemented** |
| `math.count.backward-20` | Лічити назад у межах 20, зокрема від довільного початкового числа | 1 | **Implemented** |
| `math.count.forward-100` | Лічити вперед і назад у межах 100, не починаючи щоразу з одиниці | 1–2 | **Implemented** |
| `math.count.forward-1000` | Продовжувати й відновлювати послідовність натуральних чисел у межах 1000 | 2–3 | **Implemented** |

#### SkillGroup 1.2. Кількість (4)

**ID:** `math.counting.cardinality`

**Implementation:** Implemented — Group config and all Skill files.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.count.cardinality` | Визначати кількість предметів за останнім названим числом під час лічби | 1 | **Implemented** |
| `math.count.zero` | Розпізнавати нуль як кількість елементів порожньої множини | 1 | **Implemented** |
| `math.count.compare-sets` | Порівнювати дві множини через попарне зіставлення або підрахунок | 1 | **Implemented** |
| `math.count.group-and-count` | Визначати кількість великої групи предметів через об’єднання в десятки або сотні | 2 | **Implemented** |

#### SkillGroup 1.3. Крокова лічба (4)

**ID:** `math.counting.steps`

**Implementation:** Implemented — Group config and all Skill files.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.count.count-by-2` | Лічити рівними кроками по 2 й пояснювати, які групи перелічуються | 1–2 | **Implemented** |
| `math.count.count-by-5` | Лічити рівними кроками по 5 й пояснювати зв’язок із групуванням | 1–2 | **Implemented** |
| `math.count.count-by-10` | Лічити десятками в межах 1000 | 1–2 | **Implemented** |
| `math.count.count-by-100` | Лічити сотнями в межах 1000 | 2–3 | **Implemented** |

#### SkillGroup 1.4. Порядкова лічба (1)

**ID:** `math.counting.ordinal`

**Implementation:** Implemented — Group config and all Skill files.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.count.ordinal` | Визначати порядковий номер об’єкта та розрізняти порядок і кількість | 1 | **Implemented** |

#### SkillGroup 1.5. Парність (1)

**ID:** `math.counting.parity`

**Implementation:** Implemented — Group config and all Skill files.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.count.even-odd` | Розрізняти парні й непарні числа через розбиття на пари | 2–3 | **Implemented** |

### Domain 2. Натуральні числа (27)

**Implementation:** Not started (no Domain/Group/Skill data files)

**ID:** `math.numeration`

#### SkillGroup 2.1. Числовий запис (4)

**ID:** `math.numeration.notation`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.numbers.digits-0-9` | Розпізнавати та записувати цифри 0–9; відрізняти цифру від числа | 1 | — |
| `math.numbers.read-write-20` | Читати, записувати й співвідносити з кількістю числа 0–20 | 1 | — |
| `math.numbers.read-write-100` | Читати й записувати числа в межах 100 | 1–2 | — |
| `math.numbers.read-write-1000` | Читати й записувати трицифрові числа, включно з нулями всередині запису | 2–3 | — |

#### SkillGroup 2.2. Розрядність (11)

**ID:** `math.numeration.placeValue`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.numbers.flexible-partition` | Представляти число різними рівносильними розбиттями, не лише за стандартними розрядами (146 = 130 + 16) | 2–3 | — |
| `math.numbers.total-tens-in-number` | Визначати загальну кількість повних десятків чи сотень у трицифровому числі | 3 | — |
| `math.numbers.make-ten` | Групувати десять одиниць в один десяток і виконувати зворотне розгрупування | 1 | — |
| `math.numbers.tens-ones` | Складати й розкладати двоцифрове число на десятки та одиниці | 1–2 | — |
| `math.numbers.make-hundred` | Пояснювати, що десять десятків утворюють одну сотню | 2 | — |
| `math.numbers.hundreds-tens-ones` | Складати й розкладати трицифрове число на сотні, десятки й одиниці | 2–3 | — |
| `math.numbers.place-value` | Визначати значення цифри залежно від її розряду | 2 | — |
| `math.numbers.zero-placeholder` | Пояснювати роль нуля як позначення відсутнього розряду | 2–3 | — |
| `math.numbers.expanded-form` | Записувати число як суму розрядних доданків і відновлювати його з цієї суми | 2–3 | — |
| `math.numbers.regroup-place-values` | Обмінювати одну сотню на десять десятків, а десяток — на десять одиниць | 2–3 | — |
| `math.numbers.multiple-representations` | Співвідносити запис числа, модель блоками, числову пряму та кількість предметів | 1–3 | — |

#### SkillGroup 2.3. Порівняння чисел (5)

**ID:** `math.numeration.comparison`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.order.more-less-equal` | Визначати «більше», «менше», «дорівнює» на конкретних кількостях | 1 | — |
| `math.order.comparison-symbols` | Правильно використовувати знаки <, >, = для чисел | 1 | — |
| `math.order.order-20` | Розташовувати числа 0–20 за зростанням або спаданням | 1 | — |
| `math.order.order-100` | Порівнювати й впорядковувати двоцифрові числа за розрядами | 1–2 | — |
| `math.order.order-1000` | Порівнювати й упорядковувати трицифрові числа за розрядами | 2–3 | — |

#### SkillGroup 2.4. Числова пряма (4)

**ID:** `math.numeration.numberLine`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.order.before-after-between` | Знаходити попереднє, наступне та проміжні числа в заданому діапазоні | 1–2 | — |
| `math.order.number-line-20` | Розміщувати числа та знаходити сусідів на числовій прямій до 20 | 1 | — |
| `math.order.number-line-1000` | Розміщувати числа на числовій прямій із відповідним масштабом до 1000 | 2–3 | — |
| `math.order.distance-on-line` | Визначати відстань між цілими числами на числовій прямій | 2–3 | — |

#### SkillGroup 2.5. Оцінювання чисел (3)

**ID:** `math.numeration.estimation`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.order.round-to-ten` | Округлювати числа до найближчого десятка й пояснювати вибір | 2–3 | — |
| `math.order.round-to-hundred` | Округлювати числа до найближчої сотні й оцінювати похибку | 3+ | — |
| `math.order.estimate-quantity` | Оцінювати приблизну кількість предметів та перевіряти оцінку підрахунком | 1–3 | — |

### Domain 3. Дроби (19)

**Implementation:** Not started (no Domain/Group/Skill data files)

**ID:** `math.fractions`

#### SkillGroup 3.1. Представлення дробів (12)

**ID:** `math.fractions.representation`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.fractions.whole-and-equal-parts` | Розрізняти ціле, його рівні частини й довільні нерівні шматки | 2–3 | — |
| `math.fractions.fraction-greater-than-one` | Розміщувати на моделі або прямій дроби, більші за одиницю | 3 | — |
| `math.fractions.tenths-as-division` | Пов'язувати десяті з поділом цілого на 10 рівних частин та діленням на 10 | 3 | — |
| `math.fractions.unit-fraction-model` | Показувати одиничний дріб 1/n на фігурі, відрізку або наборі предметів | 3 | — |
| `math.fractions.unit-fraction-read` | Читати й записувати одиничні дроби: половина, третина, чверть тощо | 3 | — |
| `math.fractions.denominator-meaning` | Пояснювати, що знаменник указує на кількість рівних частин цілого | 3 | — |
| `math.fractions.numerator-meaning` | Пояснювати, скільки рівних частин позначає чисельник | 3+ | — |
| `math.fractions.non-unit-model` | Представляти кілька рівних частин одного цілого дробом a/b | 3+ | — |
| `math.fractions.whole-dependence` | Пояснювати, чому величина частини залежить від розміру цілого | 3 | — |
| `math.fractions.number-line` | Розміщувати прості дроби між 0 і 1 на числовій прямій | 3+ | — |
| `math.fractions.one-as-fraction` | Пояснювати на моделі, що n/n відповідає одному цілому | 3+ | — |
| `math.fractions.equivalent-visual` | Показувати на наочних моделях рівність простих дробів, наприклад 1/2 = 2/4 | 3+ | — |

#### SkillGroup 3.2. Порівняння дробів (3)

**ID:** `math.fractions.comparison`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.fractions.compare-same-numerator` | Порівнювати дроби з однаковим чисельником, спираючись на однакове ціле | 3 | — |
| `math.fractions.compare-unit` | Порівнювати одиничні дроби від одного й того самого цілого | 3 | — |
| `math.fractions.same-denominator-model` | Порівнювати дроби з однаковими знаменниками через наочну модель | 3+ | — |

#### SkillGroup 3.3. Обчислення з дробами (2)

**ID:** `math.fractions.arithmetic`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.fractions.add-like-denominators` | Додавати прості дроби з однаковими знаменниками в межах одного цілого | 3 | — |
| `math.fractions.subtract-like-denominators` | Віднімати прості дроби з однаковими знаменниками в межах одного цілого | 3 | — |

#### SkillGroup 3.4. Частини величини (2)

**ID:** `math.fractions.portions`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.fractions.find-unit-part` | Знаходити 1/n від числа або вимірюваної величини через ділення | 3 | — |
| `math.fractions.reconstruct-whole` | Знаходити ціле за відомою одиничною частиною | 3 | — |

### Domain 4. Арифметика (79)

**Implementation:** Domain + 3/5 Group configs; 0/79 Skill files — **Partial**

**ID:** `math.arithmetic`

#### SkillGroup 4.1. Додавання (10)

**ID:** `math.arithmetic.addition`

**Implementation:** Group config implemented; individual Skill files not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.addsub.add-meaning` | Моделювати додавання як об’єднання кількостей або збільшення кількості | 1 | — |
| `math.addsub.add-zero` | Пояснювати й застосовувати додавання нуля | 1 | — |
| `math.addsub.commutative-addition` | Змінювати порядок доданків без зміни суми та застосовувати це для обчислень | 1 | — |
| `math.addsub.make-ten-strategy` | Використовувати доповнення до десяти під час додавання | 1 | — |
| `math.addsub.cross-ten-addition` | Додавати одноцифрові числа з переходом через десяток | 1 | — |
| `math.addsub.two-digit-carry` | Додавати двоцифрові числа з утворенням нового десятка | 2 | — |
| `math.addsub.associative-addition` | Групувати доданки у зручному порядку без зміни суми | 2–3 | — |
| `math.addsub.three-digit-carry` | Додавати трицифрові числа з одним або кількома переходами через розряд | 3 | — |
| `math.addsub.column-addition` | Коректно записувати та виконувати письмове додавання стовпчиком | 2–3 | — |
| `math.addsub.carry-error-detection` | Розпізнавати пропущений перенос десятка чи сотні та пояснювати причину помилки | 2–3 | — |

#### SkillGroup 4.2. Віднімання (8)

**ID:** `math.arithmetic.subtraction`

**Implementation:** Group config implemented; individual Skill files not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.addsub.subtract-meaning` | Моделювати віднімання як вилучення, різницю або пошук невідомої частини | 1 | — |
| `math.addsub.subtract-zero` | Пояснювати й застосовувати віднімання нуля | 1 | — |
| `math.addsub.subtract-self` | Пояснювати, чому віднімання числа від самого себе дає нуль | 1 | — |
| `math.addsub.cross-ten-subtraction` | Віднімати в межах 20 із переходом через десяток | 1 | — |
| `math.addsub.two-digit-borrow` | Віднімати двоцифрові числа з розгрупуванням одного десятка | 2 | — |
| `math.addsub.three-digit-borrow` | Віднімати трицифрові числа з розгрупуванням десятків або сотень | 3 | — |
| `math.addsub.column-subtraction` | Коректно записувати та виконувати письмове віднімання стовпчиком | 2–3 | — |
| `math.addsub.borrow-error-detection` | Розпізнавати неправильне розгрупування під час віднімання й виправляти його | 2–3 | — |

#### SkillGroup 4.3. Поєднання додавання та віднімання (13)

**ID:** `math.arithmetic.additionSubtraction`

**Implementation:** Group config implemented; individual Skill files not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.addsub.part-whole` | Складати ціле з частин і знаходити невідому частину цілого | 1 | — |
| `math.addsub.facts-within-10` | Обчислювати суми й різниці в межах 10 без предметного переліку | 1 | — |
| `math.addsub.number-bonds-10` | Розкладати 10 на дві частини різними способами | 1 | — |
| `math.addsub.facts-within-20` | Впевнено обчислювати суми та різниці в межах 20 | 1–2 | — |
| `math.addsub.inverse-operations` | Перевіряти додавання відніманням і навпаки | 1–2 | — |
| `math.addsub.add-subtract-tens` | Додавати й віднімати цілі десятки | 1–2 | — |
| `math.addsub.two-digit-no-regroup` | Додавати та віднімати двоцифрові числа без розрядного обміну | 2 | — |
| `math.addsub.place-value-mental` | Обчислювати усно через десятки й одиниці, пояснюючи кожний крок | 2 | — |
| `math.addsub.compensation` | Використовувати компенсацію (додати й відняти те саме число) для усних обчислень | 2–3 | — |
| `math.addsub.hundreds-and-tens` | Додавати та віднімати круглі сотні й десятки в межах 1000 | 2–3 | — |
| `math.addsub.three-digit-no-regroup` | Додавати та віднімати трицифрові числа без переходу через розряд | 2–3 | — |
| `math.addsub.estimate-result` | Оцінювати правдоподібність суми або різниці до точного обчислення | 2–3 | — |
| `math.addsub.check-with-inverse` | Знаходити й виправляти помилки в додаванні та відніманні за допомогою оберненої дії | 2–3 | — |
#### SkillGroup 4.4. Множення (24)

**ID:** `math.multiply`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.multiply.equal-groups` | Представляти множення як кількість рівних груп певного розміру | 2 | — |
| `math.multiply.repeated-addition` | Переходити між множенням і повторюваним додаванням | 2 | — |
| `math.multiply.array-model` | Представляти множення прямокутним масивом предметів або клітинок | 2 | — |
| `math.multiply.read-expression` | Читати вираз a × b та пов’язувати множники й добуток із моделлю | 2 | — |
| `math.multiply.by-2` | Обчислювати добутки з множником 2 та використовувати подвоєння | 2 | — |
| `math.multiply.by-3` | Обчислювати табличні добутки з множником 3 | 2–3 | — |
| `math.multiply.by-4` | Обчислювати табличні добутки з множником 4 | 2–3 | — |
| `math.multiply.by-5` | Обчислювати табличні добутки з множником 5 | 2 | — |
| `math.multiply.by-6` | Обчислювати табличні добутки з множником 6 | 3 | — |
| `math.multiply.by-7` | Обчислювати табличні добутки з множником 7 | 3 | — |
| `math.multiply.by-8` | Обчислювати табличні добутки з множником 8 | 3 | — |
| `math.multiply.by-9` | Обчислювати табличні добутки з множником 9 | 3 | — |
| `math.multiply.by-10` | Обчислювати добутки з множником 10 та пояснювати їх через десятки | 2 | — |
| `math.multiply.by-0-and-1` | Пояснювати й застосовувати множення на 0 та 1 | 2 | — |
| `math.multiply.commutative` | Пояснювати переставний закон множення за допомогою моделей | 2 | — |
| `math.multiply.associative` | Змінювати групування множників для зручного обчислення | 3 | — |
| `math.multiply.distributive` | Розкладати один множник на частини та знаходити суму часткових добутків | 3 | — |
| `math.multiply.derive-facts` | Виводити незнайомі табличні добутки з відомих, а не лише пригадувати їх | 2–3 | — |
| `math.multiply.double-twice` | Знаходити множення на 4 через подвійне подвоєння | 2–3 | — |
| `math.multiply.round-tens` | Множити круглі десятки на одноцифрові числа в межах 1000 | 3 | — |
| `math.multiply.round-hundreds` | Множити круглі сотні на одноцифрові числа в межах 1000 | 3 | — |
| `math.multiply.two-digit-by-one` | Множити двоцифрове число на одноцифрове через розрядний розклад | 3 | — |
| `math.multiply.three-digit-by-one` | Множити трицифрове число на одноцифрове, якщо результат у межах 1000 | 3+ | — |
| `math.multiply.check-product` | Оцінювати добуток та перевіряти його оберненою дією або іншим способом | 3 | — |

#### SkillGroup 4.5. Ділення (24)

**ID:** `math.divide`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.divide.equal-sharing` | Моделювати ділення як розподіл на задану кількість рівних груп | 2 | — |
| `math.divide.equal-grouping` | Моделювати ділення як визначення кількості груп заданого розміру | 2 | — |
| `math.divide.relation-to-multiplication` | Пояснювати ділення як пошук невідомого множника | 2 | — |
| `math.divide.read-expression` | Читати запис a ÷ b та співвідносити ділене, дільник і частку з моделлю | 2 | — |
| `math.divide.by-2` | Обчислювати табличні випадки ділення на 2 | 2 | — |
| `math.divide.by-3` | Обчислювати табличні випадки ділення на 3 | 2–3 | — |
| `math.divide.by-4` | Обчислювати табличні випадки ділення на 4 | 2–3 | — |
| `math.divide.by-5` | Обчислювати табличні випадки ділення на 5 | 2 | — |
| `math.divide.by-6` | Обчислювати табличні випадки ділення на 6 | 3 | — |
| `math.divide.by-7` | Обчислювати табличні випадки ділення на 7 | 3 | — |
| `math.divide.by-8` | Обчислювати табличні випадки ділення на 8 | 3 | — |
| `math.divide.by-9` | Обчислювати табличні випадки ділення на 9 | 3 | — |
| `math.divide.by-1-and-self` | Пояснювати й застосовувати ділення на 1 та числа на самого себе (для ненульового числа) | 2–3 | — |
| `math.divide.zero-dividend` | Пояснювати результат ділення нуля на ненульове число | 3 | — |
| `math.divide.no-division-by-zero` | Розпізнавати, що ділення на нуль не визначене | 3 | — |
| `math.divide.double-half` | Знаходити половину парної кількості та пов’язувати це з подвоєнням | 2 | — |
| `math.divide.round-tens` | Ділити круглі десятки на одноцифрові числа в межах 1000 | 3 | — |
| `math.divide.round-hundreds` | Ділити круглі сотні на одноцифрові числа в межах 1000 | 3 | — |
| `math.divide.two-digit-by-one` | Ділити двоцифрові числа на одноцифрові позатабличним способом | 3 | — |
| `math.divide.three-digit-by-one` | Ділити окремі трицифрові числа на одноцифрові через розрядний розклад | 3+ | — |
| `math.divide.with-remainder` | Знаходити частку й остачу під час ділення натуральних чисел | 3 | — |
| `math.divide.remainder-less-divisor` | Перевіряти, що невід’ємна остача менша за дільник | 3 | — |
| `math.divide.check-quotient` | Перевіряти частку множенням, з урахуванням остачі за її наявності | 3 | — |
| `math.divide.error-detection` | Розпізнавати помилку в діленні або некоректну остачу за моделлю чи перевіркою | 3 | — |

### Domain 5. Алгебра (17)

**Implementation:** Domain + 5/5 Group configs; 17/17 Skill files — **Implemented**

**ID:** `math.algebra`

#### SkillGroup 5.1. Вирази (5)

**ID:** `math.algebra.expressions`

**Implementation:** Implemented — Group data file and all Skill data files are present.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.algebra.read-numeric-expressions` | Читати та записувати числові вирази з арифметичними діями | 1–2 | Implemented |
| `math.algebra.parentheses` | Обчислювати вирази з дужками, пояснюючи пріоритет дій | 2–3 | Implemented |
| `math.algebra.order-of-operations` | Обчислювати вирази з кількома арифметичними діями за правилами порядку | 3 | Implemented |
| `math.algebra.variable-value` | Обчислювати значення найпростішого буквеного виразу за заданого значення змінної | 3 | Implemented |
| `math.algebra.identify-expression-error` | Пояснювати помилку, спричинену неправильним порядком дій | 3 | Implemented |

#### SkillGroup 5.2. Рівності (3)

**ID:** `math.algebra.equalities`

**Implementation:** Implemented — Group data file and all Skill data files are present.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.algebra.equality-meaning` | Сприймати знак рівності як рівність значень обох частин, а не команду «порахуй» | 1 | Implemented |
| `math.algebra.true-false-equality` | Перевіряти правильність числової рівності або нерівності | 1–2 | Implemented |
| `math.algebra.complete-equality` | Добирати пропущене число так, щоб рівність була істинною | 1–2 | Implemented |

#### SkillGroup 5.3. Невідомі (6)

**ID:** `math.algebra.unknowns`

**Implementation:** Implemented — Group data file and all Skill data files are present.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.algebra.unknown-addend` | Знаходити невідомий доданок і перевіряти результат | 1–2 | Implemented |
| `math.algebra.unknown-minuend` | Знаходити невідоме зменшуване і перевіряти результат | 2 | Implemented |
| `math.algebra.unknown-subtrahend` | Знаходити невідомий від’ємник і перевіряти результат | 2 | Implemented |
| `math.algebra.unknown-factor` | Знаходити невідомий множник за відомими добутком і множником | 2–3 | Implemented |
| `math.algebra.unknown-dividend` | Знаходити невідоме ділене в простих рівняннях | 3 | Implemented |
| `math.algebra.unknown-divisor` | Знаходити невідомий дільник у простих рівняннях із ненульовими числами | 3 | Implemented |

#### SkillGroup 5.4. Закономірності (2)

**ID:** `math.algebra.patterns`

**Implementation:** Implemented — Group data file and all Skill data files are present.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.algebra.arithmetic-pattern` | Знаходити й продовжувати числову закономірність з постійним кроком | 1–2 | Implemented |
| `math.algebra.growing-pattern` | Визначати правило зростання закономірності за кількома прикладами | 2–3 | Implemented |

#### SkillGroup 5.5. Символьне моделювання (1)

**ID:** `math.algebra.formalization`

**Implementation:** Implemented — Group data file and all Skill data files are present.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.algebra.translate-situation` | Перекладати просту ситуацію в числовий вираз або рівняння | 1–3 | Implemented |

### Domain 6. Геометрія (35)

**Implementation:** Domain + 3/10 Group configs; 0/35 Skill files — **Partial**

**ID:** `math.geometry`

#### SkillGroup 6.1. Просторова орієнтація (3)

**ID:** `math.geometry.orientation`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.geometry.position-words` | Описувати положення об’єкта: ліворуч, праворуч, вище, нижче, між, перед, за | 1 | — |
| `math.geometry.grid-map-navigation` | Читати й складати простий план на сітці та описувати шлях/позицію | 3 | — |
| `math.geometry.spatial-orientation-path` | Складати й виконувати покрокові просторові інструкції маршруту | 1–3 | — |

#### SkillGroup 6.2. Плоскі фігури (5)

**ID:** `math.geometry.figures`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.geometry.identify-2d-shapes` | Розпізнавати круг, трикутник, квадрат і прямокутник незалежно від розміру й повороту | 1 | — |
| `math.geometry.shape-attributes` | Класифікувати плоскі фігури за кількістю сторін і вершин | 1–2 | — |
| `math.geometry.polygon` | Розпізнавати многокутник і визначати його вершини та сторони | 2 | — |
| `math.geometry.triangle-rectangle-square` | Пояснювати властивості трикутника, прямокутника та квадрата | 2 | — |
| `math.geometry.compose-decompose-shapes` | Складати нову фігуру з частин і розкладати складену фігуру на прості | 1–3 | — |

#### SkillGroup 6.3. Просторові тіла (3)

**ID:** `math.geometry.solids`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.geometry.shape-on-solid-surface` | Впізнавати плоскі фігури на гранях/поверхнях просторових тіл | 2 | — |
| `math.geometry.identify-3d-solids` | Розпізнавати куб, кулю, циліндр, конус та інші базові просторові тіла | 1–2 | — |
| `math.geometry.spatial-solids-attributes` | Описувати грані, ребра й вершини куба та прямокутного паралелепіпеда | 3+ | — |

#### SkillGroup 6.4. Лінії (5)

**ID:** `math.geometry.lines`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.geometry.lines-and-points` | Розрізняти точку, пряму, криву й ламану | 1–2 | — |
| `math.geometry.segment` | Розпізнавати, будувати й позначати відрізок із кінцевими точками | 1–2 | — |
| `math.geometry.ray` | Розрізняти промінь, відрізок і пряму | 2–3 | — |
| `math.geometry.closed-open-lines` | Розрізняти замкнені й незамкнені лінії | 1–2 | — |
| `math.geometry.parallel-perpendicular` | Розпізнавати паралельні та перпендикулярні прямі на рисунках і в довкіллі | 3+ | — |

#### SkillGroup 6.5. Кути (3)

**ID:** `math.geometry.angles`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.geometry.angle-as-turn` | Інтерпретувати кут як величину повороту й порівнювати кути з прямим | 3 | — |
| `math.geometry.right-angle` | Розпізнавати прямий кут і перевіряти його за еталоном | 2–3 | — |
| `math.geometry.angle-types` | Розрізняти гострий, прямий і тупий кути на наочних прикладах | 3+ | — |

#### SkillGroup 6.6. Коло (3)

**ID:** `math.geometry.circles`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.geometry.circle-disk` | Розрізняти коло та круг | 2–3 | — |
| `math.geometry.radius-diameter` | Показувати центр, радіус і діаметр кола та пов’язувати діаметр із двома радіусами | 3 | — |
| `math.geometry.draw-circle` | Будувати коло заданого радіуса циркулем | 3 | — |

#### SkillGroup 6.7. Перетворення (3)

**ID:** `math.geometry.transformations`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.geometry.turns-quarters` | Демонструвати чверть-, пів- і три-чверть оберту за і проти годинникової стрілки | 2 | — |
| `math.geometry.translations-reflections` | Виконувати та розпізнавати прості зсуви й віддзеркалення фігури | 2–3 | — |
| `math.geometry.reflection-symmetry` | Знаходити вісь симетрії у простих фігурах і добудовувати симетричну частину | 2–3 | — |

#### SkillGroup 6.8. Периметр (4)

**ID:** `math.geometry.perimeter`

**Implementation:** Group config implemented; individual Skill files not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.geomeasure.measure-perimeter` | Вимірювати периметр многокутника як суму довжин сторін | 2–3 | — |
| `math.geomeasure.rectangle-perimeter` | Обчислювати периметр прямокутника за довжинами його сторін | 3 | — |
| `math.geomeasure.square-perimeter` | Обчислювати периметр квадрата за довжиною сторони | 3 | — |
| `math.geomeasure.unknown-side-from-perimeter` | Знаходити невідому сторону прямокутника за периметром та іншими сторонами | 3+ | — |

#### SkillGroup 6.9. Площа (4)

**ID:** `math.geometry.area`

**Implementation:** Group config implemented; individual Skill files not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.geomeasure.composite-area` | Розбивати прямокутну складену фігуру на прямокутники та додавати площі частин | 3 | — |
| `math.geomeasure.area-as-covering` | Розуміти площу як міру поверхні, вкритої однаковими одиничними квадратами | 3+ | — |
| `math.geomeasure.count-unit-squares` | Визначати площу простої фігури підрахунком одиничних квадратів | 3+ | — |
| `math.geomeasure.rectangle-area-model` | Пов’язувати площу прямокутника з добутком довжин його сторін у цілих одиницях | 3+ | — |

#### SkillGroup 6.10. Зв’язок периметра та площі (2)

**ID:** `math.geometry.perimeterArea`

**Implementation:** Group config implemented; individual Skill files not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.geomeasure.area-perimeter-contrast` | Будувати фігури з однаковим периметром і різними площами або навпаки | 3 | — |
| `math.geomeasure.perimeter-vs-area` | Розрізняти периметр і площу та добирати відповідний спосіб вимірювання | 3+ | — |
### Domain 7. Вимірювання (21)

**Implementation:** Not started (no Domain/Group/Skill data files)

**ID:** `math.measurement`

#### SkillGroup 7.1. Довжина (10)

**ID:** `math.measurement.length`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.measure.compare-length` | Порівнювати довжини безпосереднім накладанням і непрямим способом | 1 | — |
| `math.measure.nonstandard-length` | Вимірювати довжину послідовним прикладанням однакових умовних одиниць | 1 | — |
| `math.measure.ruler-zero` | Правильно користуватися лінійкою, починаючи вимірювання від нульової позначки | 1–2 | — |
| `math.measure.measure-centimeters` | Вимірювати та креслити відрізки заданої довжини в сантиметрах | 1–2 | — |
| `math.measure.millimeters` | Вимірювати короткі відрізки в міліметрах і співвідносити мм із см | 2–3 | — |
| `math.measure.decimeters` | Співвідносити дециметр і сантиметр та виконувати прості перетворення | 2 | — |
| `math.measure.meters` | Співвідносити метр, дециметр і сантиметр у практичних вимірах | 2–3 | — |
| `math.measure.kilometers` | Вибирати кілометри для великих відстаней і співвідносити їх із метрами | 3 | — |
| `math.measure.estimate-length` | Оцінювати довжину та перевіряти результат інструментом | 1–3 | — |
| `math.measure.add-subtract-lengths` | Додавати й віднімати довжини в узгоджених одиницях | 2–3 | — |

#### SkillGroup 7.2. Маса (4)

**ID:** `math.measurement.mass`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.measure.centner-kilogram` | Застосовувати співвідношення центнера й кілограма у задачах | 3 | — |
| `math.measure.compare-mass` | Порівнювати масу предметів за допомогою терезів або рівноваги | 1–2 | — |
| `math.measure.kilogram-gram` | Використовувати кілограм і грам та співвідносити їх | 2–3 | — |
| `math.measure.weigh-object` | Зчитувати покази вагів і записувати результат із одиницею | 2–3 | — |

#### SkillGroup 7.3. Місткість (3)

**ID:** `math.measurement.capacity`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.measure.capacity-concept` | Порівнювати місткість посудин через переливання або вимірювання | 1–2 | — |
| `math.measure.liter` | Вимірювати й оцінювати місткість у літрах | 2 | — |
| `math.measure.milliliter` | Використовувати мілілітри та співвідносити їх із літрами | 3+ | — |

#### SkillGroup 7.4. Температура (1)

**ID:** `math.measurement.temperature`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.measure.temperature-read` | Зчитувати невід’ємну температуру з простої шкали термометра | 3+ | — |

#### SkillGroup 7.5. Вимірювальні навички (3)

**ID:** `math.measurement.general`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.measure.standard-unit-purpose` | Пояснювати, чому для порівняння вимірів потрібна узгоджена одиниця | 1–2 | — |
| `math.measure.choose-appropriate-unit` | Вибирати доречну одиницю для довжини, маси чи місткості | 2–3 | — |
| `math.measure.word-problems-measures` | Розв’язувати практичні задачі на величини в однакових або сумісних одиницях | 2–3 | — |

### Domain 8. Час (13)

**Implementation:** Not started (no Domain/Group/Skill data files)

**ID:** `math.time`

#### SkillGroup 8.1. Календар (4)

**ID:** `math.time.calendar`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.time.day-sequence` | Упорядковувати частини доби та пов’язувати їх із повсякденними подіями | 1 | — |
| `math.time.leap-year-days` | Пояснювати відмінність звичайного і високосного років та користуватися календарем | 3 | — |
| `math.time.week-month-year` | Називати дні тижня, місяці року й орієнтуватися в календарі | 1–2 | — |
| `math.time.calendar-interval` | Визначати кількість днів між календарними датами в нескладних випадках | 2–3 | — |

#### SkillGroup 8.2. Годинник (5)

**ID:** `math.time.clock`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.time.read-24-hour-clock` | Читати 24-годинний запис часу та співвідносити його з часом доби | 3 | — |
| `math.time.read-hour` | Визначати час на аналоговому та цифровому годиннику з точністю до години | 1 | — |
| `math.time.read-half-quarter` | Зчитувати половину та чверть години на годиннику | 1–2 | — |
| `math.time.read-five-minute` | Зчитувати час із точністю до п’яти хвилин | 2 | — |
| `math.time.read-minute` | Зчитувати й записувати час із точністю до хвилини | 3 | — |

#### SkillGroup 8.3. Тривалість (4)

**ID:** `math.time.duration`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.time.convert-hours-minutes` | Застосовувати співвідношення 1 год = 60 хв | 2–3 | — |
| `math.time.convert-minutes-seconds` | Застосовувати співвідношення 1 хв = 60 с | 3 | — |
| `math.time.duration` | Знаходити тривалість події за часом початку та завершення | 2–3 | — |
| `math.time.find-start-or-end` | Знаходити час початку чи завершення за тривалістю події | 3 | — |

### Domain 9. Гроші (6)

**Implementation:** Not started (no Domain/Group/Skill data files)

**ID:** `math.money`

#### SkillGroup 9.1. Грошові суми (3)

**ID:** `math.money.denominations`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.money.recognize-denominations` | Розпізнавати номінали монет і купюр заданої валюти | 1–2 | — |
| `math.money.compose-amount` | Складати задану суму різними комбінаціями грошових одиниць | 1–2 | — |
| `math.money.compare-amounts` | Порівнювати грошові суми в межах однієї валюти | 1–2 | — |

#### SkillGroup 9.2. Покупки (3)

**ID:** `math.money.transactions`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.money.calculate-change` | Знаходити решту після покупки | 2–3 | — |
| `math.money.unit-price-total` | Розв’язувати задачі на ціну, кількість і загальну вартість | 3 | — |
| `math.money.budget-constraint` | Вибирати покупки з урахуванням заданого бюджету | 3 | — |

### Domain 10. Дані (15)

**Implementation:** Not started (no Domain/Group/Skill data files)

**ID:** `math.data`

#### SkillGroup 10.1. Збирання даних (5)

**ID:** `math.data.collection`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.data.classify-by-attribute` | Групувати об’єкти за однією або двома визначеними ознаками | 1 | — |
| `math.data.formulate-investigation-question` | Формулювати запитання, для відповіді на яке потрібно зібрати дані | 3 | — |
| `math.data.collect-counts` | Збирати прості дані підрахунком та фіксувати частоти категорій | 1–2 | — |
| `math.data.tally-marks` | Записувати кількості умовними позначками й відновлювати їх | 2 | — |
| `math.data.fill-simple-table` | Заповнювати таблицю результатами спостереження або вимірювання | 2 | — |

#### SkillGroup 10.2. Подання даних (7)

**ID:** `math.data.presentation`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.data.line-plot-measurements` | Фіксувати серію вимірювань на точковій/лінійній діаграмі з числовою віссю (line plot) | 2–3 | — |
| `math.data.read-simple-table` | Читати значення з таблиці та відповідати на прості питання за нею | 1–2 | — |
| `math.data.read-pictograph` | Читати піктограму, де один символ відповідає одному об’єкту | 1–2 | — |
| `math.data.build-pictograph` | Будувати просту піктограму за підрахованими даними | 2 | — |
| `math.data.read-bar-chart` | Читати стовпчикову діаграму й порівнювати висоти стовпчиків | 2–3 | — |
| `math.data.build-bar-chart` | Створювати просту стовпчикову діаграму за таблицею | 2–3 | — |
| `math.data.scaled-chart` | Читати діаграму, де одна позначка відповідає кільком одиницям | 3+ | — |

#### SkillGroup 10.3. Інтерпретація даних (3)

**ID:** `math.data.interpretation`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.data.compare-categories` | Знаходити різницю та суму кількостей за таблицею чи діаграмою | 2–3 | — |
| `math.data.interpret-conclusion` | Формулювати висновок, який обґрунтовують наведені дані | 2–3 | — |
| `math.data.missing-information` | Визначати, якої інформації бракує для відповіді на поставлене питання | 3 | — |

### Domain 11. Ймовірність (4)

**Implementation:** Not started (no Domain/Group/Skill data files)

**ID:** `math.probability`

#### SkillGroup 11.1. Випадкові події (3)

**ID:** `math.probability.events`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.probability.certain-impossible` | Розрізняти достовірні й неможливі події на конкретних прикладах | 2–3 | — |
| `math.probability.likelihood-language` | Порівнювати повсякденні події як більш або менш імовірні, пояснюючи вибір | 2–3 | — |
| `math.probability.list-outcomes` | Називати можливі результати простого випадкового експерименту | 3 | — |

#### SkillGroup 11.2. Експерименти (1)

**ID:** `math.probability.experiments`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.probability.experiment-variation` | Порівнювати серії повторних випадкових експериментів і помічати відмінності результатів | 3 | — |

### Domain 12. Задачі (23)

**Implementation:** Not started (no Domain/Group/Skill data files)

**ID:** `math.problemSolving`

#### SkillGroup 12.1. Аналіз умови (3)

**ID:** `math.problemSolving.conditions`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.problems.identify-known-unknown` | Виділяти умову задачі, відомі величини й запитання | 1 | — |
| `math.problems.find-extraneous-data` | Розпізнавати зайві дані в текстовій задачі | 2–3 | — |
| `math.problems.find-missing-data` | Пояснювати, чому задачу неможливо розв’язати без додаткових даних | 2–3 | — |

#### SkillGroup 12.2. Моделі задач (4)

**ID:** `math.problemSolving.models`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.problems.choose-operation-add-sub` | Вибирати додавання чи віднімання відповідно до змісту простої задачі | 1 | — |
| `math.problems.choose-operation-mul-div` | Вибирати множення чи ділення за змістом рівних груп | 2 | — |
| `math.problems.one-step-model` | Будувати малюнок, схему або вираз до одноходової задачі | 1–2 | — |
| `math.problems.create-problem` | Складати текстову задачу за малюнком, таблицею чи виразом | 1–3 | — |

#### SkillGroup 12.3. Планування розв’язання (5)

**ID:** `math.problemSolving.planning`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.problems.two-step-plan` | Складати план розв’язання задачі на дві дії та пояснювати порядок | 2–3 | — |
| `math.problems.three-step-plan` | Розв’язувати нескладні складені задачі на три дії | 3+ | — |
| `math.problems.inverse-problem` | Складати та розв’язувати обернену задачу | 2–3 | — |
| `math.problems.explain-answer-units` | Записувати відповідь із відповідними одиницями та перевіряти змістовну правдоподібність | 1–3 | — |
| `math.problems.multiple-solution-strategies` | Порівнювати два правильні способи розв’язання тієї самої задачі | 2–3 | — |

#### SkillGroup 12.4. Задачі на порівняння (4)

**ID:** `math.problemSolving.comparisons`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.problems.additive-comparison` | Розв’язувати задачі на «на скільки більше / менше» | 1–2 | — |
| `math.problems.increase-decrease-number` | Розв’язувати задачі на збільшення або зменшення на задане число | 1–2 | — |
| `math.problems.multiplicative-comparison` | Розв’язувати задачі на «у скільки разів більше / менше» | 3 | — |
| `math.problems.increase-decrease-factor` | Розв’язувати задачі на збільшення або зменшення в задану кількість разів | 3 | — |

#### SkillGroup 12.5. Задачі на частини (2)

**ID:** `math.problemSolving.parts`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.problems.part-whole-addsub` | Розв’язувати задачі на ціле й частини та складати обернені задачі | 1–2 | — |
| `math.problems.fractions-context` | Розв’язувати сюжетні задачі на знаходження одиничної частини кількості | 3 | — |

#### SkillGroup 12.6. Задачі на групи (2)

**ID:** `math.problemSolving.groups`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.problems.correspondence-combinations` | Лічити всі прості комбінації вибору по одному з двох наборів (одяг, меню тощо) | 3 | — |
| `math.problems.equal-groups` | Розв’язувати задачі на кількість груп, розмір групи та загальну кількість | 2–3 | — |

#### SkillGroup 12.7. Задачі на величини (3)

**ID:** `math.problemSolving.quantities`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.problems.work-rate-time` | Використовувати зв'язок продуктивність × час = виконаний обсяг у простих задачах | 3 | — |
| `math.problems.price-quantity-cost` | Моделювати задачі на вартість через зв’язок ціни, кількості та суми | 3 | — |
| `math.problems.measurement-context` | Моделювати задачі на довжину, масу, місткість і час | 2–3 | — |

### Domain 13. Міркування (11)

**Implementation:** Not started (no Domain/Group/Skill data files)

**ID:** `math.reasoning`

#### SkillGroup 13.1. Аргументація (5)

**ID:** `math.reasoning.argumentation`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.reasoning.classify-and-justify` | Об’єднувати об’єкти чи числа за правилом і пояснювати вибір | 1–3 | — |
| `math.reasoning.find-counterexample` | Знаходити приклад, який спростовує хибне узагальнення | 3+ | — |
| `math.reasoning.explain-strategy` | Пояснювати обраний спосіб обчислення словами, схемою чи математичним записом | 1–3 | — |
| `math.reasoning.distinguish-example-rule` | Відрізняти один приклад від загального правила, яке потребує перевірки | 3+ | — |
| `math.reasoning.draw-conclusion` | Формулювати висновок на основі умов та результатів міркування | 2–3 | — |

#### SkillGroup 13.2. Самоперевірка (3)

**ID:** `math.reasoning.verification`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.reasoning.check-reasonableness` | Оцінювати, чи може відповідь бути правильною за змістом та порядком величини | 2–3 | — |
| `math.reasoning.spot-calculation-error` | Знаходити неправильний крок у чужому розв’язанні й пояснювати його | 2–3 | — |
| `math.reasoning.verify-with-second-method` | Перевіряти обчислення іншим способом, коли це можливо | 2–3 | — |

#### SkillGroup 13.3. Логіка (2)

**ID:** `math.reasoning.logic`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.reasoning.complete-pattern` | Доповнювати геометричну або числову закономірність відповідно до встановленого правила | 1–2 | — |
| `math.reasoning.logical-elimination` | Використовувати виключення неможливих варіантів у простих логічних задачах | 2–3 | — |

#### SkillGroup 13.4. Способи представлення (1)

**ID:** `math.reasoning.representations`

**Implementation:** Not started — Group data file not implemented.

| Skill ID | Перевірюване уміння | Орієнтир | Status |
|---|---|:---:|:---:|
| `math.reasoning.multiple-representations` | Переходити між предметною моделлю, схемою, словесним поясненням і виразом | 1–3 | — |

Додаткові 26 навичок внесено за результатами [методичного аудиту](./skills-inventory-audit.md). Розміщення в групах і орієнтовні рівні не є вимогами до майбутньої моделі Skill.

## Правила методичного рев’ю перед генерацією коду

1. **Повнота:** перевірити, що покрито базові поняття, операції та типові сценарії їх застосування; зафіксувати пропуски.
2. **Гранулярність:** об’єднати Skill, які неможливо відрізнити на рівні доказів навчання; розділити надто загальні Skill, якщо їхні складові мають незалежну діагностику. Наприклад, `multiply.by-2` — нормальна одиниця відстеження, а `2×7` — варіант завдання.
3. **Семантика:** відрізняти нову компетенцію від іншого способу її викладання, іншого типу питання або повторення вже освоєного матеріалу.
4. **Межі:** уточнити випадки «3+» відповідно до обраної аудиторії й майбутніх програм; не змішувати складність навчального контенту з віком.
5. **Стабільність:** остаточно погодити ID до першого збирання аналітики. Семантична зміна значення навички потребуватиме нового ID або явної версії.
6. **Без дублювання зв’язків:** майбутні Lesson і Question посилаються на Skill; Skill зберігає лише власний ID, локалізовану назву й технічний шлях до джерела (формується builder/indexer на наступному етапі).

## Поточний стан і наступний етап

**Вже реалізовано:** `Skill`, `SkillGroup`, `SkillDomain`, їхні конфігураційні builders, barrel-експорти та тести. У `math/skillsTaxonomy` є 15 індивідуальних Skill-файлів лічби, 11 локалізованих конфігів груп та 3 конфіги доменів. Доменні `groupIds` вказують також на інші, ще не матеріалізовані групи — їхні окремі data-файли будуть створені наступними етапами. **Далі:** реалізувати окремі Skill-файли та повний індекс джерел, який надаватиме `fileLocation` і перевірятиме цілісність зв'язків. Семантичний перегляд решти можливих композитів описано в [звіті](./skills-taxonomy-review.md).

## Джерела для перевірки широти охоплення

Це **синтез**, а не адаптація конкретного стандарту. Для контролю пропусків зіставлено напрями ранньої математичної освіти з:

- Common Core — Grade 1: https://www.thecorestandards.org/Math/Content/1/introduction/
- Common Core — Grade 2: https://www.thecorestandards.org/Math/Content/2/introduction/
- Common Core — Grade 3: https://www.thecorestandards.org/Math/Content/3/introduction/
- NCETM Primary Mastery — Multiplication and Division: https://www.ncetm.org.uk/teaching-for-mastery/mastery-materials/primary-mastery-professional-development/multiplication-and-division/
- МОН України — програми для 1–4 класів (для порівняння, не для прив’язки): https://mon.gov.ua/osvita-2/zagalna-serednya-osvita/osvitni-programi/navchalni-programi-dlya-1-4-klasiv

**Редакційна примітка:** жодне із наведених джерел не є «нормативною програмою Світла». Фактичний список навичок, групування та рівні — проєктний вибір для подальшого рев’ю.
