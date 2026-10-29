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

### Natural numbers

Groups: 5 · Skills: 27

Code: [Code](../../src/data/skillsTaxonomy/numeration/numeration.data.ts)

This domain examines how natural-number notation represents quantities, how the decimal place-value system works, and how numbers can be compared, decomposed, and estimated.

#### Numeral notation

Skills: 4

Code: [Code](../../src/data/skillsTaxonomy/numeration/notation/notation.data.ts)

Digits are the symbols of the decimal numeral system. Spoken names, written numerals, and represented quantities must be connected across one-, two-, and three-digit numbers.

##### Digits 0–9 and the meaning of a digit

Code: [Code](../../src/data/skillsTaxonomy/numeration/notation/skills/digits09.data.ts)

A digit is a single symbol from 0 to 9; a number may require multiple digits. For example, 12 is not an additional digit.

##### Reading, writing and matching numbers 0–20

Code: [Code](../../src/data/skillsTaxonomy/numeration/notation/skills/readWrite20.data.ts)

The word 'seventeen', the numeral 17, and a collection of seventeen objects represent the same quantity. Zero has its own numeral as well.

##### Reading and writing numbers to 100

Code: [Code](../../src/data/skillsTaxonomy/numeration/notation/skills/readWrite100.data.ts)

Moving from 9 to 10 introduces two positions; in 46, the digits 4 and 6 indicate different place values.

##### Reading and writing three-digit numbers

Code: [Code](../../src/data/skillsTaxonomy/numeration/notation/skills/readWrite1000.data.ts)

In 305, there are no tens, yet the zero placeholder is necessary to keep the numeral distinct from 35.

#### Place value

Skills: 11

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/placeValue.data.ts)

Decimal place value identifies the contribution of each digit and supports exchanges between ones, tens, and hundreds, as well as equivalent decompositions of a quantity.

##### Flexible number partitioning

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/flexiblePartition.data.ts)

The same value can have non-standard decompositions: 146 can be written as 130 + 16 or 100 + 46 without changing its quantity.

##### Total tens and hundreds in a number

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/totalTensInNumber.data.ts)

The number 348 contains 34 complete tens, not merely the four tens shown in its tens position.

##### Grouping and ungrouping ten ones

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/makeTen.data.ts)

Exchanging ten individual units for one ten preserves the total. The exchange also works in the reverse direction.

##### Tens and ones in two-digit numbers

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/tensOnes.data.ts)

The number 57 has five complete tens and seven ones; positional notation can be linked to physical blocks representing those groups.

##### Ten tens make one hundred

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/makeHundred.data.ts)

Ten groups of ten make one hundred, creating the next place-value unit and explaining transitions such as 90 to 100.

##### Hundreds, tens and ones in three-digit numbers

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/hundredsTensOnes.data.ts)

In 624, the digits mean six hundreds, two tens, and four ones, regardless of how the number is spoken.

##### Value of a digit by position

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/digitPlaceValue.data.ts)

In 232, the first and last digit are both 2, but their values differ: 200 and 2.

##### Zero as a place-value placeholder

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/zeroPlaceholder.data.ts)

In 407, the middle zero preserves the tens position and prevents confusion with 47.

##### Expanded form of numbers

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/expandedForm.data.ts)

The decomposition 583 = 500 + 80 + 3 connects a positional numeral with the sum of its place-value contributions.

##### Regrouping between place values

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/regroupPlaceValues.data.ts)

A hundred can be exchanged for ten tens, and each ten for ten ones, without altering the number.

##### Matching representations of a number

Code: [Code](../../src/data/skillsTaxonomy/numeration/placeValue/skills/multipleRepresentations.data.ts)

The number 24 can be shown by two ten-blocks and four single units, a point on a number line, or a collection of objects.

#### Comparing numbers

Skills: 5

Code: [Code](../../src/data/skillsTaxonomy/numeration/comparison/comparison.data.ts)

Numerical order relates quantities and written numbers, including their comparison symbols and ascending or descending arrangements.

##### Greater, less or equal quantities

Code: [Code](../../src/data/skillsTaxonomy/numeration/comparison/skills/moreLessEqual.data.ts)

The larger collection is identified by its cardinality, not by the area, mass, or visual size of its objects.

##### Comparison symbols <, > and =

Code: [Code](../../src/data/skillsTaxonomy/numeration/comparison/skills/comparisonSymbols.data.ts)

The statement 8 > 5 records which number is larger; swapping the two numbers requires reversing the inequality symbol.

##### Ordering numbers 0–20

Code: [Code](../../src/data/skillsTaxonomy/numeration/comparison/skills/order20.data.ts)

Each number occupies a position in the ordered sequence. Descending order reverses ascending order.

##### Comparing and ordering two-digit numbers

Code: [Code](../../src/data/skillsTaxonomy/numeration/comparison/skills/order100.data.ts)

When comparing 64 and 59, the tens determine the result; ones matter only if the tens are equal.

##### Comparing and ordering three-digit numbers

Code: [Code](../../src/data/skillsTaxonomy/numeration/comparison/skills/order1000.data.ts)

For 705 and 699, first compare the hundreds. The zero in 705's tens position does not make it smaller.

#### Number line

Skills: 4

Code: [Code](../../src/data/skillsTaxonomy/numeration/numberLine/numberLine.data.ts)

Numbers correspond to positions on an ordered scale with equal intervals; location, adjacency, and distance depend on the scale.

##### Previous, next and intermediate numbers

Code: [Code](../../src/data/skillsTaxonomy/numeration/numberLine/skills/beforeAfterBetween.data.ts)

The number 37 lies between 36 and 38. Previous and next numbers are one unit below and above the specified number.

##### Numbers on a line to 20

Code: [Code](../../src/data/skillsTaxonomy/numeration/numberLine/skills/numberLine20.data.ts)

Evenly spaced ticks show why 12 is to the right of 9 and why its neighboring numbers are 11 and 13.

##### Numbers on a scaled line to 1000

Code: [Code](../../src/data/skillsTaxonomy/numeration/numberLine/skills/numberLine1000.data.ts)

On a line with marks every 100, intermediate numbers must be placed proportionally rather than at arbitrary distances.

##### Distance between integers on a number line

Code: [Code](../../src/data/skillsTaxonomy/numeration/numberLine/skills/distanceOnLine.data.ts)

The difference between the coordinates 4 and 9 represents five unit intervals, regardless of direction.

#### Estimating numbers

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/numeration/estimation/estimation.data.ts)

Estimation concerns approximate numbers and quantities, rounding to chosen place values, and judging an approximation's accuracy.

##### Rounding to the nearest ten

Code: [Code](../../src/data/skillsTaxonomy/numeration/estimation/skills/roundToTen.data.ts)

Rounding to tens turns 46 into 50 but 44 into 40, based on distance to the neighboring multiples of ten.

##### Rounding to the nearest hundred

Code: [Code](../../src/data/skillsTaxonomy/numeration/estimation/skills/roundToHundred.data.ts)

The nearest hundred to 349 is 300, while 351 rounds to 400. The rounding error is the difference between the exact and approximated numbers.

##### Estimating and checking quantities

Code: [Code](../../src/data/skillsTaxonomy/numeration/estimation/skills/estimateQuantity.data.ts)

A scattered set of objects can be estimated from a subset and then checked against an exact count.

### Fractions

Groups: 4 · Skills: 19

Code: [Code](../../src/data/skillsTaxonomy/fractions/fractions.data.ts)

This domain explains part-whole relationships through equal partitions, numerators and denominators, visual models, and number-line positions. It includes initial comparisons and operations involving fractions.

#### Representing fractions

Skills: 12

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/representation.data.ts)

Fractions represent equal parts of a specified whole. Both unit and non-unit fractions can be written symbolically and interpreted geometrically, including values greater than one.

##### Distinguishing wholes and equal and unequal parts

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/wholeAndEqualParts.data.ts)

Two pieces are halves only if they are equal in size and belong to the same whole. Cutting something into two arbitrary pieces does not guarantee two halves.

##### Representing fractions greater than one

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/fractionGreaterThanOne.data.ts)

The fraction 5/4 represents one whole and another quarter. Its point on the number line lies to the right of 1, not between 0 and 1.

##### Relating tenths to division by 10

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/tenthsAsDivision.data.ts)

One tenth arises when a specified whole is partitioned into ten equal parts and corresponds to the quotient 1 ÷ 10.

##### Modeling unit fractions 1/n

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/unitFractionModel.data.ts)

A model of 1/3 must identify one of three equally sized parts of the chosen whole, rather than just any small fragment.

##### Reading and writing unit fractions

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/unitFractionRead.data.ts)

The word 'quarter' and the notation 1/4 both refer to one of four equal parts, regardless of the whole's geometric shape.

##### Explaining the denominator of a fraction

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/denominatorMeaning.data.ts)

In 3/5, the lower number specifies into how many equal parts the whole was divided, not how many of those parts were selected.

##### Explaining the numerator of a fraction

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/numeratorMeaning.data.ts)

In 3/5, the upper number indicates the three selected pieces among the five equal parts determined by the denominator.

##### Modeling fractions with multiple equal parts

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/nonUnitModel.data.ts)

Three equal eighths make 3/8; all eight-sized parts in this representation must refer to the same whole.

##### Explaining how part size depends on the whole

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/wholeDependence.data.ts)

Half of a large pizza may be bigger than half of a small pizza. Fractional portions cannot be compared meaningfully without accounting for their respective wholes.

##### Locating fractions between 0 and 1 on a number line

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/numberLine.data.ts)

Between 0 and 1, the point 3/4 lies at the third of four equal intervals from zero.

##### Showing one whole as n/n

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/oneAsFraction.data.ts)

Taking all four quarters of the same whole covers it completely: 4/4 = 1.

##### Showing equivalent fractions with visual models

Code: [Code](../../src/data/skillsTaxonomy/fractions/representation/skills/equivalentVisual.data.ts)

Two quarters cover the same proportion of a whole as one half. A visual model establishes the equivalence 1/2 = 2/4 without requiring numerical calculation.

#### Comparing fractions

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/fractions/comparison/comparison.data.ts)

Fraction comparisons must refer to the same whole. Fixed numerators or denominators reveal how the sizes of equal parts affect the quantities represented.

##### Comparing fractions with the same numerator

Code: [Code](../../src/data/skillsTaxonomy/fractions/comparison/skills/compareSameNumerator.data.ts)

For a common whole, 2/5 is greater than 2/7: the same number of pieces is taken from a partition into larger pieces.

##### Comparing unit fractions of the same whole

Code: [Code](../../src/data/skillsTaxonomy/fractions/comparison/skills/compareUnit.data.ts)

For the same apple, 1/2 is greater than 1/4 because dividing a whole into more equal pieces makes each individual piece smaller.

##### Comparing fractions with the same denominator using models

Code: [Code](../../src/data/skillsTaxonomy/fractions/comparison/skills/sameDenominatorModel.data.ts)

With a shared denominator, 5/8 is greater than 3/8 because every eighth has the same size.

#### Operations with fractions

Skills: 2

Code: [Code](../../src/data/skillsTaxonomy/fractions/arithmetic/arithmetic.data.ts)

Adding or removing equal-sized fractional parts changes how many parts of one whole are selected while preserving the common denominator.

##### Adding fractions with the same denominator within one whole

Code: [Code](../../src/data/skillsTaxonomy/fractions/arithmetic/skills/addLikeDenominators.data.ts)

In 2/7 + 3/7, add the numbers of sevenths while keeping the denominator 7. For this competency, the result does not exceed one whole.

##### Subtracting fractions with the same denominator within one whole

Code: [Code](../../src/data/skillsTaxonomy/fractions/arithmetic/skills/subtractLikeDenominators.data.ts)

For 5/6 − 2/6, remove two of the five selected sixths. The size of each sixth does not change.

#### Fractional parts of quantities

Skills: 2

Code: [Code](../../src/data/skillsTaxonomy/fractions/portions/portions.data.ts)

The relationship between a whole quantity and one of its equal parts can be found using division and reversed using multiplication.

##### Finding 1/n of a quantity by division

Code: [Code](../../src/data/skillsTaxonomy/fractions/portions/skills/findUnitPart.data.ts)

One quarter of 20 is five: dividing twenty units into four equal groups produces groups of five.

##### Finding the whole from a known unit fraction

Code: [Code](../../src/data/skillsTaxonomy/fractions/portions/skills/reconstructWhole.data.ts)

If one fifth of a collection is 3 objects, all five equal parts together contain 15 objects.

### Arithmetic

Groups: 5 · Skills: 79

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/arithmetic.data.ts)

This domain covers the meaning of the four basic operations, mental and written calculation strategies, operation properties, and checking results in elementary mathematics.

#### Addition

Skills: 10

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/addition.data.ts)

Addition combines quantities or increases an initial amount. Learners develop properties of sums, place-value exchanges, strategies for calculating and checking results.

##### Addition — Meaning and models

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/addMeaning.data.ts)

Joining collections of three and four objects produces seven. Increasing an initial quantity of three by four yields the same result.

##### Addition — Zero

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/addZero.data.ts)

Adding nothing preserves the original quantity: both 8 + 0 and 0 + 8 equal 8.

##### Addition — Commutative property

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/commutativeAddition.data.ts)

Combining collections of three and five objects gives the same total as combining five and three, even though the groups are presented in reverse order.

##### Addition — Making ten

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/makeTenStrategy.data.ts)

To calculate 8 + 5, take two from the five to complete ten, then add the remaining three.

##### Addition — Crossing ten

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/crossTenAddition.data.ts)

The sum 9 + 7 becomes easier when one unit completes ten and the other six units are added afterward.

##### Addition — 2-digit · Carrying

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/twoDigitCarry.data.ts)

In 27 + 18, the seven and eight ones form one new ten and five remaining ones.

##### Addition — Associative property

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/associativeAddition.data.ts)

The sum 7 + 13 + 3 can be regrouped as (7 + 3) + 13 without changing the addends or their total.

##### Addition — 3-digit · Carrying

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/threeDigitCarry.data.ts)

In 268 + 157, regrouping may occur in more than one place. Trading ten ones for a ten, or ten tens for a hundred, preserves the sum.

##### Addition — Column method

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/columnAddition.data.ts)

Ones are written beneath ones and tens beneath tens. A carried place-value unit is included in the next column.

##### Addition — Carrying · Error detection

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/addition/skills/carryErrorDetection.data.ts)

For 48 + 37, omitting the carried ten from 8 + 7 produces a result with an incorrect tens place.

#### Subtraction

Skills: 8

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/subtraction.data.ts)

Subtraction represents removing part of a collection, finding a difference, or identifying an unknown part of a whole. Calculations include regrouping place values and checking results.

##### Subtraction — Meaning and models

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/subtractMeaning.data.ts)

Removing three objects from a collection of eight models 8 − 3. The same operation can express a difference between groups or a missing part of a known whole.

##### Subtraction — Zero

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/subtractZero.data.ts)

Subtracting zero leaves a collection unchanged because nothing is removed.

##### Subtraction — Same number

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/subtractSelf.data.ts)

Removing all six objects from a set of six leaves an empty set, so the difference is zero.

##### Subtraction — Crossing ten

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/crossTenSubtraction.data.ts)

For 12 − 5, one ten can be regrouped into ones to make removing five possible.

##### Subtraction — 2-digit · Borrowing

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/twoDigitBorrow.data.ts)

In 43 − 18, exchange one ten for ten ones and then subtract using the corresponding place values.

##### Subtraction — 3-digit · Borrowing

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/threeDigitBorrow.data.ts)

In 402 − 175, regrouping may need to cross an empty tens position and exchange part of the hundreds.

##### Subtraction — Column method

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/columnSubtraction.data.ts)

Written subtraction keeps matching place values aligned and records each exchange before computing the affected columns.

##### Subtraction — Borrowing · Error detection

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/subtraction/skills/borrowErrorDetection.data.ts)

In 52 − 28, exchanging a ten changes both the number of available ones and the remaining tens. Omitting either change produces an error.

#### Combining addition and subtraction

Skills: 13

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/additionSubtraction.data.ts)

The inverse relationship between addition and subtraction supports part-whole reasoning, flexible mental calculation, and checking results.

##### Addition and subtraction — Part–whole relationship

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/partWhole.data.ts)

If a whole of nine contains a known part of four, the remaining part is found by 9 − 4.

##### Addition and subtraction — Number facts ≤ 10

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/factsWithin10.data.ts)

Small facts such as 6 + 3 or 9 − 4 can be calculated without recounting physical objects.

##### Addition and subtraction — Bonds of 10

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/numberBonds10.data.ts)

Ten can be partitioned into two addends in several ways, including 1 + 9, 4 + 6, and 5 + 5. Changing the parts does not change the whole.

##### Addition and subtraction — Number facts ≤ 20

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/factsWithin20.data.ts)

Sums and differences within twenty can rely on known number facts and tens as anchors without restarting from one each time.

##### Addition and subtraction — Inverse operations

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/inverseOperations.data.ts)

The equality 7 + 5 = 12 can be checked using 12 − 5 = 7 because subtraction recovers the original part.

##### Addition and subtraction — Whole tens

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/addSubtractTens.data.ts)

Computations such as 40 + 30 operate on groups of tens, while 80 − 20 removes two of eight tens.

##### Addition and subtraction — 2-digit · Without regrouping

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/twoDigitNoRegroup.data.ts)

In 34 + 25, tens and ones are combined separately, and neither place requires an exchange.

##### Addition and subtraction — Mental place-value strategy

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/placeValueMental.data.ts)

For 47 + 21, mentally add 40 + 20 and 7 + 1, then combine the partial sums.

##### Addition and subtraction — Compensation

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/compensation.data.ts)

To calculate 39 + 8, temporarily use 40 + 8 = 48, then subtract the extra one.

##### Addition and subtraction — Hundreds and tens

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/hundredsAndTens.data.ts)

The calculation 300 + 400 combines hundreds as grouped units; in 650 − 20, two tens are subtracted.

##### Addition and subtraction — 3-digit · Without regrouping

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/threeDigitNoRegroup.data.ts)

In 324 + 153, each column totals less than ten, so no carrying between place values is required.

##### Addition and subtraction — Result estimation

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/estimateResult.data.ts)

Before calculating 399 + 204, a sum near 600 is expected; an answer such as 63 would be implausible in magnitude.

##### Addition and subtraction — Result checking · Inverse operations

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/additionSubtraction/skills/checkWithInverse.data.ts)

A subtraction result for 63 − 28 can be checked by adding 28 back to the difference. A mismatch indicates an error.

#### Multiplication

Skills: 24

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/multiply.data.ts)

Multiplication combines equal groups or rectangular arrays; learners connect multiplication facts, operation properties, and place-value methods for computation and checking.

##### Multiplication — Equal groups

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/equalGroups.data.ts)

Three equal groups of four objects are represented by 3 × 4, unlike three unrelated addends.

##### Multiplication — Repeated addition

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/repeatedAddition.data.ts)

The expression 4 + 4 + 4 represents three groups of four. Unequal addends do not fit this simple repeated-addition model.

##### Multiplication — Array model

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/arrayModel.data.ts)

An array of three rows and five columns contains fifteen cells regardless of the order in which they are counted.

##### Multiplication — Reading expressions

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/readExpression.data.ts)

In 3 × 4, the factors identify a number of groups and the size of each group; their product represents the total.

##### Multiplication — × 2

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by2.data.ts)

Multiplication by two can be represented as doubling: 2 × 7 = 7 + 7.

##### Multiplication — × 3

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by3.data.ts)

Three equal groups of four give twelve; skip-counting by threes can help derive corresponding table facts.

##### Multiplication — × 4

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by4.data.ts)

Four groups of six make twenty-four, which can also be obtained by doubling six twice.

##### Multiplication — × 5

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by5.data.ts)

Groups of five lead to the sequence 5, 10, 15, 20, which corresponds to accumulated sets of five.

##### Multiplication — × 6

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by6.data.ts)

Six groups of four can be derived from five groups of four plus one more, without recalling the fact in isolation.

##### Multiplication — × 7

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by7.data.ts)

Seven groups of three can be computed as five groups of three plus another two: 15 + 6 = 21.

##### Multiplication — × 8

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by8.data.ts)

Eight groups of five make forty; the same result follows by doubling four groups of five.

##### Multiplication — × 9

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by9.data.ts)

Nine groups of six can be derived from ten groups of six with one group subtracted.

##### Multiplication — × 10

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by10.data.ts)

Multiplying six by ten forms six tens, so 6 × 10 = 60.

##### Multiplication — × 0 · × 1

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/by0And1.data.ts)

Zero groups contain zero items, while a single group preserves the original number of items.

##### Multiplication — Commutative property

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/commutative.data.ts)

Rotating a 3 × 5 array changes its orientation to 5 × 3 but does not change the total of fifteen cells.

##### Multiplication — Associative property

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/associative.data.ts)

Both 2 × (3 × 4) and (2 × 3) × 4 represent the same total even though the groups are formed differently.

##### Multiplication — Distributive property

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/distributive.data.ts)

For 6 × 14, split fourteen into ten and four, then add the partial products 6 × 10 and 6 × 4.

##### Multiplication — Deriving multiplication Number facts

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/deriveFacts.data.ts)

An unfamiliar result such as 7 × 8 can be obtained from a known fact, 7 × 7, by adding another seven.

##### Multiplication — Doubling twice

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/doubleTwice.data.ts)

Four equal groups can be computed through two successive doublings rather than memorizing a separate procedure.

##### Multiplication — Whole tens

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/roundTens.data.ts)

For 30 × 4, multiply three tens by four to get twelve tens, or 120.

##### Multiplication — Whole hundreds

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/roundHundreds.data.ts)

For 200 × 3, two hundreds multiplied by three produce six hundreds.

##### Multiplication — 2-digit×1-digit

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/twoDigitByOne.data.ts)

Decompose 23 × 4 into 20 × 4 plus 3 × 4 so that the tens and ones contributions remain clear.

##### Multiplication — 3-digit×1-digit

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/threeDigitByOne.data.ts)

The product 124 × 3 combines 100 × 3, 20 × 3 and 4 × 3, with a total not exceeding 1,000 for this competency.

##### Multiplication — Result checking

Code: [Code](../../src/data/skillsTaxonomy/arithmetic/multiply/skills/checkProduct.data.ts)

Before calculating 49 × 6, a value near 300 is expected. An inverse operation, reversed factors, or repeated addition can help verify the exact result.

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

### Algebra

Groups: 5 · Skills: 17

Code: [Code](../../src/data/skillsTaxonomy/algebra/algebra.data.ts)

The domain introduces the progression from concrete computations to expressions, equalities, unknown quantities, and patterns without requiring the formal algebra taught in later school years.

#### Expressions

Skills: 5

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/expressions.data.ts)

Expressions represent numerical operations, parentheses, and simple variables. Their values depend on the correct sequence of operations and, when present, the values assigned to variables.

##### Reading and writing numerical expressions

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/skills/readNumericExpressions.data.ts)

The notation 7 + 5 or 18 ÷ 3 expresses an operation on numbers, not merely a verbal command; its numerical value can be evaluated separately.

##### Evaluating expressions with parentheses

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/skills/parentheses.data.ts)

In 2 × (3 + 4), first compute the sum inside the parentheses and then multiply by 2. Removing parentheses can change the result.

##### Applying the order of operations

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/skills/orderOfOperations.data.ts)

In 6 + 2 × 5, multiplication takes precedence over addition, giving 16 rather than 40.

##### Evaluating simple expressions with a variable

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/skills/variableValue.data.ts)

When a = 4, the expression a + 7 has a value of 11. In this problem the letter stands for a specified number.

##### Identifying errors in the order of operations

Code: [Code](../../src/data/skillsTaxonomy/algebra/expressions/skills/identifyExpressionError.data.ts)

The incorrect claim 6 + 3 × 2 = 18 results from adding before multiplying; multiplication must be performed first.

#### Equalities

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/algebra/equalities/equalities.data.ts)

An equality expresses the sameness of the values on both sides. This group includes checking the truth of numerical relations and restoring a missing value.

##### Understanding the equals sign

Code: [Code](../../src/data/skillsTaxonomy/algebra/equalities/skills/equalityMeaning.data.ts)

The statement 4 + 3 = 5 + 2 is true even though the right-hand side is also an expression rather than a completed numerical answer.

##### Checking numerical equalities and inequalities

Code: [Code](../../src/data/skillsTaxonomy/algebra/equalities/skills/trueFalseEquality.data.ts)

Both sides of 8 + 3 = 12 − 1 evaluate to 11. A numerical inequality is assessed by comparing actual values.

##### Completing a true equality

Code: [Code](../../src/data/skillsTaxonomy/algebra/equalities/skills/completeEquality.data.ts)

In 7 + □ = 12, the blank must be filled with 5 for the two sides to have equal values.

#### Unknown values

Skills: 6

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/unknowns.data.ts)

Relationships between operands and results of the four basic arithmetic operations allow a missing component to be found and checked.

##### Finding an unknown addend

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/skills/unknownAddend.data.ts)

For □ + 6 = 14, subtract 6 from 14 and substitute the result back into the equation to verify it.

##### Finding an unknown minuend

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/skills/unknownMinuend.data.ts)

For □ − 4 = 9, reconstruct the original number by adding 9 and 4.

##### Finding an unknown subtrahend

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/skills/unknownSubtrahend.data.ts)

For 15 − □ = 7, eight units must be removed. This is distinct from finding an unknown minuend.

##### Finding an unknown factor

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/skills/unknownFactor.data.ts)

For □ × 5 = 20, the missing factor is 4 because 20 ÷ 5 = 4.

##### Finding an unknown dividend

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/skills/unknownDividend.data.ts)

For □ ÷ 3 = 7, the dividend represents seven equal groups of three, giving 21.

##### Finding an unknown divisor

Code: [Code](../../src/data/skillsTaxonomy/algebra/unknowns/skills/unknownDivisor.data.ts)

For 24 ÷ □ = 6, the missing divisor is 4; the result is verified by 6 × 4.

#### Patterns

Skills: 2

Code: [Code](../../src/data/skillsTaxonomy/algebra/patterns/patterns.data.ts)

This group examines repeating numerical changes under a rule, including identifying the structure of a sequence from several terms.

##### Continuing numerical patterns with a constant step

Code: [Code](../../src/data/skillsTaxonomy/algebra/patterns/skills/arithmeticPattern.data.ts)

The sequence 4, 7, 10, 13 repeatedly increases by three. Each new term follows the same increment.

##### Finding the rule of a growing pattern

Code: [Code](../../src/data/skillsTaxonomy/algebra/patterns/skills/growingPattern.data.ts)

The terms 2, 6, 10 suggest a step of +4, but the hypothesized rule must be checked against the other given terms.

#### Symbolic modeling

Skills: 1

Code: [Code](../../src/data/skillsTaxonomy/algebra/formalization/formalization.data.ts)

Relationships described in a short situation can be represented by an arithmetic or simple algebraic expression.

##### Representing a situation with an expression or equation

Code: [Code](../../src/data/skillsTaxonomy/algebra/formalization/skills/translateSituation.data.ts)

The situation 'three boxes with five pencils each' is represented by 3 × 5. The notation must match the relationship described in the problem.

### Geometry

Groups: 10 · Skills: 35

Code: [Code](../../src/data/skillsTaxonomy/geometry/geometry.data.ts)

This domain includes spatial relationships, properties of plane and solid figures, lines and angles, geometric transformations, and measurements of perimeter and area.

#### Spatial orientation

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/geometry/orientation/orientation.data.ts)

Relative-position language and sequential directions support route planning, describing movement, and locating positions on simple grids.

##### Describing relative positions

Code: [Code](../../src/data/skillsTaxonomy/geometry/orientation/skills/positionWords.data.ts)

'Left of the tree, in front of the house' depends on a reference position. A relative description is not the same as an absolute coordinate.

##### Reading and drawing simple grid maps

Code: [Code](../../src/data/skillsTaxonomy/geometry/orientation/skills/gridMapNavigation.data.ts)

A route on a grid consists of movements between cells or vertices. Its endpoint must be consistent with the stated directions.

##### Giving and following route directions

Code: [Code](../../src/data/skillsTaxonomy/geometry/orientation/skills/spatialOrientationPath.data.ts)

Instructions such as 'two steps forward, then turn right' must be carried out in sequence, because changing the order can alter the route.

#### Plane figures

Skills: 5

Code: [Code](../../src/data/skillsTaxonomy/geometry/figures/figures.data.ts)

This group identifies polygons and other two-dimensional figures by properties independent of their scale or orientation and explores composing figures from parts.

##### Identifying basic plane figures

Code: [Code](../../src/data/skillsTaxonomy/geometry/figures/skills/identify2dShapes.data.ts)

A square remains a square when rotated. Relationships among its sides and angles, rather than its familiar orientation in a drawing, determine the figure.

##### Classifying figures by sides and vertices

Code: [Code](../../src/data/skillsTaxonomy/geometry/figures/skills/shapeAttributes.data.ts)

Figures are classified using geometric features: a triangle has three sides, while a quadrilateral has four.

##### Recognizing polygons and their parts

Code: [Code](../../src/data/skillsTaxonomy/geometry/figures/skills/polygon.data.ts)

A polygon is bounded by straight segments, and the meeting point of two neighboring sides is a vertex.

##### Properties of triangles, rectangles and squares

Code: [Code](../../src/data/skillsTaxonomy/geometry/figures/skills/triangleRectangleSquare.data.ts)

Every square is also a rectangle because it has four right angles. A square additionally has four equal sides.

##### Composing and decomposing plane figures

Code: [Code](../../src/data/skillsTaxonomy/geometry/figures/skills/composeDecomposeShapes.data.ts)

Two triangles can be combined into another plane figure. Decomposing a shape changes its partition while the pieces collectively preserve its covered region.

#### Solid figures

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/geometry/solids/solids.data.ts)

Three-dimensional solids differ from flat drawings and may have faces, curved surfaces, edges, and vertices.

##### Identifying plane figures on solid surfaces

Code: [Code](../../src/data/skillsTaxonomy/geometry/solids/skills/shapeOnSolidSurface.data.ts)

A square face belongs to a three-dimensional cube. The entire cube should not be described as a square.

##### Identifying basic solid figures

Code: [Code](../../src/data/skillsTaxonomy/geometry/solids/skills/identify3dSolids.data.ts)

A sphere has no flat faces, whereas a cube is made of them. The outer silhouette in a drawing may be insufficient to identify a solid.

##### Faces, edges and vertices of cubes and cuboids

Code: [Code](../../src/data/skillsTaxonomy/geometry/solids/skills/spatialSolidsAttributes.data.ts)

A cube has six faces, twelve edges, and eight vertices. All must be counted, not only those visible in a particular drawing.

#### Lines

Skills: 5

Code: [Code](../../src/data/skillsTaxonomy/geometry/lines/lines.data.ts)

This group distinguishes points, straight and curved lines, rays, and segments, including their endpoints and relative positions.

##### Distinguishing points and line types

Code: [Code](../../src/data/skillsTaxonomy/geometry/lines/skills/linesAndPoints.data.ts)

A point indicates a position; a straight line extends in both directions; a curve may change direction; and a broken line consists of connected segments.

##### Constructing and labeling line segments

Code: [Code](../../src/data/skillsTaxonomy/geometry/lines/skills/segment.data.ts)

A segment has two endpoints and can be labeled with their letters, for example AB.

##### Distinguishing rays, segments and lines

Code: [Code](../../src/data/skillsTaxonomy/geometry/lines/skills/ray.data.ts)

A ray has a starting point and extends without a second endpoint. A segment is bounded at both ends and a line at neither.

##### Identifying closed and open lines

Code: [Code](../../src/data/skillsTaxonomy/geometry/lines/skills/closedOpenLines.data.ts)

A continuous contour can form a closed line, whereas a line with separate start and end points is open.

##### Recognizing parallel and perpendicular lines

Code: [Code](../../src/data/skillsTaxonomy/geometry/lines/skills/parallelPerpendicular.data.ts)

Railway tracks illustrate parallel lines; adjacent edges meeting at a notebook corner illustrate perpendicular lines.

#### Angles

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/geometry/angles/angles.data.ts)

An angle measures the turning between rays. Right angles provide a reference for classifying smaller and larger turns.

##### Comparing angles as turns

Code: [Code](../../src/data/skillsTaxonomy/geometry/angles/skills/angleAsTurn.data.ts)

A quarter turn is a right angle and a smaller turn forms an acute angle. The drawn length of the rays does not determine the angle size.

##### Identifying and checking right angles

Code: [Code](../../src/data/skillsTaxonomy/geometry/angles/skills/rightAngle.data.ts)

The corner of a sheet or set square provides a 90-degree reference; aligning the sides checks a right angle regardless of rotation.

##### Distinguishing acute, right and obtuse angles

Code: [Code](../../src/data/skillsTaxonomy/geometry/angles/skills/angleTypes.data.ts)

An acute angle is smaller than a right angle, while an obtuse angle is larger but smaller than a straight angle.

#### Circles and disks

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/geometry/circles/circles.data.ts)

This group distinguishes the circular boundary from its interior and describes the center, radius, diameter, and compass construction.

##### Distinguishing the circumference and the disk

Code: [Code](../../src/data/skillsTaxonomy/geometry/circles/skills/circleDisk.data.ts)

The circumference is only the closed boundary curve, while the disk includes the entire area enclosed by that curve.

##### Relating the center, radius and diameter

Code: [Code](../../src/data/skillsTaxonomy/geometry/circles/skills/radiusDiameter.data.ts)

A diameter passes through the center and is twice the length of the radius. Every radius of the same circle has equal length.

##### Drawing circles of a given radius with a compass

Code: [Code](../../src/data/skillsTaxonomy/geometry/circles/skills/drawCircle.data.ts)

The compass opening fixes the distance between the center and every point on the circumference. Changing the opening changes the radius.

#### Geometric transformations

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/geometry/transformations/transformations.data.ts)

Figures can change position through rotation, translation, or reflection while retaining their dimensions. Reflection introduces symmetry about an axis.

##### Quarter, half and three-quarter turns

Code: [Code](../../src/data/skillsTaxonomy/geometry/transformations/skills/turnsQuarters.data.ts)

Quarter, half, and three-quarter turns correspond to 90, 180, and 270 degrees. Clockwise and counterclockwise rotations may result in different orientations.

##### Translating and reflecting figures

Code: [Code](../../src/data/skillsTaxonomy/geometry/transformations/skills/translationsReflections.data.ts)

A translation moves every point by the same displacement; reflection reverses orientation across an axis. Neither transformation alters dimensions.

##### Finding symmetry axes and completing reflections

Code: [Code](../../src/data/skillsTaxonomy/geometry/transformations/skills/reflectionSymmetry.data.ts)

Corresponding points in reflected halves are equally distant from the line of symmetry, on opposite sides of it.

#### Perimeter

Skills: 4

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeter/perimeter.data.ts)

Perimeter is the length of a polygon's closed boundary, computed from its sides, including rectangles and squares.

##### Measuring a polygon perimeter by adding its sides

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeter/skills/measurePerimeter.data.ts)

A figure with sides measuring 3, 4, and 5 cm has a total boundary length of 12 cm. This does not measure its interior surface.

##### Calculating the perimeter of a rectangle

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeter/skills/rectanglePerimeter.data.ts)

For side lengths a and b, the rectangular boundary measures a + b + a + b, not the product a × b.

##### Calculating the perimeter of a square

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeter/skills/squarePerimeter.data.ts)

A square's four equal sides give a perimeter of four times the side length.

##### Finding an unknown rectangle side from its perimeter

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeter/skills/unknownSideFromPerimeter.data.ts)

If a rectangle's perimeter is 20 cm and one side is 6 cm, the other side must be 4 cm.

#### Area

Skills: 4

Code: [Code](../../src/data/skillsTaxonomy/geometry/area/area.data.ts)

Area measures the surface covered by a figure, through unit squares, rectangular arrays, and decomposition of composite shapes.

##### Finding the area of a composite rectilinear figure

Code: [Code](../../src/data/skillsTaxonomy/geometry/area/skills/compositeArea.data.ts)

An L-shaped figure can be divided into two non-overlapping rectangles whose areas add to the total.

##### Understanding area as coverage by unit squares

Code: [Code](../../src/data/skillsTaxonomy/geometry/area/skills/areaAsCovering.data.ts)

Equal-sized unit squares must cover the region without gaps or overlaps; the number of squares determines area.

##### Determining area by counting unit squares

Code: [Code](../../src/data/skillsTaxonomy/geometry/area/skills/countUnitSquares.data.ts)

If a shape covers twelve complete unit cells, its area is twelve square units regardless of how those cells are arranged.

##### Relating rectangle area to side-length multiplication

Code: [Code](../../src/data/skillsTaxonomy/geometry/area/skills/rectangleAreaModel.data.ts)

A four-by-three rectangular array contains twelve unit squares. Multiplication is a compact way to count the cells.

#### Relationship between perimeter and area

Skills: 2

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeterArea/perimeterArea.data.ts)

The length of a figure's boundary and the size of its interior are independent measurements. Equal values of one do not determine values of the other.

##### Constructing shapes with contrasting perimeters and areas

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeterArea/skills/areaPerimeterContrast.data.ts)

Two rectangles can have the same perimeter but cover different numbers of unit squares. Neither measure automatically fixes the other.

##### Choosing perimeter or area for a measurement

Code: [Code](../../src/data/skillsTaxonomy/geometry/perimeterArea/skills/perimeterVsArea.data.ts)

Fencing needs the boundary's length, while floor covering needs the interior's area. They use different units and calculation methods.

### Measurement

Groups: 5 · Skills: 21

Code: [Code](../../src/data/skillsTaxonomy/measurement/measurement.data.ts)

Physical quantities are measured by comparison with a unit, using tools and scales. The domain includes length, mass, capacity, temperature, and consistent measurement units.

#### Length

Skills: 10

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/length.data.ts)

Lengths can be compared directly or with instruments. This group connects metric units at different scales and arithmetic involving compatible lengths.

##### Comparing lengths directly and indirectly

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/compareLength.data.ts)

Aligning the starting points of two segments reveals which is shorter. Indirect comparisons can also use a common strip as an intermediate reference.

##### Measuring length with repeated nonstandard units

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/nonstandardLength.data.ts)

Identical units must be placed end to end without gaps or overlap. Units of different lengths produce different numerical measurements of the same segment.

##### Starting ruler measurements at zero

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/rulerZero.data.ts)

A ruler measures intervals between marks, not how many printed numerals are visible. Measurements should start at the zero mark.

##### Measuring and drawing segments in centimeters

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/measureCentimeters.data.ts)

A five-centimeter segment spans five one-centimeter intervals between its endpoints, not five marks including the starting mark.

##### Measuring in millimeters and relating them to centimeters

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/millimeters.data.ts)

Ten millimeters equal one centimeter. Millimeter marks permit finer measurements when whole centimeters are insufficient.

##### Converting between decimeters and centimeters

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/decimeters.data.ts)

One decimeter equals ten centimeters, so 3 dm equals 30 cm.

##### Relating meters, decimeters and centimeters

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/meters.data.ts)

One meter consists of ten decimeters or one hundred centimeters. A unit conversion preserves the measured quantity.

##### Using kilometers for long distances and converting to meters

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/kilometers.data.ts)

Distances between towns are appropriately expressed in kilometers: 2 km equals 2,000 m.

##### Estimating length and checking by measurement

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/estimateLength.data.ts)

A visual length estimate made before measuring can be compared with an instrument reading to evaluate the error.

##### Adding and subtracting lengths in compatible units

Code: [Code](../../src/data/skillsTaxonomy/measurement/length/skills/addSubtractLengths.data.ts)

Before computing 30 cm + 2 dm, convert to a common unit: 30 cm + 20 cm.

#### Mass

Skills: 4

Code: [Code](../../src/data/skillsTaxonomy/measurement/mass/mass.data.ts)

Masses can be compared by balance and measured numerically using scales and compatible units.

##### Using centners and kilograms in problems

Code: [Code](../../src/data/skillsTaxonomy/measurement/mass/skills/centnerKilogram.data.ts)

One metric centner equals 100 kilograms. This regionally used unit must not be confused with a metric tonne.

##### Comparing masses using a balance

Code: [Code](../../src/data/skillsTaxonomy/measurement/mass/skills/compareMass.data.ts)

The heavier pan of a balance tilts downward; equilibrium indicates equal masses for the two collections being compared.

##### Relating kilograms and grams

Code: [Code](../../src/data/skillsTaxonomy/measurement/mass/skills/kilogramGram.data.ts)

One kilogram equals 1,000 grams. Grams are convenient for light objects, while kilograms suit larger masses.

##### Reading a scale and recording mass with units

Code: [Code](../../src/data/skillsTaxonomy/measurement/mass/skills/weighObject.data.ts)

The displayed number 750 is meaningful only alongside a unit such as grams. A recorded measurement without its unit is incomplete.

#### Capacity

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/measurement/capacity/capacity.data.ts)

Capacity concerns the amount of liquid a container can hold, with comparisons and measurements in liters and milliliters.

##### Comparing container capacities by pouring or measuring

Code: [Code](../../src/data/skillsTaxonomy/measurement/capacity/skills/capacityConcept.data.ts)

Transferring liquid between containers can reveal their respective capacities independently of the containers' heights or shapes.

##### Measuring and estimating capacity in liters

Code: [Code](../../src/data/skillsTaxonomy/measurement/capacity/skills/liter.data.ts)

The liter is a standard capacity unit. A tall narrow vessel is not necessarily larger in capacity than a shorter wide one.

##### Relating milliliters and liters

Code: [Code](../../src/data/skillsTaxonomy/measurement/capacity/skills/milliliter.data.ts)

One liter equals 1,000 milliliters, so 500 mL equals half a liter.

#### Temperature

Skills: 1

Code: [Code](../../src/data/skillsTaxonomy/measurement/temperature/temperature.data.ts)

Nonnegative readings are interpreted from a thermometer's scale and recorded with their temperature units.

##### Reading nonnegative temperatures on a thermometer

Code: [Code](../../src/data/skillsTaxonomy/measurement/temperature/skills/readTemperature.data.ts)

Intermediate divisions between 0 and 10 on a uniform thermometer scale have defined numerical values. A temperature reading without units is incomplete.

#### General measurement skills

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/measurement/general/general.data.ts)

General principles include choosing an appropriate unit, making measurements comparable, and calculating with physical quantities expressed consistently.

##### Explaining why common measurement units are needed

Code: [Code](../../src/data/skillsTaxonomy/measurement/general/skills/standardUnitPurpose.data.ts)

The numeral 10 on a centimeter scale and a millimeter scale does not represent the same length. Units are essential to the measurement.

##### Choosing suitable units for length, mass or capacity

Code: [Code](../../src/data/skillsTaxonomy/measurement/general/skills/chooseAppropriateUnit.data.ts)

A distance between cities is conveniently measured in kilometers, an apple's mass in grams, and a bottle's capacity in liters.

##### Solving measurement word problems with compatible units

Code: [Code](../../src/data/skillsTaxonomy/measurement/general/skills/wordProblemsMeasures.data.ts)

Working with 2 m and 30 cm requires a compatible unit or an explicit conversion. The computed answer must retain its physical meaning.

### Time

Groups: 3 · Skills: 13

Code: [Code](../../src/data/skillsTaxonomy/time/time.data.ts)

This domain connects recurring calendar cycles, representations of clock time, and calculations of elapsed time. Calendar dates, instants shown on clocks, and durations are distinct concepts.

#### Calendar

Skills: 4

Code: [Code](../../src/data/skillsTaxonomy/time/calendar/calendar.data.ts)

Calendar literacy involves navigating days, weeks, months, and years while accounting for unequal month lengths and leap years.

##### Sequencing parts of the day

Code: [Code](../../src/data/skillsTaxonomy/time/calendar/skills/daySequence.data.ts)

Morning, afternoon, evening, and night form a repeating cycle. A particular everyday activity is not restricted to just one part of that cycle.

##### Distinguishing common and leap years

Code: [Code](../../src/data/skillsTaxonomy/time/calendar/skills/leapYearDays.data.ts)

A common year has 365 days and a leap year has 366. The additional day occurs in February.

##### Navigating days, weeks, and months in a calendar

Code: [Code](../../src/data/skillsTaxonomy/time/calendar/skills/weekMonthYear.data.ts)

The seven-day week and ordered months recur, but months differ in length. Locating a named date requires following these conventions.

##### Counting days between dates

Code: [Code](../../src/data/skillsTaxonomy/time/calendar/skills/calendarInterval.data.ts)

Between the 10th and the 13th of the same month, three days elapse. The elapsed number of days is not necessarily the number of dates counted inclusively.

#### Reading clocks

Skills: 5

Code: [Code](../../src/data/skillsTaxonomy/time/clock/clock.data.ts)

Clock hands and digital numerals identify a particular time of day. Reading to the hour, five minutes, or one minute requires progressively finer precision.

##### Reading 24-hour time

Code: [Code](../../src/data/skillsTaxonomy/time/clock/skills/read24HourClock.data.ts)

14:30 means 2:30 in the afternoon. The 24-hour representation avoids ambiguity between morning and evening.

##### Reading time to the hour

Code: [Code](../../src/data/skillsTaxonomy/time/clock/skills/readHour.data.ts)

The position of the hour hand and the digital display 8:00 convey the same instant; the minute hand points to 12.

##### Reading half-hours and quarter-hours

Code: [Code](../../src/data/skillsTaxonomy/time/clock/skills/readHalfQuarter.data.ts)

At half past an hour, the minute hand points to 6; at a quarter past, it points to 3. The hour hand moves gradually between hour marks.

##### Reading time to five minutes

Code: [Code](../../src/data/skillsTaxonomy/time/clock/skills/readFiveMinute.data.ts)

The numeral 1 on an analog dial represents five minutes and 2 represents ten minutes; the marked intervals are evenly spaced.

##### Reading and recording time to the minute

Code: [Code](../../src/data/skillsTaxonomy/time/clock/skills/readMinute.data.ts)

09:17 indicates seventeen minutes after nine. Each individual minute tick represents a distinct minute increment.

#### Duration

Skills: 4

Code: [Code](../../src/data/skillsTaxonomy/time/duration/duration.data.ts)

The learner connects seconds, minutes, and hours and derives an elapsed interval, start time, or end time from the information available.

##### Converting hours and minutes

Code: [Code](../../src/data/skillsTaxonomy/time/duration/skills/convertHoursMinutes.data.ts)

One and a half hours equals 90 minutes. The units are related by a factor of 60.

##### Converting minutes and seconds

Code: [Code](../../src/data/skillsTaxonomy/time/duration/skills/convertMinutesSeconds.data.ts)

Two minutes equal 120 seconds. A duration measured in seconds is different from the instantaneous reading of a clock's seconds hand.

##### Calculating elapsed time

Code: [Code](../../src/data/skillsTaxonomy/time/duration/skills/eventDuration.data.ts)

From 10:15 to 11:00, 45 minutes pass. Duration is the difference between two instants, not a clock reading itself.

##### Finding a start or end time from a duration

Code: [Code](../../src/data/skillsTaxonomy/time/duration/skills/findStartOrEnd.data.ts)

An event lasting 35 minutes and starting at 14:10 ends at 14:45. The start can likewise be determined from a known end and duration.

### Money

Groups: 2 · Skills: 6

Code: [Code](../../src/data/skillsTaxonomy/money/money.data.ts)

This domain applies arithmetic to denominations, composing and comparing monetary amounts, calculating total costs and change, and choosing purchases under budget constraints.

#### Money amounts

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/money/denominations/denominations.data.ts)

Amounts represented by coins and banknotes of a particular currency can be composed in different equivalent ways. The value of a collection is distinct from the number of physical pieces.

##### Recognizing coin and banknote denominations

Code: [Code](../../src/data/skillsTaxonomy/money/denominations/skills/recognizeDenominations.data.ts)

A denomination indicates a coin's or banknote's monetary value rather than its size or color. Recognition depends on the currency chosen for the exercise.

##### Composing a money amount

Code: [Code](../../src/data/skillsTaxonomy/money/denominations/skills/composeAmount.data.ts)

An amount of 12 currency units may be formed as 10 + 2 or 5 + 5 + 2, provided those denominations exist in the selected currency.

##### Comparing money amounts

Code: [Code](../../src/data/skillsTaxonomy/money/denominations/skills/compareAmounts.data.ts)

Compare the total values rather than the numbers of coins: two high-denomination coins may be worth more than five low-denomination ones.

#### Purchases

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/money/transactions/transactions.data.ts)

Transaction problems connect an item's unit price, the quantity bought, the change due, and whether a collection of items fits within a fixed spending limit.

##### Calculating change

Code: [Code](../../src/data/skillsTaxonomy/money/transactions/skills/calculateChange.data.ts)

If an item costs 37 and the customer pays 50, the change is 13 units of the same currency.

##### Calculating total cost from unit price and quantity

Code: [Code](../../src/data/skillsTaxonomy/money/transactions/skills/unitPriceTotal.data.ts)

At 8 currency units per item, three identical items cost 24 in total. The calculation distinguishes the price of one item from the overall amount paid.

##### Choosing purchases within a budget

Code: [Code](../../src/data/skillsTaxonomy/money/transactions/skills/budgetConstraint.data.ts)

With a budget of 40, a basket costing 43 cannot be purchased, even if every individual item costs less than 40.

### Data

Groups: 3 · Skills: 15

Code: [Code](../../src/data/skillsTaxonomy/data/data.data.ts)

This domain covers posing questions, collecting and classifying information, representing it in tables and charts, and drawing conclusions supported by the available evidence.

#### Data collection

Skills: 5

Code: [Code](../../src/data/skillsTaxonomy/data/collection/collection.data.ts)

Collecting data requires a focused investigation question, suitable attributes or categories, consistent observation and counting, and an accurate record of results.

##### Classifying objects by attributes

Code: [Code](../../src/data/skillsTaxonomy/data/collection/skills/classifyByAttribute.data.ts)

The same objects can be grouped by color or by shape. Using two attributes together creates categories corresponding to their combinations.

##### Formulating a data investigation question

Code: [Code](../../src/data/skillsTaxonomy/data/collection/skills/formulateInvestigationQuestion.data.ts)

A question such as 'Which fruit is most popular in the group?' calls for gathering people's responses rather than immediately performing an arithmetic operation.

##### Counting category frequencies

Code: [Code](../../src/data/skillsTaxonomy/data/collection/skills/collectCounts.data.ts)

Count the occurrences in each category separately. The category frequencies must sum to the total number of observations when the categories partition the dataset.

##### Recording and reading tally marks

Code: [Code](../../src/data/skillsTaxonomy/data/collection/skills/tallyMarks.data.ts)

Five tally marks can represent five responses. The marks must allow the exact count in each category to be reconstructed.

##### Recording observations in a table

Code: [Code](../../src/data/skillsTaxonomy/data/collection/skills/fillSimpleTable.data.ts)

Rows and columns need consistent labels so that observed or measured values retain their units and meaning.

#### Data representation

Skills: 7

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/presentation.data.ts)

Recorded quantities are displayed in tables, pictographs, line plots, and bar charts. Interpreting the scale of symbols and the chart's labels is essential.

##### Plotting measurements on a number line

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/linePlotMeasurements.data.ts)

Repeated observations are marked above their corresponding values on a number axis. The number of marks at a position represents its frequency.

##### Reading a simple data table

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/readSimpleTable.data.ts)

To answer how many students chose option B, read the cell with the appropriate row and column labels, rather than a neighboring value.

##### Reading a one-to-one pictograph

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/readPictograph.data.ts)

Each picture represents exactly one object, so the number of icons in a category equals its frequency.

##### Constructing a pictograph

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/buildPictograph.data.ts)

For category counts of 3, 2, and 4, draw 3, 2, and 4 symbols respectively, with the categories labeled correctly.

##### Reading a bar chart

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/readBarChart.data.ts)

Compare bar heights against a common baseline and consistent scale. Height represents the quantity recorded for each category.

##### Constructing a bar chart

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/buildBarChart.data.ts)

Translate values from a table into bar heights using one consistent numerical scale and clearly labeled categories.

##### Reading a scaled chart

Code: [Code](../../src/data/skillsTaxonomy/data/presentation/skills/scaledChart.data.ts)

If each chart symbol represents two units, three symbols represent six. The legend's scale must be applied rather than ignored.

#### Data interpretation

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/data/interpretation/interpretation.data.ts)

Interpretation connects the numerical information in a dataset to valid comparisons, calculations, and claims, while recognizing when evidence is insufficient.

##### Comparing category totals and differences

Code: [Code](../../src/data/skillsTaxonomy/data/interpretation/skills/compareCategories.data.ts)

For category counts of 7 and 4, the difference is 3 and their combined total is 11. Both calculations must retain the context of the data.

##### Drawing conclusions from data

Code: [Code](../../src/data/skillsTaxonomy/data/interpretation/skills/interpretConclusion.data.ts)

The claim that blue was chosen most often is justified only when blue actually has the greatest recorded frequency.

##### Identifying missing information

Code: [Code](../../src/data/skillsTaxonomy/data/interpretation/skills/missingInformation.data.ts)

A table with no measurement unit or without the necessary category may not contain enough information to answer the question posed.

### Probability

Groups: 2 · Skills: 4

Code: [Code](../../src/data/skillsTaxonomy/probability/probability.data.ts)

The domain develops a qualitative understanding of chance: certain, impossible, and possible outcomes; comparisons of likelihood; and variation between repeated trials.

#### Random events

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/probability/events/events.data.ts)

This group identifies possible outcomes of a chance experiment and compares events qualitatively without incorrectly assuming that all possible events are equally likely.

##### Distinguishing certain and impossible events

Code: [Code](../../src/data/skillsTaxonomy/probability/events/skills/certainImpossible.data.ts)

An ordinary six-sided die cannot roll a 9 but must show a number from 1 to 6. An event being possible does not mean it has a 50% probability.

##### Comparing the likelihood of everyday events

Code: [Code](../../src/data/skillsTaxonomy/probability/events/skills/likelihoodLanguage.data.ts)

For a fair die, rolling an even number and rolling exactly six have different chances. Both events are possible, but they are not equally likely.

##### Listing possible outcomes of a simple random experiment

Code: [Code](../../src/data/skillsTaxonomy/probability/events/skills/listOutcomes.data.ts)

A coin toss has two possible face-up outcomes. An exhaustive outcome list must account for every case allowed by the stated experimental conditions.

#### Random experiments

Skills: 1

Code: [Code](../../src/data/skillsTaxonomy/probability/experiments/experiments.data.ts)

Empirical frequencies may differ between repeated sets of random trials, even when the underlying experimental conditions remain the same.

##### Comparing results of repeated random experiments

Code: [Code](../../src/data/skillsTaxonomy/probability/experiments/skills/experimentVariation.data.ts)

Two sets of ten coin tosses can produce different numbers of heads. Such random variation does not, by itself, imply that the experiment's rules have changed.

### Problem solving

Groups: 7 · Skills: 23

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/problemSolving.data.ts)

This domain translates real-world situations into mathematical models, selects appropriate operations, plans multi-step calculations, and checks whether results make sense in context.

#### Analyzing problem statements

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/conditions/conditions.data.ts)

Analysis separates the question, known quantities, and implicit assumptions of a word problem before choosing an arithmetic operation.

##### Identifying known and unknown quantities

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/conditions/skills/identifyKnownUnknown.data.ts)

If a story says there were twelve apples and five were sold, identify the starting quantity, the change, and the quantity being sought.

##### Recognizing irrelevant information

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/conditions/skills/findExtraneousData.data.ts)

In a pencil-purchase problem, the backpack's color may not affect the cost. Not every number or detail contributes to the calculation.

##### Identifying missing information

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/conditions/skills/findMissingData.data.ts)

Knowing only the price of one item is insufficient to determine the total cost of several items unless their quantity is also known.

#### Problem models

Skills: 4

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/models/models.data.ts)

A concrete situation, a picture, a diagram, and a numerical expression can represent the same operation if their quantities and relationships agree.

##### Choosing addition or subtraction

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/models/skills/chooseOperationAddSub.data.ts)

Combining two known sets calls for addition; removing objects from a set calls for subtraction. The meaning of the change determines the operation.

##### Choosing multiplication or division

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/models/skills/chooseOperationMulDiv.data.ts)

Equal groups of four can be counted by multiplication. A known total can be divided into equal groups when the question asks for the size or number of groups.

##### Modeling a one-step problem

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/models/skills/oneStepModel.data.ts)

A drawing of three baskets with five apples each must match the diagram 'three groups of five' rather than an unrelated expression.

##### Creating a word problem from a model

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/models/skills/createProblem.data.ts)

The expression 4 × 3 could describe four identical packets containing three items each. The problem's facts and question must correspond to the model.

#### Solution planning

Skills: 5

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/planning/planning.data.ts)

Planning orders intermediate calculations and checks units, the final answer, and alternative solution routes when several steps are required.

##### Planning a two-step solution

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/planning/skills/twoStepPlan.data.ts)

First find the intermediate unknown needed for the next calculation. The dependency between the two quantities explains the order of steps.

##### Solving a three-step problem

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/planning/skills/threeStepPlan.data.ts)

Each intermediate result in a three-step problem must support a later step and remain consistent with the initial conditions.

##### Constructing and solving inverse problems

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/planning/skills/inverseProblem.data.ts)

If a total and one addend are known, an inverse problem may ask for the other addend, exchanging the roles of known and unknown quantities.

##### Checking answer units and reasonableness

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/planning/skills/explainAnswerUnits.data.ts)

An answer of '12' without 'cm' does not completely answer a question about length. The result must also be plausible for the given situation.

##### Comparing solution strategies

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/planning/skills/multipleSolutionStrategies.data.ts)

Grouping addends and performing sequential operations can sometimes reach the same result. Strategies are compared for correctness and convenience.

#### Comparison problems

Skills: 4

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/comparisons/comparisons.data.ts)

Additive comparison asks 'how many more?', while multiplicative comparison asks 'how many times as many?'. Both are distinct from changing a quantity by a stated amount.

##### Solving additive comparison problems

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/comparisons/skills/additiveComparison.data.ts)

For sets containing 9 and 6 objects, 'how many more?' asks for the difference 3, not the quotient 9 ÷ 6.

##### Increasing or decreasing by a given amount

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/comparisons/skills/increaseDecreaseNumber.data.ts)

Increasing 15 by 4 produces 19. 'By four' represents an additional quantity rather than a factor.

##### Solving multiplicative comparison problems

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/comparisons/skills/multiplicativeComparison.data.ts)

If one set contains twelve objects and another contains four, the first has three times as many. The answer is a ratio, not a difference.

##### Increasing or decreasing by a given factor

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/comparisons/skills/increaseDecreaseFactor.data.ts)

Tripling 6 gives 18; 'three times as many' indicates multiplication, unlike 'three more'.

#### Part-whole problems

Skills: 2

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/parts/parts.data.ts)

Stories involving a whole and its constituent quantities include both additive relationships and unit-fraction parts.

##### Solving part-whole and inverse problems

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/parts/skills/partWholeAddsub.data.ts)

If a whole consists of parts 7 and 5, it is recovered by addition. Knowing the whole and one part allows the other to be calculated.

##### Finding a unit fraction of a quantity

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/parts/skills/fractionsContext.data.ts)

A quarter of twenty berries is five; the story requires partitioning the initial quantity equally.

#### Grouping problems

Skills: 2

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/groups/groups.data.ts)

Problems about equal groups and independent selections from two sets distinguish repeated groups from the systematic counting of combinations.

##### Counting combinations from two sets

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/groups/skills/correspondenceCombinations.data.ts)

Three shirts and two pairs of trousers yield six different outfit pairs, each made from one item of each set.

##### Solving equal-group problems

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/groups/skills/equalGroups.data.ts)

Five packets of four candies contain twenty in total. Any two of the three quantities—group count, group size, and total—determine the third.

#### Quantity problems

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/quantities/quantities.data.ts)

Applied problems involve relationships between work rate, time and output; price, quantity and cost; and measured quantities such as mass, length, and capacity.

##### Relating work rate, time and output

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/quantities/skills/workRateTime.data.ts)

At a rate of three parts per hour, four hours produce twelve parts. Time and productivity units must be compatible.

##### Relating price, quantity and cost

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/quantities/skills/priceQuantityCost.data.ts)

A unit price of seven and a purchase quantity of three produce a total cost of twenty-one. A different price-quantity combination can produce the same total.

##### Modeling measurement problems

Code: [Code](../../src/data/skillsTaxonomy/problemSolving/quantities/skills/measurementContext.data.ts)

A story about distance, liquid, or mass must identify the relevant measurable quantity and its unit; a numerical computation without that relationship is incomplete.

### Reasoning

Groups: 4 · Skills: 11

Code: [Code](../../src/data/skillsTaxonomy/reasoning/reasoning.data.ts)

This domain concerns justifying mathematical claims, finding counterexamples, drawing logical conclusions, checking solutions, and moving between equivalent mathematical representations.

#### Mathematical argumentation

Skills: 5

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/argumentation.data.ts)

Arguments connect mathematical conditions to conclusions, test generalizations, and make the reasoning behind a chosen method explicit.

##### Classifying objects or numbers by a rule and justifying the choice

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/skills/classifyAndJustify.data.ts)

A group may include only multiples of 3. Membership must be justified by the stated rule rather than the visual resemblance of written numbers.

##### Finding a counterexample to a false generalization

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/skills/findCounterexample.data.ts)

The claim 'Every even number ends in 2' is disproved by 4. One valid counterexample is sufficient to refute a universal claim.

##### Explaining a chosen calculation strategy

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/skills/explainStrategy.data.ts)

The transformation 19 + 6 = 20 + 5 can be explained by compensation: one unit moves between the addends while the sum stays unchanged.

##### Distinguishing a single example from a general rule

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/skills/distinguishExampleRule.data.ts)

The individual fact 2 × 3 = 6 cannot establish a statement about all numbers. A general argument or wider verification is necessary.

##### Drawing a conclusion from given conditions and reasoning

Code: [Code](../../src/data/skillsTaxonomy/reasoning/argumentation/skills/drawConclusion.data.ts)

If the problem states that every figure in a set has three sides, a conclusion about a particular figure must follow from that condition.

#### Checking solutions

Skills: 3

Code: [Code](../../src/data/skillsTaxonomy/reasoning/verification/verification.data.ts)

The learner critically compares a result with the conditions of the problem, locates mistakes, and uses alternative checks when available.

##### Assessing whether an answer is reasonable in context and magnitude

Code: [Code](../../src/data/skillsTaxonomy/reasoning/verification/skills/checkReasonableness.data.ts)

For 98 + 105, an answer around 200 is reasonable in magnitude, whereas 2,000 is not, even without calculating the exact sum.

##### Finding and explaining an incorrect step in a calculation

Code: [Code](../../src/data/skillsTaxonomy/reasoning/verification/skills/spotCalculationError.data.ts)

An error may arise from carrying the wrong place value or choosing the wrong operation. The incorrect step must be identified rather than merely labeling the final answer wrong.

##### Verifying a calculation using another method

Code: [Code](../../src/data/skillsTaxonomy/reasoning/verification/skills/verifyWithSecondMethod.data.ts)

Division can be checked by multiplication, and addition by subtraction. An independent method is useful for detecting errors.

#### Logical reasoning

Skills: 2

Code: [Code](../../src/data/skillsTaxonomy/reasoning/logic/logic.data.ts)

This group applies identified rules and the elimination of contradictions to simple numerical and geometric problems.

##### Completing a numerical or geometric pattern using its rule

Code: [Code](../../src/data/skillsTaxonomy/reasoning/logic/skills/completePattern.data.ts)

In the sequence circle, square, circle, square, the next shape should be a circle if the alternating rule has not changed.

##### Eliminating impossible options in a logical problem

Code: [Code](../../src/data/skillsTaxonomy/reasoning/logic/skills/logicalElimination.data.ts)

If a problem presents three doors and its conditions eliminate two, the third is the only remaining possibility without guesswork.

#### Mathematical representations

Skills: 1

Code: [Code](../../src/data/skillsTaxonomy/reasoning/representations/representations.data.ts)

A mathematical relationship can be represented by physical objects, a diagram, a verbal rule, or a symbolic expression without changing its meaning.

##### Converting between concrete, diagrammatic, verbal and symbolic representations

Code: [Code](../../src/data/skillsTaxonomy/reasoning/representations/skills/multipleRepresentations.data.ts)

A diagram showing three equal groups of four and the expression 3 × 4 represent the same relationship; changing the representation does not change the value.

