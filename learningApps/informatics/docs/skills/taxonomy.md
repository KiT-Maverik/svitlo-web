# Інформатика — Skills Taxonomy

Date: 2026-10-29

Чернетка для редакторського рев’ю. Предметний обсяг: обчислювальне мислення, алгоритми й програмування, цифрові системи, дані та інформація, програмна архітектура, AI, робототехніка, цифрова безпека та цифрова творчість. Зафіксовано сферу з `studio/Subject Proposition.md` (з урахуванням погодженого розширення предметної пропозиції) з деталізацією за українськими та міжнародними стандартами. Навігаційна таксономія не містить шкільних класів, віку, уроків, вимірювань, завдань, оцінок або результатів навчання конкретної особи. Скіли належать цьому підручнику: подібні компетентності в інших підручниках можуть існувати незалежно; міжпідручникова уніфікація й аналітика не є вимогою.

## SUMMARY

Domains: 15
Groups: 65
Skills: 311

Code files: 0/15 Domains · 0/65 Groups · 0/311 Skills

## DOMAINS

### Computational Thinking

Groups: 2 · Skills: 12

[Not implemented](#)

Turning open-ended problems into formalized tasks by identifying relevant information, defining rules, and constructing solutions that can be repeated and checked. Unlike programming, this does not necessarily require expressing the solution as executable code.

#### Decomposition and Abstraction

Skills: 4

[Not implemented](#)

Defining a problem's boundaries by breaking it into subproblems, identifying meaningful characteristics, and constructing a simplified model. These operations precede selecting a specific algorithm or class structure.

##### Decompose a Problem

[Not implemented](#)

Identify independent subproblems with distinct outcomes that collectively solve the original problem. For example, finding a route involves identifying the start, destination, and allowed transitions.

##### Identify Essential Object Properties

[Not implemented](#)

Choose only characteristics relevant to the given task: sorting books by author depends on the author's name, not the cover color. Properties omitted from one model may matter in another.

##### Build an Abstract System Model

[Not implemented](#)

Represent a complex situation with a simplified account of the elements, states, and relationships needed to investigate a question. For example, connections between rooms can be modeled as a graph without recreating each room's interior.

##### Generalize a Repeated Method

[Not implemented](#)

Extract an invariant sequence of actions from several specific solutions and formulate a rule applicable to new cases. This requires separating the method from incidental numbers or objects in the examples.

#### Logic and Patterns

Skills: 8

[Not implemented](#)

Reasoning from explicit rules includes finding patterns, evaluating simple statements, applying independent logical operations, combining conditions, and detecting contradictions. The focus is on truth and consequences, not necessarily executable code.

##### Recognize a Pattern

[Not implemented](#)

Infer a rule governing changes in a sequence's values or structure and test it against several elements. An observed repetition suggests a rule but does not guarantee what unseen data will contain.

##### Predict an Outcome from a Rule

[Not implemented](#)

Derive the next state or value from an explicit rule and initial conditions, such as one transition of a finite-state machine. Unlike statistical forecasting, the rule determines the outcome here.

##### Evaluate a Simple Condition

[Not implemented](#)

Given known facts, determine whether a single elementary condition holds, such as `temperature > 20` or `isOpen = true`. Distinguish a false statement from one whose truth cannot be determined with the available information; combining conditions is a separate logical operation.

##### Apply Logical AND

[Not implemented](#)

Evaluate the conjunction of two conditions: it is true only when both conditions are true. For example, access requires both a correct code and authorization; do not confuse this with an alternative condition.

##### Apply Logical OR

[Not implemented](#)

Evaluate the disjunction of two conditions: it is true when at least one condition holds, including when both hold. For example, a discount may be available with a student ID or a promotional code; this is inclusive OR unless otherwise specified.

##### Apply Logical NOT

[Not implemented](#)

Negate a condition's truth value: `NOT isLocked` is true when `isLocked` is false. Negation changes the truth value of the condition, not the underlying facts.

##### Evaluate Compound Logical Expressions

[Not implemented](#)

Compute expressions involving multiple conditions and AND, OR, and NOT while observing parentheses and operator precedence. For example, distinguish `(A OR B) AND C` from `A OR (B AND C)` for the same inputs.

##### Detect Contradictory Rules

[Not implemented](#)

Show when two or more requirements cannot hold under the same conditions: for example, an object cannot simultaneously be located exclusively in room A and exclusively in room B. The focus is rule consistency rather than program execution order.
### Programming

Groups: 8 · Skills: 37

[Not implemented](#)

Reading, writing, running, and testing executable instructions that modify program state or produce results. Unlike abstract algorithm design, these competencies concern the behavior of an actual program.

#### Reading Programs

Skills: 4

[Not implemented](#)

Interpreting existing commands and their execution order, including intermediate state changes and final outcomes. This differs from writing new instructions or fixing an identified defect.

##### Explain a Command's Purpose

[Not implemented](#)

Identify the operation performed by an instruction and which values or effects it changes given the initial state. For example, assignment stores a new value but does not necessarily display it.

##### Trace Program State

[Not implemented](#)

Calculate intermediate values of variables, objects, and execution position across several commands; use a trace table to record when state changes. The final output may conceal those intermediate changes.

##### Predict Program Output

[Not implemented](#)

Determine exactly what a program prints, draws, or returns for particular inputs and execution order. This concerns the externally observable result, not every internal state.

##### Predict Consequences of Execution Order

[Not implemented](#)

Determine how the order of assignments, calls, or checks affects program state and outcomes, especially when intuitive code reading is misleading. For example, a later instruction operates on a value already changed by an earlier one; unlike merely predicting output, this analyzes causal dependencies on order.

#### Programming Constructs

Skills: 7

[Not implemented](#)

Using executable commands, conditions, loops, and event responses to control a program. Unlike algorithm design, the constructs must be implemented in a particular execution environment.

##### Write a Sequence of Commands

[Not implemented](#)

Translate specified steps into syntactically valid instructions for an environment that executes them in order. Unlike describing an algorithm in prose, this requires observing language rules and command effects.

##### Implement Conditional Behavior

[Not implemented](#)

Write a Boolean test and the corresponding executable branches, ensuring that the intended branch runs for each anticipated condition value.

##### Implement a Loop

[Not implemented](#)

Express repeated instructions using a counter or termination condition and correctly update state between iterations. An instruction repeats by rule rather than through manual duplication.

##### Handle an Event

[Not implemented](#)

Associate a programmed response with a signal such as a button press, message, or state change, distinguishing the event's arrival from execution of its handler. This is not simply a condition checked sequentially at every step.

##### Detect an Infinite Loop

[Not implemented](#)

Identify when a loop's termination condition can never be reached because a counter stays unchanged or state is updated incorrectly; explain the consequences for program execution.

##### Move Loop-Invariant Computations Outside a Loop

[Not implemented](#)

Recognize an expression whose value remains unchanged between iterations and safely calculate it once outside the loop, provided that doing so does not change required side effects or execution order.

##### Order Overlapping Conditional Checks

[Not implemented](#)

In an `if/else if` chain, explain why a broad condition may make a more specific branch unreachable and place the specific check first when appropriate; do not automatically apply this rule to independent `if` statements.

#### Program Data

Skills: 3

[Not implemented](#)

Working with values received, stored, and changed at runtime: variables, types, inputs, and state transitions. This concerns data during code execution rather than external datasets for statistical analysis.

##### Use a Variable

[Not implemented](#)

Define a named location for a value and access its current contents at runtime; distinguish the variable's name from the value it stores.

##### Update Program State

[Not implemented](#)

Compute and store a new state from the previous one, such as incrementing a counter after an event. Unlike simply reading a variable, changing state affects subsequent operations.

##### Use Input Data

[Not implemented](#)

Accept an external value as program input and use it in a computation or choice of action. The output should depend on input rather than on a fixed example.

#### Testing and Debugging

Skills: 4

[Not implemented](#)

Compare actual program behavior with requirements, find the cause of deviations, correct them, and test again. Detecting a defect, diagnosing it, changing code, and testing multiple cases are distinct abilities.

##### Detect Incorrect Program Behavior

[Not implemented](#)

Compare actual results or responses with requirements and identify a specific deviation such as a wrong value, missing response, or crash. An incorrect result need not be a runtime error; finding its root cause is a separate skill.

##### Locate the Cause of an Error

[Not implemented](#)

Narrow a defect to a particular instruction, condition, or state transition by tracing execution and testing hypotheses. Recognizing a wrong result does not by itself identify its cause.

##### Fix a Program Defect

[Not implemented](#)

Change the specific code or rule responsible for a confirmed defect without breaking the required behavior of other cases. Retest the original failure after making the correction.

##### Test a Program with Different Inputs

[Not implemented](#)

Choose valid and boundary input sets, compare actual with expected results, and identify cases where the program behaves differently. One successful run does not establish overall correctness.

#### Functions and Reuse

Skills: 5

[Not implemented](#)

Named sections of programs with inputs, outputs, and defined responsibilities that help divide tasks and avoid repeating the same logic.

##### Explain the Purpose of a Function

[Not implemented](#)

Describe a function as a named operation that performs a particular action or returns a value and can be called repeatedly without rewriting its body.

##### Define a Function with Parameters

[Not implemented](#)

Create a function whose input parameters represent values used inside its body rather than hard-coding a single example.

##### Call a Function with Arguments

[Not implemented](#)

Supply concrete values at a call site and trace how they bind to formal parameters; distinguish defining a function from calling it.

##### Use a Function's Return Value

[Not implemented](#)

Obtain a returned value and use it in another computation, distinguishing returned data from text printed to the screen.

##### Explain Recursion

[Not implemented](#)

Trace a function that calls itself on a simpler case and identify the base condition that ends the calls. For example, computing a factorial involves both reducing the argument and terminating at the base case.

#### Data Types and References

Skills: 6

[Not implemented](#)

Types determine valid forms of values and operations; storage and state-passing behavior depend on the programming language. Do not assume every language draws the same boundary between primitives and objects.

##### Distinguish Value Types

[Not implemented](#)

Identify whether a value is numeric, textual, or Boolean and which operations are meaningful for it. Numeric addition and string concatenation may look similar but follow different rules.

##### Explain Primitive Values in a Language

[Not implemented](#)

Use a selected programming language to describe simple values such as numbers, Boolean values, or text and how that language classifies them; do not assume strings are primitive in every language.

##### Explain Composite Data Structures

[Not implemented](#)

Recognize arrays, lists, records, and dictionaries as organizations of several values and their relationships; separate a structure's form from its current contents.

##### Distinguish Value Copying from Shared References

[Not implemented](#)

In a particular language, demonstrate when modifying a reference affects a shared mutable object and when a new value remains independent; do not equate this universally with a primitive/reference type distinction.

##### Explain a Data Type Contract

[Not implemented](#)

Determine what type or form of value a declared input contract requires for a function, component, or call; text cannot always safely substitute for a number.

##### Validate Data Against a Contract

[Not implemented](#)

Identify when received values violate an expected type or format and use validation or explicit conversion instead of silently assuming compatibility.

#### Program Structure and Syntax

Skills: 4

[Not implemented](#)

The language units of executable code include keywords, operators, identifiers, expressions, statements, and blocks. Editor highlighting helps identify them but does not prove a program correct.

##### Distinguish Keywords from Identifiers

[Not implemented](#)

Separate reserved language constructs from programmer-chosen names for variables and functions; naming rules vary by language.

##### Distinguish Operators, Expressions, and Statements

[Not implemented](#)

Explain that an operator acts on operands, an expression produces a value, and a statement directs an action; one line of code may contain several such units.

##### Explain Statement Block Boundaries

[Not implemented](#)

Identify which instructions belong to a function, loop, or conditional branch based on braces or indentation in a language, without confusing a block with an entire file.

##### Explain Syntax Highlighting

[Not implemented](#)

Recognize editor coloring of keywords, strings, comments, and names as a visual aid; correctly colored code is not necessarily correct.

#### Programming Paradigms

Skills: 4

[Not implemented](#)

Compare code organization through stepwise state changes, functional transformation of values, object modeling, and description of desired results. A language may support several paradigms.

##### Explain Procedural Programming

[Not implemented](#)

Organize tasks into named procedures and sequences of state-changing instructions without requiring a class for each action.

##### Explain Functional Programming

[Not implemented](#)

Describe computation through function composition and transformations of values; demonstrate that pure functions do not modify external state.

##### Explain Object-Oriented Programming

[Not implemented](#)

Organize a program around interacting objects with state and methods, rather than as a list of global procedures.

##### Distinguish Imperative and Declarative Approaches

[Not implemented](#)

Compare specifying concrete state-changing steps with specifying desired results or rules from which the environment chooses an execution strategy.
### Цифрові системи та мережі

Groups: 8 · Skills: 37

[Not implemented](#)

Пояснює взаємодію апаратних компонентів, програм, способів кодування та каналів передавання інформації. Ці скіли описують принципи роботи цифрової інфраструктури, а не лише практику користування пристроями.

#### Будова цифрових пристроїв

Skills: 3

[Not implemented](#)

Ролі обчислювальних компонентів у системі: процесор виконує інструкції, пам’ять утримує робочі дані, а апаратна і програмна складові взаємодіють. Питання мережевого передавання винесені до іншої групи.

##### Розпізнавати цифрові пристрої

[Not implemented](#)

Визначати, чи пристрій використовує цифрове представлення й програмовану обробку інформації, на відміну від суто механічного або аналогового засобу. Зовнішня форма екрана чи кнопок сама по собі не є достатнім критерієм.

##### Пояснювати функцію процесора

[Not implemented](#)

Пов’язувати процесор із вибіркою, декодуванням і виконанням інструкцій та керуванням операціями над даними; не плутати його обчислювальну роль із постійним зберіганням файлів.

##### Розрізняти апаратне та програмне забезпечення

[Not implemented](#)

Відділяти матеріальні компоненти пристрою від інструкцій і даних, що визначають його роботу; показувати їхню взаємодію, наприклад як програма керує камерою через апаратний інтерфейс.

#### Подання та зберігання

Skills: 4

[Not implemented](#)

Як цифрові пристрої кодують, форматують, вимірюють обсяг і впорядковують файли та дані. Тут відрізняють спосіб представлення інформації від організації файлів у сховищі.

##### Пояснювати двійкове подання

[Not implemented](#)

Показувати, як дві умовні позначки 0 і 1 утворюють біти й послідовності бітів, якими кодують числа та інші типи даних. Один біт описує стан, а значення довшого коду залежить від обраного способу інтерпретації.

##### Розрізняти цифрові формати

[Not implemented](#)

Встановлювати, як формат визначає спосіб інтерпретації збережених бітів: текстовий файл, растрове зображення й аудіозапис мають різні структури. Розширення назви допомагає розпізнати формат, але саме по собі не гарантує вмісту.

##### Порівнювати розміри цифрових файлів

[Not implemented](#)

Співвідносити кількість збережених байтів із обсягом файла, коректно порівнювати одиниці та пояснювати, що однакові на вигляд матеріали можуть мати різний розмір через формат або стиснення.

##### Організовувати файли у каталогах

[Not implemented](#)

Будувати зрозумілу ієрархію тек для набору ресурсів, обирати назви й місце збереження так, щоб файл можна було однозначно знайти за шляхом. Структура каталогів не визначає формат самого файла.

#### Мережі

Skills: 4

[Not implemented](#)

Обмін інформацією між з’єднаними пристроями, відмінність інтернету від вебслужб і роль каналів зв’язку. Ці компетентності пояснюють передавання повідомлення, а не його достовірність чи безпечність.

##### Пояснювати призначення комп’ютерної мережі

[Not implemented](#)

Показувати, як з’єднання окремих пристроїв у мережу дозволяє обмін повідомленнями та користування спільними ресурсами, хоча кожен пристрій і далі має власну обчислювальну роль.

##### Відрізняти інтернет від вебу

[Not implemented](#)

Пояснювати, що інтернет — інфраструктура взаємопов’язаних мереж, а веб — служба для доступу до ресурсів через браузер і вебпротоколи. Електронна пошта або передавання файлів можуть користуватися інтернетом без вебсторінки.

##### Пояснювати доставку повідомлення мережею

[Not implemented](#)

Моделювати шлях даних від пристрою-відправника через проміжні мережеві вузли до адресата; відділяти адресу призначення та транспортне передавання від змісту повідомлення. Повідомлення не обов’язково йде одним прямим фізичним кабелем.

##### Пояснювати призначення бездротового зв’язку

[Not implemented](#)

Розуміти, що Wi-Fi та інші бездротові технології передають сигнали через середовище без окремого кабелю до кожного пристрою, але все одно потребують сумісних пристроїв, протоколів та інфраструктури зв’язку.

#### Системи числення

Skills: 4

[Not implemented](#)

Позиційні форми запису чисел, їхні основи й розряди; двійкові стани пов’язують математичний запис із технічним представленням даних.

##### Пояснювати позиційну систему числення

[Not implemented](#)

Значення цифри залежить від її розряду й основи, тому запис 10 у двійковій і десятковій системах позначає різні кількості.

##### Переводити числа між двійковою та десятковою системами

[Not implemented](#)

Невелике ціле подають сумою степенів двійки й обернено відновлюють за розрядами, відрізняючи запис від самого числа.

##### Пояснювати двійкову логіку комп’ютера

[Not implemented](#)

Два стійко розрізнювані рівні електронного сигналу дозволяють надійно кодувати нулі та одиниці, хоча фізичні схеми складніші за два абстрактні символи.

##### Розрізняти двійкову та шістнадцяткову системи

[Not implemented](#)

Один шістнадцятковий розряд замінює чотири біти, скорочуючи запис без зміни числового значення.

#### Пам’ять і сховища

Skills: 4

[Not implemented](#)

Розділяє тимчасове утримання робочого стану програми та енергонезалежне збереження файлів, а також різні ролі RAM, ROM і накопичувача.

##### Пояснювати оперативну пам’ять

[Not implemented](#)

Оперативна пам’ять утримує робочі дані й інструкції для швидкого доступу під час виконання; зазвичай її вміст втрачається після вимкнення живлення.

##### Пояснювати постійне сховище

[Not implemented](#)

SSD, флешпам’ять або інший енергонезалежний носій зберігає файли без безперервного живлення, на відміну від типового робочого стану RAM.

##### Пояснювати призначення ROM

[Not implemented](#)

Пояснювати, що ROM та пов’язані з нею енергонезалежні технології можуть зберігати прошивку або початкові інструкції пристрою без живлення. Історична назва «пам’ять лише для читання» не означає, що вся сучасна прошивка фізично незмінна; багато пристроїв використовують перепрограмовувану флешпам’ять.

##### Розрізняти RAM, ROM та накопичувач

[Not implemented](#)

Робоча пам’ять, пам’ять прошивки й сховище користувацьких файлів мають різні призначення; слово «постійна пам’ять» без контексту неоднозначне.

#### Операційні системи

Skills: 4

[Not implemented](#)

Операційна система керує програмами, процесами, файлами й пристроями та відрізняється від застосунків, які працюють у її середовищі.

##### Пояснювати призначення операційної системи

[Not implemented](#)

ОС узгоджує запуск програм, доступ до файлів і пристроїв; окремий застосунок не зобов’язаний сам реалізувати всі апаратні операції.

##### Розрізняти сімейства операційних систем

[Not implemented](#)

Windows, macOS, Linux, Android та iOS є різними прикладами ОС і споріднених платформ, а не просто назвами комп’ютерів.

##### Пояснювати процес в операційній системі

[Not implemented](#)

Запущена програма має поточний стан і виділені ресурси, тоді як файл програми на диску сам по собі не є процесом.

##### Пояснювати роль Лінуса Торвальдса у розвитку Linux

[Not implemented](#)

Торвальдс ініціював ядро Linux; повна операційна система додає інші компоненти, а спільна розробка підтримує її розвиток.

#### Мережеві моделі та протоколи

Skills: 11

[Not implemented](#)

Правила мережевого обміну охоплюють адресацію та доставку пакетів, рівні протоколів, захист з’єднань і доступ кількох пристроїв до спільного середовища. OSI слугує концептуальною моделлю, а мережеві технології реалізують свої функції різними стеком і способами доступу.

##### Пояснювати поняття мережевого протоколу

[Not implemented](#)

Протокол задає формат повідомлення та правила взаємодії пристроїв, щоб вони могли правильно обмінюватися даними.

##### Пояснювати рівні OSI

[Not implemented](#)

Сім рівнів OSI описують функції від передавання фізичного сигналу до взаємодії застосунків, але не вимагають окремого протоколу для кожного.

##### Розрізняти OSI та TCP/IP

[Not implemented](#)

Модель OSI має сім концептуальних рівнів, а стек TCP/IP організовує реальні інтернет-протоколи за іншою кількістю функціональних шарів.

##### Пояснювати призначення IP

[Not implemented](#)

IP використовує мережеву адресацію й пересилання пакетів між мережами; IP-адреса не тотожна доменному імені сайту.

##### Розрізняти TCP та UDP

[Not implemented](#)

TCP працює з керованим потоком і підтвердженнями, UDP передає датаграми без таких гарантій доставки на цьому рівні.

##### Пояснювати DNS

[Not implemented](#)

DNS дозволяє знаходити мережеві адреси за доменними іменами, не підмінюючи власне передавання даних між пристроями.

##### Розрізняти HTTP та HTTPS

[Not implemented](#)

HTTPS додає захищене TLS-з’єднання до вебзапитів HTTP, але сам замок не підтверджує доброчесність власника ресурсу.

##### Пояснювати CSMA/CD

[Not implemented](#)

Пояснювати, як спільний сегмент класичного Ethernet перевіряв зайнятість середовища, виявляв колізію та повторював передачу після затримки. Сучасний повнодуплексний комутований Ethernet зазвичай цього механізму не потребує.

##### Пояснювати CSMA/CA

[Not implemented](#)

Пояснювати, чому бездротова мережа перед передаванням оцінює зайнятість радіоканалу й намагається зменшити ймовірність колізій за допомогою очікування та узгоджених правил доступу; уникнення колізій не гарантує їх повної відсутності.

##### Пояснювати Token Ring

[Not implemented](#)

Пояснювати, як у мережі з передаванням маркера право надсилати дані переходить між учасниками за визначеним порядком, і чому це відрізняється від змагання пристроїв за спільне середовище.

##### Порівнювати способи доступу до мережі

[Not implemented](#)

Обирати й аргументовано порівнювати механізми виявлення колізій (CSMA/CD), запобігання їм (CSMA/CA) та передавання маркера (Token Ring) за способом отримання права на передавання. Розуміти, що йдеться про різні технологічні контексти, а не про три взаємозамінні протоколи сучасного Ethernet.

#### Виконання задач

Skills: 3

[Not implemented](#)

Послідовність, чергування та одночасна робота кількох виконавців впливають на порядок операцій і використання ресурсів. Конкурентність означає організацію перекривних у часі задач, а паралелізм — фактичне виконання операцій водночас; одне не слід автоматично прирівнювати до іншого.

##### Пояснювати конкурентне виконання

[Not implemented](#)

Визначати, як кілька задач просуваються через чергування кроків або очікування подій без вимоги одночасного виконання інструкцій. Порівнювати такий сценарій із повним послідовним завершенням однієї задачі перед початком іншої.

##### Пояснювати паралельне виконання

[Not implemented](#)

Визначати, коли незалежні операції фактично виконуються одночасно на кількох обчислювальних ресурсах. Відрізняти паралелізм від лише швидкого перемикання між задачами на одному виконавці; додаткові ресурси не завжди гарантують пропорційне прискорення.

##### Розподіляти незалежні задачі між виконавцями

[Not implemented](#)

На моделі обчислювальної системи планувати, які підзадачі можна виконувати одночасно, а які мають чекати залежних результатів. Наприклад, незалежну обробку кількох зображень можна розподілити між виконавцями, а підсумовування їхніх результатів виконати після завершення обробки.

### Інформація та дані

Groups: 5 · Skills: 24

[Not implemented](#)

Охоплює отримання й перевірку інформації, організацію наборів даних, виявлення закономірностей і міркування про невизначені події. Цифровий контекст не виключає перетину з математикою; класифікація залишається локальною для інформатики.

#### Пошук та перевірка інформації

Skills: 4

[Not implemented](#)

Пошук релевантних відомостей та встановлення того, чи підтверджується конкретне твердження незалежними джерелами. Формування запиту, порівняння повідомлень і перевірка факту — різні операції.

##### Формулювати інформаційний запит

[Not implemented](#)

Перетворювати конкретне інформаційне питання на слова й уточнення, за якими система пошуку може повернути релевантні ресурси. Наприклад, додати назву об’єкта, місце чи період замість нечіткого загального слова.

##### Порівнювати інформаційні джерела

[Not implemented](#)

Зіставляти повідомлення з кількох джерел про одне твердження, відокремлювати спільні факти від розбіжностей і визначати, які додаткові відомості потрібні для з’ясування причини невідповідності.

##### Перевіряти твердження за джерелом

[Not implemented](#)

Шукати підтвердження конкретного твердження в першоджерелі або незалежному надійному матеріалі, враховуючи дату, контекст та походження інформації. Повторення помилки багатьма сайтами не робить її достовірною.

##### Розрізняти повідомлення й дані

[Not implemented](#)

Пояснювати відмінність між окремими зафіксованими значеннями та повідомленням, що передає зміст адресатові за певного контексту. Наприклад, число «18» стає осмисленим повідомленням про температуру лише після додавання одиниці й об’єкта вимірювання.

#### Збирання й організація даних

Skills: 4

[Not implemented](#)

Визначення потрібних полів, систематичний запис спостережень, групування за критерієм та організація таблиці. Збирати дані означає отримувати записи; подавати їх у таблиці — структурувати вже наявні.

##### Визначати потрібні для задачі дані

[Not implemented](#)

Установлювати, які поля, спостереження чи вимірювання справді потрібні для відповіді на конкретне питання, а які не впливають на висновок. Не слід збирати персональні відомості лише тому, що їх технічно можливо записати.

##### Збирати дані за правилом

[Not implemented](#)

Одержувати записи за заздалегідь визначеною процедурою з однаковими одиницями та ознаками для кожного спостереження. Зміна правила посеред збирання робить частини набору важко порівнюваними.

##### Групувати дані за ознакою

[Not implemented](#)

Застосовувати один критерій до всіх елементів набору, створюючи категорії з послідовним правилом належності. Наприклад, об’єднати повідомлення за типом файла, не змішуючи цю ознаку з розміром.

##### Подавати дані у таблиці

[Not implemented](#)

Розподіляти однотипні записи по рядках, а їхні властивості — по стовпцях зі сталими заголовками й одиницями. Таблиця зберігає значення та їхні зв’язки, не підміняючи їх графічним узагальненням.

#### Бази даних

Skills: 5

[Not implemented](#)

Структуроване зберігання взаємопов’язаних відомостей відрізняється від простого оформлення таблиці для читача. Поля й записи описують табличну структуру, ключі забезпечують ідентифікацію, а зв’язки дають змогу працювати з даними кількох таблиць.

##### Пояснювати таблицю бази даних

[Not implemented](#)

Пояснювати, як у реляційній моделі таблиця зберігає записи одного типу за спільним набором полів, наприклад каталог книг; оформлена таблиця у документі сама по собі не є базою даних.

##### Розрізняти запис і поле

[Not implemented](#)

Визначати, що запис подає одну сутність або випадок у рядку таблиці, а поле — окрему іменовану характеристику у стовпці. Значення конкретної клітинки не дорівнює визначенню поля для всієї таблиці.

##### Пояснювати первинний ключ

[Not implemented](#)

Пояснювати, навіщо запису потрібен стабільний унікальний ідентифікатор у межах таблиці та чому ім’я або назва не завжди придатні як ключ.

##### Моделювати зв’язки між таблицями

[Not implemented](#)

Визначати, як записи різних таблиць пов’язуються через ідентифікатори, наприклад `studentId` у записі про виконане завдання посилається на конкретного учня. Показувати різницю між ключем запису і посиланням на нього.

##### Проєктувати просту схему бази даних

[Not implemented](#)

Для предметної задачі самостійно вибирати сутності, поля, ключі й необхідні зв’язки, не дублюючи ті самі факти без потреби. Наприклад, для бібліотеки окремо описати книжки та позичання; це проєктування цілісної схеми, а не лише пояснення готової таблиці.

#### Статистичне дослідження

Skills: 4

[Not implemented](#)

Читання та створення графічних подань набору даних, знаходження частот і порівняння спостережень. Статистичний висновок спирається на описані дані; він не тотожний прогнозу випадкової події.

##### Читати діаграму

[Not implemented](#)

Установлювати, які саме значення кодує вісь, шкала, колір чи довжина елемента, та коректно зчитувати дані без домислів за оформленням. Наприклад, початок шкали не з нуля може візуально перебільшувати різницю.

##### Будувати просту діаграму

[Not implemented](#)

Обирати придатне зображення для типу даних і переносити числові чи категоріальні значення в підписані елементи зі зрозумілою шкалою. Графічне подання не повинно змінювати співвідношення вихідних значень.

##### Знаходити найчастіше значення

[Not implemented](#)

Обчислювати або виявляти значення з найбільшою частотою в наборі, враховуючи можливість кількох однаково поширених значень. Частота не є автоматично середнім арифметичним або найбільшим за величиною числом.

##### Порівнювати набори спостережень

[Not implemented](#)

Визначати однакову для двох наборів основу порівняння — категорії, діапазони чи частоти — і пояснювати помічені відмінності. Не робити висновок про причину відмінності лише з її наявності.

#### Імовірність і невизначеність

Skills: 7

[Not implemented](#)

Розмежування можливих і неможливих результатів, імовірнісних моделей, порівняння шансів та обмежень передбачення. Випадковість як джерело варіантів у цифровій моделі відрізняється від оцінки конкретного ризику.

##### Розрізняти випадкову та визначену подію

[Not implemented](#)

Встановлювати, чи результат повністю задається відомими умовами моделі, чи модель допускає декілька результатів із невизначеним наперед вибором. Невідомий спостерігачеві результат сам по собі ще не доводить фізичну випадковість.

##### Пояснювати можливість події

[Not implemented](#)

Перевіряти, чи належить описаний результат до припустимих за умовами моделі, навіть коли він дуже малоймовірний. Якщо в коробці тільки сині кульки, витягнути червону за цих умов неможливо.

##### Пояснювати ймовірність події

[Not implemented](#)

Оцінювати або інтерпретувати частку шансів події з огляду на модель та її припущення, зокрема рівноймовірність варіантів. Для одного рівноймовірного сховку зі 100 позицій шанс одного навмання обраного влучання становить 1%.

##### Розрізняти можливість і ймовірність події

[Not implemented](#)

Відрізняти твердження «подія може статися» від оцінки шансу й від обіцянки результату: два варіанти «так/ні» не означають 50/50. Наприклад, виграти з першої спроби серед 100 однакових закритих клітинок можливо, але це не рівноймовірно з промахом.

##### Порівнювати ймовірність простих подій

[Not implemented](#)

Зіставляти шанси двох подій за однакових припущень, наприклад вибору одного з двох наборів рівноймовірних результатів. Порівняння потребує даних про розподіл, а не лише кількості словесно названих результатів.

##### Пояснювати обмеженість прогнозу

[Not implemented](#)

Пояснювати, чому навіть відома ймовірність не визначає результат одного випробування, а невірна модель може дати хибні прогнози. Виграш за малоймовірного випадку не спростовує коректну оцінку шансу.

##### Використовувати випадковість у моделі

[Not implemented](#)

Додавати до цифрової симуляції випадковий вибір з явно заданої множини результатів і відділяти його від запрограмованого сценарію. Змінюваність результатів не є доказом того, що всі вони однаково ймовірні.

### Програмна архітектура

Groups: 2 · Skills: 21

[Not implemented](#)

Пояснює структуру програми через об’єкти, контракти, відповідальності та залежності. Окремий домен патернів містить типові рішення щодо створення, композиції й поведінки об’єктів.

#### Об’єктна модель

Skills: 13

[Not implemented](#)

Організація програмної поведінки навколо об’єктів: стан, методи, класи, абстракція, інкапсуляція та зв’язки між типами. Опис окремого об’єкта й пояснення відношень між класами не є однією навичкою.

##### Виділяти стан і поведінку об’єкта

[Not implemented](#)

Формувати ментальну модель реального або уявного об’єкта через його стан (які характеристики він має та як вони можуть змінюватися) і поведінку (що він може робити або які дії з ним можливі). Наприклад, автомобіль має швидкість і запас пального, може прискорюватися та гальмувати. Це концептуальний спосіб опису об’єкта; він не потребує визначення програмних властивостей, методів або написання коду.

##### Пояснювати поняття класу

[Not implemented](#)

Розглядати клас як визначення структури та доступних операцій для створюваних за ним об’єктів, наприклад опис властивостей і методів умовного «Лічильника». Сам опис класу не є окремим екземпляром із власним поточним значенням.

##### Розрізняти клас та об’єкт

[Not implemented](#)

Порівнювати визначення типового шаблону з конкретними екземплярами, що мають власні значення: один клас «Робот» може породити кількох роботів з різними координатами. Зміна стану одного екземпляра не зобов’язана змінювати інші.

##### Застосовувати абстракцію об’єкта

[Not implemented](#)

Виділяти мінімальний набір операцій або властивостей, важливих користувачу компонента, приховуючи деталі, які не впливають на цей контракт. Наприклад, виклик «переміститися» може не розкривати внутрішню логіку двигунів робота.

##### Пояснювати інкапсуляцію

[Not implemented](#)

Показувати, як об’єкт обмежує прямий доступ до внутрішнього стану й пропонує керовані операції, що зберігають його правила. Наприклад, банківський рахунок змінюють методом списання, який перевіряє допустимість операції.

##### Пояснювати спадкування

[Not implemented](#)

Пояснювати відношення між базовим і похідним типами, коли похідний тип успадковує визначені операції чи властивості та може спеціалізувати їх. Спадкування описує відношення типів «є різновидом», а не включення частини до цілого.

##### Пояснювати поліморфізм

[Not implemented](#)

Розуміти, як різні реалізації виконують спільно очікувану операцію через однаковий контракт, наприклад метод `draw()` для кола і прямокутника. Виклик залишається узгодженим, хоча конкретна поведінка залежить від реалізації.

##### Моделювати композицію об’єктів

[Not implemented](#)

Будувати систему з компонентів, кожен з яких має власну роль, наприклад робот складається з контролера, датчиків і виконавців. Композиція описує відношення «має частину», на відміну від спадкування «є різновидом».

##### Пояснювати структуру програмного об’єкта

[Not implemented](#)

Аналізувати будову вже заданого програмного об’єкта: визначати його ідентичність, властивості, які зберігають значення стану, та методи, які задають доступні операції. Наприклад, два екземпляри класу «Лічильник» можуть мати однаковий метод increment(), але різні значення властивості count. Ця навичка стосується розуміння готової програмної структури, а не самостійного добору її складових.

##### Пояснювати властивість об’єкта

[Not implemented](#)

Розрізняти атрибут як іменоване значення стану та метод як доступну дію, наприклад координата робота і команда переміститися.

##### Пояснювати метод об’єкта

[Not implemented](#)

Показувати, як виклик дії об’єкта читає або змінює його стан; сам опис методу не означає, що дія вже виконалась.

##### Моделювати предметну сутність програмним об’єктом

[Not implemented](#)

Самостійно проєктувати програмне представлення реальної або уявної сутності відповідно до конкретної задачі: обирати потрібні властивості та методи, відкидати несуттєві деталі й пояснювати свій вибір. Наприклад, для сервісу прокату автомобілів моделювати доступність автомобіля та дії видачі й повернення, а не його поточну швидкість. Результатом може бути схема, псевдокод або код моделі; самостійний добір структури відрізняє цю навичку від аналізу готового об’єкта.

##### Розрізняти реальний об’єкт та його абстрактну модель

[Not implemented](#)

Пояснювати, що програмний об’єкт представляє лише вибрані характеристики предмета або поняття; вигадана сутність теж може мати корисну об’єктну модель.

#### Принципи проєктування

Skills: 8

[Not implemented](#)

Критерії якості структури програм: уникнення дублювання та непотрібної складності, розподіл відповідальностей, розширюваність і керування залежностями. Кожен принцип відповідає на інше запитання про можливу зміну програми.

##### Виявляти зайве дублювання (DRY)

[Not implemented](#)

Знаходити декілька місць, де повторюється одна й та сама логіка або правило знання, через що виправлення доводиться відтворювати окремо. Схожі рядки коду не завжди є дублюванням, якщо вони представляють різні незалежні правила.

##### Спрощувати зайву складність (KISS)

[Not implemented](#)

Зіставляти рішення з реальними вимогами й усувати механізми, які нічого не додають до потрібної поведінки. Простота означає зменшення необґрунтованої складності, а не ігнорування важливих умов або коректності.

##### Відкладати необов’язкові можливості (YAGNI)

[Not implemented](#)

Відрізняти функціональність, що має підтверджену поточну потребу, від лише уявного майбутнього сценарію та не будувати останній завчасно. На відміну від KISS, питання тут не в складності реалізації, а в необхідності самої можливості.

##### Виділяти одну відповідальність (SRP)

[Not implemented](#)

Пояснювати, чому модуль варто організовувати довкола однієї узгодженої причини змін, а не кількох незалежних потреб різних учасників. Один клас може мати багато методів, якщо всі обслуговують ту саму відповідальність.

##### Розширювати поведінку без зміни ядра (OCP)

[Not implemented](#)

Розпізнавати точки розширення, що дозволяють додати новий варіант реалізації через контракт без переписування перевіреної загальної логіки. Це прагнення до стабільного ядра, а не абсолютна заборона змінювати будь-який існуючий код.

##### Перевіряти замінність реалізацій (LSP)

[Not implemented](#)

Виявляти, коли підтип або нова реалізація порушує очікувані передумови, результати чи інваріанти спільного контракту. Наприклад, заміна звичайного сховища на «лише для читання» може зламати клієнта, який обґрунтовано викликає запис.

##### Виділяти вузький інтерфейс (ISP)

[Not implemented](#)

Розподіляти великий контракт на окремі ролі, щоб споживач залежав тільки від потрібних йому операцій. Наприклад, пристрій для перегляду не має бути зобов’язаний реалізувати редагування чи друк.

##### Проєктувати залежності від контракту (DIP)

[Not implemented](#)

Відділяти бізнес-правило від конкретного способу доступу до даних через інтерфейс, який допускає кілька реалізацій. Високорівнева логіка отримує потрібну залежність ззовні, а не створює всередині жорстко заданий сервіс.

### Патерни проєктування

Groups: 3 · Skills: 23

[Not implemented](#)

Класичні патерни Gang of Four утворюють 23 відтворювані структури для типових задач проєктування об’єктів. Три родини відрізняються створенням екземплярів, поєднанням компонентів і керуванням взаємодіями; їхня наявність не означає, що кожну задачу слід ускладнювати патерном.

#### Породжувальні

Skills: 5

[Not implemented](#)

П’ять підходів до конструювання екземплярів і сімейств об’єктів, що відокремлюють логіку створення від використання.

##### Factory Method

[Not implemented](#)

Створення продукту доручається перевизначуваному фабричному методу, щоб клієнт працював зі спільним контрактом, не знаючи конкретного класу.

##### Abstract Factory

[Not implemented](#)

Одна фабрика надає узгоджене сімейство взаємопов’язаних продуктів, наприклад елементи інтерфейсу певної платформи, приховуючи конкретні типи.

##### Builder

[Not implemented](#)

Складний об’єкт збирається поетапно через окремого будівельника, а порядок кроків можна повторювати для різних результатів.

##### Prototype

[Not implemented](#)

Новий об’єкт створюється з налаштованого зразка копіюванням; враховуються спільні вкладені дані та ідентичність результату.

##### Singleton

[Not implemented](#)

Забезпечується одна спільна інстанція в певній області та контроль доступу до неї, водночас розуміються ризики прихованого глобального стану.

#### Структурні

Skills: 7

[Not implemented](#)

Сім способів поєднати компоненти через адаптацію, обгортання, вкладення, посередника або спільний стан.

##### Adapter

[Not implemented](#)

Перехідник перетворює очікуваний клієнтом інтерфейс на інтерфейс уже існуючого компонента, не переписуючи сам компонент.

##### Bridge

[Not implemented](#)

Абстракцію та реалізацію розділяють на дві незалежні ієрархії, щоб кожен вимір міг змінюватися без комбінаційного вибуху класів.

##### Composite

[Not implemented](#)

Окремі об’єкти і вкладені групи використовують спільний контракт, дозволяючи однаково обробляти листки та гілки деревоподібної структури.

##### Decorator

[Not implemented](#)

Об’єкт отримує додаткову поведінку через послідовні обгортки зі спільним інтерфейсом, а не створення підкласу для кожної комбінації.

##### Facade

[Not implemented](#)

Спрощена точка входу приховує складні послідовності внутрішніх викликів підсистеми, не замінюючи весь її інтерфейс.

##### Flyweight

[Not implemented](#)

Багато подібних об’єктів спільно використовують незмінну частину свого стану, зменшуючи витрати пам’яті.

##### Proxy

[Not implemented](#)

Посередник контролює доступ до іншого об’єкта зі спільним інтерфейсом: наприклад, перевіряє дозвіл, кешує або відкладає завантаження.

#### Поведінкові

Skills: 11

[Not implemented](#)

Одинадцять підходів до керування запитами, вибору алгоритмів, сповіщень, стану та розподілу відповідальності.

##### Chain of Responsibility

[Not implemented](#)

Запит проходить ланцюжком обробників, доки один із них не виконає дію або не передасть її далі.

##### Command

[Not implemented](#)

Дія стає окремим об’єктом запиту, який можна зберігати, ставити в чергу чи виконувати пізніше.

##### Interpreter

[Not implemented](#)

Правила малої предметної мови подаються структурою виразів, для яких визначено спосіб інтерпретації.

##### Iterator

[Not implemented](#)

Елементи колекції перебираються через визначений інтерфейс без потреби відкривати її внутрішнє представлення.

##### Mediator

[Not implemented](#)

Взаємодія кількох компонентів переноситься до посередника, щоб кожен не залежав від усіх інших безпосередньо.

##### Memento

[Not implemented](#)

Зовнішній знімок стану дозволяє відновити об’єкт без розкриття його внутрішньої реалізації.

##### Observer

[Not implemented](#)

Джерело надсилає сповіщення підписникам про зміни, не знаючи, яку власну дію виконає кожен із них.

##### State

[Not implemented](#)

Реакція об’єкта на ту саму команду делегується поточному об’єкту стану замість розгалуженого набору умов.

##### Strategy

[Not implemented](#)

Кілька алгоритмів з однаковим інтерфейсом взаємозамінні, тому спосіб розв’язання можна змінювати незалежно від клієнта.

##### Template Method

[Not implemented](#)

Скелет виконання алгоритму задає незмінні кроки, а частину деталей реалізують підкласи через визначені точки розширення.

##### Visitor

[Not implemented](#)

Операції над сімейством різних типів переносяться в окремого відвідувача, залишаючи структуру елементів відносно стабільною.

### Штучний інтелект

Groups: 7 · Skills: 34

[Not implemented](#)

Розглядає системи, які виконують задачі, пов’язані з розпізнаванням, прогнозуванням, генерацією та іншими формами інтелектуальної обробки інформації. Охоплює як явно задані правила, так і навчені моделі, особливості їхньої роботи, промптинг, технічні компроміси та перевірку надійності.

#### Основи AI

Skills: 6

[Not implemented](#)

Розкриває роль програмних правил і навчальних даних у роботі AI, типові цілі задач та межі достовірності результатів. Класифікація задач стосується бажаного результату, а не лише назви моделі чи внутрішнього математичного прийому.

##### Розрізняти правила та навчені моделі

[Not implemented](#)

Відрізняти системи, поведінку яких визначають явно запрограмовані правила, від моделей, параметри яких налаштовано навчанням на даних. Обидва підходи використовують алгоритми та можуть поєднуватися в одному продукті; не кожна AI-система обов’язково побудована на машинному навчанні.

##### Пояснювати навчання на прикладах

[Not implemented](#)

Показувати, як навчальна процедура змінює параметри моделі на підставі прикладів та критерію якості, щоб вона узагальнювала на нові дані. Запам’ятовування окремих прикладів не дорівнює надійній здатності працювати з невідомими.

##### Класифікувати задачі AI

[Not implemented](#)

За метою задачі визначати, чи потрібно розпізнати категорію або властивість наявних даних, оцінити майбутнє чи невідоме значення, або створити новий матеріал. Наприклад, розпізнавання предмета на фото, прогноз попиту й створення зображення мають різні очікувані результати. Генеративна мовна модель також прогнозує наступні токени всередині процесу генерації, тому внутрішній механізм не тотожний меті задачі.

##### Розпізнавати можливу помилку AI

[Not implemented](#)

Виявляти ознаки ненадійної відповіді, зокрема неправдоподібну конкретику, суперечність контексту або неперевірювані посилання. Упевнений тон не свідчить про правдивість; для підтвердження істотного факту потрібна окрема перевірка.

##### Пояснювати генеративний AI

[Not implemented](#)

Пояснювати, як модель створює нові тексти, зображення чи інші матеріали за вхідним контекстом і навченими закономірностями.

##### Пояснювати предиктивний AI

[Not implemented](#)

Описувати оцінювання числового значення, категорії чи імовірності події за наявними ознаками, наприклад прогноз опадів.

#### Імітація та розуміння

Skills: 2

[Not implemented](#)

Дискусії про машинний інтелект відокремлюють зовнішню схожість відповідей від тверджень про внутрішнє розуміння. Поведінковий критерій і філософський мисленнєвий експеримент ставлять різні питання; жоден з них сам по собі не доводить наявності або відсутності свідомості.

##### Пояснювати тест Тюрінга

[Not implemented](#)

Пояснювати запропонований Аланом Тюрінгом підхід до оцінювання, чи може машина в діалозі створити відповіді, які людина не відрізняє від людських за умовами випробування. Успішна імітація спілкування не є доведенням свідомості чи повного розуміння.

##### Пояснювати «Китайську кімнату» Серла

[Not implemented](#)

Розбирати мисленнєвий експеримент Джона Серла про обробку символів за правилами без обов’язкового розуміння їхнього змісту. Відрізняти аргумент у філософській дискусії від доведеного факту про внутрішні стани всіх AI-систем.

#### Промптинг

Skills: 7

[Not implemented](#)

Формулювання вимог до запиту в AI-систему: мета, контекст, обмеження, бажаний формат і послідовне уточнення. Складові запиту можна змінювати незалежно, а оцінювання істинності відповіді належить до надійності AI.

##### Формулювати мету промпту

[Not implemented](#)

Передавати моделі визначену задачу та бажаний результат, наприклад «порівняй три пояснення й виділи різницю», замість нечіткого прохання «розкажи щось». Мета описує роботу, яку слід виконати, а не формат виходу.

##### Задавати контекст промпту

[Not implemented](#)

Надавати моделі релевантні вихідні факти, цільове призначення або умови використання, без яких відповідь буде довільною. Контекст допомагає правильно інтерпретувати запит, але не повинен містити зайві персональні відомості.

##### Задавати обмеження промпту

[Not implemented](#)

Формулювати межі допустимого результату — джерела, обсяг, виключення чи заборону вигадувати відсутні дані. На відміну від мети, обмеження визначають, яких рішень модель не має пропонувати.

##### Задавати формат відповіді

[Not implemented](#)

Зазначати структуру готового результату, наприклад таблицю з конкретними стовпцями чи JSON із визначеними полями, не змішуючи формат зі змістовною правильністю відповіді.

##### Уточнювати промпт за результатом

[Not implemented](#)

Порівнювати отриманий результат із початковою метою та коригувати конкретні частини запиту, що спричинили невідповідність. Підбір нового формулювання не замінює перевірки правдивості наведених моделлю фактів.

##### Задавати роль у промпті

[Not implemented](#)

Формулювати очікувану предметну роль або стиль відповіді моделі, не вважаючи названу роль доказом наявності професійного досвіду.

##### Розкладати складний промпт на підзадачі

[Not implemented](#)

Ділити багатокрокове прохання на послідовні запити з перевірюваними проміжними результатами, не втрачаючи початкової мети.

#### Архітектури та ресурси моделей

Skills: 5

[Not implemented](#)

Порівняння технічних властивостей AI-моделей: способу активації компонентів, числової точності, затримки, вимог до пам’яті та відповідності завданню. Це властивості конкретної моделі й умов запуску, не універсальний рейтинг AI.

##### Порівнювати dense та MoE-моделі

[Not implemented](#)

Розрізняти архітектуру, де під час проходу задіяний увесь відповідний щільний обчислювальний блок, і mixture-of-experts, де маршрутизатор активує частину спеціалізованих експертних блоків. Не ототожнювати число всіх параметрів із кількістю активних параметрів на один токен.

##### Пояснювати квантизацію

[Not implemented](#)

Показувати, як представлення ваг або активацій меншою кількістю бітів зменшує вимоги до пам’яті та іноді пришвидшує виконання, але може змінити точність обчислень і якість виходу. Це компроміс, а не безкоштовне стиснення.

##### Порівнювати затримку відповіді

[Not implemented](#)

Порівнювати затримку між надсиланням запиту та появою першої корисної відповіді за однакових умов запуску. Час очікування відрізняється від швидкості подальшої генерації: коротка затримка до першого токена не гарантує швидкого завершення довгої відповіді.

##### Порівнювати вимоги моделей до пам’яті

[Not implemented](#)

Оцінювати обсяг оперативної чи відеопам’яті, потрібний для зберігання ваг моделі та робочих даних під час запуску, за конкретної точності й довжини контексту. Розмір файла на диску не дорівнює піковому використанню пам’яті.

##### Обирати модель для задачі

[Not implemented](#)

Зважувати кілька незалежних обмежень конкретного сценарію — точність, затримку, доступну пам’ять, вартість і приватність — та обґрунтовувати вибір моделі. Не існує однієї моделі, найкращої за всіма критеріями одночасно.

#### Надійність та відповідальне використання AI

Skills: 4

[Not implemented](#)

Захист даних, виявлення ненадійних результатів і несправедливих наслідків використання моделей. Перевірка факту, оцінка упередженості й відповідальність людини охоплюють різні ризики.

##### Перевіряти факти у відповіді AI

[Not implemented](#)

Виділяти перевірювані твердження моделі й зіставляти їх із незалежними достовірними джерелами; оцінювати джерело, дату та контекст. AI-відповідь не стає підтвердженням сама собі або іншому переказу цієї самої відповіді.

##### Розпізнавати ризик упередженості AI

[Not implemented](#)

Помічати, що навчальні дані чи правила застосування можуть призвести до систематично різних результатів для груп або окремих людей. Ізольований помилковий результат не завжди доводить систематичну упередженість.

##### Захищати персональні дані в промптах

[Not implemented](#)

Визначати, яку інформацію про людину не слід передавати зовнішньому AI-сервісу, та вилучати чи узагальнювати її без втрати мети задачі. Публічний доступ до моделі не означає, що введені дані залишаються приватними.

##### Пояснювати роль людини у рішенні з AI

[Not implemented](#)

Відокремлювати автоматично запропоновану рекомендацію від рішення, за наслідки якого відповідає конкретна людина або організація. Важливі перевірка підстав, можливість оскаржити результат і контроль над остаточною дією.

#### Токени й контекст мовних моделей

Skills: 6

[Not implemented](#)

Текстові моделі працюють з токенами, оцінюють можливі продовження та обмежені доступним контекстом; кількість параметрів моделі не дорівнює довжині контексту.

##### Пояснювати поняття токена

[Not implemented](#)

Розуміти токен як одиницю тексту, визначену токенізатором: окремі літери, частини слів, цілі слова чи розділові знаки можуть кодуватися по-різному.

##### Розрізняти токен, символ та слово

[Not implemented](#)

Показувати, що одне слово може складатися з декількох токенів, а один токен містити декілька символів; поділ залежить від моделі та мови.

##### Пояснювати вибір наступного токена

[Not implemented](#)

Модель формує розподіл імовірностей продовження за доступним контекстом, після чого обраний токен стає частиною контексту наступного кроку.

##### Розрізняти вибірку і вибір найімовірнішого токена

[Not implemented](#)

Порівнювати декодування з вибіркою за розподілом та детермінованим вибором найбільш імовірного продовження.

##### Пояснювати контекстне вікно мовної моделі

[Not implemented](#)

Визначати обмеження обсягу токенів, які система може використовувати в одному запиті, та розуміти, що різні моделі мають різні ліміти.

##### Пояснювати переповнення контекстного вікна

[Not implemented](#)

Розуміти, що за перевищення ліміту конкретний сервіс може відхилити запит, скоротити або підсумувати частину попереднього тексту.

#### Безпечна взаємодія з AI

Skills: 4

[Not implemented](#)

Розпізнавання некоректної впевненості моделі, надмірної погоджувальності, ризиків залежності та необхідності зберігати людський контроль.

##### Розпізнавати надмірне підтакування AI

[Not implemented](#)

Відділяти обґрунтовану підтримку від необґрунтованої похвали й підтвердження помилкової думки; позитивний тон не є доказом правильності.

##### Пояснювати ризики надмірної залежності від AI

[Not implemented](#)

Розуміти, чому тривалі розмови з чатботом не повинні замінювати спілкування з людьми, самостійні перевірки й звернення по допомогу.

##### Розпізнавати недовірені інструкції у матеріалах для AI

[Not implemented](#)

Відокремлювати вміст зовнішнього документа, який треба аналізувати, від інструкцій користувача; сторонній текст не має автоматично керувати поведінкою системи.

##### Захищати секрети під час роботи з AI

[Not implemented](#)

Не вводити в чатбот паролі, коди підтвердження, ключі доступу чи конфіденційні дані без належного дозволу та перевірених гарантій захисту.

### Робототехніка та автоматизація

Groups: 2 · Skills: 8

[Not implemented](#)

Розглядає програмну логіку керування фізичними чи змодельованими виконавцями за сигналами датчиків. Будову механізмів також може вивчати інженерія; у цій таксономії акцент на зв’язку інформації, правила та дії.

#### Складові роботизованої системи

Skills: 4

[Not implemented](#)

Інформаційні ролі датчика, контролера та виконавця: отримати показник, обробити його за правилом і змінити стан. Вивчається функціональний зв’язок компонентів, а не проєктування їхньої механічної конструкції.

##### Визначати призначення датчика

[Not implemented](#)

Встановлювати, яку фізичну величину чи стан середовища датчик перетворює на сигнал для контролера, наприклад відстань, світло або температуру. Датчик постачає інформацію, але сам не ухвалює керувальне рішення.

##### Визначати призначення виконавця

[Not implemented](#)

Розрізняти пристрій, який отримує команду й здійснює фізичну дію: двигун рухає колесо, а світлодіод змінює освітлення. Виконавець не є датчиком, навіть коли обидва з’єднані з одним контролером.

##### Розпізнавати контролер робота

[Not implemented](#)

Пояснювати роль блока, який читає входи, виконує програмні правила та надсилає команди виконавцям. Контролер з’єднує інформацію й дію; він не обов’язково має вигляд окремого великого комп’ютера.

##### Моделювати зв’язок між датчиком і дією

[Not implemented](#)

Установлювати відповідність між виміряним станом, правилом контролера та командою виконавцю, наприклад «якщо відстань менша за поріг — зупинити двигун». Відокремлювати значення датчика від рішення програми.

#### Керування роботами

Skills: 4

[Not implemented](#)

Побудова та коригування команд для рухів, реакцій на перешкоди й повторюваних операцій робота. Від звичайного програмування відрізняється зв’язком алгоритму із фізичним або симульованим середовищем.

##### Створювати послідовність рухів робота

[Not implemented](#)

Планувати порядок команд переміщення, орієнтації та зупинки, які ведуть робота від початкового до заданого стану з урахуванням напрямку. Це кінематична задача керування, а не просте записування абстрактної послідовності слів.

##### Реалізовувати реакцію робота на перешкоду

[Not implemented](#)

Пов’язувати сигнал датчика або стан моделі з конкретним маневром — зупинкою, поворотом чи об’їздом — та перевіряти, що дія спрацьовує тільки за потрібної умови.

##### Налаштовувати повторювану дію робота

[Not implemented](#)

Управляти кількістю повторів або умовою завершення фізичної чи змодельованої операції, наприклад повторювати перевірку датчика під час руху. Слід ураховувати зміну стану середовища між ітераціями.

##### Налагоджувати поведінку робота

[Not implemented](#)

Знаходити, чи помилка маршруту або реакції виникла в показнику датчика, умові контролера чи команді виконавцю, й виправляти відповідне правило. Налагодження потребує зіставлення очікуваної та спостереженої дії.

### Цифрова безпека й відповідальність

Groups: 4 · Skills: 20

[Not implemented](#)

Охоплює захист персональних даних, облікових записів, повагу до інших людей і наслідки цифрових технологій. Спеціальне проєктування та перевірка UX цифрових інтерфейсів належать до окремого інформатичного домену «UX цифрових продуктів».

#### Приватність

Skills: 5

[Not implemented](#)

Розпізнавання відомостей про людину, рішення щодо кола одержувачів та оцінка довготривалих наслідків опублікування. Не тотожна захисту паролем або діям у відповідь на шахрайство.

##### Розпізнавати персональні дані

[Not implemented](#)

Визначати відомості, які прямо або в поєднанні з іншими дозволяють ідентифікувати конкретну людину: ім’я з адресою, фото, контакт чи місцеперебування. Навіть окремий на вигляд безневинний факт може стати персональним у контексті.

##### Обирати безпечний спосіб поширення даних

[Not implemented](#)

Визначати належне коло одержувачів і канал для матеріалу, враховуючи приватність, дозволи та ризик подальшого пересилання. Відкрита публікація може залишатися доступною після видалення в початковому сервісі.

##### Розпізнавати цифровий слід

[Not implemented](#)

Пов’язувати онлайн-дії з записами, які можуть зберігатися в сервісах або в інших людей: публікаціями, коментарями, історією доступу. Видимість дії тільки для друзів не обов’язково означає повне зникнення її наслідків.

##### Розрізняти приватний чат і публічне посилання

[Not implemented](#)

Перевіряти, кому може бути доступна поширена розмова або документ, та не вважати посилання автоматично приватним.

##### Пояснювати повторну ідентифікацію даних

[Not implemented](#)

Знеособлені записи іноді можна співвіднести з конкретною людиною за зовнішніми підказками, наприклад типовим маршрутом і часом.

#### Захист облікового запису

Skills: 9

[Not implemented](#)

Зменшення ризику несанкціонованого доступу включає стійкі паролі, незалежні фактори входу, виявлення фішингу, оцінку посилань, перевірку адрес і безпечні реакції на контакти. Технічні налаштування захисту та поведінкові рішення доповнюють одне одного.

##### Створювати стійку парольну фразу

[Not implemented](#)

Обирати достатньо довгу, непередбачувану й унікальну для облікового запису послідовність слів або символів, не включаючи легкодоступні особисті дані. Не вимагати щоденно змінювати надійну фразу без підстав і не плутати складність символів із загальною надійністю.

##### Пояснювати багатофакторну автентифікацію

[Not implemented](#)

Пояснювати, чому для входу можуть поєднувати різні типи факторів — знання (пароль), володіння (пристрій або ключ) і біометричну ознаку. Два паролі одного типу не створюють двох незалежних факторів; MFA знижує ризик, але не робить обліковий запис невразливим.

##### Налаштовувати багатофакторну автентифікацію

[Not implemented](#)

У безпечному навчальному або власному середовищі вибирати підтримуваний додатковий фактор, увімкнути його для облікового запису й передбачити спосіб відновлення доступу. Відрізняти фактичне налаштування захисту від загального пояснення його принципу; не вимагати розголошувати секретні коди.

##### Розпізнавати фішингове повідомлення

[Not implemented](#)

За змістом і контекстом повідомлення визначати спробу виманити пароль, код підтвердження або інші секрети через удавану особу, терміновість, погрозу чи фальшиву форму. Це аналіз наміру та прийомів соціальної інженерії; технічна перевірка домену й вибір безпечної реакції — інші компетентності.

##### Реагувати на підозрілий цифровий контакт

[Not implemented](#)

Обирати безпечну негайну дію після незрозумілого прохання або тиску в мережі: не передавати секрети, припинити взаємодію, перевірити особу незалежним каналом і звернутися до довіреного дорослого чи служби підтримки.

##### Пояснювати потребу в оновленні програм

[Not implemented](#)

Розуміти, що перевірені оновлення можуть усувати вразливості й помилки, якими користуються зловмисники; пояснювати різницю між офіційним оновленням та підробленим запрошенням встановити невідомий файл.

##### Оцінювати ризик переходу за посиланням

[Not implemented](#)

За контекстом отримання посилання, запитаною дією та ознаками небезпеки передбачати можливі наслідки переходу: фальшиву форму входу, завантаження підозрілого файла чи іншу небажану дію. Саме відкриття сторінки не означає автоматичного зараження; установлення справжнього домену — інша навичка.

##### Перевіряти домен вебресурсу

[Not implemented](#)

Встановлювати фактичний домен у посиланні, відділяючи його від піддомену, шляху та напису на кнопці, і виявляти підміни через незначну зміну написання або подібні символи. Наприклад, у `facebook.com.example.org` справжній домен — `example.org`; зовнішня схожість адреси або HTTPS не доводять доброчесності власника.

##### Оцінювати справжність відправника листа

[Not implemented](#)

Ім’я та зображення відправника не доводять його особу; важливо перевіряти адресу й незалежний канал зв’язку.

#### Етика цифрової взаємодії

Skills: 4

[Not implemented](#)

Повага до інших учасників мережі та прав на матеріали, зокрема розпізнавання цькування, атрибуція і ліцензійні умови. Відокремлює соціальні норми та авторське право від технічних способів захисту акаунта.

##### Визначати прийнятну онлайн-поведінку

[Not implemented](#)

Розпізнавати поважні й неприйнятні способи цифрової комунікації, зокрема повторювані приниження, погрози та цькування. Розходження в думках саме по собі не є кібербулінгом, а шкідливі повідомлення не стають прийнятними через анонімність.

##### Атрибутувати цифрові матеріали

[Not implemented](#)

Під час використання чужого тексту, зображення, звуку або коду зазначати автора та першоджерело в доречному форматі. Наявність атрибуції не замінює дозволу на використання й не скасовує вимог конкретної ліцензії.

##### Обирати безпечний спосіб повідомити про проблему

[Not implemented](#)

Визначати, коли звернутися до довіреного дорослого, модератора чи офіційної підтримки та яку мінімальну інформацію передати без розголошення чужих даних. Вибір адресата відрізняється від першочергової реакції на небезпечне повідомлення.

##### Розрізняти умови ліцензування цифрового контенту

[Not implemented](#)

Читати прості дозволи та обмеження щодо копіювання, зміни й поширення текстів, зображень, звуків чи програм. Безкоштовний доступ, суспільне надбання та відкриті ліцензії — різні правові умови.

#### Суспільний та екологічний вплив обчислень

Skills: 2

[Not implemented](#)

Наслідки цифрових систем для різних груп людей та довкілля: нерівномірний розподіл вигод і шкоди, енергоспоживання, матеріали та електронні відходи. Оцінка впливу потребує визначеного контексту, а не загального ярлика «корисно/шкідливо».

##### Оцінювати вплив алгоритму на різні групи користувачів

[Not implemented](#)

Порівнювати, чи однакове автоматизоване правило створює різні наслідки для людей із різними потребами або характеристиками, й пояснювати можливе джерело нерівності. Формально однакове правило не завжди означає однаково справедливий результат.

##### Оцінювати вплив обчислень на довкілля

[Not implemented](#)

Пов’язувати використання цифрових пристроїв і сервісів із витратами енергії, видобуванням матеріалів, строком служби обладнання та електронними відходами. Порівняння варіантів має враховувати більше ніж лише електрику під час одного запуску.

### UX цифрових продуктів

Groups: 3 · Skills: 8

[Not implemented](#)

Окремий інформатичний погляд на досвід взаємодії людей із програмами, цифровими пристроями й електронними інтерфейсами: завдання, навігація, зворотний зв’язок, доступність, зручність та етичність. Engineering паралельно вивчає UX фізичних виробів і цілих інженерних систем; спільна назва дисципліни не змушує предмети використовувати спільні Skill-ідентичності.

#### Проєктування цифрової взаємодії

Skills: 4

[Not implemented](#)

Проєктування послідовності дій користувача в застосунку або на цифровому пристрої, зрозумілих переходів, повідомлень про стан і запобігання типовим помилкам.

##### Визначати мету користувача цифрового продукту

[Not implemented](#)

Визначати, яку конкретну дію людина прагне виконати на цифровому пристрої або у програмі, та відрізняти її мету від внутрішніх технічних операцій системи.

##### Проєктувати навігацію цифрового інтерфейсу

[Not implemented](#)

Організовувати переходи між екранами, розділами чи станами так, щоб користувач міг знаходити потрібну дію та розуміти, де він перебуває у цифровому продукті.

##### Проєктувати зворотний зв’язок цифрового інтерфейсу

[Not implemented](#)

Передбачати зрозуміле повідомлення про результат натискання, завантаження, помилку або завершення дії, щоб людина не здогадувалася, чи система відреагувала.

##### Запобігати типовим помилкам цифрової взаємодії

[Not implemented](#)

Розпізнавати дії, які легко виконати помилково, й добирати цифрові запобіжники: зрозумілі назви, перевірку введення або підтвердження незворотної операції.

#### Доступність

Skills: 2

[Not implemented](#)

Урахування відмінностей у способах сприйняття й керування цифровими інтерфейсами та перевірка реальної можливості використання, а не тільки зовнішньої привабливості.

##### Визначати потреби користувачів із різними можливостями

[Not implemented](#)

Встановлювати, як користувач із різним зором, слухом, моторикою або способом введення отримує інформацію та керує цифровим продуктом. Наприклад, недоступне лише мишкою керування створює бар’єр для користувача клавіатури.

##### Перевіряти доступність цифрової взаємодії

[Not implemented](#)

Перевіряти конкретні способи користування інтерфейсом без миші, без звуку або за збільшеного тексту й фіксувати бар’єри. Відсутність скарг чи гарний зовнішній вигляд не є доказом доступності.

#### Оцінювання досвіду та етичність

Skills: 2

[Not implemented](#)

Перевірка придатності цифрового інтерфейсу для реальних завдань та розпізнавання рішень, що приховано обмежують усвідомлений вибір користувача.

##### Перевіряти зручність цифрового інтерфейсу

[Not implemented](#)

Давати людині конкретне завдання на цифровому пристрої чи в застосунку й спостерігати, чи знаходить вона потрібні дії без підказок; виявляти незрозумілі переходи й повідомлення.

##### Розпізнавати маніпулятивні інтерфейсні рішення

[Not implemented](#)

Знаходити конструкції, що приховано підштовхують до небажаної дії: заплутане скасування, попередньо обрані додаткові опції або оманливе формулювання кнопки. Відрізняти переконливий дизайн від прихованого обмеження усвідомленого вибору.

### Цифрова творчість та ігри

Groups: 3 · Skills: 10

[Not implemented](#)

Охоплює створення та редагування цифрових матеріалів, правила ігрових механік і процедурне породження ресурсів. UX цифрових продуктів має власний домен, а музичні й інженерні навчальні інструменти самі собою не створюють інформатичних компетентностей.

#### Цифрові матеріали

Skills: 3

[Not implemented](#)

Створення, змінювання й вибір інструмента для цифрового результату, що має конкретне призначення. Наприклад, редагування готового файлу перевіряє іншу дію, ніж вибір засобу для майбутньої роботи.

##### Створювати простий цифровий матеріал

[Not implemented](#)

Поєднувати текст, зображення або інші елементи в завершений цифровий артефакт із визначеним повідомленням та адресатом, наприклад пояснювальну картку. Важлива смислова цілісність, а не використання конкретного редактора.

##### Редагувати цифровий матеріал

[Not implemented](#)

Вносити цільові зміни до наявного файла, перевіряючи, чи збережено потрібний зміст: виправити підпис, змінити порядок елементів або адаптувати розмір зображення. Це інша дія, ніж первинне створення матеріалу.

##### Добирати інструмент цифрової творчості

[Not implemented](#)

Зіставляти технічні властивості цифрового засобу з вимогами до результату, наприклад відрізняти редактор зображень від інструмента для впорядкування табличних записів. Ця цифрова компетентність не означає, що інформатика повинна пояснювати будову програм, які учні використовують як засіб навчання в інших предметах.

#### Геймдизайн

Skills: 3

[Not implemented](#)

Визначення правил, створення механік та перевірка їхнього впливу на ігровий досвід. Опис правила, його реалізація як взаємодії й перевірка балансу — послідовні, але окремо оцінювані дії.

##### Формулювати правило гри

[Not implemented](#)

Записувати умову, дозволену дію або наслідок так, щоб різні гравці однаково розуміли правила. Наприклад, за яких обставин нараховується бал і коли завершено раунд.

##### Проєктувати ігрову механіку

[Not implemented](#)

Визначати зв’язок дії гравця зі зміною стану гри та її зворотним зв’язком: натискання запускає рух, а зіткнення з об’єктом змінює рахунок. Механіка робить правило дієвим у системі, не лише описаним у тексті.

##### Перевіряти баланс простої гри

[Not implemented](#)

Випробовувати, чи правила й обмеження не роблять один вибір завжди виграшним або гру неможливою для завершення, зіставляючи результат із задумом. Баланс залежить від цілей гри; рівні шанси всіх дій не є універсальною вимогою.

#### Процедурна генерація

Skills: 4

[Not implemented](#)

Створення зображень, звуків, об’єктів або ігрових світів за правилами та параметрами, а не шляхом зберігання кожного готового варіанта. Розрізняє зміну параметрів, відтворюваність за seed та ресурсні компроміси.

##### Пояснювати процедурне створення ресурсу

[Not implemented](#)

Відрізняти зберігання готового зображення, звуку чи світу від запуску правил, які породжують результат за параметрами. Короткий опис правил може створити великий ресурс, але вимагає обчислень під час генерації.

##### Налаштовувати параметри генератора

[Not implemented](#)

Визначати, як зміна числа об’єктів, кольорової палітри чи іншого параметра змінює породжуваний результат за незмінного алгоритму. Не плутати регулювання параметра з переписуванням самого правила генерації.

##### Відтворювати результат за насінням генерації

[Not implemented](#)

Пояснювати, чому однакове насіння псевдовипадкового генератора разом із незмінними алгоритмом, параметрами та порядком викликів дає той самий результат. Зміна будь-якого з цих чинників може зруйнувати відтворюваність.

##### Порівнювати зберігання і генерацію ресурсів

[Not implemented](#)

Оцінювати компроміс між обсягом готових даних, розміром опису правил, часом запуску та ресурсами CPU/GPU/RAM. Процедурна генерація не тотожна безвтратному чи втратному стисненню готового файла.

### Структури даних

Groups: 8 · Skills: 34

[Not implemented](#)

Вивчає організацію наборів значень у послідовності, стеку, черзі, словнику, множині, дереві й графі, а також можливості доступу, змінення та вибору структури. Структура — не алгоритм обробки.

#### Послідовності

Skills: 7

[Not implemented](#)

Упорядковані набори елементів: масиви, списки й зв’язні представлення. Доступ за індексом, вставлення, вилучення та обхід мають різні передумови й витрати.

##### Пояснювати структуру масиву

[Not implemented](#)

Масив утримує елементи у визначених позиціях та допускає звернення за індексом; правила довжини й типів залежать від конкретної мови.

##### Пояснювати структуру списку

[Not implemented](#)

Список представляє впорядковану колекцію, яка допускає операції над елементами, незалежно від того, чи внутрішньо використано масив або вузли.

##### Розрізняти масив і зв’язний список

[Not implemented](#)

Індексований масив і ланцюжок вузлів з посиланнями забезпечують різні способи доступу та різні витрати на змінення структури.

##### Звертатися до елемента набору за індексом

[Not implemented](#)

Отримувати елемент впорядкованої колекції за його позицією, враховуючи початок нумерації й межі допустимих індексів у вибраній мові.

##### Додавати елемент до послідовності

[Not implemented](#)

Вставляти новий елемент на задану позицію і прогнозувати зміну порядку інших елементів або зв’язків вузлів.

##### Вилучати елемент із послідовності

[Not implemented](#)

Видаляти значення з визначеної позиції та зберігати правильний порядок і доступність решти елементів.

##### Перебирати елементи послідовності

[Not implemented](#)

Послідовно відвідувати значення колекції від початку до кінця, не пропускаючи позиції та не виконуючи зайвих повторів.

#### Стек

Skills: 3

[Not implemented](#)

Структура з доступом до верхівки за принципом LIFO: останній доданий елемент вилучається першим. Окремо пояснюються додавання, вилучення та порожній стан.

##### Пояснювати принцип LIFO

[Not implemented](#)

У стеку останній доданий елемент стає першим вилученим, як верхня тарілка у стосі; це не сортування за величиною.

##### Додавати елемент до стека

[Not implemented](#)

Операція push розміщує нове значення на вершині стека, не змінюючи порядок усіх раніше доданих.

##### Вилучати елемент зі стека

[Not implemented](#)

Операція pop прибирає верхнє значення стека, окремо враховуючи стан, коли стек порожній.

#### Черга

Skills: 3

[Not implemented](#)

Структура з порядком FIFO: перший доданий елемент вилучається першим. Нові значення надходять у кінець, а обробляються з початку.

##### Пояснювати принцип FIFO

[Not implemented](#)

У черзі першим обслуговують найраніше доданий елемент, якщо не запроваджено окремих правил пріоритету.

##### Додавати елемент до черги

[Not implemented](#)

Нове значення ставиться в кінець черги, не переставляючи елементи, які вже очікують своєї черги.

##### Вилучати елемент із черги

[Not implemented](#)

Прибирати перше значення зі структури FIFO, зберігаючи порядок решти та враховуючи порожню чергу.

#### Множини

Skills: 4

[Not implemented](#)

Колекції унікальних елементів із перевіркою належності й математичними операціями об’єднання та перетину. Індексований порядок не є обов’язковою властивістю множини.

##### Пояснювати структуру множини

[Not implemented](#)

Множина складається з унікальних елементів за певним правилом рівності; повторне внесення значення не створює другої копії.

##### Перевіряти належність множині

[Not implemented](#)

З’ясовувати, чи міститься задане значення серед елементів множини, не вимагаючи знання його порядкового індексу.

##### Виконувати об’єднання множин

[Not implemented](#)

Складати множину всіх значень, присутніх хоча б в одній із двох множин, без повторів елементів.

##### Виконувати перетин множин

[Not implemented](#)

Знаходити тільки ті значення, які одночасно є у двох множинах, не плутаючи перетин з об’єднанням.

#### Словники

Skills: 3

[Not implemented](#)

Відповідності ключів і значень із доступом, оновленням та обробкою відсутнього ключа. Ключ не тотожний позиційному індексу послідовності.

##### Пояснювати структуру словника

[Not implemented](#)

Словник зберігає відповідність ключа значенню, причому ключ не обов’язково є числом або позицією в масиві.

##### Отримувати значення словника за ключем

[Not implemented](#)

Знаходити запис за заданим ключем і правильно враховувати ситуацію, коли відповідного запису немає.

##### Оновлювати значення словника

[Not implemented](#)

Замінювати значення існуючого ключа без випадкового створення дубліката цього самого ключа.

#### Дерева

Skills: 4

[Not implemented](#)

Дерева — ациклічні ієрархії вузлів і ребер, а двійкові дерева пошуку мають додаткове правило впорядкування ключів.

##### Пояснювати структуру дерева

[Not implemented](#)

Визначати корінь, вузол, ребро та зв’язок батько–нащадок в ієрархії; дерево не обов’язково двійкове.

##### Розрізняти листок та внутрішній вузол дерева

[Not implemented](#)

Листок не має дітей, а внутрішній вузол має хоча б одного нащадка; це властивість структури, а не назви вузла.

##### Знаходити шлях у дереві

[Not implemented](#)

Визначати послідовність реально з’єднаних вузлів між двома позиціями без вигаданих переходів.

##### Пояснювати двійкове дерево пошуку

[Not implemented](#)

Ключі двійкового дерева пошуку організовані за правилом впорядкованості піддерев, якого довільне дерево не вимагає.

#### Графи

Skills: 6

[Not implemented](#)

Графи описують вершини та зв’язки між ними, зокрема цикли, напрямки переходів і числові ваги ребер.

##### Пояснювати структуру графа

[Not implemented](#)

Представляти вершини й ребра для мережі доріг чи знайомств, не вважаючи кожен граф деревом.

##### Розрізняти орієнтований та неорієнтований граф

[Not implemented](#)

Показувати, чи дозволяє ребро перехід в одному напрямку, чи зв’язок можна проходити в обох напрямках.

##### Розрізняти зважений та незважений граф

[Not implemented](#)

Визначати, як числова вага ребра може представляти час, відстань або витрати, а не лише факт з’єднання.

##### Визначати сусідні вершини графа

[Not implemented](#)

Знаходити вершини з безпосереднім зв’язком із заданою, відрізняючи їх від вершин, досяжних через інші вузли.

##### Знаходити шлях у графі

[Not implemented](#)

Створювати послідовність з’єднаних вершин від початку до цілі, враховуючи напрямок ребер.

##### Розрізняти дерево та граф із циклами

[Not implemented](#)

Дерево не має циклів, а довільний граф може містити цикли й кілька альтернативних шляхів між тими самими вершинами.

#### Вибір структур

Skills: 4

[Not implemented](#)

Вибір структури за потрібними операціями й оцінювання вартості доступу, вставлення та зберігання. Порівняння стосується способу організації даних, а не лише алгоритмів їх обробки.

##### Обирати структуру за потрібними операціями

[Not implemented](#)

Визначати, чи задачі потрібні індексація, унікальність, пошук за ключем, порядок FIFO/LIFO або ієрархічні зв’язки.

##### Порівнювати витрати доступу до елемента

[Not implemented](#)

Зіставляти типовий прямий доступ до індексованого масиву з послідовним проходженням зв’язного списку до потрібного вузла.

##### Порівнювати витрати вставлення до колекції

[Not implemented](#)

Пояснювати, чому масив може вимагати зсуву елементів, а список — зміни посилань, але місце вставлення ще треба знайти.

##### Розрізняти структуру даних та алгоритм

[Not implemented](#)

Структура задає спосіб організації інформації та доступу, алгоритм визначає порядок дій над цією інформацією.


### Алгоритми

Groups: 5 · Skills: 23

[Not implemented](#)

Відтворювані способи розв’язання обчислювальних задач, згруповані за призначенням: пошук, сортування, обробка наборів, загальна побудова та аналіз. Кожен названий базовий алгоритм має окрему самостійну Skill-ідентичність; навички про його передумови й оцінювання можуть бути окремими Skills тієї самої групи. Алгоритми можна пояснювати конкретними моделями без нав’язування вікового обмеження таксономії.

#### Побудова

Skills: 6

[Not implemented](#)

Загальні способи формулювати мету, послідовність, умови та повторення для алгоритму, незалежно від конкретного призначення. Відрізняє опис коректної процедури від її реалізації мовою програмування.

##### Формулювати мету алгоритму

[Not implemented](#)

Задавати перевірюваний кінцевий результат і допустимі вхідні умови: наприклад, знайти індекс заданого числа у впорядкованому масиві або встановити, що його немає. Мета відокремлюється від конкретних кроків розв’язання.

##### Будувати послідовний алгоритм

[Not implemented](#)

Установлювати порядок скінченної кількості дій, де кожна наступна використовує стан після попередньої, без розгалуження. Це логічний опис розв’язання; запис тих самих кроків виконуваними командами належить до програмування.

##### Проєктувати умовне розгалуження

[Not implemented](#)

Визначати взаємовиключні або пріоритетні шляхи алгоритму за перевірюваними умовами, включно з дією для випадку, коли умова не виконується. Наприклад, після порівняння чисел обирати одну з двох частин пошуку.

##### Проєктувати повторення дій

[Not implemented](#)

Задавати тіло повторюваного алгоритму, умову продовження чи завершення та стан, який змінюється між кроками. Це запобігає нескінченному циклу й відрізняє повторення від простого дублювання однакових команд.

##### Реалізовувати рекурсивний алгоритм

[Not implemented](#)

Самостійно будувати рекурсивне розв’язання задачі з коректним базовим випадком і зменшенням підзадачі, щоб виклики завершувалися. Перевіряти результат на граничних входах; уміння пояснити готову рекурсію не замінює створення алгоритму.

##### Порівнювати алгоритми за вимогами

[Not implemented](#)

Зіставляти кілька коректних способів для тієї самої задачі за обмеженнями, наприклад упорядкованістю даних, кількістю перевірок, ресурсами або зрозумілістю. Алгоритм із меншою кількістю кроків може бути непридатним без потрібної передумови.

#### Пошук

Skills: 6

[Not implemented](#)

Методи знаходження потрібного елемента серед даних: послідовний перегляд, ділення впорядкованого діапазону або пересування впорядкованим деревом. Окремі Skills позначають кожен конкретний алгоритм і відмінні передумови чи порівняння.

##### Застосовувати лінійний пошук

[Not implemented](#)

Послідовно перевіряти елементи до знаходження шуканого або завершення набору; не вимагати попереднього сортування. Розуміти, що за відсутності збігу може знадобитися перевірити весь набір.

##### Застосовувати бінарний пошук

[Not implemented](#)

Вибирати середній елемент упорядкованого діапазону й за результатом порівняння відкидати ту його частину, де шуканого бути не може; повторювати до знаходження або порожнього інтервалу.

##### Визначати передумови бінарного пошуку

[Not implemented](#)

З’ясовувати, чи всі елементи впорядковані за узгодженим критерієм і чи доступне порівняння «менше/більше»; без цих умов виключення половини кандидатів може бути неправильним.

##### Прогнозувати масштабування пошуку

[Not implemented](#)

Порівнювати 100 і 1000 можливих позицій: для бінарного пошуку межа зростає з 7 до 10 перевірок, хоча даних удесятеро більше; пояснювати причину звуженням приблизно навпіл.

##### Застосовувати пошук у двійковому дереві

[Not implemented](#)

Порівнювати ключ із вузлом і переходити у відповідне піддерево, доки значення не знайдено або шлях не завершився.

##### Порівнювати пошук за кількістю перевірок

[Not implemented](#)

Зіставляти кількість відкритих позицій у лінійному й бінарному пошуку для однакового набору, відрізняючи поодинокий вдалий результат від загальної гарантії алгоритму.

#### Сортування

Skills: 4

[Not implemented](#)

Способи встановити порядок елементів за заданим критерієм: послідовний вибір, вставлення у впорядковану частину або обмін сусідніх елементів. Кожна процедура має окремий Skill для незалежного оцінювання.

##### Пояснювати критерій сортування

[Not implemented](#)

Задавати ключ і напрямок впорядкування, наприклад числа за зростанням чи назви за абеткою; алгоритми мають однаково порівнювати всі елементи.

##### Застосовувати сортування вибором

[Not implemented](#)

На кожному кроці відшукувати найменший із ще не впорядкованих елементів і переносити його на наступну позицію відсортованої частини.

##### Застосовувати сортування вставками

[Not implemented](#)

Брати наступний елемент і знаходити йому місце в уже відсортованій частині набору, переміщуючи більші значення праворуч.

##### Застосовувати бульбашкове сортування

[Not implemented](#)

Порівнювати сусідні елементи й обмінювати невпорядковані пари, повторюючи проходи до отримання правильного порядку.

#### Обробка наборів

Skills: 4

[Not implemented](#)

Покрокові процедури, що накопичують підсумкове значення під час обходу колекції, зокрема кількість, суму, мінімум і максимум. Вони пояснюються конкретними предметами або картками.

##### Застосовувати підрахунок елементів

[Not implemented](#)

Перебирати набір, збільшуючи лічильник для кожного елемента, який задовольняє задану умову.

##### Застосовувати накопичення суми

[Not implemented](#)

Обходити числовий набір, послідовно додаючи значення до акумулятора, починаючи з нульової суми.

##### Застосовувати знаходження максимуму

[Not implemented](#)

Зберігати найбільше з уже переглянутих значень та оновлювати результат, якщо чергове число більше.

##### Застосовувати знаходження мінімуму

[Not implemented](#)

Зберігати найменше з уже переглянутих значень та оновлювати результат, якщо чергове число менше.

#### Аналіз

Skills: 3

[Not implemented](#)

Незалежне порівняння процедур за верхньою межею дій, типом зростання часу й ресурсами пам’яті. Це наскрізні методи оцінювання різних алгоритмів, а не новий алгоритм.

##### Оцінювати найгірший випадок алгоритму

[Not implemented](#)

Визначати верхню межу перевірок для конкретної стратегії за заданими правилами, не плутаючи її з кроками одного щасливого запуску.

##### Розрізняти лінійне та логарифмічне зростання

[Not implemented](#)

Описувати відмінність між кількістю операцій, що приблизно пропорційна розміру входу, та кількістю послідовних поділів удвічі; формальна нотація O(n), O(log n) є можливим поглибленням.

##### Пояснювати компроміс часу і пам’яті

[Not implemented](#)

Порівнювати алгоритми, один із яких може виконати менше операцій ціною додаткових проміжних даних; швидкість не є єдиним критерієм коректного вибору.

### Git і відкритий код

Groups: 3 · Skills: 11

[Not implemented](#)

Окремий предметний напрям про історію програмних змін, співпрацю у репозиторіях і ліцензоване спільне створення програм, а не автоматична складова будь-якого цифрового уроку.

#### Контроль версій Git

Skills: 6

[Not implemented](#)

Git забезпечує послідовність комітів і гілок, а процеси перегляду змін допомагають об’єднувати внески кількох людей.

##### Пояснювати поняття репозиторію

[Not implemented](#)

Репозиторій зберігає проєкт і його історію, даючи змогу перевірити попередні версії та внески авторів.

##### Пояснювати поняття коміту

[Not implemented](#)

Коміт фіксує узгоджений стан змін у Git із ідентифікатором і зв’язками з попередньою історією.

##### Пояснювати поняття гілки

[Not implemented](#)

Гілка позначає окремий напрямок розвитку, де можна створювати коміти без негайної зміни головної історії.

##### Пояснювати поняття pull request

[Not implemented](#)

Pull request на платформі спільної розробки організовує перевірку запропонованих змін перед їхнім об’єднанням.

##### Пояснювати злиття гілок

[Not implemented](#)

Злиття поєднує історії змін; якщо вони торкаються несумісних місць, потрібне узгодження конфліктів.

##### Розрізняти локальний і віддалений репозиторій

[Not implemented](#)

Локальна копія дозволяє робити коміти самостійно, а віддалений репозиторій використовується для обміну між учасниками.

#### Відкритий вихідний код

Skills: 2

[Not implemented](#)

Відкритість вихідного коду визначається не лише його видимістю, а й правами використання, модифікації та поширення.

##### Пояснювати поняття Open Source

[Not implemented](#)

Відкрита ліцензія дозволяє вивчати, використовувати, змінювати та розповсюджувати код у межах визначених умов.

##### Розрізняти відкритий і публічно видимий код

[Not implemented](#)

Доступ до тексту програми не завжди надає дозвіл вносити зміни чи повторно поширювати її.

#### Спільна робота над цифровим продуктом

Skills: 3

[Not implemented](#)

Спільна розробка потребує узгоджених правил внесення й перегляду змін, координації учасників і відстеження версій. Правила співпраці застосовні як у відкритих, так і в приватних репозиторіях та не визначають самі по собі умови ліцензування.

##### Пояснювати правила внеску до спільного проєкту

[Not implemented](#)

Правила внеску, перевірки коду й обговорення змін допомагають командам працювати над спільним продуктом.

##### Узгоджувати зміни у спільному цифровому проєкті

[Not implemented](#)

Домовлятися про власників змін, послідовність об’єднання внесків і розв’язання ситуацій, коли двоє учасників змінили один фрагмент. Спільна робота не зводиться до зберігання файлів у спільній теці.

##### Відстежувати версії цифрового продукту

[Not implemented](#)

Порівнювати послідовні стани файла чи проєкту, визначати, яка зміна коли з’явилася, і за потреби повертатися до попередньої збереженої версії. Наявність багатьох файлів із назвами «final2» не обов’язково створює прозору історію.

### Історія програмування

Groups: 2 · Skills: 9

[Not implemented](#)

Висвітлює виникнення алгоритмічних ідей, практик програмування, програмних інструментів, мережевих рішень та обчислювальних машин у їхньому історичному контексті. Окремо показує внесок конкретних людей і команд, зокрема довго недооцінену працю жінок, без перетворення кожної біографії на окрему компетентність.

#### Ключові внески

Skills: 6

[Not implemented](#)

Історичні технологічні зміни — перші описи програм, практичне програмування машин, компіляція, надійність програм, мережеві протоколи й теорія обчислень — дають змогу аналізувати, яку проблему розв’язував винахід і чому він став важливим. Конкретні автори та команди залишаються обов’язковими прикладами у предметній пропозиції.

##### Пояснювати витоки програмування

[Not implemented](#)

На прикладі описів для аналітичної машини Чарльза Беббіджа показувати, як послідовність операцій можна задати для машини ще до появи сучасних комп’ютерів. Розглядати праці Ади Лавлейс та їхнє бачення застосувань обчислення ширше за звичайну арифметику.

##### Пояснювати раннє електронне програмування

[Not implemented](#)

Показувати, як команди створювали й перевіряли програми для перших великих електронних обчислювальних машин попри складні засоби введення інструкцій. На прикладі шести програмісток ENIAC висвітлювати їхній документований, тривалий час недооцінений внесок.

##### Пояснювати розвиток компіляторів

[Not implemented](#)

Пояснювати, як перетворення програм із зручнішого для людини запису на машинні інструкції змінило підхід до програмування. Показувати внесок Грейс Гоппер та інших дослідників у ранні компілятори й мови програмування, не ототожнюючи компілятор із самою мовою.

##### Пояснювати розвиток надійності програм

[Not implemented](#)

На прикладі програмних систем для космічних польотів пояснювати важливість перевірки помилок, пріоритетів виконання й відновлення після відмов. Висвітлювати керівну роль Маргарет Гамільтон у програмному забезпеченні Apollo та колективний характер розробки.

##### Пояснювати усунення мережевих петель

[Not implemented](#)

На історії мостів локальних мереж пояснювати, чому надлишкові фізичні з’єднання можуть створювати цикли передавання кадрів та як Spanning Tree Protocol формує логічну структуру без петель. Визнавати внесок Радії Перлман, не плутаючи цей протокол з алгоритмом маршрутизації IP.

##### Пояснювати теорію обчислюваності

[Not implemented](#)

Описувати ідею формальної моделі універсального обчислення та меж того, які задачі можна розв’язати алгоритмічно. Роботи Алана Тюрінга є ключовим історичним прикладом; його криптоаналіз і дискусії про машинний інтелект розглядаються окремо.

#### Машини та криптоаналіз

Skills: 3

[Not implemented](#)

Розвиток обчислювальних пристроїв і спеціалізованих криптоаналітичних машин демонструє, як формалізація інструкцій та механізація перевірок розв’язували конкретні історичні задачі. Філософські питання про імітацію мислення та розуміння розглядаються окремо в AI.

##### Пояснювати історичні методи криптоаналізу

[Not implemented](#)

Пояснювати, як математичний аналіз закономірностей і систематичне відсіювання варіантів допомагали шукати налаштування шифрувальних машин. Історичні приклади включають польських криптоаналітиків, Джоан Кларк, Алана Тюрінга, Гордона Велчмана та інших фахівців Блетчлі-Парку.

##### Пояснювати призначення Bombe

[Not implemented](#)

Bombe була електромеханічною машиною для перевірки ключів Enigma, створеною з урахуванням попередньої польської криптоаналітичної роботи.

##### Пояснювати розвиток програмованих комп’ютерів

[Not implemented](#)

Порівнювати, як від механічних концепцій до електронних машин змінювалися способи зберігання інструкцій, вибору операцій та керування виконанням програми. Це історія пристроїв і їхньої архітектури, на відміну від власне техніки раннього програмування.

