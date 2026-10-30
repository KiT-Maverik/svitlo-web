# Математика — Skills Taxonomy (staging: X06–X08)

Original taxonomy date: 2026-10-28
Staging reduction: 2026-10-30

Це **не повний каталог** математики. Повні визначення вже зафіксовано в `src/data/skillsTaxonomy/` (13 Domains, 60 Groups, 284 Skills). Цей файл тимчасово зберігає лише **кандидати для повторного редакторського рішення X06–X08**. Заголовки Domain/Group та Code-посилання нижче — навігаційний контекст, а не дублікати канонічних визначень. Затверджені описи інших сутностей доступні в Code; початковий повний Markdown збережено в Git-історії.

X06 — незалежний аналіз математичної помилки проти операційно-специфічних Question-варіантів.
X07 — класифікація даних проти класифікації з обґрунтуванням у міркуванні.
X08 — загальна компенсація проти подвійного подвоєння; вимірювання лінійкою з ненульової позначки.

## SUMMARY — PENDING STAGING ONLY

Domains (context): 5
Groups (context): 10
Skills (pending): 12
X06: 6
X07: 2
X08: 4

## DOMAINS

### Арифметика

Groups (context): 5 · Skills (pending): 6

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/arithmetic.data.ts)

#### Додавання

Skills (pending): 1

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/addition.data.ts)

##### Розпізнавати пропущений перенос десятка чи сотні та пояснювати причину помилки

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/carryErrorDetection.data.ts)

**PENDING EDITOR DECISION — X06**

Для 48 + 37 пропущений перенос із суми 8 + 7 призводить до заниженого десяткового розряду.

#### Віднімання

Skills (pending): 1

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/subtraction.data.ts)

##### Розпізнавати неправильне розгрупування під час віднімання й виправляти його

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/borrowErrorDetection.data.ts)

**PENDING EDITOR DECISION — X06**

У 52 − 28 після обміну десятків змінюються і одиниці, і кількість десятків; забутий обмін спотворює відповідь.

#### Поєднання додавання та віднімання

Skills (pending): 2

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/additionSubtraction.data.ts)

##### Використовувати компенсацію (додати й відняти те саме число) для усних обчислень

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/compensation.data.ts)

**PENDING EDITOR DECISION — X08**

У 39 + 8 можна тимчасово замінити 39 на 40, обчислити 48 й відняти додану одиницю.

##### Знаходити й виправляти помилки в додаванні та відніманні за допомогою оберненої дії

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/checkWithInverse.data.ts)

**PENDING EDITOR DECISION — X06**

Результат 63 − 28 перевіряють додаванням 28 до отриманої різниці; невідповідність показує збій.

#### Множення

Skills (pending): 1

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/multiply.data.ts)

##### Знаходити множення на 4 через подвійне подвоєння

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/doubleTwice.data.ts)

**PENDING EDITOR DECISION — X08**

Чотири однакові групи можна отримати двома послідовними подвоєннями, а не окремим таблицевим правилом.

#### Ділення

Skills (pending): 1

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/divide.data.ts)

##### Розпізнавати помилку в діленні або некоректну остачу за моделлю чи перевіркою

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/divide/skills/errorDetection.data.ts)

**PENDING EDITOR DECISION — X06**

Якщо при 19 ÷ 4 названо остачу 7, модель виявляє, що з неї можна скласти ще одну повну четвірку.

### Алгебра

Groups (context): 1 · Skills (pending): 1

Code: [Code](../../src/data/skillsTaxonomy/algebra/algebra.data.ts)

#### Вирази

Skills (pending): 1

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/expressions.data.ts)

##### Пояснювати помилку, спричинену неправильним порядком дій

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/skills/identifyExpressionError.data.ts)

**PENDING EDITOR DECISION — X06**

Результат 6 + 3 × 2 = 18 є наслідком некоректної черговості: множення має передувати додаванню.

### Вимірювання

Groups (context): 1 · Skills (pending): 2

Code: [Code](../../src/data/skillsTaxonomy/measurement/measurement.data.ts)

#### Довжина

Skills (pending): 2

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/length.data.ts)

##### Правильно користуватися лінійкою, починаючи вимірювання від нульової позначки

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/rulerZero.data.ts)

**PENDING EDITOR DECISION — X08**

Шкала лінійки рахує проміжки між поділками, а не кількість надрукованих цифр; початок виміру — нуль.

##### Вимірювати та креслити відрізки заданої довжини в сантиметрах

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/measureCentimeters.data.ts)

**PENDING EDITOR DECISION — X08**

Довжину відрізка визначає кількість сантиметрових інтервалів між його кінцями, а не кількість підписів на шкалі. Побудова відрізка має узгоджувати положення кінців із вибраною нульовою або іншою відліковою позначкою.

### Дані

Groups (context): 1 · Skills (pending): 1

Code: [Code](../../src/data/skillsTaxonomy/data/data.data.ts)

#### Збирання даних

Skills (pending): 1

Code: [Code](../../src/data/skillsTaxonomy/data/collection/collection.data.ts)

##### Групувати об’єкти за однією або двома визначеними ознаками

Code: [Code](../../src/data/skillsTaxonomy/data/collection/skills/classifyByAttribute.data.ts)

**PENDING EDITOR DECISION — X07**

Одні й ті самі предмети можна групувати за кольором або формою; дві ознаки утворюють спільні підкатегорії.

### Міркування

Groups (context): 2 · Skills (pending): 2

Code: [Code](../../src/data/skillsTaxonomy/reasoning/reasoning.data.ts)

#### Аргументація

Skills (pending): 1

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/argumentation.data.ts)

##### Об’єднувати об’єкти чи числа за правилом і пояснювати вибір

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/skills/classifyAndJustify.data.ts)

**PENDING EDITOR DECISION — X07**

До групи можна зарахувати тільки числа, кратні 3; рішення обґрунтовують правилом, а не зовнішньою схожістю записів.

#### Самоперевірка

Skills (pending): 1

Code: [Code](../../src/data/skillsTaxonomy/reasoning/verification/verification.data.ts)

##### Знаходити неправильний крок у чужому розв’язанні й пояснювати його

Code: [Code](../../src/data/skillsTaxonomy/reasoning/verification/skills/spotCalculationError.data.ts)

**PENDING EDITOR DECISION — X06**

Помилка може виникнути в перенесенні розряду або у виборі дії; важливо локалізувати невірний крок, а не лише назвати відповідь хибною.

