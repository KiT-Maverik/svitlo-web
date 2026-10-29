# Mathematics — Skills Taxonomy

Date: 2026-10-28

An approved subject-level catalog of foundational mathematical competencies covering counting, natural numbers, fractions, arithmetic, algebraic thinking, geometry, measurement, time, money, data, probability, problem solving, and mathematical reasoning. The Domain → Group → Skill hierarchy classifies competencies; it does not prescribe school grades, lesson order, or assessment criteria. Formal negative numbers, percentages, proportional reasoning, and advanced algebra are outside the current taxonomy.

## SUMMARY

Domains: 13
Groups: 60
Skills: 285

Code files: 13/13 Domains · 60/60 Groups · 285/285 Skills

## DOMAINS

### Counting

Groups: 5 · Skills: 15

Code: [Code](../../src/data/skillsTaxonomy/counting/counting.data.ts)

This domain develops the concept of quantity through one-to-one matching between objects and number words, movement along the natural-number sequence, identification of ordinal positions, and grouping as an efficient way to count.

#### Number sequences

Skills: 5

Code: [Code](../../src/data/skillsTaxonomy/counting/sequence/sequence.data.ts)

The learner uses the order of natural numbers to move forward or backward and restore missing entries in a sequence. Counting does not have to restart at one; continuation from a given position is an essential distinction.

##### One-to-one correspondence when counting

Code: [Code](../../src/data/skillsTaxonomy/counting/sequence/skills/oneToOne.data.ts)

Each object is matched with exactly one number word regardless of the objects' arrangement. Changing the order in which a set is traversed does not change its cardinality.

##### Counting forward within 20

Code: [Code](../../src/data/skillsTaxonomy/counting/sequence/skills/forward20.data.ts)

Starting at 8, the next numbers are 9, 10, and 11. The competency concerns continuing the number sequence from any valid starting point, not merely reciting a memorized sequence from one.

##### Counting backward within 20

Code: [Code](../../src/data/skillsTaxonomy/counting/sequence/skills/backward20.data.ts)

Starting at 14, the preceding numbers are 13, 12, and 11. Each step decreases by one, including when the sequence crosses a boundary between tens.

##### Counting forward and backward within 100

Code: [Code](../../src/data/skillsTaxonomy/counting/sequence/skills/forward100.data.ts)

Counting can begin anywhere in the two-digit range: from 48 the learner crosses 50 and can count backward across 40 without resetting to the beginning of the sequence.

##### Continuing number sequences within 1,000

Code: [Code](../../src/data/skillsTaxonomy/counting/sequence/skills/forward1000.data.ts)

A missing term is determined by its neighbors and the step of one, including at hundreds boundaries such as 299, 300, 301.

#### Cardinality

Skills: 4

Code: [Code](../../src/data/skillsTaxonomy/counting/cardinality/cardinality.data.ts)

Cardinality is the number of elements in a set, including an empty set. This group distinguishes establishing a set's size from comparing the sizes of two sets.

##### Determining how many objects are in a set

Code: [Code](../../src/data/skillsTaxonomy/counting/cardinality/skills/basicCardinality.data.ts)

After every object has been counted exactly once, the final spoken number describes the size of the entire set rather than only the last object visited.

##### Understanding zero as an empty quantity

Code: [Code](../../src/data/skillsTaxonomy/counting/cardinality/skills/zero.data.ts)

An empty box contains zero items even though the box itself exists. Having no elements in a set must not be confused with the absence of a container or object.

##### Comparing sets by matching or counting

Code: [Code](../../src/data/skillsTaxonomy/counting/cardinality/skills/compareSets.data.ts)

If every element in one set can be paired with exactly one element in the other and nothing remains unmatched, the sets have equal cardinality regardless of the physical sizes of the objects.

##### Counting objects in groups of tens or hundreds

Code: [Code](../../src/data/skillsTaxonomy/counting/cardinality/skills/groupAndCount.data.ts)

Forming complete tens or hundreds allows a large collection to be counted efficiently. Any leftover individual items must still be included in the total.

#### Skip counting

Skills: 4

Code: [Code](../../src/data/skillsTaxonomy/counting/steps/steps.data.ts)

The learner moves along the number sequence in fixed increments corresponding to equal-sized groups, tens, or hundreds, rather than enumerating individual units.

##### Counting in steps of 2

Code: [Code](../../src/data/skillsTaxonomy/counting/steps/skills/countBy2.data.ts)

The sequence 2, 4, 6, 8 represents adding another pair at each step. Each counted group contains the same number of objects.

##### Counting in steps of 5

Code: [Code](../../src/data/skillsTaxonomy/counting/steps/skills/countBy5.data.ts)

Each increment represents another complete group of five. The sequence 5, 10, 15 can be grounded in groups of five fingers or bundles of objects.

##### Counting in steps of 10

Code: [Code](../../src/data/skillsTaxonomy/counting/steps/skills/countBy10.data.ts)

In 230, 240, 250, the count increases by ten without adding single units one at a time; the number after 290 is 300.

##### Counting in steps of 100

Code: [Code](../../src/data/skillsTaxonomy/counting/steps/skills/countBy100.data.ts)

The progression 400, 500, 600 adds one hundred at each step while preserving the lower place values.

#### Ordinal counting

Skills: 1

Code: [Code](../../src/data/skillsTaxonomy/counting/ordinal/ordinal.data.ts)

Ordinal position identifies where an element occurs in an ordered sequence, not how many elements are in the entire set. It distinguishes the questions 'Which position?' and 'How many?'.

##### Recognizing ordinal position

Code: [Code](../../src/data/skillsTaxonomy/counting/ordinal/skills/basicOrdinal.data.ts)

In a row of five shapes, the third position does not mean a quantity of three. An object's ordinal number depends on the direction from which the row is counted.

#### Even and odd numbers

Skills: 1

Code: [Code](../../src/data/skillsTaxonomy/counting/parity/parity.data.ts)

Parity is determined by whether a natural-number quantity can be partitioned into pairs without leaving an unmatched item.

##### Identifying even and odd numbers using pairs

Code: [Code](../../src/data/skillsTaxonomy/counting/parity/skills/evenOdd.data.ts)

An even quantity can be divided into disjoint pairs with no object left alone; an odd quantity leaves exactly one unpaired object.

### Натуральні числа

Groups: 5 · Skills: 27

Code: [Code](../../src/data/skillsTaxonomy/numeration/numeration.data.ts)

Визначає, як натуральні числа позначають кількість, як працює десяткова позиційна система та як числові записи порівнюють, розкладають і оцінюють.

#### Числовий запис

Skills: 4

Цифри як знаки десяткової системи та способи співвіднести усну назву, письмовий запис і кількість для одно-, дво- й трицифрових чисел.

Code: [Code](../../src/data/skillsTaxonomy/numeration/notation/notation.data.ts)

##### Розпізнавати та записувати цифри 0–9; відрізняти цифру від числа

Code: [Code](../../src/data/skillsTaxonomy/numeration/notation/skills/digits09.data.ts)

Одна цифра є символом із набору 0–9, а число може потребувати кількох цифр: 12 не є новою цифрою.

##### Читати, записувати й співвідносити з кількістю числа 0–20

Code: [Code](../../src/data/skillsTaxonomy/numeration/notation/skills/readWrite20.data.ts)

Записи «сімнадцять», 17 і набір із 17 предметів означають ту саму кількість; нуль також має власний запис.

##### Читати й записувати числа в межах 100

Code: [Code](../../src/data/skillsTaxonomy/numeration/notation/skills/readWrite100.data.ts)

Перехід від 9 до 10 вимагає двох позицій; у 46 цифри 4 та 6 позначають різні розряди.

##### Читати й записувати трицифрові числа, включно з нулями всередині запису

Code: [Code](../../src/data/skillsTaxonomy/numeration/notation/skills/readWrite1000.data.ts)

У 305 відсутні десятки, але позиція нуля необхідна, щоб запис не означав 35.

#### Розрядність

Skills: 11

Десяткова структура числа, значення розряду, переходи між одиницями, десятками й сотнями та еквівалентні розклади одного значення.

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/placeValue.data.ts)

##### Представляти число різними рівносильними розбиттями, не лише за стандартними розрядами (146 = 130 + 16)

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/flexiblePartition.data.ts)

Один результат допускає нестандартні розклади: 146 можна скласти як 130 + 16 або 100 + 46 без зміни значення.

##### Визначати загальну кількість повних десятків чи сотень у трицифровому числі

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/totalTensInNumber.data.ts)

У числі 348 міститься 34 повні десятки, а не лише 4 десятки в десятковому розряді.

##### Групувати десять одиниць в один десяток і виконувати зворотне розгрупування

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/makeTen.data.ts)

Заміна десяти одиниць одним десятком не змінює загальної кількості; обмін можна виконати і в зворотний бік.

##### Складати й розкладати двоцифрове число на десятки та одиниці

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/tensOnes.data.ts)

У 57 міститься п’ять повних десятків і сім одиниць; спосіб запису пов’язаний із предметними блоками.

##### Пояснювати, що десять десятків утворюють одну сотню

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/makeHundred.data.ts)

Десять груп по десять утворюють одну нову розрядну одиницю; це основа переходу 90 → 100.

##### Складати й розкладати трицифрове число на сотні, десятки й одиниці

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/hundredsTensOnes.data.ts)

У 624 число 6 означає шість сотень, 2 — два десятки, 4 — чотири одиниці, незалежно від вимови.

##### Визначати значення цифри залежно від її розряду

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/digitPlaceValue.data.ts)

У записі 232 перша й остання цифри 2 мають різну вартість: 200 і 2.

##### Пояснювати роль нуля як позначення відсутнього розряду

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/zeroPlaceholder.data.ts)

У 407 середній нуль зберігає місце десятків і запобігає плутанині з 47.

##### Записувати число як суму розрядних доданків і відновлювати його з цієї суми

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/expandedForm.data.ts)

Розклад 583 = 500 + 80 + 3 дає змогу переходити між позиційним записом та сумою розрядних значень.

##### Обмінювати одну сотню на десять десятків, а десяток — на десять одиниць

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/regroupPlaceValues.data.ts)

Одну сотню можна замінити десятьма десятками, а кожен десяток — десятьма одиницями без зміни числа.

##### Співвідносити запис числа, модель блоками, числову пряму та кількість предметів

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/multipleRepresentations.data.ts)

Те саме 24 можна показати двома десятками й чотирма одиницями, точкою на шкалі або набором предметів.

#### Порівняння чисел

Skills: 5

Відношення порядку між кількостями й числовими записами, включно зі знаками порівняння та сортуванням чисел.

Code: [Code](../../src/data/skillsTaxonomy/numeration/comparison/comparison.data.ts)

##### Визначати «більше», «менше», «дорівнює» на конкретних кількостях

Code: [Code](../../src/data/skillsTaxonomy/numeration/comparison/skills/moreLessEqual.data.ts)

Більшу групу визначають за чисельністю, а не за площею, масою чи візуальними розмірами предметів.

##### Правильно використовувати знаки <, >, = для чисел

Code: [Code](../../src/data/skillsTaxonomy/numeration/comparison/skills/comparisonSymbols.data.ts)

Запис 8 > 5 показує напрям порівняння; перестановка чисел вимагає змінити знак на протилежний.

##### Розташовувати числа 0–20 за зростанням або спаданням

Code: [Code](../../src/data/skillsTaxonomy/numeration/comparison/skills/order20.data.ts)

Значення у впорядкованому ряді мають послідовне місце; порядок за спаданням є зворотним до зростання.

##### Порівнювати й впорядковувати двоцифрові числа за розрядами

Code: [Code](../../src/data/skillsTaxonomy/numeration/comparison/skills/order100.data.ts)

Під час порівняння 64 і 59 вирішальним стає десятковий розряд, а одиниці зіставляють лише за рівних десятків.

##### Порівнювати й упорядковувати трицифрові числа за розрядами

Code: [Code](../../src/data/skillsTaxonomy/numeration/comparison/skills/order1000.data.ts)

Для 705 і 699 спочатку зіставляють сотні; нуль у розряді десятків не робить 705 меншим.

#### Числова пряма

Skills: 4

Числа як точки на впорядкованій шкалі з рівними інтервалами; розташування, сусідство та відстань залежать від масштабу.

Code: [Code](../../src/data/skillsTaxonomy/numeration/numberLine/numberLine.data.ts)

##### Знаходити попереднє, наступне та проміжні числа в заданому діапазоні

Code: [Code](../../src/data/skillsTaxonomy/numeration/numberLine/skills/beforeAfterBetween.data.ts)

Між 36 і 38 знаходиться 37; попереднє і наступне відрізняються від заданого на одиницю.

##### Розміщувати числа та знаходити сусідів на числовій прямій до 20

Code: [Code](../../src/data/skillsTaxonomy/numeration/numberLine/skills/numberLine20.data.ts)

Рівновіддалені поділки показують, чому 12 розміщене правіше 9, а його сусіди — 11 і 13.

##### Розміщувати числа на числовій прямій із відповідним масштабом до 1000

Code: [Code](../../src/data/skillsTaxonomy/numeration/numberLine/skills/numberLine1000.data.ts)

У шкалі з позначками через 100 проміжні числа потрібно розташовувати пропорційно, а не за довільною відстанню.

##### Визначати відстань між цілими числами на числовій прямій

Code: [Code](../../src/data/skillsTaxonomy/numeration/numberLine/skills/distanceOnLine.data.ts)

Різниця координат показує кількість одиничних інтервалів між 4 і 9 — їх п’ять, незалежно від напряму.

#### Оцінювання чисел

Skills: 3

Наближені значення чисел і кількостей, округлення та співвіднесення точності оцінки з реальною величиною.

Code: [Code](../../src/data/skillsTaxonomy/numeration/estimation/estimation.data.ts)

##### Округлювати числа до найближчого десятка й пояснювати вибір

Code: [Code](../../src/data/skillsTaxonomy/numeration/estimation/skills/roundToTen.data.ts)

При округленні 46 до десятків результат 50, а 44 — 40; орієнтиром є відстань до сусідніх круглих чисел.

##### Округлювати числа до найближчої сотні й оцінювати похибку

Code: [Code](../../src/data/skillsTaxonomy/numeration/estimation/skills/roundToHundred.data.ts)

Для 349 найближча сотня — 300, для 351 — 400; похибка — різниця між точним та округленим числом.

##### Оцінювати приблизну кількість предметів та перевіряти оцінку підрахунком

Code: [Code](../../src/data/skillsTaxonomy/numeration/estimation/skills/estimateQuantity.data.ts)

Оцінку для розсипаних предметів можна зробити за частиною набору, а потім зіставити з точним підрахунком.

### Дроби

Groups: 4 · Skills: 19

Code: [Code](../../src/data/skillsTaxonomy/fractions/fractions.data.ts)

Пояснює частину й ціле через рівні поділи, чисельник і знаменник, зображення на моделях та числовій прямій; охоплює початкові порівняння й дії з дробами.

#### Представлення дробів

Skills: 12

Рівні частини визначеного цілого, одиничні й неoдиничні дроби, їхній запис та геометричні інтерпретації, у тому числі значення понад одиницю.

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/representation.data.ts)

##### Розрізняти ціле, його рівні частини й довільні нерівні шматки

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/wholeAndEqualParts.data.ts)

Половинами можна назвати лише дві однакові за величиною частини одного цілого; довільний розріз на дві частини цього не гарантує.

##### Розміщувати на моделі або прямій дроби, більші за одиницю

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/fractionGreaterThanOne.data.ts)

Число 5/4 — це ціла одиниця й ще одна чверть; точка розташована правіше 1, а не між 0 і 1.

##### Пов'язувати десяті з поділом цілого на 10 рівних частин та діленням на 10

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/tenthsAsDivision.data.ts)

Одна десята виникає від десяти рівних частин визначеного цілого; її можна співвіднести з часткою 1 ÷ 10.

##### Показувати одиничний дріб 1/n на фігурі, відрізку або наборі предметів

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/unitFractionModel.data.ts)

У моделі 1/3 потрібно показати одну з трьох рівних частин саме обраного цілого, а не будь-який малий фрагмент.

##### Читати й записувати одиничні дроби: половина, третина, чверть тощо

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/unitFractionRead.data.ts)

Слова «чверть» і запис 1/4 означають одну з чотирьох рівних частин, незалежно від геометричної форми цілого.

##### Пояснювати, що знаменник указує на кількість рівних частин цілого

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/denominatorMeaning.data.ts)

У 3/5 нижнє число задає, на скільки рівних частин поділено ціле, а не скільки їх взяли.

##### Пояснювати, скільки рівних частин позначає чисельник

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/numeratorMeaning.data.ts)

У 3/5 верхнє число вказує на три взяті частини із п’яти рівних, визначених знаменником.

##### Представляти кілька рівних частин одного цілого дробом a/b

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/nonUnitModel.data.ts)

Три однакові восьмі частини складають 3/8; усі частини повинні належати тому самому цілому.

##### Пояснювати, чому величина частини залежить від розміру цілого

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/wholeDependence.data.ts)

Половина великої піци може бути більшою за половину маленької; порівнювати дробові частини без спільного цілого некоректно.

##### Розміщувати прості дроби між 0 і 1 на числовій прямій

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/numberLine.data.ts)

Між 0 та 1 точка 3/4 розташована на третьому із чотирьох рівних кроків від нуля.

##### Пояснювати на моделі, що n/n відповідає одному цілому

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/oneAsFraction.data.ts)

Якщо взяти всі чотири чверті того самого цілого, сума покриває його повністю: 4/4 = 1.

##### Показувати на наочних моделях рівність простих дробів, наприклад 1/2 = 2/4

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/equivalentVisual.data.ts)

Дві четверті покривають таку саму частку цілого, як одна друга; еквівалентність можна бачити без обчислення.

#### Порівняння дробів

Skills: 3

Відношення величин дробових частин для спільного цілого за фіксованого чисельника або знаменника.

Code: [Code](../../src/data/skillsTaxonomy/fractions/comparison/comparison.data.ts)

##### Порівнювати дроби з однаковим чисельником, спираючись на однакове ціле

Code: [Code](../../src/data/skillsTaxonomy/fractions/comparison/skills/compareSameNumerator.data.ts)

За спільного цілого 2/5 більше за 2/7: однакову кількість частин беруть із більших за розміром шматків.

##### Порівнювати одиничні дроби від одного й того самого цілого

Code: [Code](../../src/data/skillsTaxonomy/fractions/comparison/skills/compareUnit.data.ts)

Для того самого яблука 1/2 більше за 1/4, оскільки поділ на більше рівних частин робить кожну меншою.

##### Порівнювати дроби з однаковими знаменниками через наочну модель

Code: [Code](../../src/data/skillsTaxonomy/fractions/comparison/skills/sameDenominatorModel.data.ts)

За однакових знаменників 5/8 більше за 3/8, бо розмір однієї восьмої не змінюється.

#### Обчислення з дробами

Skills: 2

Зміна кількості рівних частин одного цілого через додавання чи вилучення при спільному знаменнику.

Code: [Code](../../src/data/skillsTaxonomy/fractions/arithmetic/arithmetic.data.ts)

##### Додавати прості дроби з однаковими знаменниками в межах одного цілого

Code: [Code](../../src/data/skillsTaxonomy/fractions/arithmetic/skills/addLikeDenominators.data.ts)

У 2/7 + 3/7 додають кількість сьомих і залишають знаменник 7; сума в такому випадку не перевищує цілого.

##### Віднімати прості дроби з однаковими знаменниками в межах одного цілого

Code: [Code](../../src/data/skillsTaxonomy/fractions/arithmetic/skills/subtractLikeDenominators.data.ts)

У 5/6 − 2/6 віднімають дві рівні шості частини від п’яти; розмір частини не змінюється.

#### Частини величини

Skills: 2

Перехід між цілою величиною і її одиничною частиною з використанням ділення та зворотної операції.

Code: [Code](../../src/data/skillsTaxonomy/fractions/portions/portions.data.ts)

##### Знаходити 1/n від числа або вимірюваної величини через ділення

Code: [Code](../../src/data/skillsTaxonomy/fractions/portions/skills/findUnitPart.data.ts)

Одна четверта від 20 — п’ять: рівномірне розбиття двадцяти одиниць на чотири групи дає розмір однієї групи.

##### Знаходити ціле за відомою одиничною частиною

Code: [Code](../../src/data/skillsTaxonomy/fractions/portions/skills/reconstructWhole.data.ts)

Якщо одна п’ята набору становить 3 предмети, усі п’ять однакових частин разом містять 15.

### Арифметика

Groups: 5 · Skills: 79

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/arithmetic.data.ts)

Охоплює смисл чотирьох арифметичних дій, способи усних і письмових обчислень, властивості операцій та перевірку результатів у межах початкової математики.

#### Додавання

Skills: 10

Об’єднання кількостей, властивості суми, розрядний обмін і способи виконання та контролю обчислень.

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/addition.data.ts)

##### Моделювати додавання як об’єднання кількостей або збільшення кількості

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/addMeaning.data.ts)

З’єднання наборів із 3 та 4 предметів дає 7; збільшення початкової кількості на 4 має той самий результат.

##### Пояснювати й застосовувати додавання нуля

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/addZero.data.ts)

Додавання нічого не змінює початкового значення: 8 + 0 та 0 + 8 обидва дорівнюють 8.

##### Змінювати порядок доданків без зміни суми та застосовувати це для обчислень

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/commutativeAddition.data.ts)

У парах наборів 3 + 5 і 5 + 3 загальна кількість однакова, хоча порядок груп різний.

##### Використовувати доповнення до десяти під час додавання

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/makeTenStrategy.data.ts)

У прикладі 8 + 5 можна спочатку взяти 2 до десятка, а далі додати решту 3.

##### Додавати одноцифрові числа з переходом через десяток

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/crossTenAddition.data.ts)

Перехід 9 + 7 зручно виконати як 10 + 6 після добору одиниці до десятка.

##### Додавати двоцифрові числа з утворенням нового десятка

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/twoDigitCarry.data.ts)

У 27 + 18 сім і вісім одиниць дають один новий десяток та п’ять одиниць.

##### Групувати доданки у зручному порядку без зміни суми

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/associativeAddition.data.ts)

Суму 7 + 13 + 3 можна перегрупувати як (7 + 3) + 13, не змінюючи жодного доданка.

##### Додавати трицифрові числа з одним або кількома переходами через розряд

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/threeDigitCarry.data.ts)

У 268 + 157 перенос виникає в різних розрядах; проміжні обміни одиниць на десятки не змінюють суми.

##### Коректно записувати та виконувати письмове додавання стовпчиком

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/columnAddition.data.ts)

Одиниці записують під одиницями, десятки під десятками; перенесений розряд додають у наступному стовпці.

##### Розпізнавати пропущений перенос десятка чи сотні та пояснювати причину помилки

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/carryErrorDetection.data.ts)

Для 48 + 37 пропущений перенос із суми 8 + 7 призводить до заниженого десяткового розряду.

#### Віднімання

Skills: 8

Вилучення частини, знаходження різниці, розгрупування розрядів і перевірка правильності обчислення.

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/subtraction.data.ts)

##### Моделювати віднімання як вилучення, різницю або пошук невідомої частини

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/subtractMeaning.data.ts)

Забрати 3 з набору 8 — це знайти 8 − 3; різниця між двома наборами або невідома частина цілого приводять до тієї ж операції.

##### Пояснювати й застосовувати віднімання нуля

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/subtractZero.data.ts)

Віднімання нуля залишає той самий набір предметів, бо нічого не вилучають.

##### Пояснювати, чому віднімання числа від самого себе дає нуль

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/subtractSelf.data.ts)

Після вилучення всіх 6 із набору 6 предметів не залишається нічого: результат — 0.

##### Віднімати в межах 20 із переходом через десяток

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/crossTenSubtraction.data.ts)

У 12 − 5 один десяток можна розкласти на одиниці, щоб відняти п’ять.

##### Віднімати двоцифрові числа з розгрупуванням одного десятка

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/twoDigitBorrow.data.ts)

Для 43 − 18 один десяток обмінюють на десять одиниць, а потім працюють з кожним розрядом.

##### Віднімати трицифрові числа з розгрупуванням десятків або сотень

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/threeDigitBorrow.data.ts)

У 402 − 175 може знадобитися обмін із сотень через порожній десятковий розряд.

##### Коректно записувати та виконувати письмове віднімання стовпчиком

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/columnSubtraction.data.ts)

Під час письмового віднімання зберігають вирівнювання розрядів і фіксують кожний обмін до обчислення.

##### Розпізнавати неправильне розгрупування під час віднімання й виправляти його

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/borrowErrorDetection.data.ts)

У 52 − 28 після обміну десятків змінюються і одиниці, і кількість десятків; забутий обмін спотворює відповідь.

#### Поєднання додавання та віднімання

Skills: 13

Взаємозв’язок двох обернених дій, робота з частинами цілого та гнучкі стратегії усних обчислень і самоперевірки.

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/additionSubtraction.data.ts)

##### Складати ціле з частин і знаходити невідому частину цілого

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/partWhole.data.ts)

Якщо ціле 9 поділено на відомі 4 й невідому частину, решта визначається як 9 − 4.

##### Обчислювати суми й різниці в межах 10 без предметного переліку

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/factsWithin10.data.ts)

Результати невеликих комбінацій на кшталт 6 + 3 та 9 − 4 мають бути доступні без повторного підрахунку предметів.

##### Розкладати 10 на дві частини різними способами

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/numberBonds10.data.ts)

Число 10 можна зібрати як 1 + 9, 4 + 6 або 5 + 5; зміна частин не змінює цілого.

##### Впевнено обчислювати суми та різниці в межах 20

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/factsWithin20.data.ts)

У діапазоні до 20 обчислення можна виконувати через опорні десятки й відомі числові факти, не повертаючись до лічби від одиниці.

##### Перевіряти додавання відніманням і навпаки

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/inverseOperations.data.ts)

Рівність 7 + 5 = 12 можна перевірити як 12 − 5 = 7, бо дії повертають до початкової частини.

##### Додавати й віднімати цілі десятки

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/addSubtractTens.data.ts)

40 + 30 спирається на 4 + 3 десятки, а 80 − 20 — на 8 − 2 десятки.

##### Додавати та віднімати двоцифрові числа без розрядного обміну

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/twoDigitNoRegroup.data.ts)

У 34 + 25 додають десятки до десятків та одиниці до одиниць без утворення нового десятка.

##### Обчислювати усно через десятки й одиниці, пояснюючи кожний крок

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/placeValueMental.data.ts)

Для 47 + 21 можна подумки виконати 40 + 20 і 7 + 1 та поєднати підсумки.

##### Використовувати компенсацію (додати й відняти те саме число) для усних обчислень

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/compensation.data.ts)

У 39 + 8 можна тимчасово замінити 39 на 40, обчислити 48 й відняти додану одиницю.

##### Додавати та віднімати круглі сотні й десятки в межах 1000

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/hundredsAndTens.data.ts)

300 + 400 працює із сотнями як із цілими одиницями розряду; 650 − 20 — із десятками.

##### Додавати та віднімати трицифрові числа без переходу через розряд

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/threeDigitNoRegroup.data.ts)

У 324 + 153 кожен стовпець дає значення менше десяти, тому переноси між розрядами не потрібні.

##### Оцінювати правдоподібність суми або різниці до точного обчислення

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/estimateResult.data.ts)

Перед 399 + 204 можна очікувати суму приблизно 600; результат на кшталт 63 має неправильний порядок величини.

##### Знаходити й виправляти помилки в додаванні та відніманні за допомогою оберненої дії

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/checkWithInverse.data.ts)

Результат 63 − 28 перевіряють додаванням 28 до отриманої різниці; невідповідність показує збій.

#### Множення

Skills: 24

Добуток як рівні групи або прямокутний масив, табличні факти, властивості множення та розрядні способи обчислення.

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/multiply.data.ts)

##### Представляти множення як кількість рівних груп певного розміру

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/equalGroups.data.ts)

Три однакові набори по чотири предмети відповідають 3 × 4, а не трьом різним доданкам.

##### Переходити між множенням і повторюваним додаванням

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/repeatedAddition.data.ts)

Запис 4 + 4 + 4 еквівалентний трьом рівним четвіркам; нерівні доданки не дають такої простої моделі.

##### Представляти множення прямокутним масивом предметів або клітинок

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/arrayModel.data.ts)

Масив із трьох рядків по п’ять клітинок показує загальну кількість 15 незалежно від порядку обходу.

##### Читати вираз a × b та пов’язувати множники й добуток із моделлю

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/readExpression.data.ts)

У 3 × 4 множники описують число груп і їхній розмір, а добуток — загальну кількість у моделі.

##### Обчислювати добутки з множником 2 та використовувати подвоєння

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by2.data.ts)

Добуток на 2 можна отримати як суму числа із самим собою: 2 × 7 = 7 + 7.

##### Обчислювати табличні добутки з множником 3

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by3.data.ts)

Три рівні четвірки дають 12; відомі суми по 3 допомагають вивести табличний результат.

##### Обчислювати табличні добутки з множником 4

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by4.data.ts)

Для чотирьох шісток результат 24 можна побачити як дві подвоєні шістки.

##### Обчислювати табличні добутки з множником 5

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by5.data.ts)

П’ятірки утворюють знайому шкалу 5, 10, 15, 20; її можна співвіднести з групами по п’ять.

##### Обчислювати табличні добутки з множником 6

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by6.data.ts)

Шість четвірок можна отримати з п’яти четвірок і ще однієї, не заучуючи випадок ізольовано.

##### Обчислювати табличні добутки з множником 7

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by7.data.ts)

Сім трійок можна обчислити як п’ять трійок плюс дві трійки: 15 + 6 = 21.

##### Обчислювати табличні добутки з множником 8

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by8.data.ts)

Вісім п’ятірок дають 40; результат також випливає з подвоєння чотирьох п’ятірок.

##### Обчислювати табличні добутки з множником 9

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by9.data.ts)

Дев’ять шісток можна вивести як десять шісток мінус одна шістка.

##### Обчислювати добутки з множником 10 та пояснювати їх через десятки

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by10.data.ts)

Множення на 10 додає десяткову одиницю до кожної групи: 6 × 10 = 60.

##### Пояснювати й застосовувати множення на 0 та 1

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by0And1.data.ts)

Порожня множина груп дає нуль, а одна група зберігає початкову кількість.

##### Пояснювати переставний закон множення за допомогою моделей

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/commutative.data.ts)

Масив 3 × 5 можна повернути та побачити 5 × 3; число клітинок залишається 15.

##### Змінювати групування множників для зручного обчислення

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/associative.data.ts)

У 2 × (3 × 4) та (2 × 3) × 4 однакова загальна кількість предметів, хоча групи утворено в іншому порядку.

##### Розкладати один множник на частини та знаходити суму часткових добутків

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/distributive.data.ts)

Для 6 × 14 можна поділити 14 на 10 і 4, а потім додати 6 × 10 та 6 × 4.

##### Виводити незнайомі табличні добутки з відомих, а не лише пригадувати їх

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/deriveFacts.data.ts)

Добуток 7 × 8 можна знайти через 7 × 7 плюс сім, використовуючи засвоєний випадок.

##### Знаходити множення на 4 через подвійне подвоєння

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/doubleTwice.data.ts)

Чотири однакові групи можна отримати двома послідовними подвоєннями, а не окремим таблицевим правилом.

##### Множити круглі десятки на одноцифрові числа в межах 1000

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/roundTens.data.ts)

Для 30 × 4 спочатку обчислюють 3 × 4 десятки, отримуючи 12 десятків, тобто 120.

##### Множити круглі сотні на одноцифрові числа в межах 1000

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/roundHundreds.data.ts)

Для 200 × 3 множать дві сотні на три й отримують шість сотень.

##### Множити двоцифрове число на одноцифрове через розрядний розклад

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/twoDigitByOne.data.ts)

У 23 × 4 множення розкладають як 20 × 4 плюс 3 × 4, утримуючи одиниці й десятки окремо.

##### Множити трицифрове число на одноцифрове, якщо результат у межах 1000

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/threeDigitByOne.data.ts)

У 124 × 3 добуток можна зібрати із 100 × 3, 20 × 3 та 4 × 3; підсумок не перевищує 1000.

##### Оцінювати добуток та перевіряти його оберненою дією або іншим способом

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/checkProduct.data.ts)

Перед 49 × 6 приблизно очікують 300, а множенням навпаки або повторним додаванням можна підтвердити точне значення.

#### Ділення

Skills: 24

Частка як розподіл порівну або визначення числа рівних груп, табличні випадки, остача, обмеження й перевірка ділення.

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/divide.data.ts)

##### Моделювати ділення як розподіл на задану кількість рівних груп

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/equalSharing.data.ts)

Роздати 12 предметів порівну чотирьом учасникам означає знайти розмір кожної із чотирьох груп.

##### Моделювати ділення як визначення кількості груп заданого розміру

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/equalGrouping.data.ts)

Із 12 предметів можна утворити три повні групи по 4; тут невідоме — кількість груп, а не предметів у кожній.

##### Пояснювати ділення як пошук невідомого множника

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/relationToMultiplication.data.ts)

Якщо 5 × ? = 20, шуканий множник дорівнює 4; поділ знаходить невідомий компонент добутку.

##### Читати запис a ÷ b та співвідносити ділене, дільник і частку з моделлю

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/readExpression.data.ts)

У 12 ÷ 3 число 12 — уся кількість, 3 задає розподіл, а 4 — його результат у відповідній моделі.

##### Обчислювати табличні випадки ділення на 2

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/by2.data.ts)

Для ділення на 2 корисна модель половини парної кількості: 14 ÷ 2 = 7.

##### Обчислювати табличні випадки ділення на 3

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/by3.data.ts)

У 18 ÷ 3 добуток 3 × 6 = 18 відразу дає частку 6.

##### Обчислювати табличні випадки ділення на 4

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/by4.data.ts)

Поділ 24 на чотири рівні частини має результат 6; перевірка — 4 × 6.

##### Обчислювати табличні випадки ділення на 5

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/by5.data.ts)

Оскільки 5 × 7 = 35, ділення 35 на 5 повертає сім рівних груп.

##### Обчислювати табличні випадки ділення на 6

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/by6.data.ts)

Для 36 ÷ 6 частка 6 випливає з відомого квадрата шістки.

##### Обчислювати табличні випадки ділення на 7

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/by7.data.ts)

Поділ 42 на сім повних груп дає по шість у кожній.

##### Обчислювати табличні випадки ділення на 8

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/by8.data.ts)

Добуток 8 × 4 = 32 дає діленню 32 ÷ 8 частку 4.

##### Обчислювати табличні випадки ділення на 9

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/by9.data.ts)

Табличне ділення 54 ÷ 9 пов’язане з добутком 9 × 6 = 54.

##### Пояснювати й застосовувати ділення на 1 та числа на самого себе (для ненульового числа)

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/by1AndSelf.data.ts)

Ділити на один означає залишити всю кількість в одній групі; ненульове число, поділене на себе, дає одну групу.

##### Пояснювати результат ділення нуля на ненульове число

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/zeroDividend.data.ts)

Якщо нуль предметів розподілити між трьома учасниками, кожен отримає нуль; дільник має бути ненульовим.

##### Розпізнавати, що ділення на нуль не визначене

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/noDivisionByZero.data.ts)

Не існує визначеної частки для 5 ÷ 0; її не можна встановити множенням на нуль.

##### Знаходити половину парної кількості та пов’язувати це з подвоєнням

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/doubleHalf.data.ts)

Половина 18 — дев’ять, бо дві рівні дев’ятки утворюють 18; зв’язок працює й у зворотному напрямку.

##### Ділити круглі десятки на одноцифрові числа в межах 1000

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/roundTens.data.ts)

У 80 ÷ 4 вісім десятків ділять на чотири групи, отримуючи по два десятки.

##### Ділити круглі сотні на одноцифрові числа в межах 1000

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/roundHundreds.data.ts)

У 600 ÷ 3 шість сотень поділяють на три рівні частини — по дві сотні.

##### Ділити двоцифрові числа на одноцифрові позатабличним способом

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/twoDigitByOne.data.ts)

Для 84 ÷ 4 можна поділити 80 та 4 окремо, а потім додати частки.

##### Ділити окремі трицифрові числа на одноцифрові через розрядний розклад

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/threeDigitByOne.data.ts)

У 648 ÷ 3 частки від 600, 30 і 18 можна зібрати в один результат за коректного розряду.

##### Знаходити частку й остачу під час ділення натуральних чисел

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/withRemainder.data.ts)

У 17 ÷ 5 можна отримати три повні п’ятірки й залишок два; не всі ділення натуральних чисел точні.

##### Перевіряти, що невід’ємна остача менша за дільник

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/remainderLessDivisor.data.ts)

Для дільника 5 остача може бути 0, 1, 2, 3 або 4, але не 5 чи більше.

##### Перевіряти частку множенням, з урахуванням остачі за її наявності

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/checkQuotient.data.ts)

Рівність «дільник × частка + остача = ділене» підтверджує відповідь і показує, куди повернувся залишок.

##### Розпізнавати помилку в діленні або некоректну остачу за моделлю чи перевіркою

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/errorDetection.data.ts)

Якщо при 19 ÷ 4 названо остачу 7, модель виявляє, що з неї можна скласти ще одну повну четвірку.

### Алгебра

Groups: 5 · Skills: 17

Code: [Code](../../src/data/skillsTaxonomy/algebra/algebra.data.ts)

Формує перехід від конкретних обчислень до виразів, рівностей, невідомих величин і правил побудови послідовностей без переходу до формальної алгебри вищих класів.

#### Вирази

Skills: 5

Зміст математичного запису з діями, дужками й змінними; правильний порядок виконання операцій.

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/expressions.data.ts)

##### Читати та записувати числові вирази з арифметичними діями

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/skills/readNumericExpressions.data.ts)

Запис 7 + 5 або 18 ÷ 3 позначає операцію над числами, а не лише словесну команду; значення можна знайти окремо.

##### Обчислювати вирази з дужками, пояснюючи пріоритет дій

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/skills/parentheses.data.ts)

У 2 × (3 + 4) спочатку визначають суму в дужках, після чого множать на 2; вилучення дужок може змінити результат.

##### Обчислювати вирази з кількома арифметичними діями за правилами порядку

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/skills/orderOfOperations.data.ts)

У 6 + 2 × 5 множення виконується перед додаванням, тому значення дорівнює 16, а не 40.

##### Обчислювати значення найпростішого буквеного виразу за заданого значення змінної

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/skills/variableValue.data.ts)

Якщо a = 4, вираз a + 7 має значення 11; літера замінює визначене число в межах цієї задачі.

##### Пояснювати помилку, спричинену неправильним порядком дій

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/skills/identifyExpressionError.data.ts)

Результат 6 + 3 × 2 = 18 є наслідком некоректної черговості: множення має передувати додаванню.

#### Рівності

Skills: 3

Рівність як однаковість значень двох виразів, істинність записів та відновлення пропущеного компонента.

Code: [Code](../../src/data/skillsTaxonomy/algebra/equalities/equalities.data.ts)

##### Сприймати знак рівності як рівність значень обох частин, а не команду «порахуй»

Code: [Code](../../src/data/skillsTaxonomy/algebra/equalities/skills/equalityMeaning.data.ts)

Запис 4 + 3 = 5 + 2 є істинним, хоча справа також вираз, а не просто готова відповідь.

##### Перевіряти правильність числової рівності або нерівності

Code: [Code](../../src/data/skillsTaxonomy/algebra/equalities/skills/trueFalseEquality.data.ts)

Для рівності 8 + 3 = 12 − 1 обидві сторони мають значення 11; нерівність перевіряють за фактичними значеннями.

##### Добирати пропущене число так, щоб рівність була істинною

Code: [Code](../../src/data/skillsTaxonomy/algebra/equalities/skills/completeEquality.data.ts)

У 7 + □ = 12 пропуск заповнюють числом 5, щоб обидві частини запису стали рівними.

#### Невідомі

Skills: 6

Залежності між компонентами й результатами чотирьох арифметичних дій, що дозволяють визначити невідоме та перевірити його.

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/unknowns.data.ts)

##### Знаходити невідомий доданок і перевіряти результат

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/skills/unknownAddend.data.ts)

У □ + 6 = 14 шукане знаходять як 14 − 6 і повертають у рівняння для перевірки.

##### Знаходити невідоме зменшуване і перевіряти результат

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/skills/unknownMinuend.data.ts)

У □ − 4 = 9 початкове число відновлюють додаванням 9 + 4.

##### Знаходити невідомий від’ємник і перевіряти результат

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/skills/unknownSubtrahend.data.ts)

У 15 − □ = 7 потрібно вилучити вісім, а не шукати різницю як нове невідоме зменшуване.

##### Знаходити невідомий множник за відомими добутком і множником

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/skills/unknownFactor.data.ts)

У □ × 5 = 20 значення пропуску дорівнює 4, оскільки 20 ÷ 5 = 4.

##### Знаходити невідоме ділене в простих рівняннях

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/skills/unknownDividend.data.ts)

У □ ÷ 3 = 7 шукане ділене — це сім рівних груп по три одиниці, тобто 21.

##### Знаходити невідомий дільник у простих рівняннях із ненульовими числами

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/skills/unknownDivisor.data.ts)

У 24 ÷ □ = 6 потрібен дільник 4; його перевіряють множенням 6 × 4.

#### Закономірності

Skills: 2

Повторювана зміна чисел за правилом і розпізнавання структури послідовності за кількома членами.

Code: [Code](../../src/data/skillsTaxonomy/algebra/patterns/patterns.data.ts)

##### Знаходити й продовжувати числову закономірність з постійним кроком

Code: [Code](../../src/data/skillsTaxonomy/algebra/patterns/skills/arithmeticPattern.data.ts)

Ряд 4, 7, 10, 13 зберігає крок три; новий член отримують з попереднього тим самим приростом.

##### Визначати правило зростання закономірності за кількома прикладами

Code: [Code](../../src/data/skillsTaxonomy/algebra/patterns/skills/growingPattern.data.ts)

За кількома значеннями 2, 6, 10 можна припустити правило +4, але його треба перевірити на решті заданих членів.

#### Символьне моделювання

Skills: 1

Подання відношень із короткої ситуації арифметичним або простим алгебраїчним записом.

Code: [Code](../../src/data/skillsTaxonomy/algebra/formalization/formalization.data.ts)

##### Перекладати просту ситуацію в числовий вираз або рівняння

Code: [Code](../../src/data/skillsTaxonomy/algebra/formalization/skills/translateSituation.data.ts)

Ситуацію «три коробки по п’ять олівців» відображає 3 × 5; форма запису повинна відповідати саме відношенню в умові.

### Геометрія

Groups: 10 · Skills: 35

Code: [Code](../../src/data/skillsTaxonomy/geometry/geometry.data.ts)

Охоплює просторові відношення, властивості плоских і об’ємних фігур, лінії й кути, геометричні перетворення, а також вимірювання периметра та площі.

#### Просторова орієнтація

Skills: 3

Словесні описи відносних положень і руху, маршрути за інструкціями та координування на простій сітці.

Code: [Code](../../src/data/skillsTaxonomy/geometry/orientation/orientation.data.ts)

##### Описувати положення об’єкта: ліворуч, праворуч, вище, нижче, між, перед, за

Code: [Code](../../src/data/skillsTaxonomy/geometry/orientation/skills/positionWords.data.ts)

Опис «ліворуч від дерева, перед будинком» залежить від точки відліку; взаємне положення не тотожне абсолютній координаті.

##### Читати й складати простий план на сітці та описувати шлях/позицію

Code: [Code](../../src/data/skillsTaxonomy/geometry/orientation/skills/gridMapNavigation.data.ts)

На сітці маршрут складають із переходів між клітинками чи вузлами; кінцеве місце має відповідати вихідним напрямкам.

##### Складати й виконувати покрокові просторові інструкції маршруту

Code: [Code](../../src/data/skillsTaxonomy/geometry/orientation/skills/spatialOrientationPath.data.ts)

Інструкції «два кроки вперед, повернути праворуч» мають виконуватися в заданому порядку, бо перестановка кроків змінює маршрут.

#### Плоскі фігури

Skills: 5

Ознаки багатокутників та інших плоских фігур, незалежні від масштабу й орієнтації, і складання фігур із частин.

Code: [Code](../../src/data/skillsTaxonomy/geometry/figures/figures.data.ts)

##### Розпізнавати круг, трикутник, квадрат і прямокутник незалежно від розміру й повороту

Code: [Code](../../src/data/skillsTaxonomy/geometry/figures/skills/identify2dShapes.data.ts)

Повернутий квадрат залишається квадратом; важливі властивості сторін і кутів, а не звичне положення рисунка.

##### Класифікувати плоскі фігури за кількістю сторін і вершин

Code: [Code](../../src/data/skillsTaxonomy/geometry/figures/skills/shapeAttributes.data.ts)

Класифікацію здійснюють за геометричними ознаками: трикутник має три сторони, чотирикутник — чотири.

##### Розпізнавати многокутник і визначати його вершини та сторони

Code: [Code](../../src/data/skillsTaxonomy/geometry/figures/skills/polygon.data.ts)

Многокутник обмежений відрізками; кожна точка сполучення сусідніх сторін є вершиною.

##### Пояснювати властивості трикутника, прямокутника та квадрата

Code: [Code](../../src/data/skillsTaxonomy/geometry/figures/skills/triangleRectangleSquare.data.ts)

Квадрат є також прямокутником, оскільки має чотири прямі кути; додаткова властивість — рівність усіх сторін.

##### Складати нову фігуру з частин і розкладати складену фігуру на прості

Code: [Code](../../src/data/skillsTaxonomy/geometry/figures/skills/composeDecomposeShapes.data.ts)

З двох трикутників можна скласти іншу плоску фігуру; при розбитті початковий контур змінюється, але частини разом зберігають площину.

#### Просторові тіла

Skills: 3

Відмінності об’ємних тіл від плоских зображень, їхні поверхні, грані, ребра та вершини.

Code: [Code](../../src/data/skillsTaxonomy/geometry/solids/solids.data.ts)

##### Впізнавати плоскі фігури на гранях/поверхнях просторових тіл

Code: [Code](../../src/data/skillsTaxonomy/geometry/solids/skills/shapeOnSolidSurface.data.ts)

Квадрат на грані куба — плоска частина об’ємного тіла; не слід називати весь куб квадратом.

##### Розпізнавати куб, кулю, циліндр, конус та інші базові просторові тіла

Code: [Code](../../src/data/skillsTaxonomy/geometry/solids/skills/identify3dSolids.data.ts)

Куля не має плоских граней, а куб складається з них; зовнішній контур на рисунку не завжди достатній для розпізнавання.

##### Описувати грані, ребра й вершини куба та прямокутного паралелепіпеда

Code: [Code](../../src/data/skillsTaxonomy/geometry/solids/skills/spatialSolidsAttributes.data.ts)

Для куба рахують шість граней, дванадцять ребер і вісім вершин, відрізняючи видимі елементи від усіх наявних.

#### Лінії

Skills: 5

Точки, прямі, промені, відрізки й інші види ліній, їхні частини, взаємне положення і спосіб зображення.

Code: [Code](../../src/data/skillsTaxonomy/geometry/lines/lines.data.ts)

##### Розрізняти точку, пряму, криву й ламану

Code: [Code](../../src/data/skillsTaxonomy/geometry/lines/skills/linesAndPoints.data.ts)

Точка позначає місце, пряма не має кінців, крива може змінювати напрям, а ламана складається з відрізків.

##### Розпізнавати, будувати й позначати відрізок із кінцевими точками

Code: [Code](../../src/data/skillsTaxonomy/geometry/lines/skills/segment.data.ts)

Відрізок обмежений двома кінцями; його можна позначити літерами крайніх точок, наприклад AB.

##### Розрізняти промінь, відрізок і пряму

Code: [Code](../../src/data/skillsTaxonomy/geometry/lines/skills/ray.data.ts)

Промінь має початок, але не має другого кінця; відрізок обмежений з обох боків, пряма — з жодного.

##### Розрізняти замкнені й незамкнені лінії

Code: [Code](../../src/data/skillsTaxonomy/geometry/lines/skills/closedOpenLines.data.ts)

Контур без розриву може бути замкненим, а лінія з різними початком і кінцем — незамкненою.

##### Розпізнавати паралельні та перпендикулярні прямі на рисунках і в довкіллі

Code: [Code](../../src/data/skillsTaxonomy/geometry/lines/skills/parallelPerpendicular.data.ts)

Рейки однієї колії ілюструють паралельність; суміжні краї зошита в куті ілюструють перпендикулярність.

#### Кути

Skills: 3

Кут як геометричне відношення променів і величина повороту, з прямим кутом як орієнтиром для класифікації.

Code: [Code](../../src/data/skillsTaxonomy/geometry/angles/angles.data.ts)

##### Інтерпретувати кут як величину повороту й порівнювати кути з прямим

Code: [Code](../../src/data/skillsTaxonomy/geometry/angles/skills/angleAsTurn.data.ts)

Поворот на чверть оберту дає прямий кут, на меншу частку — гострий; довжина сторін рисунка не визначає величину кута.

##### Розпізнавати прямий кут і перевіряти його за еталоном

Code: [Code](../../src/data/skillsTaxonomy/geometry/angles/skills/rightAngle.data.ts)

Кут аркуша чи косинця є еталоном 90°; зіставлення сторін перевіряє прямокутність незалежно від нахилу.

##### Розрізняти гострий, прямий і тупий кути на наочних прикладах

Code: [Code](../../src/data/skillsTaxonomy/geometry/angles/skills/angleTypes.data.ts)

Порівнюють розкриття променів із прямим кутом: менше нього — гострий, більше, але менше розгорнутого — тупий.

#### Коло

Skills: 3

Коло як межа круга; центр, радіус, діаметр та побудова фігури за сталою відстанню від центру.

Code: [Code](../../src/data/skillsTaxonomy/geometry/circles/circles.data.ts)

##### Розрізняти коло та круг

Code: [Code](../../src/data/skillsTaxonomy/geometry/circles/skills/circleDisk.data.ts)

Коло — лише замкнена крива межі, тоді як круг включає всі точки всередині цієї межі.

##### Показувати центр, радіус і діаметр кола та пов’язувати діаметр із двома радіусами

Code: [Code](../../src/data/skillsTaxonomy/geometry/circles/skills/radiusDiameter.data.ts)

Діаметр проходить через центр і має довжину двох радіусів; усі радіуси одного кола рівні.

##### Будувати коло заданого радіуса циркулем

Code: [Code](../../src/data/skillsTaxonomy/geometry/circles/skills/drawCircle.data.ts)

Під час роботи циркулем розхил фіксує відстань від центру до кожної точки лінії; зміна розхилу дає інший радіус.

#### Перетворення

Skills: 3

Зміни положення фігури поворотом, зсувом і віддзеркаленням, а також симетричність щодо осі.

Code: [Code](../../src/data/skillsTaxonomy/geometry/transformations/transformations.data.ts)

##### Демонструвати чверть-, пів- і три-чверть оберту за і проти годинникової стрілки

Code: [Code](../../src/data/skillsTaxonomy/geometry/transformations/skills/turnsQuarters.data.ts)

Чверть оберту відповідає 90°, пів оберту — 180°, три чверті — 270°; напрям повороту змінює кінцеве положення.

##### Виконувати та розпізнавати прості зсуви й віддзеркалення фігури

Code: [Code](../../src/data/skillsTaxonomy/geometry/transformations/skills/translationsReflections.data.ts)

Зсув переміщує всі точки однаково, а віддзеркалення змінює орієнтацію відносно осі; самі розміри не змінюються.

##### Знаходити вісь симетрії у простих фігурах і добудовувати симетричну частину

Code: [Code](../../src/data/skillsTaxonomy/geometry/transformations/skills/reflectionSymmetry.data.ts)

Відповідні точки симетричних половин лежать на однакових відстанях від осі з різних її боків.

#### Периметр

Skills: 4

Довжина замкненої межі багатокутника як сума сторін, включно з прямокутником і квадратом.

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeter/perimeter.data.ts)

##### Вимірювати периметр многокутника як суму довжин сторін

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeter/skills/measurePerimeter.data.ts)

Для фігури зі сторонами 3, 4 і 5 см довжина контуру становить 12 см; внутрішню поверхню тут не вимірюють.

##### Обчислювати периметр прямокутника за довжинами його сторін

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeter/skills/rectanglePerimeter.data.ts)

Для сторін a та b обхід прямокутного контуру дає a + b + a + b, а не добуток a × b.

##### Обчислювати периметр квадрата за довжиною сторони

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeter/skills/squarePerimeter.data.ts)

У квадрата всі чотири сторони рівні, отже довжину контуру отримують як чотири довжини сторони.

##### Знаходити невідому сторону прямокутника за периметром та іншими сторонами

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeter/skills/unknownSideFromPerimeter.data.ts)

Якщо периметр прямокутника 20 см, а одна сторона 6 см, решта контуру визначає сторону 4 см.

#### Площа

Skills: 4

Величина частини площини, яку займає фігура, через одиничні квадрати, прямокутні моделі та розбиття складених форм.

Code: [Code](../../src/data/skillsTaxonomy/geometry/area/area.data.ts)

##### Розбивати прямокутну складену фігуру на прямокутники та додавати площі частин

Code: [Code](../../src/data/skillsTaxonomy/geometry/area/skills/compositeArea.data.ts)

Складену Г-подібну фігуру можна поділити на два прямокутники без перекриттів, після чого підсумувати їхні площі.

##### Розуміти площу як міру поверхні, вкритої однаковими одиничними квадратами

Code: [Code](../../src/data/skillsTaxonomy/geometry/area/skills/areaAsCovering.data.ts)

Площа описує заповнення поверхні, тож одиничні квадрати повинні мати однаковий розмір і не перекриватися.

##### Визначати площу простої фігури підрахунком одиничних квадратів

Code: [Code](../../src/data/skillsTaxonomy/geometry/area/skills/countUnitSquares.data.ts)

Якщо фігура охоплює 12 повних одиничних клітинок, її площа дорівнює 12 квадратним одиницям незалежно від форми розташування.

##### Пов’язувати площу прямокутника з добутком довжин його сторін у цілих одиницях

Code: [Code](../../src/data/skillsTaxonomy/geometry/area/skills/rectangleAreaModel.data.ts)

Прямокутник із чотирьох рядів по три клітинки займає 12 квадратних одиниць; добуток є скороченим підрахунком клітинок.

#### Зв’язок периметра та площі

Skills: 2

Незалежність вимірювань контуру та внутрішньої поверхні: однакове значення одного не визначає іншого.

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeterArea/perimeterArea.data.ts)

##### Будувати фігури з однаковим периметром і різними площами або навпаки

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeterArea/skills/areaPerimeterContrast.data.ts)

Два прямокутники можуть мати однаковий контур, але різну кількість внутрішніх клітинок; жодна величина не визначає іншу автоматично.

##### Розрізняти периметр і площу та добирати відповідний спосіб вимірювання

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeterArea/skills/perimeterVsArea.data.ts)

Для огорожі потрібна довжина краю, а для покриття підлоги — внутрішня поверхня; одиниці й способи обчислення різні.

### Вимірювання

Groups: 5 · Skills: 21

Code: [Code](../../src/data/skillsTaxonomy/measurement/measurement.data.ts)

Розглядає вимірювання фізичних величин через порівняння з одиницею, інструменти й шкали; охоплює довжину, масу, місткість, температуру та узгодження одиниць.

#### Довжина

Skills: 10

Безпосереднє та інструментальне порівняння відрізків, метричні одиниці різного масштабу й операції з однорідними довжинами.

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/length.data.ts)

##### Порівнювати довжини безпосереднім накладанням і непрямим способом

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/compareLength.data.ts)

Коротший із двох відрізків видно після суміщення початків; порівняти можна і через спільну стрічку-посередник.

##### Вимірювати довжину послідовним прикладанням однакових умовних одиниць

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/nonstandardLength.data.ts)

Умовні мірки прикладають без проміжків та накладень: різні за довжиною мірки дадуть різні числові результати.

##### Правильно користуватися лінійкою, починаючи вимірювання від нульової позначки

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/rulerZero.data.ts)

Шкала лінійки рахує проміжки між поділками, а не кількість надрукованих цифр; початок виміру — нуль.

##### Вимірювати та креслити відрізки заданої довжини в сантиметрах

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/measureCentimeters.data.ts)

Відрізок 5 см має п’ять сантиметрових проміжків між його кінцями, а не п’ять поділок разом із початковою.

##### Вимірювати короткі відрізки в міліметрах і співвідносити мм із см

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/millimeters.data.ts)

Десять міліметрів утворюють сантиметр; мала шкала потрібна там, де цілих сантиметрів недостатньо.

##### Співвідносити дециметр і сантиметр та виконувати прості перетворення

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/decimeters.data.ts)

Один дециметр дорівнює десяти сантиметрам, тому 3 дм відповідають 30 см.

##### Співвідносити метр, дециметр і сантиметр у практичних вимірах

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/meters.data.ts)

Метр складається із десяти дециметрів або ста сантиметрів; при порівнянні записів величину зберігають.

##### Вибирати кілометри для великих відстаней і співвідносити їх із метрами

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/kilometers.data.ts)

Великі відстані між населеними пунктами доцільно виражати кілометрами: 2 км дорівнюють 2000 м.

##### Оцінювати довжину та перевіряти результат інструментом

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/estimateLength.data.ts)

Приблизна довжина зорово оцінюється до виміру, а інструмент показує величину помилки оцінки.

##### Додавати й віднімати довжини в узгоджених одиницях

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/addSubtractLengths.data.ts)

При обчисленні 30 см + 2 дм спочатку переходять до спільних одиниць: 30 см + 20 см.

#### Маса

Skills: 4

Порівняння ваги тіл і числове вимірювання маси через рівновагу, покази вагів та співвідношення одиниць.

Code: [Code](../../src/data/skillsTaxonomy/measurement/mass/mass.data.ts)

##### Застосовувати співвідношення центнера й кілограма у задачах

Code: [Code](../../src/data/skillsTaxonomy/measurement/mass/skills/centnerKilogram.data.ts)

Один центнер містить сто кілограмів; регіональну одиницю не слід плутати з метричною тонною.

##### Порівнювати масу предметів за допомогою терезів або рівноваги

Code: [Code](../../src/data/skillsTaxonomy/measurement/mass/skills/compareMass.data.ts)

На двочашкових терезах переважує важча сторона; рівновага свідчить про рівність мас двох наборів.

##### Використовувати кілограм і грам та співвідносити їх

Code: [Code](../../src/data/skillsTaxonomy/measurement/mass/skills/kilogramGram.data.ts)

Один кілограм дорівнює тисячі грамів; для легкого предмета зручні грами, для важкого — кілограми.

##### Зчитувати покази вагів і записувати результат із одиницею

Code: [Code](../../src/data/skillsTaxonomy/measurement/mass/skills/weighObject.data.ts)

Показ 750 на шкалі вагів має сенс лише разом із підписом «г» або іншою одиницею.

#### Місткість

Skills: 3

Кількість рідини, що вміщується в посудині, вимірювання літрами і мілілітрами та їхнє порівняння.

Code: [Code](../../src/data/skillsTaxonomy/measurement/capacity/capacity.data.ts)

##### Порівнювати місткість посудин через переливання або вимірювання

Code: [Code](../../src/data/skillsTaxonomy/measurement/capacity/skills/capacityConcept.data.ts)

Якщо одну посудину наповнити іншою, можна порівняти об’єми рідини незалежно від висоти чи форми ємностей.

##### Вимірювати й оцінювати місткість у літрах

Code: [Code](../../src/data/skillsTaxonomy/measurement/capacity/skills/liter.data.ts)

Літр — стандартна одиниця місткості; високу вузьку посудину не можна автоматично вважати місткішою за низьку широку.

##### Використовувати мілілітри та співвідносити їх із літрами

Code: [Code](../../src/data/skillsTaxonomy/measurement/capacity/skills/milliliter.data.ts)

У літрі є 1000 мілілітрів; 500 мл — це пів літра за тієї самої одиниці об’єму.

#### Температура

Skills: 1

Визначення невід’ємних показів термометра за поділками шкали та правильне зазначення одиниці.

Code: [Code](../../src/data/skillsTaxonomy/measurement/temperature/temperature.data.ts)

##### Зчитувати невід’ємну температуру з простої шкали термометра

Code: [Code](../../src/data/skillsTaxonomy/measurement/temperature/skills/readTemperature.data.ts)

Між позначками 0 і 10 на рівномірній шкалі термометра проміжні поділки мають числові значення; без одиниці запис неповний.

#### Вимірювальні навички

Skills: 3

Загальні принципи вибору одиниці, узгодження вимірів і виконання обчислень із порівнюваними величинами.

Code: [Code](../../src/data/skillsTaxonomy/measurement/general/general.data.ts)

##### Пояснювати, чому для порівняння вимірів потрібна узгоджена одиниця

Code: [Code](../../src/data/skillsTaxonomy/measurement/general/skills/standardUnitPurpose.data.ts)

Значення «10» на шкалах сантиметрів і міліметрів не позначають однакової довжини; одиниці є частиною виміру.

##### Вибирати доречну одиницю для довжини, маси чи місткості

Code: [Code](../../src/data/skillsTaxonomy/measurement/general/skills/chooseAppropriateUnit.data.ts)

Шлях між містами зручно задавати в кілометрах, масу яблука — у грамах, місткість пляшки — у літрах.

##### Розв’язувати практичні задачі на величини в однакових або сумісних одиницях

Code: [Code](../../src/data/skillsTaxonomy/measurement/general/skills/wordProblemsMeasures.data.ts)

Дії з 2 м і 30 см вимагають спільної одиниці або явного перетворення; відповідь має зберігати фізичний зміст.

### Час

Groups: 3 · Skills: 13

Code: [Code](../../src/data/skillsTaxonomy/time/time.data.ts)

Поєднує календарні цикли, способи запису моменту часу й обчислення тривалості подій; розмежовує дату, показ годинника та часовий інтервал.

#### Календар

Skills: 4

Орієнтація в днях, тижнях, місяцях і роках, з урахуванням різної тривалості місяців та високосного року.

Code: [Code](../../src/data/skillsTaxonomy/time/calendar/calendar.data.ts)

##### Упорядковувати частини доби та пов’язувати їх із повсякденними подіями

Code: [Code](../../src/data/skillsTaxonomy/time/calendar/skills/daySequence.data.ts)

Ранок, день, вечір і ніч утворюють повторюваний цикл; одна подія може відбуватися в різні його частини.

##### Пояснювати відмінність звичайного і високосного років та користуватися календарем

Code: [Code](../../src/data/skillsTaxonomy/time/calendar/skills/leapYearDays.data.ts)

Звичайний рік має 365 днів, високосний — 366; додатковий день припадає на лютий.

##### Називати дні тижня, місяці року й орієнтуватися в календарі

Code: [Code](../../src/data/skillsTaxonomy/time/calendar/skills/weekMonthYear.data.ts)

Семиденний тиждень і послідовність місяців повторюються, але місяці мають різну тривалість.

##### Визначати кількість днів між календарними датами в нескладних випадках

Code: [Code](../../src/data/skillsTaxonomy/time/calendar/skills/calendarInterval.data.ts)

Для дат 10 і 13 числа одного місяця пройде три доби; підрахунок не дорівнює кількості перелічених дат включно.

#### Годинник

Skills: 5

Відповідність положень стрілок і цифрового запису певному моменту доби, включно з різною точністю відліку.

Code: [Code](../../src/data/skillsTaxonomy/time/clock/clock.data.ts)

##### Читати 24-годинний запис часу та співвідносити його з часом доби

Code: [Code](../../src/data/skillsTaxonomy/time/clock/skills/read24HourClock.data.ts)

14:30 — це друга година тридцять хвилин після полудня; формат 24 години усуває неоднозначність «ранок/вечір».

##### Визначати час на аналоговому та цифровому годиннику з точністю до години

Code: [Code](../../src/data/skillsTaxonomy/time/clock/skills/readHour.data.ts)

Положення годинної стрілки і цифровий запис 8:00 мають однаковий зміст; хвилинна стрілка стоїть на 12.

##### Зчитувати половину та чверть години на годиннику

Code: [Code](../../src/data/skillsTaxonomy/time/clock/skills/readHalfQuarter.data.ts)

За половини години хвилинна стрілка на 6, за чверті — на 3; годинна стрілка поступово рухається між числами.

##### Зчитувати час із точністю до п’яти хвилин

Code: [Code](../../src/data/skillsTaxonomy/time/clock/skills/readFiveMinute.data.ts)

Поділка 1 на циферблаті відповідає п’яти хвилинам, 2 — десяти; інтервали однакові.

##### Зчитувати й записувати час із точністю до хвилини

Code: [Code](../../src/data/skillsTaxonomy/time/clock/skills/readMinute.data.ts)

Запис 09:17 показує сімнадцять хвилин після дев’ятої; кожна хвилинна поділка має окрему вагу.

#### Тривалість

Skills: 4

Зв’язок секунд, хвилин і годин та знаходження інтервалу чи моменту за відомими часовими даними.

Code: [Code](../../src/data/skillsTaxonomy/time/duration/duration.data.ts)

##### Застосовувати співвідношення 1 год = 60 хв

Code: [Code](../../src/data/skillsTaxonomy/time/duration/skills/convertHoursMinutes.data.ts)

Проміжок у півтори години дорівнює 90 хвилинам; одиниці переводять за коефіцієнтом 60.

##### Застосовувати співвідношення 1 хв = 60 с

Code: [Code](../../src/data/skillsTaxonomy/time/duration/skills/convertMinutesSeconds.data.ts)

Дві хвилини дорівнюють 120 секундам; секундний інтервал не слід плутати з показом секундної стрілки.

##### Знаходити тривалість події за часом початку та завершення

Code: [Code](../../src/data/skillsTaxonomy/time/duration/skills/eventDuration.data.ts)

Від 10:15 до 11:00 проходить 45 хвилин; тривалість — різниця двох моментів, не сам показ годинника.

##### Знаходити час початку чи завершення за тривалістю події

Code: [Code](../../src/data/skillsTaxonomy/time/duration/skills/findStartOrEnd.data.ts)

Подія тривалістю 35 хв, що почалася о 14:10, завершується о 14:45; зворотно можна визначити початок.

### Гроші

Groups: 2 · Skills: 6

Code: [Code](../../src/data/skillsTaxonomy/money/money.data.ts)

Застосовує арифметику до грошових номіналів, складання та порівняння сум, розрахунків вартості, решти й вибору покупок у межах бюджету.

#### Грошові суми

Skills: 3

Вартість, подана монетами й банкнотами певної валюти, еквівалентність наборів номіналів та співвідношення сум.

Code: [Code](../../src/data/skillsTaxonomy/money/denominations/denominations.data.ts)

##### Розпізнавати номінали монет і купюр заданої валюти

Code: [Code](../../src/data/skillsTaxonomy/money/denominations/skills/recognizeDenominations.data.ts)

Номінал позначає вартість грошового знака, а не його розмір чи колір; розпізнавання залежить від обраної валюти.

##### Складати задану суму різними комбінаціями грошових одиниць

Code: [Code](../../src/data/skillsTaxonomy/money/denominations/skills/composeAmount.data.ts)

Суму 12 одиниць можна отримати як 10 + 2 чи 5 + 5 + 2, якщо відповідні номінали існують.

##### Порівнювати грошові суми в межах однієї валюти

Code: [Code](../../src/data/skillsTaxonomy/money/denominations/skills/compareAmounts.data.ts)

Порівнюють спільну сумарну вартість, а не кількість монет: дві більші можуть коштувати більше за п’ять дрібних.

#### Покупки

Skills: 3

Застосування грошових розрахунків до ціни товару, кількості одиниць, решти та обмеженого бюджету.

Code: [Code](../../src/data/skillsTaxonomy/money/transactions/transactions.data.ts)

##### Знаходити решту після покупки

Code: [Code](../../src/data/skillsTaxonomy/money/transactions/skills/calculateChange.data.ts)

Якщо товар коштує 37, а сплачено 50, повернути слід 13 грошових одиниць тієї самої валюти.

##### Розв’язувати задачі на ціну, кількість і загальну вартість

Code: [Code](../../src/data/skillsTaxonomy/money/transactions/skills/unitPriceTotal.data.ts)

За ціни 8 за одиницю три однакові предмети коштують 24; задача відрізняє одиничну ціну від загальної суми.

##### Вибирати покупки з урахуванням заданого бюджету

Code: [Code](../../src/data/skillsTaxonomy/money/transactions/skills/budgetConstraint.data.ts)

За бюджету 40 набір товарів вартістю 43 недоступний, навіть якщо кожен предмет окремо дешевший за 40.

### Дані

Groups: 3 · Skills: 15

Code: [Code](../../src/data/skillsTaxonomy/data/data.data.ts)

Охоплює формулювання запитань, збирання та класифікацію відомостей, їх подання в таблицях і діаграмах та обґрунтовані висновки за ними.

#### Збирання даних

Skills: 5

Постановка дослідницького запитання, вибір ознак, підрахунок випадків і запис результатів спостереження.

Code: [Code](../../src/data/skillsTaxonomy/data/collection/collection.data.ts)

##### Групувати об’єкти за однією або двома визначеними ознаками

Code: [Code](../../src/data/skillsTaxonomy/data/collection/skills/classifyByAttribute.data.ts)

Одні й ті самі предмети можна групувати за кольором або формою; дві ознаки утворюють спільні підкатегорії.

##### Формулювати запитання, для відповіді на яке потрібно зібрати дані

Code: [Code](../../src/data/skillsTaxonomy/data/collection/skills/formulateInvestigationQuestion.data.ts)

Запитання «який фрукт найпопулярніший у групі?» вимагає зібрати відповіді людей, а не відразу виконати арифметичну дію.

##### Збирати прості дані підрахунком та фіксувати частоти категорій

Code: [Code](../../src/data/skillsTaxonomy/data/collection/skills/collectCounts.data.ts)

Для кожної категорії рахують кількість випадків; підсумок частот повинен відповідати загальному числу спостережень.

##### Записувати кількості умовними позначками й відновлювати їх

Code: [Code](../../src/data/skillsTaxonomy/data/collection/skills/tallyMarks.data.ts)

П’ять рисок можуть позначати п’ять відповідей; за позначками відновлюють точні кількості кожної категорії.

##### Заповнювати таблицю результатами спостереження або вимірювання

Code: [Code](../../src/data/skillsTaxonomy/data/collection/skills/fillSimpleTable.data.ts)

Рядки або стовпці мають узгоджені назви, щоб значення вимірювань не втратили одиниці й контекст.

#### Подання даних

Skills: 7

Відображення зібраних чисел у таблицях, піктограмах і діаграмах із правильним розумінням масштабу позначок.

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/presentation.data.ts)

##### Фіксувати серію вимірювань на точковій/лінійній діаграмі з числовою віссю (line plot)

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/linePlotMeasurements.data.ts)

На числовій осі повторні вимірювання позначають над відповідними значеннями; число позначок показує частоту.

##### Читати значення з таблиці та відповідати на прості питання за нею

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/readSimpleTable.data.ts)

Щоб відповісти, скільки учнів обрали варіант Б, читають потрібний підписаний осередок, а не сусідній стовпець.

##### Читати піктограму, де один символ відповідає одному об’єкту

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/readPictograph.data.ts)

Кожна картинка означає рівно один об’єкт; кількість зображень тому дорівнює частоті категорії.

##### Будувати просту піктограму за підрахованими даними

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/buildPictograph.data.ts)

Для значень 3, 2 і 4 потрібно намалювати саме 3, 2 та 4 значки відповідно до підписаних категорій.

##### Читати стовпчикову діаграму й порівнювати висоти стовпчиків

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/readBarChart.data.ts)

Порівнюють стовпчики від спільної базової лінії та з однаковою шкалою; висота кодує число випадків.

##### Створювати просту стовпчикову діаграму за таблицею

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/buildBarChart.data.ts)

Числа з таблиці переносять у висоти стовпчиків за єдиним масштабом і з підписаними категоріями.

##### Читати діаграму, де одна позначка відповідає кільком одиницям

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/scaledChart.data.ts)

Якщо одна позначка означає дві одиниці, три позначки дають шість; масштаб легенди не можна ігнорувати.

#### Інтерпретація даних

Skills: 3

Отримання висновків із числових даних, обчислення порівнянь та виявлення нестачі відомостей.

Code: [Code](../../src/data/skillsTaxonomy/data/interpretation/interpretation.data.ts)

##### Знаходити різницю та суму кількостей за таблицею чи діаграмою

Code: [Code](../../src/data/skillsTaxonomy/data/interpretation/skills/compareCategories.data.ts)

Із категорій 7 та 4 можна визначити різницю 3 і суму 11, зберігаючи той самий контекст даних.

##### Формулювати висновок, який обґрунтовують наведені дані

Code: [Code](../../src/data/skillsTaxonomy/data/interpretation/skills/interpretConclusion.data.ts)

Твердження «найчастіше обрали синій» виправдане лише тоді, коли у відповідної категорії справді найбільша частота.

##### Визначати, якої інформації бракує для відповіді на поставлене питання

Code: [Code](../../src/data/skillsTaxonomy/data/interpretation/skills/missingInformation.data.ts)

Таблиця без підпису одиниці або без потрібної категорії може не дозволити визначити значення, про яке запитують.

### Ймовірність

Groups: 2 · Skills: 4

Code: [Code](../../src/data/skillsTaxonomy/probability/probability.data.ts)

Формує якісне розуміння випадковості: можливі, неможливі й достовірні результати, порівняння шансів та мінливість підсумків повторних випробувань.

#### Випадкові події

Skills: 3

Визначення множини результатів досліду й якісне порівняння можливості подій без хибного припущення про рівні шанси.

Code: [Code](../../src/data/skillsTaxonomy/probability/events/events.data.ts)

##### Розрізняти достовірні й неможливі події на конкретних прикладах

Code: [Code](../../src/data/skillsTaxonomy/probability/events/skills/certainImpossible.data.ts)

Звичайний шестигранний кубик не може показати 9, але обов’язково покаже число від 1 до 6; можливість не означає 50% шансів.

##### Порівнювати повсякденні події як більш або менш імовірні, пояснюючи вибір

Code: [Code](../../src/data/skillsTaxonomy/probability/events/skills/likelihoodLanguage.data.ts)

За чесного кубика отримати парне число і отримати саме шістку — події з різними шансами; обидві можливі, але не рівноймовірні.

##### Називати можливі результати простого випадкового експерименту

Code: [Code](../../src/data/skillsTaxonomy/probability/events/skills/listOutcomes.data.ts)

Для підкидання монети простір результатів складається з двох сторін; перелік має враховувати всі передбачені умовами випадки.

#### Експерименти

Skills: 1

Зміна емпіричних частот у повторних серіях випадкових випробувань, навіть якщо умови кожної серії ті самі.

Code: [Code](../../src/data/skillsTaxonomy/probability/experiments/experiments.data.ts)

##### Порівнювати серії повторних випадкових експериментів і помічати відмінності результатів

Code: [Code](../../src/data/skillsTaxonomy/probability/experiments/skills/experimentVariation.data.ts)

Дві серії по десять підкидань можуть дати різну кількість орлів; випадкова мінливість не свідчить сама по собі про зміну правил.

### Задачі

Groups: 7 · Skills: 23

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/problemSolving.data.ts)

Охоплює переклад умов життєвої ситуації на математичну модель, добір операцій, планування кількох кроків і перевірку осмисленості відповіді.

#### Аналіз умови

Skills: 3

Відокремлення запитання, відомих даних і прихованих припущень текстової задачі до вибору арифметичної операції.

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/conditions/conditions.data.ts)

##### Виділяти умову задачі, відомі величини й запитання

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/conditions/skills/identifyKnownUnknown.data.ts)

Якщо відомо, що було 12 яблук і продали 5, слід виокремити початкову кількість, зміну і те, що потрібно знайти.

##### Розпізнавати зайві дані в текстовій задачі

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/conditions/skills/findExtraneousData.data.ts)

У сюжеті про купівлю олівців колір рюкзака може не впливати на запитувану вартість; не всі числа та деталі потрібні.

##### Пояснювати, чому задачу неможливо розв’язати без додаткових даних

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/conditions/skills/findMissingData.data.ts)

Якщо відома тільки ціна однієї речі, загальну вартість кількох речей не визначити без їхньої кількості.

#### Моделі задач

Skills: 4

Зв’язок між предметною ситуацією, малюнком, схемою та числовим виразом, що відображає потрібну дію.

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/models/models.data.ts)

##### Вибирати додавання чи віднімання відповідно до змісту простої задачі

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/models/skills/chooseOperationAddSub.data.ts)

Об’єднання двох наборів потребує додавання, вилучення з відомого набору — віднімання; ключова ознака — зміна кількості.

##### Вибирати множення чи ділення за змістом рівних груп

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/models/skills/chooseOperationMulDiv.data.ts)

Рівні групи по 4 можна порахувати множенням, а відому суму розподілити на групи діленням.

##### Будувати малюнок, схему або вираз до одноходової задачі

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/models/skills/oneStepModel.data.ts)

Малюнок із трьома кошиками по п’ять яблук має відповідати короткій схемі «3 групи по 5», а не довільному виразу.

##### Складати текстову задачу за малюнком, таблицею чи виразом

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/models/skills/createProblem.data.ts)

До запису 4 × 3 можна придумати сюжет про чотири однакові пакети по три предмети; дані й запитання повинні узгоджуватися.

#### Планування розв’язання

Skills: 5

Побудова й обґрунтування послідовності кількох кроків із перевіркою одиниць, відповіді та альтернативних способів.

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/planning/planning.data.ts)

##### Складати план розв’язання задачі на дві дії та пояснювати порядок

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/planning/skills/twoStepPlan.data.ts)

Спочатку потрібно визначити проміжну невідому величину, яку використають на другому кроці; порядок обґрунтовують залежністю.

##### Розв’язувати нескладні складені задачі на три дії

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/planning/skills/threeStepPlan.data.ts)

У трьохдійовій задачі кожна проміжна відповідь має бути потрібною для наступного кроку та не суперечити умові.

##### Складати та розв’язувати обернену задачу

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/planning/skills/inverseProblem.data.ts)

Якщо відомі сума й один доданок, обернена задача може просити знайти інший доданок; дані й невідоме міняють ролі.

##### Записувати відповідь із відповідними одиницями та перевіряти змістовну правдоподібність

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/planning/skills/explainAnswerUnits.data.ts)

Число 12 без позначки «см» не є повною відповіддю про довжину; результат також має бути реалістичним для ситуації.

##### Порівнювати два правильні способи розв’язання тієї самої задачі

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/planning/skills/multipleSolutionStrategies.data.ts)

До одного результату інколи ведуть групування доданків або послідовні дії; способи порівнюють за коректністю й зручністю.

#### Задачі на порівняння

Skills: 4

Відмінність адитивного порівняння («на скільки») від мультиплікативного («у скільки разів») та задач на зміну величини.

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/comparisons/comparisons.data.ts)

##### Розв’язувати задачі на «на скільки більше / менше»

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/comparisons/skills/additiveComparison.data.ts)

Для наборів із 9 і 6 предметів запитання «на скільки» означає різницю 3, а не відношення 9 ÷ 6.

##### Розв’язувати задачі на збільшення або зменшення на задане число

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/comparisons/skills/increaseDecreaseNumber.data.ts)

Після збільшення 15 на 4 отримують 19; «на чотири» позначає додаткову кількість, а не множник.

##### Розв’язувати задачі на «у скільки разів більше / менше»

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/comparisons/skills/multiplicativeComparison.data.ts)

Якщо одна група має 12 предметів, інша — 4, перша більша втричі; відповідь є коефіцієнтом, а не різницею.

##### Розв’язувати задачі на збільшення або зменшення в задану кількість разів

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/comparisons/skills/increaseDecreaseFactor.data.ts)

Після збільшення 6 утричі виходить 18; «у три рази» описує множення, на відміну від «на три».

#### Задачі на частини

Skills: 2

Відношення цілого і його частин у життєвих сюжетах, включно з одиничними дробовими частинами.

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/parts/parts.data.ts)

##### Розв’язувати задачі на ціле й частини та складати обернені задачі

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/parts/skills/partWholeAddsub.data.ts)

Якщо ціле складається з частин 7 і 5, його можна відновити сумою; відомі ціле та одна частина визначають іншу.

##### Розв’язувати сюжетні задачі на знаходження одиничної частини кількості

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/parts/skills/fractionsContext.data.ts)

Чверть від 20 ягід — п’ять; сюжет вимагає рівного поділу початкової кількості.

#### Задачі на групи

Skills: 2

Ситуації рівних груп і незалежних виборів із двох наборів; розмежування множення та підрахунку комбінацій.

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/groups/groups.data.ts)

##### Лічити всі прості комбінації вибору по одному з двох наборів (одяг, меню тощо)

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/groups/skills/correspondenceCombinations.data.ts)

Для трьох футболок і двох штанів існує шість пар вибору; кожна пара має складатися з одного елемента кожного набору.

##### Розв’язувати задачі на кількість груп, розмір групи та загальну кількість

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/groups/skills/equalGroups.data.ts)

Якщо є п’ять пакетів по чотири цукерки, усього 20; за двома із цих трьох величин можна знайти третю.

#### Задачі на величини

Skills: 3

Практичні співвідношення між величинами — продуктивністю, часом, ціною, кількістю, масою, місткістю та довжиною.

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/quantities/quantities.data.ts)

##### Використовувати зв'язок продуктивність × час = виконаний обсяг у простих задачах

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/quantities/skills/workRateTime.data.ts)

За продуктивності 3 деталі за годину протягом 4 годин виконано 12 деталей; одиниці часу й продуктивності мають узгоджуватися.

##### Моделювати задачі на вартість через зв’язок ціни, кількості та суми

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/quantities/skills/priceQuantityCost.data.ts)

Якщо ціна одиниці 7, а куплено 3 одиниці, модель вартості дає 21; однакова сума може відповідати іншій парі значень.

##### Моделювати задачі на довжину, масу, місткість і час

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/quantities/skills/measurementContext.data.ts)

Для шляху, рідини або маси сюжет має визначати доречну величину й одиницю; числове обчислення без цієї відповідності неповне.

### Міркування

Groups: 4 · Skills: 11

Code: [Code](../../src/data/skillsTaxonomy/reasoning/reasoning.data.ts)

Зосереджується на аргументації математичних тверджень, пошуку контрприкладів, логічних висновках, перевірці розв’язань та переході між формами подання.

#### Аргументація

Skills: 5

Обґрунтування висновків із математичних умов, перевірка загальних тверджень і пояснення обраного способу.

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/argumentation.data.ts)

##### Об’єднувати об’єкти чи числа за правилом і пояснювати вибір

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/skills/classifyAndJustify.data.ts)

До групи можна зарахувати тільки числа, кратні 3; рішення обґрунтовують правилом, а не зовнішньою схожістю записів.

##### Знаходити приклад, який спростовує хибне узагальнення

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/skills/findCounterexample.data.ts)

Твердження «усі парні числа закінчуються на 2» спростовує число 4; одного коректного контрприкладу достатньо.

##### Пояснювати обраний спосіб обчислення словами, схемою чи математичним записом

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/skills/explainStrategy.data.ts)

Запис 19 + 6 = 20 + 5 можна пояснити компенсацією: одну одиницю перенесено між доданками без зміни суми.

##### Відрізняти один приклад від загального правила, яке потребує перевірки

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/skills/distinguishExampleRule.data.ts)

Окремий випадок 2 × 3 = 6 не доводить твердження для всіх чисел; потрібен загальний аргумент або перевірка.

##### Формулювати висновок на основі умов та результатів міркування

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/skills/drawConclusion.data.ts)

Якщо за умовою всі фігури в наборі мають три сторони, висновок про конкретну фігуру спирається саме на цю передумову.

#### Самоперевірка

Skills: 3

Критичне зіставлення отриманого результату з умовою та пошук помилок і незалежних способів перевірки.

Code: [Code](../../src/data/skillsTaxonomy/reasoning/verification/verification.data.ts)

##### Оцінювати, чи може відповідь бути правильною за змістом та порядком величини

Code: [Code](../../src/data/skillsTaxonomy/reasoning/verification/skills/checkReasonableness.data.ts)

Для 98 + 105 результат 200 правдоподібний за масштабом, а 2000 — ні, навіть без точного обчислення.

##### Знаходити неправильний крок у чужому розв’язанні й пояснювати його

Code: [Code](../../src/data/skillsTaxonomy/reasoning/verification/skills/spotCalculationError.data.ts)

Помилка може виникнути в перенесенні розряду або у виборі дії; важливо локалізувати невірний крок, а не лише назвати відповідь хибною.

##### Перевіряти обчислення іншим способом, коли це можливо

Code: [Code](../../src/data/skillsTaxonomy/reasoning/verification/skills/verifyWithSecondMethod.data.ts)

Результат ділення можна зіставити з множенням, а суму — з відніманням; незалежна стратегія допомагає виявляти збій.

#### Логіка

Skills: 2

Відновлення правила та усунення суперечливих варіантів під час простих числових і геометричних міркувань.

Code: [Code](../../src/data/skillsTaxonomy/reasoning/logic/logic.data.ts)

##### Доповнювати геометричну або числову закономірність відповідно до встановленого правила

Code: [Code](../../src/data/skillsTaxonomy/reasoning/logic/skills/completePattern.data.ts)

У послідовності круг, квадрат, круг, квадрат наступним має бути круг, якщо правило чергування не змінилося.

##### Використовувати виключення неможливих варіантів у простих логічних задачах

Code: [Code](../../src/data/skillsTaxonomy/reasoning/logic/skills/logicalElimination.data.ts)

У задачі з трьома дверима та умовами, що виключають два варіанти, третій стає єдиним можливим без вгадування.

#### Способи представлення

Skills: 1

Перехід між предметним зображенням, схемою, словесним правилом і символічним записом зі збереженням змісту.

Code: [Code](../../src/data/skillsTaxonomy/reasoning/representations/representations.data.ts)

##### Переходити між предметною моделлю, схемою, словесним поясненням і виразом

Code: [Code](../../src/data/skillsTaxonomy/reasoning/representations/skills/multipleRepresentations.data.ts)

Схема «три рівні групи по чотири» і запис 3 × 4 описують те саме відношення; зміна форми подання не змінює значення.

