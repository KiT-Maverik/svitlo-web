# Mathematics — Grade 1

Date: 2026-10-28

A country-independent first-stage mathematics curriculum organized around observable competencies rather than a specific national syllabus or timetable. It builds number sense, early operations, mathematical language, geometry, measurement, and reasoning through progressively more abstract representations.

The plan establishes a pedagogical sequence, not fixed instructional hours or finalized lesson experiences. Module and lesson files provide the linked source material; the approved [Skills Taxonomy](../../skills/taxonomy.md) is the authoritative editorial definition of the competency hierarchy.

## TARGET AUDIENCE

Ages: 6–7 (approximate)
Designed for learners beginning formal mathematics, including those still acquiring independent reading skills. Prior understanding matters more than chronological age; spoken explanations and concrete models should remain available wherever a reading barrier could obscure mathematical understanding.

## PREREQUISITES

- No formal mathematical prerequisites.
- Learners should be able to engage with basic objects or accessible equivalents; independent reading is not required.

## EXPECTED RESULTS

- Count, represent, compare, and order numbers within 20, including zero and groups of ten.
- Explain addition and subtraction with objects; solve and check simple calculations within 20.
- Read equalities, interpret one-step problems, and distinguish known from unknown quantities.
- Identify common shapes, spatial relationships, and basic measurement ideas.
- Read whole hours, compose simple money amounts, and interpret elementary categorical data.

## SCOPE & EDITORIAL NOTES

Scope: Concrete number sense and basic arithmetic within 20; simple spatial, measurement, time, money, and data contexts. Recurring practice may revisit the same skill across lessons.
Exclusions: Counting to 100 as an exit requirement, multi-step word problems, formal algebra, fixed national standards, and prescribed lesson hours.
Progression: Module and lesson order is a pedagogical proposal; check prerequisite sequencing before publishing, especially the introduction of subtraction relative to early facts within 10.
Dependencies: Skills are linked to their existing `*.data.ts` Code implementations. The [Skills Taxonomy](../../skills/taxonomy.md) contains the canonical descriptions of the competencies. File presence establishes traceability, not proof of runtime registration; complete Learning Briefs, assessments, and UI specifications belong to later stages.

## LEARNING PLAN

### 01 - Quantity, Numbers, and Order
File: [Quantity, Numbers, and Order](./01-quantity-numbers-and-order/README.md)
Goal: Establish cardinality, number notation, counting order, and grouping within 20.
Learners move from counting individual objects to comparing and ordering written numbers. Equal groups and the first ten provide the foundations for later arithmetic.

#### 01 - One Object, One Number
File: [One Object, One Number](./01-quantity-numbers-and-order/01-one-object-one-number/README.md)
Goal: Count every object exactly once and state the total.
Use a one-to-one counting action to distinguish counting words from the number of objects.
Target skills:
- [One To One](../../../src/data/skillsTaxonomy/counting/sequence/skills/oneToOne.data.ts)
- [Basic Cardinality](../../../src/data/skillsTaxonomy/counting/cardinality/skills/basicCardinality.data.ts)

#### 02 - Zero and Digits
File: [Zero and Digits](./01-quantity-numbers-and-order/02-zero-and-digits/README.md)
Goal: Recognize zero and connect digits 0–9 with quantities.
Contrast empty sets with visible groups, then match spoken number words, digits, and objects.
Target skills:
- [Zero](../../../src/data/skillsTaxonomy/counting/cardinality/skills/zero.data.ts)
- [Digits 09](../../../src/data/skillsTaxonomy/numeration/notation/skills/digits09.data.ts)

#### 03 - Counting Forward and Backward to 20
File: [Counting Forward and Backward to 20](./01-quantity-numbers-and-order/03-counting-forward-and-backward-to-20/README.md)
Goal: Continue counting forward and backward within 20.
Start at different numbers and cross ten in both directions, using objects when needed.
Target skills:
- [Forward 20](../../../src/data/skillsTaxonomy/counting/sequence/skills/forward20.data.ts)
- [Backward 20](../../../src/data/skillsTaxonomy/counting/sequence/skills/backward20.data.ts)

#### 04 - Reading and Writing Numbers to 20
File: [Reading and Writing Numbers to 20](./01-quantity-numbers-and-order/04-reading-and-writing-numbers-to-20/README.md)
Goal: Read, write, and identify numbers from 0 to 20.
Match two-digit numerals with spoken names and concrete quantities, including 10 and 20.
Target skills:
- [Read Write 20](../../../src/data/skillsTaxonomy/numeration/notation/skills/readWrite20.data.ts)

#### 05 - Ordinal Position and Neighboring Numbers
File: [Ordinal Position and Neighboring Numbers](./01-quantity-numbers-and-order/05-ordinal-position-and-neighboring-numbers/README.md)
Goal: Tell ordinal position from quantity and locate neighboring numbers.
Compare 'the third object' with 'three objects'; find previous, next, and intermediate numbers.
Target skills:
- [Basic Ordinal](../../../src/data/skillsTaxonomy/counting/ordinal/skills/basicOrdinal.data.ts)
- [Before After Between](../../../src/data/skillsTaxonomy/numeration/numberLine/skills/beforeAfterBetween.data.ts)

#### 06 - More, Less, or Equal
File: [More, Less, or Equal](./01-quantity-numbers-and-order/06-more-less-or-equal/README.md)
Goal: Compare two groups as greater, smaller, or equal.
Use matching and counting to justify a comparison without relying on size or arrangement.
Target skills:
- [Compare Sets](../../../src/data/skillsTaxonomy/counting/cardinality/skills/compareSets.data.ts)
- [More Less Equal](../../../src/data/skillsTaxonomy/numeration/comparison/skills/moreLessEqual.data.ts)

#### 07 - Comparing and Ordering Numbers
File: [Comparing and Ordering Numbers](./01-quantity-numbers-and-order/07-comparing-and-ordering-numbers/README.md)
Goal: Use comparison signs and order numbers within 20.
Read <, >, and = as relationships and arrange numbers by value.
Target skills:
- [Comparison Symbols](../../../src/data/skillsTaxonomy/numeration/comparison/skills/comparisonSymbols.data.ts)
- [Order 20](../../../src/data/skillsTaxonomy/numeration/comparison/skills/order20.data.ts)

#### 08 - Number Line to 20
File: [Number Line to 20](./01-quantity-numbers-and-order/08-number-line-to-20/README.md)
Goal: Locate numbers and neighbors on a line from 0 to 20.
Interpret equally spaced positions, relative direction, and one-step movement on a number line.
Target skills:
- [Number Line 20](../../../src/data/skillsTaxonomy/numeration/numberLine/skills/numberLine20.data.ts)

#### 09 - Ten as a Group
File: [Ten as a Group](./01-quantity-numbers-and-order/09-ten-as-a-group/README.md)
Goal: Make and break a group of ten objects.
Bundle ten ones into one ten and unbundle it without changing the quantity.
Target skills:
- [Make Ten](../../../src/data/skillsTaxonomy/numeration/placeValue/skills/makeTen.data.ts)

#### 10 - Counting by Twos and Fives
File: [Counting by Twos and Fives](./01-quantity-numbers-and-order/10-counting-by-twos-and-fives/README.md)
Goal: Count equal groups by twos and fives.
Build repeated groups and connect skip-counting sequences with the objects they count.
Target skills:
- [Count By 2](../../../src/data/skillsTaxonomy/counting/steps/skills/countBy2.data.ts)
- [Count By 5](../../../src/data/skillsTaxonomy/counting/steps/skills/countBy5.data.ts)

#### 11 - Different Representations of a Number
File: [Different Representations of a Number](./01-quantity-numbers-and-order/11-different-representations-of-a-number/README.md)
Goal: Link quantities, numerals, and number-line positions.
Translate between concrete sets, written numbers, and placements rather than learning each separately.
Target skills:
- [Multiple Representations](../../../src/data/skillsTaxonomy/numeration/placeValue/skills/multipleRepresentations.data.ts)

### 02 - Addition and Subtraction
File: [Addition and Subtraction](./02-addition-and-subtraction/README.md)
Goal: Develop concrete addition and subtraction through sums and differences within 20.
Part–whole models, zero, commutativity, and bridging through ten support understanding of operations. Inverse relationships are introduced as a way to check work.

#### 01 - Parts and a Whole
File: [Parts and a Whole](./02-addition-and-subtraction/01-parts-and-a-whole/README.md)
Goal: Recognize a whole as two parts and find a missing part.
Separate and reunite objects, keeping the total invariant and identifying unknown components.
Target skills:
- [Part Whole](../../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/partWhole.data.ts)

#### 02 - What Addition Means
File: [What Addition Means](./02-addition-and-subtraction/02-what-addition-means/README.md)
Goal: Model addition as joining or adding objects, including zero.
Connect visible actions to the + sign; notice that adding zero leaves the quantity unchanged.
Target skills:
- [Add Meaning](../../../src/data/skillsTaxonomy/arithmetic/addition/skills/addMeaning.data.ts)
- [Add Zero](../../../src/data/skillsTaxonomy/arithmetic/addition/skills/addZero.data.ts)

#### 03 - Sums and Differences Within 10
File: [Sums and Differences Within 10](./02-addition-and-subtraction/03-sums-and-differences-within-10/README.md)
Goal: Develop basic addition and subtraction facts within 10.
Use concrete number relationships instead of memorizing isolated answers; subtraction is first shown through removal.
Target skills:
- [Facts Within 10](../../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/factsWithin10.data.ts)

#### 04 - Number Bonds to 10
File: [Number Bonds to 10](./02-addition-and-subtraction/04-number-bonds-to-10/README.md)
Goal: Build ten from two complementary parts.
Explore alternative pairs for the same whole and use ten frames to find missing parts.
Target skills:
- [Number Bonds 10](../../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/numberBonds10.data.ts)

#### 05 - Changing the Order of Addends
File: [Changing the Order of Addends](./02-addition-and-subtraction/05-changing-the-order-of-addends/README.md)
Goal: Explain why swapping addends preserves the sum.
Rearrange the same groups and compare their unchanged combined quantity.
Target skills:
- [Commutative Addition](../../../src/data/skillsTaxonomy/arithmetic/addition/skills/commutativeAddition.data.ts)

#### 06 - Making Ten
File: [Making Ten](./02-addition-and-subtraction/06-making-ten/README.md)
Goal: Use making ten as a mental addition strategy.
Split one addend to complete a ten, then combine the remaining objects.
Target skills:
- [Make Ten Strategy](../../../src/data/skillsTaxonomy/arithmetic/addition/skills/makeTenStrategy.data.ts)

#### 07 - Addition Across Ten
File: [Addition Across Ten](./02-addition-and-subtraction/07-addition-across-ten/README.md)
Goal: Add one-digit numbers when the sum crosses ten.
Show each regrouping step through a full ten and leftover ones.
Target skills:
- [Cross Ten Addition](../../../src/data/skillsTaxonomy/arithmetic/addition/skills/crossTenAddition.data.ts)

#### 08 - What Subtraction Means
File: [What Subtraction Means](./02-addition-and-subtraction/08-what-subtraction-means/README.md)
Goal: Model subtraction, including subtracting zero or all objects.
Contrast removing a part with joining groups and describe the resulting difference.
Target skills:
- [Subtract Meaning](../../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/subtractMeaning.data.ts)
- [Subtract Zero](../../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/subtractZero.data.ts)
- [Subtract Self](../../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/subtractSelf.data.ts)

#### 09 - Subtraction Across Ten
File: [Subtraction Across Ten](./02-addition-and-subtraction/09-subtraction-across-ten/README.md)
Goal: Subtract within 20 by passing through ten.
Split the amount removed to reach ten first, then subtract the remainder.
Target skills:
- [Cross Ten Subtraction](../../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/crossTenSubtraction.data.ts)

#### 10 - Calculations Within 20
File: [Calculations Within 20](./02-addition-and-subtraction/10-calculations-within-20/README.md)
Goal: Apply addition and subtraction within 20 and check inverses.
Connect related equations and use the opposite operation to test a result.
Target skills:
- [Facts Within 20](../../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/factsWithin20.data.ts)
- [Inverse Operations](../../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/inverseOperations.data.ts)

### 03 - Mathematical Language, Equalities, and Word Problems
File: [Mathematical Language, Equalities, and Word Problems](./03-mathematical-language-equalities-and-word-problems/README.md)
Goal: Connect mathematical language with numerical relationships and word problems.
Learners read expressions and equalities, identify known and unknown quantities, and translate short situations into models. Explanations should make the mathematical choice explicit.

#### 01 - Mathematical Equality Means Balance
File: [Mathematical Equality Means Balance](./03-mathematical-language-equalities-and-word-problems/01-mathematical-equality-means-balance/README.md)
Goal: Understand equality as two expressions with the same value.
Compare both sides of =, including cases where each side contains an operation.
Target skills:
- [Equality Meaning](../../../src/data/skillsTaxonomy/algebra/equalities/skills/equalityMeaning.data.ts)
- [True False Equality](../../../src/data/skillsTaxonomy/algebra/equalities/skills/trueFalseEquality.data.ts)

#### 02 - Reading Numerical Expressions
File: [Reading Numerical Expressions](./03-mathematical-language-equalities-and-word-problems/02-reading-numerical-expressions/README.md)
Goal: Read simple numerical expressions accurately.
Connect the order of numbers and operation signs with concrete addition and subtraction actions.
Target skills:
- [Read Numeric Expressions](../../../src/data/skillsTaxonomy/algebra/expressions/skills/readNumericExpressions.data.ts)

#### 03 - The Missing Number
File: [The Missing Number](./03-mathematical-language-equalities-and-word-problems/03-the-missing-number/README.md)
Goal: Complete true equalities and find an unknown addend.
Represent missing quantities and verify each proposed value by substitution.
Target skills:
- [Complete Equality](../../../src/data/skillsTaxonomy/algebra/equalities/skills/completeEquality.data.ts)
- [Unknown Addend](../../../src/data/skillsTaxonomy/algebra/unknowns/skills/unknownAddend.data.ts)

#### 04 - Known Information in a Word Problem
File: [Known Information in a Word Problem](./03-mathematical-language-equalities-and-word-problems/04-known-information-in-a-word-problem/README.md)
Goal: Identify known information and the actual question in a word problem.
Separate quantities supplied by the story from the quantity still to be found.
Target skills:
- [Identify Known Unknown](../../../src/data/skillsTaxonomy/problemSolving/conditions/skills/identifyKnownUnknown.data.ts)

#### 05 - Pictures and Expressions for Word Problems
File: [Pictures and Expressions for Word Problems](./03-mathematical-language-equalities-and-word-problems/05-pictures-and-expressions-for-word-problems/README.md)
Goal: Build a model and choose an operation for a one-step problem.
Translate a short story into an object diagram and a matching addition or subtraction expression.
Target skills:
- [One Step Model](../../../src/data/skillsTaxonomy/problemSolving/models/skills/oneStepModel.data.ts)
- [Choose Operation Add Sub](../../../src/data/skillsTaxonomy/problemSolving/models/skills/chooseOperationAddSub.data.ts)

#### 06 - How Many More or Fewer
File: [How Many More or Fewer](./03-mathematical-language-equalities-and-word-problems/06-how-many-more-or-fewer/README.md)
Goal: Compare quantities and describe increases or decreases.
Distinguish 'how many more' comparisons from changes in a single quantity.
Target skills:
- [Additive Comparison](../../../src/data/skillsTaxonomy/problemSolving/comparisons/skills/additiveComparison.data.ts)
- [Increase Decrease Number](../../../src/data/skillsTaxonomy/problemSolving/comparisons/skills/increaseDecreaseNumber.data.ts)

#### 07 - Part-Whole Word Problems
File: [Part-Whole Word Problems](./03-mathematical-language-equalities-and-word-problems/07-part-whole-word-problems/README.md)
Goal: Solve part–whole situations and name the result's unit.
Decide whether the whole or a part is unknown, then explain what the answer counts.
Target skills:
- [Part Whole Addsub](../../../src/data/skillsTaxonomy/problemSolving/parts/skills/partWholeAddsub.data.ts)
- [Explain Answer Units](../../../src/data/skillsTaxonomy/problemSolving/planning/skills/explainAnswerUnits.data.ts)

#### 08 - Patterns and Explanations
File: [Patterns and Explanations](./03-mathematical-language-equalities-and-word-problems/08-patterns-and-explanations/README.md)
Goal: Continue a pattern and justify its rule.
Check that a proposed numerical step works across the sequence, not only at its end.
Target skills:
- [Arithmetic Pattern](../../../src/data/skillsTaxonomy/algebra/patterns/skills/arithmeticPattern.data.ts)
- [Complete Pattern](../../../src/data/skillsTaxonomy/reasoning/logic/skills/completePattern.data.ts)
- [Explain Strategy](../../../src/data/skillsTaxonomy/reasoning/argumentation/skills/explainStrategy.data.ts)

#### 09 - Creating Your Own Word Problem
File: [Creating Your Own Word Problem](./03-mathematical-language-equalities-and-word-problems/09-creating-your-own-word-problem/README.md)
Goal: Create a simple solvable word problem from a picture or expression.
Choose consistent data, a meaningful event, and a question without revealing the answer in the condition.
Target skills:
- [Create Problem](../../../src/data/skillsTaxonomy/problemSolving/models/skills/createProblem.data.ts)

### 04 - Geometry and Measurement
File: [Geometry and Measurement](./04-geometry-and-measurement/README.md)
Goal: Recognize shapes, spatial relations, and simple measurement principles.
Learners identify two- and three-dimensional figures, compose shapes, compare mass and capacity, and measure or estimate length with appropriate units.

#### 01 - Left, Right, and Between
File: [Left, Right, and Between](./04-geometry-and-measurement/01-left-right-and-between/README.md)
Goal: Describe positions and follow short spatial directions.
Use clearly named reference points for left, right, between, and path instructions.
Target skills:
- [Position Words](../../../src/data/skillsTaxonomy/geometry/orientation/skills/positionWords.data.ts)
- [Spatial Orientation Path](../../../src/data/skillsTaxonomy/geometry/orientation/skills/spatialOrientationPath.data.ts)

#### 02 - Plane Shapes
File: [Plane Shapes](./04-geometry-and-measurement/02-plane-shapes/README.md)
Goal: Identify common plane shapes despite changes of size or orientation.
Compare sides, corners, and closure instead of matching a memorized appearance.
Target skills:
- [Identify 2 D Shapes](../../../src/data/skillsTaxonomy/geometry/figures/skills/identify2dShapes.data.ts)

#### 03 - Solid Shapes
File: [Solid Shapes](./04-geometry-and-measurement/03-solid-shapes/README.md)
Goal: Recognize common three-dimensional solids.
Distinguish spheres, cubes, cylinders, and cones by visible spatial properties.
Target skills:
- [Identify 3 D Solids](../../../src/data/skillsTaxonomy/geometry/solids/skills/identify3dSolids.data.ts)

#### 04 - Composing Shapes
File: [Composing Shapes](./04-geometry-and-measurement/04-composing-shapes/README.md)
Goal: Compose and decompose shapes into familiar parts.
Assemble and separate plane figures without losing or overlapping components.
Target skills:
- [Compose Decompose Shapes](../../../src/data/skillsTaxonomy/geometry/figures/skills/composeDecomposeShapes.data.ts)

#### 05 - Longer, Shorter, and Equal Length
File: [Longer, Shorter, and Equal Length](./04-geometry-and-measurement/05-longer-shorter-and-equal-length/README.md)
Goal: Compare lengths and measure them with repeated equal units.
Align starts, avoid gaps, and explain why a common unit is needed.
Target skills:
- [Compare Length](../../../src/data/skillsTaxonomy/measurement/length/skills/compareLength.data.ts)
- [Nonstandard Length](../../../src/data/skillsTaxonomy/measurement/length/skills/nonstandardLength.data.ts)

#### 06 - Rulers and Centimeters
File: [Rulers and Centimeters](./04-geometry-and-measurement/06-rulers-and-centimeters/README.md)
Goal: Measure from a ruler's zero mark and draw a given length.
Count centimeter intervals rather than tick marks; use a consistent virtual scale.
Target skills:
- [Ruler Zero](../../../src/data/skillsTaxonomy/measurement/length/skills/rulerZero.data.ts)
- [Measure Centimeters](../../../src/data/skillsTaxonomy/measurement/length/skills/measureCentimeters.data.ts)

#### 07 - Heavier and Greater Capacity
File: [Heavier and Greater Capacity](./04-geometry-and-measurement/07-heavier-and-greater-capacity/README.md)
Goal: Compare mass and capacity using appropriate models.
Distinguish a balance comparison from the volume a container can hold.
Target skills:
- [Compare Mass](../../../src/data/skillsTaxonomy/measurement/mass/skills/compareMass.data.ts)
- [Capacity Concept](../../../src/data/skillsTaxonomy/measurement/capacity/skills/capacityConcept.data.ts)

#### 08 - Estimating Length Before Measuring
File: [Estimating Length Before Measuring](./04-geometry-and-measurement/08-estimating-length-before-measuring/README.md)
Goal: Estimate length, then test the estimate by measuring.
Use a reference length, compare estimated and measured results, and learn from the difference.
Target skills:
- [Estimate Length](../../../src/data/skillsTaxonomy/measurement/length/skills/estimateLength.data.ts)

### 05 - Time, Money, and Data
File: [Time, Money, and Data](./05-time-money-and-data/README.md)
Goal: Use time, money, and basic data representations to explain everyday quantities.
Learners read whole hours and simple calendars, assemble money amounts, classify observations, and interpret tables and pictographs. Reasoning links representations to clear answers.

#### 01 - Parts of a Day and Hours
File: [Parts of a Day and Hours](./05-time-money-and-data/01-parts-of-a-day-and-hours/README.md)
Goal: Sequence parts of a day and read whole hours.
Recognize morning/day/evening/night and distinguish a clock reading from time-of-day context.
Target skills:
- [Day Sequence](../../../src/data/skillsTaxonomy/time/calendar/skills/daySequence.data.ts)
- [Read Hour](../../../src/data/skillsTaxonomy/time/clock/skills/readHour.data.ts)

#### 02 - Days of the Week and the Calendar
File: [Days of the Week and the Calendar](./05-time-money-and-data/02-days-of-the-week-and-the-calendar/README.md)
Goal: Navigate days of the week and the calendar.
Locate dates and months without assuming a universal start-of-week column.
Target skills:
- [Week Month Year](../../../src/data/skillsTaxonomy/time/calendar/skills/weekMonthYear.data.ts)

#### 03 - Money Denominations and Amounts
File: [Money Denominations and Amounts](./05-time-money-and-data/03-money-denominations-and-amounts/README.md)
Goal: Recognize configured denominations and compose and compare amounts.
Use an illustrative currency or a verified locale-specific set of denominations, never assumed universal coins.
Target skills:
- [Recognize Denominations](../../../src/data/skillsTaxonomy/money/denominations/skills/recognizeDenominations.data.ts)
- [Compose Amount](../../../src/data/skillsTaxonomy/money/denominations/skills/composeAmount.data.ts)
- [Compare Amounts](../../../src/data/skillsTaxonomy/money/denominations/skills/compareAmounts.data.ts)

#### 04 - Sorting and Counting Data
File: [Sorting and Counting Data](./05-time-money-and-data/04-sorting-and-counting-data/README.md)
Goal: Classify objects and count each category.
Choose a sorting attribute, assign each item once, and check category totals.
Target skills:
- [Classify By Attribute](../../../src/data/skillsTaxonomy/data/collection/skills/classifyByAttribute.data.ts)
- [Collect Counts](../../../src/data/skillsTaxonomy/data/collection/skills/collectCounts.data.ts)

#### 05 - Simple Tables and Pictographs
File: [Simple Tables and Pictographs](./05-time-money-and-data/05-simple-tables-and-pictographs/README.md)
Goal: Read simple tables and one-to-one pictographs.
Find category values, interpret explicit zeroes, and observe the pictograph legend.
Target skills:
- [Read Simple Table](../../../src/data/skillsTaxonomy/data/presentation/skills/readSimpleTable.data.ts)
- [Read Pictograph](../../../src/data/skillsTaxonomy/data/presentation/skills/readPictograph.data.ts)

#### 06 - Explain Your Reasoning
File: [Explain Your Reasoning](./05-time-money-and-data/06-explain-your-reasoning/README.md)
Goal: Explain a calculation by relating a story, model, and expression.
Select and justify the operation with concrete evidence, not only a keyword.
Target skills:
- [Translate Situation](../../../src/data/skillsTaxonomy/algebra/formalization/skills/translateSituation.data.ts)
- [Classify And Justify](../../../src/data/skillsTaxonomy/reasoning/argumentation/skills/classifyAndJustify.data.ts)
- [Multiple Representations](../../../src/data/skillsTaxonomy/reasoning/representations/skills/multipleRepresentations.data.ts)
