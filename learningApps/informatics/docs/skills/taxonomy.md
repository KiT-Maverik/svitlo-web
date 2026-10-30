# Informatics — Skills Taxonomy

Date: 2026-10-29

Subject scope: computational thinking, algorithms and programming, digital systems and networks, information and data, software architecture, design patterns, AI, robotics, digital safety, digital UX, and digital creativity. The scope follows `studio/Subject Proposition.md`, including agreed expansions, with reference to Ukrainian and international subject standards. This audience-independent taxonomy contains no grades, ages, lessons, individual assessments, tasks, scores, or personal learning outcomes. Skills belong to this textbook: related competencies may also exist independently in other textbooks, without requiring shared identifiers or cross-textbook analytics.

## SUMMARY

Domains: 15
Groups: 65
Skills: 311

Code files: 0/15 Domains · 0/65 Groups · 0/311 Skills

## DOMAINS

### Computational Thinking

Slug: computationalThinking
Action: create
Status: pending

Groups: 2 · Skills: 12

[Not implemented](#)

Methodological description: Turning open-ended problems into formalized tasks by identifying relevant information, defining rules, and constructing solutions that can be repeated and checked. Unlike programming, this does not necessarily require expressing the solution as executable code.
User-friendly description: Explore how to break complex problems into clear steps, patterns and rules.

#### Decomposition and Abstraction

Slug: decompositionAndAbstraction
Action: create
Status: pending

Skills: 4

[Not implemented](#)

Methodological description: Defining a problem's boundaries by breaking it into subproblems, identifying meaningful characteristics, and constructing a simplified model. These operations precede selecting a specific algorithm or class structure.
User-friendly description: Learn to simplify problems by identifying their essential parts and relationships.

##### Decompose a Problem

Slug: decomposeAProblem
Action: create
Status: pending

[Not implemented](#)

Methodological description: Identify independent subproblems with distinct outcomes that collectively solve the original problem. For example, finding a route involves identifying the start, destination, and allowed transitions.
User-friendly description: Break a large problem into smaller tasks that can be solved separately.

##### Identify Essential Object Properties

Slug: identifyEssentialObjectProperties
Action: create
Status: pending

[Not implemented](#)

Methodological description: Choose only characteristics relevant to the given task: sorting books by author depends on the author's name, not the cover color. Properties omitted from one model may matter in another.
User-friendly description: Choose the details that matter for a task and set irrelevant details aside.

##### Build an Abstract System Model

Slug: buildAnAbstractSystemModel
Action: create
Status: pending

[Not implemented](#)

Methodological description: Represent a complex situation with a simplified account of the elements, states, and relationships needed to investigate a question. For example, connections between rooms can be modeled as a graph without recreating each room's interior.
User-friendly description: Create a simplified representation of a complex situation or system.

##### Generalize a Repeated Method

Slug: generalizeARepeatedMethod
Action: create
Status: pending

[Not implemented](#)

Methodological description: Extract an invariant sequence of actions from several specific solutions and formulate a rule applicable to new cases. This requires separating the method from incidental numbers or objects in the examples.
User-friendly description: Find a reusable method shared by several specific problems.

#### Logic and Patterns

Slug: logicAndPatterns
Action: create
Status: pending

Skills: 8

[Not implemented](#)

Methodological description: Reasoning from explicit rules includes finding patterns, evaluating simple statements, applying independent logical operations, combining conditions, and detecting contradictions. The focus is on truth and consequences, not necessarily executable code.
User-friendly description: Discover how rules, patterns and logical conditions support problem solving.

##### Recognize a Pattern

Slug: recognizeAPattern
Action: create
Status: pending

[Not implemented](#)

Methodological description: Infer a rule governing changes in a sequence's values or structure and test it against several elements. An observed repetition suggests a rule but does not guarantee what unseen data will contain.
User-friendly description: Recognize patterns in sequences and check whether a proposed rule fits.

##### Predict an Outcome from a Rule

Slug: predictAnOutcomeFromARule
Action: create
Status: pending

[Not implemented](#)

Methodological description: Derive the next state or value from an explicit rule and initial conditions, such as one transition of a finite-state machine. Unlike statistical forecasting, the rule determines the outcome here.
User-friendly description: Work out what happens next when a rule and starting state are known.

##### Evaluate a Simple Condition

Slug: evaluateASimpleCondition
Action: create
Status: pending

[Not implemented](#)

Methodological description: Given known facts, determine whether a single elementary condition holds, such as `temperature > 20` or `isOpen = true`. Distinguish a false statement from one whose truth cannot be determined with the available information; combining conditions is a separate logical operation.
User-friendly description: Decide whether a single condition is true, false or cannot yet be determined.

##### Apply Logical AND

Slug: applyLogicalAND
Action: create
Status: pending

[Not implemented](#)

Methodological description: Evaluate the conjunction of two conditions: it is true only when both conditions are true. For example, access requires both a correct code and authorization; do not confuse this with an alternative condition.
User-friendly description: Use AND to check whether two requirements are both satisfied.

##### Apply Logical OR

Slug: applyLogicalOR
Action: create
Status: pending

[Not implemented](#)

Methodological description: Evaluate the disjunction of two conditions: it is true when at least one condition holds, including when both hold. For example, a discount may be available with a student ID or a promotional code; this is inclusive OR unless otherwise specified.
User-friendly description: Use OR to check whether at least one of two conditions is satisfied.

##### Apply Logical NOT

Slug: applyLogicalNOT
Action: create
Status: pending

[Not implemented](#)

Methodological description: Negate a condition's truth value: `NOT isLocked` is true when `isLocked` is false. Negation changes the truth value of the condition, not the underlying facts.
User-friendly description: Use NOT to reverse the truth value of a condition.

##### Evaluate Compound Logical Expressions

Slug: evaluateCompoundLogicalExpressions
Action: create
Status: pending

[Not implemented](#)

Methodological description: Compute expressions involving multiple conditions and AND, OR, and NOT while observing parentheses and operator precedence. For example, distinguish `(A OR B) AND C` from `A OR (B AND C)` for the same inputs.
User-friendly description: Evaluate logical expressions with several operators in the right order.

##### Detect Contradictory Rules

Slug: detectContradictoryRules
Action: create
Status: pending

[Not implemented](#)

Methodological description: Show when two or more requirements cannot hold under the same conditions: for example, an object cannot simultaneously be located exclusively in room A and exclusively in room B. The focus is rule consistency rather than program execution order.
User-friendly description: Recognize when two requirements cannot both be true.
### Programming

Slug: programming
Action: create
Status: pending

Groups: 8 · Skills: 37

[Not implemented](#)

Methodological description: Reading, writing, running, and testing executable instructions that modify program state or produce results. Unlike abstract algorithm design, these competencies concern the behavior of an actual program.
User-friendly description: Learn to understand, write and test instructions that a computer executes.

#### Reading Programs

Slug: readingPrograms
Action: create
Status: pending

Skills: 4

[Not implemented](#)

Methodological description: Interpreting existing commands and their execution order, including intermediate state changes and final outcomes. This differs from writing new instructions or fixing an identified defect.
User-friendly description: Discover how to read a program and follow what it does.

##### Explain a Command's Purpose

Slug: explainACommandsPurpose
Action: create
Status: pending

[Not implemented](#)

Methodological description: Identify the operation performed by an instruction and which values or effects it changes given the initial state. For example, assignment stores a new value but does not necessarily display it.
User-friendly description: Explain what an individual programming command does to a program's state.

##### Trace Program State

Slug: traceProgramState
Action: create
Status: pending

[Not implemented](#)

Methodological description: Calculate intermediate values of variables, objects, and execution position across several commands; use a trace table to record when state changes. The final output may conceal those intermediate changes.
User-friendly description: Follow changes to variables and other values while a program runs.

##### Predict Program Output

Slug: predictProgramOutput
Action: create
Status: pending

[Not implemented](#)

Methodological description: Determine exactly what a program prints, draws, or returns for particular inputs and execution order. This concerns the externally observable result, not every internal state.
User-friendly description: Work out the visible result a program will produce for given inputs.

##### Predict Consequences of Execution Order

Slug: predictConsequencesOfExecutionOrder
Action: create
Status: pending

[Not implemented](#)

Methodological description: Determine how the order of assignments, calls, or checks affects program state and outcomes, especially when intuitive code reading is misleading. For example, a later instruction operates on a value already changed by an earlier one; unlike merely predicting output, this analyzes causal dependencies on order.
User-friendly description: Explain why changing the order of commands can change the result.

#### Programming Constructs

Slug: programmingConstructs
Action: create
Status: pending

Skills: 7

[Not implemented](#)

Methodological description: Using executable commands, conditions, loops, and event responses to control a program. Unlike algorithm design, the constructs must be implemented in a particular execution environment.
User-friendly description: Learn to control programs using sequences, conditions, loops and events.

##### Write a Sequence of Commands

Slug: writeASequenceOfCommands
Action: create
Status: pending

[Not implemented](#)

Methodological description: Translate specified steps into syntactically valid instructions for an environment that executes them in order. Unlike describing an algorithm in prose, this requires observing language rules and command effects.
User-friendly description: Write valid commands that perform actions in the intended order.

##### Implement Conditional Behavior

Slug: implementConditionalBehavior
Action: create
Status: pending

[Not implemented](#)

Methodological description: Write a Boolean test and the corresponding executable branches, ensuring that the intended branch runs for each anticipated condition value.
User-friendly description: Make a program choose different actions when conditions change.

##### Implement a Loop

Slug: implementALoop
Action: create
Status: pending

[Not implemented](#)

Methodological description: Express repeated instructions using a counter or termination condition and correctly update state between iterations. An instruction repeats by rule rather than through manual duplication.
User-friendly description: Use loops to repeat instructions until the right stopping point.

##### Handle an Event

Slug: handleAnEvent
Action: create
Status: pending

[Not implemented](#)

Methodological description: Associate a programmed response with a signal such as a button press, message, or state change, distinguishing the event's arrival from execution of its handler. This is not simply a condition checked sequentially at every step.
User-friendly description: Make a program respond when a button, message or another event occurs.

##### Detect an Infinite Loop

Slug: detectAnInfiniteLoop
Action: create
Status: pending

[Not implemented](#)

Methodological description: Identify when a loop's termination condition can never be reached because a counter stays unchanged or state is updated incorrectly; explain the consequences for program execution.
User-friendly description: Find a loop that cannot stop because its condition never becomes false.

##### Move Loop-Invariant Computations Outside a Loop

Slug: moveLoopInvariantComputationsOutsideALoop
Action: create
Status: pending

[Not implemented](#)

Methodological description: Recognize an expression whose value remains unchanged between iterations and safely calculate it once outside the loop, provided that doing so does not change required side effects or execution order.
User-friendly description: Move calculations out of loops when they do not change during repetition.

##### Order Overlapping Conditional Checks

Slug: orderOverlappingConditionalChecks
Action: create
Status: pending

[Not implemented](#)

Methodological description: In an `if/else if` chain, explain why a broad condition may make a more specific branch unreachable and place the specific check first when appropriate; do not automatically apply this rule to independent `if` statements.
User-friendly description: Arrange conditional checks so specific cases can still be reached.

#### Program Data

Slug: programData
Action: create
Status: pending

Skills: 3

[Not implemented](#)

Methodological description: Working with values received, stored, and changed at runtime: variables, types, inputs, and state transitions. This concerns data during code execution rather than external datasets for statistical analysis.
User-friendly description: Work with the values and changing state used by a running program.

##### Use a Variable

Slug: useAVariable
Action: create
Status: pending

[Not implemented](#)

Methodological description: Define a named location for a value and access its current contents at runtime; distinguish the variable's name from the value it stores.
User-friendly description: Store a value under a variable name and read it when needed.

##### Update Program State

Slug: updateProgramState
Action: create
Status: pending

[Not implemented](#)

Methodological description: Compute and store a new state from the previous one, such as incrementing a counter after an event. Unlike simply reading a variable, changing state affects subsequent operations.
User-friendly description: Change a program's stored state based on what happened before.

##### Use Input Data

Slug: useInputData
Action: create
Status: pending

[Not implemented](#)

Methodological description: Accept an external value as program input and use it in a computation or choice of action. The output should depend on input rather than on a fixed example.
User-friendly description: Use information entered from outside the program to determine its behavior.

#### Testing and Debugging

Slug: testingAndDebugging
Action: create
Status: pending

Skills: 4

[Not implemented](#)

Methodological description: Compare actual program behavior with requirements, find the cause of deviations, correct them, and test again. Detecting a defect, diagnosing it, changing code, and testing multiple cases are distinct abilities.
User-friendly description: Discover how to find, explain and correct mistakes in programs.

##### Detect Incorrect Program Behavior

Slug: detectIncorrectProgramBehavior
Action: create
Status: pending

[Not implemented](#)

Methodological description: Compare actual results or responses with requirements and identify a specific deviation such as a wrong value, missing response, or crash. An incorrect result need not be a runtime error; finding its root cause is a separate skill.
User-friendly description: Recognize when a program's behavior differs from its requirements.

##### Locate the Cause of an Error

Slug: locateTheCauseOfAnError
Action: create
Status: pending

[Not implemented](#)

Methodological description: Narrow a defect to a particular instruction, condition, or state transition by tracing execution and testing hypotheses. Recognizing a wrong result does not by itself identify its cause.
User-friendly description: Trace a programming error to the instruction or condition causing it.

##### Fix a Program Defect

Slug: fixAProgramDefect
Action: create
Status: pending

[Not implemented](#)

Methodological description: Change the specific code or rule responsible for a confirmed defect without breaking the required behavior of other cases. Retest the original failure after making the correction.
User-friendly description: Correct a specific defect and check that the required behavior still works.

##### Test a Program with Different Inputs

Slug: testAProgramWithDifferentInputs
Action: create
Status: pending

[Not implemented](#)

Methodological description: Choose valid and boundary input sets, compare actual with expected results, and identify cases where the program behaves differently. One successful run does not establish overall correctness.
User-friendly description: Test a program using different inputs, including boundary cases.

#### Functions and Reuse

Slug: functionsAndReuse
Action: create
Status: pending

Skills: 5

[Not implemented](#)

Methodological description: Named sections of programs with inputs, outputs, and defined responsibilities that help divide tasks and avoid repeating the same logic.
User-friendly description: Learn to organize reusable operations as functions.

##### Explain the Purpose of a Function

Slug: explainThePurposeOfAFunction
Action: create
Status: pending

[Not implemented](#)

Methodological description: Describe a function as a named operation that performs a particular action or returns a value and can be called repeatedly without rewriting its body.
User-friendly description: Explain how a named function performs an operation when called.

##### Define a Function with Parameters

Slug: defineAFunctionWithParameters
Action: create
Status: pending

[Not implemented](#)

Methodological description: Create a function whose input parameters represent values used inside its body rather than hard-coding a single example.
User-friendly description: Write a function that accepts parameters rather than fixed example values.

##### Call a Function with Arguments

Slug: callAFunctionWithArguments
Action: create
Status: pending

[Not implemented](#)

Methodological description: Supply concrete values at a call site and trace how they bind to formal parameters; distinguish defining a function from calling it.
User-friendly description: Call a function with arguments and follow how they are used.

##### Use a Function's Return Value

Slug: useAFunctionsReturnValue
Action: create
Status: pending

[Not implemented](#)

Methodological description: Obtain a returned value and use it in another computation, distinguishing returned data from text printed to the screen.
User-friendly description: Use a returned result in further calculations rather than merely displaying it.

##### Explain Recursion

Slug: explainRecursion
Action: create
Status: pending

[Not implemented](#)

Methodological description: Trace a function that calls itself on a simpler case and identify the base condition that ends the calls. For example, computing a factorial involves both reducing the argument and terminating at the base case.
User-friendly description: Understand how a recursive function solves smaller cases and eventually stops.

#### Data Types and References

Slug: dataTypesAndReferences
Action: create
Status: pending

Skills: 6

[Not implemented](#)

Methodological description: Types determine valid forms of values and operations; storage and state-passing behavior depend on the programming language. Do not assume every language draws the same boundary between primitives and objects.
User-friendly description: Explore how types and references affect the values programs can use.

##### Distinguish Value Types

Slug: distinguishValueTypes
Action: create
Status: pending

[Not implemented](#)

Methodological description: Identify whether a value is numeric, textual, or Boolean and which operations are meaningful for it. Numeric addition and string concatenation may look similar but follow different rules.
User-friendly description: Tell whether a value is numeric, textual or Boolean and what it can do.

##### Explain Primitive Values in a Language

Slug: explainPrimitiveValuesInALanguage
Action: create
Status: pending

[Not implemented](#)

Methodological description: Use a selected programming language to describe simple values such as numbers, Boolean values, or text and how that language classifies them; do not assume strings are primitive in every language.
User-friendly description: Identify simple value types as defined by a chosen programming language.

##### Explain Composite Data Structures

Slug: explainCompositeDataStructures
Action: create
Status: pending

[Not implemented](#)

Methodological description: Recognize arrays, lists, records, and dictionaries as organizations of several values and their relationships; separate a structure's form from its current contents.
User-friendly description: Recognize lists, arrays and records that organize multiple values.

##### Distinguish Value Copying from Shared References

Slug: distinguishValueCopyingFromSharedReferences
Action: create
Status: pending

[Not implemented](#)

Methodological description: In a particular language, demonstrate when modifying a reference affects a shared mutable object and when a new value remains independent; do not equate this universally with a primitive/reference type distinction.
User-friendly description: Explain when two variables share an object and when values are independent.

##### Explain a Data Type Contract

Slug: explainADataTypeContract
Action: create
Status: pending

[Not implemented](#)

Methodological description: Determine what type or form of value a declared input contract requires for a function, component, or call; text cannot always safely substitute for a number.
User-friendly description: Understand the kind of value a program function expects to receive.

##### Validate Data Against a Contract

Slug: validateDataAgainstAContract
Action: create
Status: pending

[Not implemented](#)

Methodological description: Identify when received values violate an expected type or format and use validation or explicit conversion instead of silently assuming compatibility.
User-friendly description: Check whether input matches a required type or structure before using it.

#### Program Structure and Syntax

Slug: programStructureAndSyntax
Action: create
Status: pending

Skills: 4

[Not implemented](#)

Methodological description: The language units of executable code include keywords, operators, identifiers, expressions, statements, and blocks. Editor highlighting helps identify them but does not prove a program correct.
User-friendly description: Learn how programming languages organize keywords, expressions and blocks.

##### Distinguish Keywords from Identifiers

Slug: distinguishKeywordsFromIdentifiers
Action: create
Status: pending

[Not implemented](#)

Methodological description: Separate reserved language constructs from programmer-chosen names for variables and functions; naming rules vary by language.
User-friendly description: Distinguish language keywords from names chosen by programmers.

##### Distinguish Operators, Expressions, and Statements

Slug: distinguishOperatorsExpressionsAndStatements
Action: create
Status: pending

[Not implemented](#)

Methodological description: Explain that an operator acts on operands, an expression produces a value, and a statement directs an action; one line of code may contain several such units.
User-friendly description: Recognize the difference between operators, expressions and statements.

##### Explain Statement Block Boundaries

Slug: explainStatementBlockBoundaries
Action: create
Status: pending

[Not implemented](#)

Methodological description: Identify which instructions belong to a function, loop, or conditional branch based on braces or indentation in a language, without confusing a block with an entire file.
User-friendly description: Find which commands belong inside a loop, function or conditional block.

##### Explain Syntax Highlighting

Slug: explainSyntaxHighlighting
Action: create
Status: pending

[Not implemented](#)

Methodological description: Recognize editor coloring of keywords, strings, comments, and names as a visual aid; correctly colored code is not necessarily correct.
User-friendly description: Understand what syntax coloring helps reveal and what it cannot prove.

#### Programming Paradigms

Slug: programmingParadigms
Action: create
Status: pending

Skills: 4

[Not implemented](#)

Methodological description: Compare code organization through stepwise state changes, functional transformation of values, object modeling, and description of desired results. A language may support several paradigms.
User-friendly description: Discover different ways of organizing program logic and behavior.

##### Explain Procedural Programming

Slug: explainProceduralProgramming
Action: create
Status: pending

[Not implemented](#)

Methodological description: Organize tasks into named procedures and sequences of state-changing instructions without requiring a class for each action.
User-friendly description: Explore programs organized around step-by-step procedures.

##### Explain Functional Programming

Slug: explainFunctionalProgramming
Action: create
Status: pending

[Not implemented](#)

Methodological description: Describe computation through function composition and transformations of values; demonstrate that pure functions do not modify external state.
User-friendly description: Understand programs that transform values by combining functions.

##### Explain Object-Oriented Programming

Slug: explainObjectOrientedProgramming
Action: create
Status: pending

[Not implemented](#)

Methodological description: Organize a program around interacting objects with state and methods, rather than as a list of global procedures.
User-friendly description: Explore programs built from interacting objects with state and behavior.

##### Distinguish Imperative and Declarative Approaches

Slug: distinguishImperativeAndDeclarativeApproaches
Action: create
Status: pending

[Not implemented](#)

Methodological description: Compare specifying concrete state-changing steps with specifying desired results or rules from which the environment chooses an execution strategy.
User-friendly description: Compare giving explicit instructions with describing the desired result.
### Digital Systems and Networks

Slug: digitalSystemsAndNetworks
Action: create
Status: pending

Groups: 8 · Skills: 37

[Not implemented](#)

Methodological description: Explains interactions among hardware, software, encoding methods, and communication channels. These competencies concern the operation of digital infrastructure, not merely the use of devices.
User-friendly description: Discover how computing devices, digital information and networks work together.

#### Digital Device Components

Slug: digitalDeviceComponents
Action: create
Status: pending

Skills: 3

[Not implemented](#)

Methodological description: Roles of computing components: processors execute instructions, memory holds working data, and hardware and software interact. Network transmission belongs to a different group.
User-friendly description: Explore how hardware components and software perform different computing tasks.

##### Identify Digital Devices

Slug: identifyDigitalDevices
Action: create
Status: pending

[Not implemented](#)

Methodological description: Determine whether a device uses digital representation and programmable information processing rather than purely mechanical or analog means. The appearance of a screen or buttons is insufficient by itself.
User-friendly description: Recognize devices that process programmable digital information.

##### Explain a Processor's Function

Slug: explainAProcessorsFunction
Action: create
Status: pending

[Not implemented](#)

Methodological description: Relate the CPU to fetching, decoding, and executing instructions and coordinating operations on data; distinguish its computing role from permanent file storage.
User-friendly description: Explain how a processor runs instructions rather than permanently storing files.

##### Distinguish Hardware from Software

Slug: distinguishHardwareFromSoftware
Action: create
Status: pending

[Not implemented](#)

Methodological description: Differentiate tangible device components from instructions and data governing their behavior; explain their interaction, such as software controlling a camera through a hardware interface.
User-friendly description: Distinguish physical computer parts from the software that controls them.

#### Representation and Storage

Slug: representationAndStorage
Action: create
Status: pending

Skills: 4

[Not implemented](#)

Methodological description: How digital devices encode, format, measure, and organize files and data. Distinguish the representation of information from the file system's organization.
User-friendly description: Learn how devices represent information and organize stored files.

##### Explain Binary Representation

Slug: explainBinaryRepresentation
Action: create
Status: pending

[Not implemented](#)

Methodological description: Show how the symbols 0 and 1 form bits and bit sequences that encode numbers and other data. A bit represents a state, while the meaning of a longer sequence depends on its interpretation.
User-friendly description: Understand how sequences of zeros and ones encode different kinds of data.

##### Distinguish Digital Formats

Slug: distinguishDigitalFormats
Action: create
Status: pending

[Not implemented](#)

Methodological description: Explain how formats determine the interpretation of stored bits: text files, raster images, and audio recordings have different structures. A filename extension is a clue, not proof of actual contents.
User-friendly description: Recognize that file formats determine how stored bits should be interpreted.

##### Compare Digital File Sizes

Slug: compareDigitalFileSizes
Action: create
Status: pending

[Not implemented](#)

Methodological description: Relate stored byte counts to file sizes, compare measurement units correctly, and explain why visually similar materials may differ in size because of format or compression.
User-friendly description: Compare file sizes and explain why format and compression make a difference.

##### Organize Files in Directories

Slug: organizeFilesInDirectories
Action: create
Status: pending

[Not implemented](#)

Methodological description: Create a clear directory hierarchy for resources and choose names and locations that allow a file to be found by its path. Directory organization does not determine file format.
User-friendly description: Arrange files in useful folders so they can be found by their paths.

#### Networks

Slug: networks
Action: create
Status: pending

Skills: 4

[Not implemented](#)

Methodological description: Information exchange between connected devices, the distinction between the Internet and Web services, and communication channels. These competencies concern delivery, not message reliability or trustworthiness.
User-friendly description: Discover how connected devices send messages and share resources.

##### Explain the Purpose of a Computer Network

Slug: explainThePurposeOfAComputerNetwork
Action: create
Status: pending

[Not implemented](#)

Methodological description: Show how networking separate devices allows them to exchange messages and share resources while each device maintains its own computing functions.
User-friendly description: Explain why networks connect separate devices to exchange information.

##### Distinguish the Internet from the Web

Slug: distinguishTheInternetFromTheWeb
Action: create
Status: pending

[Not implemented](#)

Methodological description: Explain that the Internet is interconnected network infrastructure, while the Web is a service for accessing resources through browsers and Web protocols. Email or file transfer can use the Internet without a webpage.
User-friendly description: Distinguish the Internet's network infrastructure from websites on the Web.

##### Explain Network Message Delivery

Slug: explainNetworkMessageDelivery
Action: create
Status: pending

[Not implemented](#)

Methodological description: Model a data path from a sender through intermediary network nodes to the recipient; separate destination addressing and transport from message content. Delivery need not occur over one direct physical cable.
User-friendly description: Trace how messages travel through network devices to their destination.

##### Explain Wireless Communication

Slug: explainWirelessCommunication
Action: create
Status: pending

[Not implemented](#)

Methodological description: Describe how Wi-Fi and other wireless technologies transmit signals without a dedicated cable to each device while still relying on compatible equipment, protocols, and communications infrastructure.
User-friendly description: Explore how wireless devices communicate using signals rather than direct cables.

#### Numeral Systems

Slug: numeralSystems
Action: create
Status: pending

Skills: 4

[Not implemented](#)

Methodological description: Positional numeral notation, bases, and place values; binary states connect mathematical notation to the technical representation of information.
User-friendly description: Learn how digits represent numbers in systems with different bases.

##### Explain Positional Numeral Systems

Slug: explainPositionalNumeralSystems
Action: create
Status: pending

[Not implemented](#)

Methodological description: Explain that digit values depend on position and base, so `10` denotes different quantities in binary and decimal.
User-friendly description: Understand why the place of a digit changes its value in a number.

##### Convert Between Binary and Decimal

Slug: convertBetweenBinaryAndDecimal
Action: create
Status: pending

[Not implemented](#)

Methodological description: Represent a small integer as a sum of powers of two and recover a value from its binary positions, distinguishing the notation from the number itself.
User-friendly description: Convert small numbers between binary and decimal notation.

##### Explain Computer Binary Logic

Slug: explainComputerBinaryLogic
Action: create
Status: pending

[Not implemented](#)

Methodological description: Two reliably distinguishable electronic signal levels allow encoding zeros and ones, even though physical circuits are more complex than two abstract symbols.
User-friendly description: Connect binary zeros and ones to distinguishable electronic signal states.

##### Distinguish Binary and Hexadecimal

Slug: distinguishBinaryAndHexadecimal
Action: create
Status: pending

[Not implemented](#)

Methodological description: Explain that one hexadecimal digit corresponds to four bits and shortens the representation without changing the number's value.
User-friendly description: Understand why hexadecimal is a shorter way to write groups of bits.

#### Memory and Storage

Slug: memoryAndStorage
Action: create
Status: pending

Skills: 4

[Not implemented](#)

Methodological description: Distinguishes temporary working memory from nonvolatile file storage, along with the different functions of RAM, ROM, and storage devices.
User-friendly description: Discover what temporary memory, firmware memory and file storage each do.

##### Explain RAM

Slug: explainRAM
Action: create
Status: pending

[Not implemented](#)

Methodological description: RAM holds working instructions and data for fast access during execution; its contents are usually lost when power is removed.
User-friendly description: Explore how RAM holds working information while a computer runs.

##### Explain Persistent Storage

Slug: explainPersistentStorage
Action: create
Status: pending

[Not implemented](#)

Methodological description: An SSD, flash memory, or another nonvolatile medium stores files without continuous power, unlike the typical working state held in RAM.
User-friendly description: Understand why storage devices preserve files after power is switched off.

##### Explain the Purpose of ROM

Slug: explainThePurposeOfROM
Action: create
Status: pending

[Not implemented](#)

Methodological description: Explain that ROM and related nonvolatile technologies can hold device firmware or initial startup instructions without power. The historical name 'read-only memory' does not mean all modern firmware is physically immutable; many devices use reprogrammable flash memory.
User-friendly description: Recognize how nonvolatile firmware memory helps devices start up.

##### Distinguish RAM, ROM, and Storage

Slug: distinguishRAMROMAndStorage
Action: create
Status: pending

[Not implemented](#)

Methodological description: Working memory, firmware memory, and storage for user files serve different purposes; the term 'permanent memory' is ambiguous without context.
User-friendly description: Compare what RAM, ROM and persistent storage are designed to hold.

#### Operating Systems

Slug: operatingSystems
Action: create
Status: pending

Skills: 4

[Not implemented](#)

Methodological description: An operating system manages programs, processes, files, and devices; it differs from applications running in its environment.
User-friendly description: Explore how operating systems manage programs, files and devices.

##### Explain an Operating System's Purpose

Slug: explainAnOperatingSystemsPurpose
Action: create
Status: pending

[Not implemented](#)

Methodological description: Describe how an OS coordinates launching programs and accessing files and devices so individual applications need not implement all hardware operations themselves.
User-friendly description: Understand how an operating system coordinates software and hardware.

##### Distinguish Operating System Families

Slug: distinguishOperatingSystemFamilies
Action: create
Status: pending

[Not implemented](#)

Methodological description: Identify Windows, macOS, Linux, Android, and iOS as different operating systems or related platforms rather than names for computers.
User-friendly description: Recognize common operating-system families and how they differ.

##### Explain an OS Process

Slug: explainAnOSProcess
Action: create
Status: pending

[Not implemented](#)

Methodological description: A running program has current state and allocated resources; a program file on disk is not itself a process.
User-friendly description: Distinguish a running process from the program file stored on disk.

##### Explain Linus Torvalds' Role in Linux

Slug: explainLinusTorvaldsRoleInLinux
Action: create
Status: pending

[Not implemented](#)

Methodological description: Torvalds initiated the Linux kernel; a complete operating system also includes other components, and collaborative development sustains its evolution.
User-friendly description: Learn how the Linux kernel began and why many contributors build operating systems.

#### Network Models and Protocols

Slug: networkModelsAndProtocols
Action: create
Status: pending

Skills: 11

[Not implemented](#)

Methodological description: Network communication rules include addressing and packet delivery, protocol layers, connection security, and shared-medium access. OSI is a conceptual model, while real technologies implement their functions through different stacks and access methods.
User-friendly description: Discover how networking protocols specify the rules for sending information.

##### Explain a Network Protocol

Slug: explainANetworkProtocol
Action: create
Status: pending

[Not implemented](#)

Methodological description: A protocol specifies message formats and rules that enable devices to exchange information correctly.
User-friendly description: Explain why devices need agreed rules for exchanging messages.

##### Explain the OSI Layers

Slug: explainTheOSILayers
Action: create
Status: pending

[Not implemented](#)

Methodological description: The seven OSI layers describe functions from physical signal transmission to application interaction, without requiring one distinct protocol per layer.
User-friendly description: Use the seven-layer OSI model to organize networking functions.

##### Distinguish OSI from TCP/IP

Slug: distinguishOSIFromTCPIP
Action: create
Status: pending

[Not implemented](#)

Methodological description: The OSI reference model has seven conceptual layers, whereas TCP/IP organizes real Internet protocols into a different set of functional layers.
User-friendly description: Compare the conceptual OSI layers with the Internet's TCP/IP stack.

##### Explain the Purpose of IP

Slug: explainThePurposeOfIP
Action: create
Status: pending

[Not implemented](#)

Methodological description: IP provides network addressing and forwards packets between networks; an IP address is not the same as a website's domain name.
User-friendly description: Understand how IP addresses and forwards packets across networks.

##### Distinguish TCP from UDP

Slug: distinguishTCPFromUDP
Action: create
Status: pending

[Not implemented](#)

Methodological description: TCP provides a managed data stream with acknowledgments; UDP sends datagrams without equivalent delivery guarantees at that layer.
User-friendly description: Compare reliable TCP streams with UDP messages that lack those guarantees.

##### Explain DNS

Slug: explainDNS
Action: create
Status: pending

[Not implemented](#)

Methodological description: DNS resolves domain names to network addresses; it does not replace actual data transmission between devices.
User-friendly description: Explain how DNS helps find network addresses from domain names.

##### Distinguish HTTP from HTTPS

Slug: distinguishHTTPFromHTTPS
Action: create
Status: pending

[Not implemented](#)

Methodological description: HTTPS uses TLS to secure HTTP communication, but a padlock alone does not establish that a website's operator is trustworthy.
User-friendly description: Recognize what HTTPS protects and why it does not guarantee a trustworthy site.

##### Explain CSMA/CD

Slug: explainCSMACD
Action: create
Status: pending

[Not implemented](#)

Methodological description: Describe how classic shared-medium Ethernet senses channel activity, detects collisions, and retries after a delay. Modern switched full-duplex Ethernet normally does not need this mechanism.
User-friendly description: Learn why older shared Ethernet networks needed collision detection.

##### Explain CSMA/CA

Slug: explainCSMACA
Action: create
Status: pending

[Not implemented](#)

Methodological description: Describe why a wireless network checks whether a radio channel is busy and seeks to reduce collisions through waiting and agreed access rules; avoidance does not guarantee that collisions never occur.
User-friendly description: Explain how wireless devices try to avoid transmitting over a busy channel.

##### Explain Token Ring

Slug: explainTokenRing
Action: create
Status: pending

[Not implemented](#)

Methodological description: Describe how a token grants transmission rights to participants in a defined sequence and how this differs from devices contending for access to a shared medium.
User-friendly description: Explore how passing a token can control which device may send data.

##### Compare Network Access Methods

Slug: compareNetworkAccessMethods
Action: create
Status: pending

[Not implemented](#)

Methodological description: Select and justify comparisons among collision detection (CSMA/CD), collision avoidance (CSMA/CA), and token passing (Token Ring) according to how sending rights are obtained. These represent different technological settings, not three interchangeable protocols of modern Ethernet.
User-friendly description: Compare collision detection, avoidance and token passing in their proper settings.

#### Task Execution

Slug: taskExecution
Action: create
Status: pending

Skills: 3

[Not implemented](#)

Methodological description: Sequential execution, interleaving, and actual simultaneous work by multiple executors affect operation order and resource use. Concurrency organizes overlapping task progress; parallelism means operations truly execute at the same time. They are related but not identical.
User-friendly description: Discover the difference between overlapping tasks and truly simultaneous work.

##### Explain Concurrent Execution

Slug: explainConcurrentExecution
Action: create
Status: pending

[Not implemented](#)

Methodological description: Explain how several tasks make progress through interleaved steps or waiting for events without requiring instructions to run simultaneously. Contrast this with completing each task fully before starting the next.
User-friendly description: Understand how several tasks can make progress without running at exactly the same moment.

##### Explain Parallel Execution

Slug: explainParallelExecution
Action: create
Status: pending

[Not implemented](#)

Methodological description: Identify when independent operations truly run simultaneously on multiple computing resources. Distinguish parallelism from rapid task switching on one executor; additional resources do not guarantee proportional speedup.
User-friendly description: Recognize when multiple processors actually perform work simultaneously.

##### Distribute Independent Tasks Across Executors

Slug: distributeIndependentTasksAcrossExecutors
Action: create
Status: pending

[Not implemented](#)

Methodological description: Plan which subtasks can run simultaneously and which must wait for dependent results in a model computing system. For example, process several images independently before combining their outputs.
User-friendly description: Plan which tasks can run together and which must wait for other results.
### Information and Data

Slug: informationAndData
Action: create
Status: pending

Groups: 5 · Skills: 24

[Not implemented](#)

Methodological description: Obtaining and verifying information, organizing datasets, finding patterns, and reasoning about uncertain events. A digital setting may overlap with mathematics, but these skills are classified locally within Informatics.
User-friendly description: Explore how to find trustworthy information, organize data and reason about uncertainty.

#### Information Search and Verification

Slug: informationSearchAndVerification
Action: create
Status: pending

Skills: 4

[Not implemented](#)

Methodological description: Find relevant facts and determine whether independent sources support a particular claim. Formulating queries, comparing reports, and verifying facts are distinct operations.
User-friendly description: Learn how to search for evidence and check whether a claim is supported.

##### Formulate an Information Query

Slug: formulateAnInformationQuery
Action: create
Status: pending

[Not implemented](#)

Methodological description: Convert a specific information need into search terms and qualifiers likely to retrieve relevant resources. For example, specify an object's name, location, or period instead of an overly general term.
User-friendly description: Choose specific search terms that match what you need to find.

##### Compare Information Sources

Slug: compareInformationSources
Action: create
Status: pending

[Not implemented](#)

Methodological description: Compare accounts from multiple sources concerning the same claim, separate shared facts from discrepancies, and identify what further evidence is needed to explain the differences.
User-friendly description: Compare multiple sources and identify where their accounts disagree.

##### Verify a Claim Against a Source

Slug: verifyAClaimAgainstASource
Action: create
Status: pending

[Not implemented](#)

Methodological description: Seek evidence for a particular assertion in the primary source or independent reliable material, considering date, context, and provenance. Repetition of an error across websites does not make it true.
User-friendly description: Check a claim against appropriate evidence rather than repeated assertions.

##### Distinguish Messages from Data

Slug: distinguishMessagesFromData
Action: create
Status: pending

[Not implemented](#)

Methodological description: Differentiate individually recorded values from a message that conveys meaning to an audience in context. For example, the number '18' communicates a temperature only once the unit and measured object are supplied.
User-friendly description: Distinguish a recorded value from the meaning a message gives it.

#### Data Collection and Organization

Slug: dataCollectionAndOrganization
Action: create
Status: pending

Skills: 4

[Not implemented](#)

Methodological description: Identify required fields, record observations consistently, classify by an attribute, and organize a table. Collecting data generates records; tabulation structures existing records.
User-friendly description: Learn to collect relevant information and organize comparable records.

##### Identify Data Needed for a Task

Slug: identifyDataNeededForATask
Action: create
Status: pending

[Not implemented](#)

Methodological description: Determine which fields, observations, or measurements are necessary to answer a question and which do not affect the conclusion. Do not collect personal information merely because it can be stored.
User-friendly description: Decide which fields and observations a question actually requires.

##### Collect Data Consistently

Slug: collectDataConsistently
Action: create
Status: pending

[Not implemented](#)

Methodological description: Gather records using a predefined procedure with the same units and attributes for each observation. Changing the procedure midway may make parts of the dataset difficult to compare.
User-friendly description: Collect measurements using consistent rules and units.

##### Group Data by Attribute

Slug: groupDataByAttribute
Action: create
Status: pending

[Not implemented](#)

Methodological description: Apply one criterion consistently across items to create categories with a clear membership rule. For example, classify messages by file type without mixing this attribute with file size.
User-friendly description: Group records using one clear characteristic.

##### Present Data in a Table

Slug: presentDataInATable
Action: create
Status: pending

[Not implemented](#)

Methodological description: Arrange comparable records in rows and their attributes in columns with stable headings and units. A table preserves the values and relationships rather than substituting a graphical summary.
User-friendly description: Create a table with labeled rows, columns and consistent values.

#### Databases

Slug: databases
Action: create
Status: pending

Skills: 5

[Not implemented](#)

Methodological description: Structured storage of interrelated information differs from a table laid out only for human reading. Records and fields define the structure, keys identify records, and relationships connect information across tables.
User-friendly description: Discover how databases structure records and connect related information.

##### Explain a Database Table

Slug: explainADatabaseTable
Action: create
Status: pending

[Not implemented](#)

Methodological description: Describe how a relational table stores records of one type using a common set of fields, such as a book catalog. A formatted table in a document is not automatically a database.
User-friendly description: Understand how a database table stores similar kinds of records.

##### Distinguish Records and Fields

Slug: distinguishRecordsAndFields
Action: create
Status: pending

[Not implemented](#)

Methodological description: Identify a row as a record of one entity or occurrence, and a column as a named field describing an attribute. A cell's particular value is not the definition of a field.
User-friendly description: Distinguish a record from the fields that describe it.

##### Explain Primary Keys

Slug: explainPrimaryKeys
Action: create
Status: pending

[Not implemented](#)

Methodological description: Explain why a record needs a stable identifier unique within its table and why a person's name or a title is not always an appropriate key.
User-friendly description: Explain why a database needs a stable unique key for each record.

##### Model Relationships Between Tables

Slug: modelRelationshipsBetweenTables
Action: create
Status: pending

[Not implemented](#)

Methodological description: Explain how identifiers link records from different tables, such as a `studentId` in a completed-assignment record referencing a particular student. Distinguish a record's own key from a reference to another record.
User-friendly description: Connect information in different tables using identifiers.

##### Design a Simple Database Schema

Slug: designASimpleDatabaseSchema
Action: create
Status: pending

[Not implemented](#)

Methodological description: Independently identify entities, fields, keys, and required relationships for a task without needlessly duplicating facts. For example, model books and loans separately for a library; this designs a coherent schema rather than describing an existing table.
User-friendly description: Plan a simple database with suitable entities, fields and links.

#### Statistical Investigation

Slug: statisticalInvestigation
Action: create
Status: pending

Skills: 4

[Not implemented](#)

Methodological description: Read and create visual representations of datasets, find frequencies, and compare observations. Statistical conclusions describe data and are not equivalent to predicting a random outcome.
User-friendly description: Learn to explore data through charts, frequencies and comparisons.

##### Read a Chart

Slug: readAChart
Action: create
Status: pending

[Not implemented](#)

Methodological description: Identify the values represented by axes, scales, colors, and element lengths; read the data accurately without making assumptions based on presentation. A truncated axis can visually exaggerate a difference.
User-friendly description: Read chart scales, labels and values without being misled by their presentation.

##### Construct a Simple Chart

Slug: constructASimpleChart
Action: create
Status: pending

[Not implemented](#)

Methodological description: Choose a representation suitable for the data type and place numerical or categorical values in labeled elements on an understandable scale. Visual presentation must preserve proportions among source values.
User-friendly description: Create a clear chart that represents data proportions accurately.

##### Find the Most Frequent Value

Slug: findTheMostFrequentValue
Action: create
Status: pending

[Not implemented](#)

Methodological description: Find or calculate the value with the highest frequency, allowing for multiple equally frequent values. The most frequent value need not equal the arithmetic mean or the largest number.
User-friendly description: Identify the value that appears most frequently in a set.

##### Compare Sets of Observations

Slug: compareSetsOfObservations
Action: create
Status: pending

[Not implemented](#)

Methodological description: Choose a common basis for comparing two datasets—categories, ranges, or frequencies—and explain observed differences. A difference alone does not establish its cause.
User-friendly description: Compare two datasets using the same measures or categories.

#### Probability and Uncertainty

Slug: probabilityAndUncertainty
Action: create
Status: pending

Skills: 7

[Not implemented](#)

Methodological description: Distinguishing possible and impossible outcomes, probabilistic models, comparisons of likelihoods, and limits of prediction. Randomness as a source of variation in a digital model is distinct from assessing a particular risk.
User-friendly description: Explore possible events, their chances and the limits of prediction.

##### Distinguish Random and Deterministic Events

Slug: distinguishRandomAndDeterministicEvents
Action: create
Status: pending

[Not implemented](#)

Methodological description: Determine whether a model's known conditions fully determine its outcome or allow several possible outcomes with an unspecified selection. An outcome unknown to an observer does not itself prove physical randomness.
User-friendly description: Distinguish outcomes determined by a rule from those selected randomly.

##### Explain Event Possibility

Slug: explainEventPossibility
Action: create
Status: pending

[Not implemented](#)

Methodological description: Determine whether an outcome is allowed by a model's conditions, even if extremely unlikely. If a box contains only blue balls, drawing a red one is impossible under those conditions.
User-friendly description: Decide whether an outcome is allowed under a given set of conditions.

##### Explain Event Probability

Slug: explainEventProbability
Action: create
Status: pending

[Not implemented](#)

Methodological description: Estimate or interpret an event's chance using the model and its assumptions, including whether outcomes are equally likely. If a prize is equally likely to occupy any of 100 hiding places, a random first guess has a 1% chance of success.
User-friendly description: Estimate the chance of an event using a stated probability model.

##### Distinguish Possibility from Probability

Slug: distinguishPossibilityFromProbability
Action: create
Status: pending

[Not implemented](#)

Methodological description: Separate 'it can happen' from an estimated chance and from a promised result: two options labeled 'yes' and 'no' do not imply 50/50 odds. A first-try success among 100 equally likely hidden cells is possible but not as likely as a miss.
User-friendly description: Understand why an event being possible does not make it likely.

##### Compare Probabilities of Simple Events

Slug: compareProbabilitiesOfSimpleEvents
Action: create
Status: pending

[Not implemented](#)

Methodological description: Compare two events' likelihoods under consistent assumptions, such as choosing from two sets of equally likely outcomes. A valid comparison needs distribution information, not merely a count of verbally named outcomes.
User-friendly description: Compare how likely two outcomes are under the same assumptions.

##### Explain Limits of Prediction

Slug: explainLimitsOfPrediction
Action: create
Status: pending

[Not implemented](#)

Methodological description: Explain why a known probability does not determine the outcome of one trial and why a faulty model can give misleading forecasts. A rare win does not refute a correct low-probability estimate.
User-friendly description: Explain why knowing the odds does not predict the result of a single attempt.

##### Use Randomness in a Model

Slug: useRandomnessInAModel
Action: create
Status: pending

[Not implemented](#)

Methodological description: Introduce random selection from an explicitly defined outcome set into a digital simulation and distinguish it from a predetermined scenario. Variable outcomes do not imply equal likelihoods.
User-friendly description: Add random choices to a model while defining which outcomes can occur.
### Software Architecture

Groups: 2 · Skills: 21

[Not implemented](#)

Explains program structure through objects, contracts, responsibilities, and dependencies. Design patterns form a separate domain of reusable solutions to object creation, composition, and behavior.

#### Object Model

Skills: 13

[Not implemented](#)

Organizing program behavior around objects: state, methods, classes, abstraction, encapsulation, and relationships between types. Describing an individual object and explaining class relationships are distinct abilities.

##### Identify an Object's State and Behavior

[Not implemented](#)

Form a mental model of a real or imaginary object in terms of state (its characteristics and how they may change) and behavior (what it can do or what actions are possible). For example, a car has speed and fuel level and can accelerate or brake. This conceptual description does not require defining software properties and methods or writing code.

##### Explain the Concept of a Class

[Not implemented](#)

Understand a class as a definition of the structure and available operations of objects instantiated from it, such as the properties and methods of a hypothetical Counter. The class definition itself is not an instance with its own current count.

##### Distinguish a Class from an Object

[Not implemented](#)

Compare a type's template with particular instances holding their own values: one Robot class can produce several robots with different coordinates. A state change in one instance need not affect the others.

##### Apply Object Abstraction

[Not implemented](#)

Identify the minimal set of operations or properties relevant to a component's user while hiding details that do not affect the contract. For example, a 'move' operation need not expose a robot's motor-control logic.

##### Explain Encapsulation

[Not implemented](#)

Show how an object restricts direct access to internal state and provides controlled operations that preserve its rules. For example, a bank account changes through a withdrawal method that validates the transaction.

##### Explain Inheritance

[Not implemented](#)

Explain relationships between base and derived types, where a derived type inherits defined properties or operations and may specialize them. Inheritance denotes an 'is a kind of' relationship, not a 'contains a part' relationship.

##### Explain Polymorphism

[Not implemented](#)

Explain how different implementations fulfill a shared operation under the same contract, such as `draw()` for a circle and rectangle. The call remains consistent although concrete behavior depends on the implementation.

##### Model Object Composition

[Not implemented](#)

Construct a system from components with distinct roles, such as a robot comprising a controller, sensors, and actuators. Composition is a 'has a part' relationship, unlike inheritance's 'is a kind of' relationship.

##### Explain the Structure of a Software Object

[Not implemented](#)

Analyze a given object's identity, the properties storing state values, and methods defining its operations. For example, two Counter instances can share `increment()` yet have different `count` values. This concerns understanding an existing software structure rather than independently choosing its parts.

##### Explain an Object Property

[Not implemented](#)

Distinguish an attribute as a named state value from a method as an available action, such as a robot's coordinate versus its movement command.

##### Explain an Object Method

[Not implemented](#)

Show how invoking an object operation reads or changes its state; a method definition does not mean the operation has already run.

##### Model a Domain Entity as a Software Object

[Not implemented](#)

Independently design a software representation of a real or imaginary entity for a specific task by selecting relevant properties and methods, excluding unnecessary detail, and justifying those choices. For a car-rental service, model availability and renting/returning rather than current speed. The result can be a diagram, pseudocode, or code; designing the structure differs from analyzing an existing object.

##### Distinguish a Real Object from Its Abstract Model

[Not implemented](#)

Explain that a software object represents only selected characteristics of a thing or concept; a fictional entity can also have a useful object model.

#### Design Principles

Skills: 8

[Not implemented](#)

Quality criteria for software structure: limiting duplication and unnecessary complexity, separating responsibilities, enabling extension, and managing dependencies. Each principle addresses a different reason why a program may need to change.

##### Identify Unnecessary Duplication (DRY)

[Not implemented](#)

Find repeated logic or a repeated rule in several locations that requires fixes to be replicated. Similar-looking lines are not necessarily duplication when they represent independent rules.

##### Reduce Unnecessary Complexity (KISS)

[Not implemented](#)

Compare a solution with actual requirements and remove mechanisms that add nothing to needed behavior. Simplicity means reducing unjustified complexity, not ignoring important constraints or correctness.

##### Defer Unnecessary Features (YAGNI)

[Not implemented](#)

Distinguish functionality needed now from a merely imagined future scenario and avoid building the latter prematurely. Unlike KISS, the question is whether the feature is needed, not how complex its implementation is.

##### Isolate a Single Responsibility (SRP)

[Not implemented](#)

Explain why a module should be organized around one coherent reason to change rather than independent needs of different stakeholders. A class can have many methods if they all support that responsibility.

##### Extend Behavior Without Modifying the Core (OCP)

[Not implemented](#)

Identify extension points that allow a new implementation through a contract without rewriting tested shared logic. A stable core is a goal, not an absolute prohibition on changing existing code.

##### Verify Substitutability (LSP)

[Not implemented](#)

Identify where a subtype or new implementation violates the expected preconditions, outcomes, or invariants of a shared contract. For example, replacing ordinary storage with read-only storage can break a client legitimately attempting a write.

##### Separate Narrow Interfaces (ISP)

[Not implemented](#)

Split a large contract into role-specific interfaces so consumers depend only on needed operations. A read-only viewing device should not be required to implement editing or printing.

##### Design Dependencies on Contracts (DIP)

[Not implemented](#)

Separate business rules from concrete data-access mechanisms through an interface admitting multiple implementations. High-level logic receives dependencies from outside instead of instantiating a fixed service internally.
### Design Patterns

Groups: 3 · Skills: 23

[Not implemented](#)

The classic Gang of Four catalog describes 23 reusable structures for common object-design problems. Its three families focus on instance creation, component composition, and interactions. The existence of a pattern does not mean every problem should be made more complex to use one.

#### Creational

Skills: 5

[Not implemented](#)

Five approaches to constructing instances and object families that separate creation logic from usage.

##### Factory Method

[Not implemented](#)

Delegate product instantiation to an overridable factory method so clients use a shared contract without knowing the concrete class.

##### Abstract Factory

[Not implemented](#)

Use one factory to supply a compatible family of related products, such as interface elements for a particular platform, while hiding concrete types.

##### Builder

[Not implemented](#)

Construct a complex object step by step through a separate builder, with sequences of steps reusable for different results.

##### Prototype

[Not implemented](#)

Create a new object by copying a configured exemplar, considering shared nested data and the new object's identity.

##### Singleton

[Not implemented](#)

Maintain one shared instance within a defined scope and control access to it while recognizing the risks of hidden global state.

#### Structural

Skills: 7

[Not implemented](#)

Seven methods of combining components through adaptation, wrapping, nesting, intermediaries, or shared state.

##### Adapter

[Not implemented](#)

Translate the interface expected by a client into that of an existing component without rewriting that component.

##### Bridge

[Not implemented](#)

Separate abstraction and implementation into two independent hierarchies so each dimension can vary without an explosion of class combinations.

##### Composite

[Not implemented](#)

Provide a common contract for individual objects and nested groups, allowing leaves and branches in a tree-like structure to be treated uniformly.

##### Decorator

[Not implemented](#)

Add behavior through successive wrappers sharing an interface instead of creating a separate subclass for every combination.

##### Facade

[Not implemented](#)

Provide a simplified entry point hiding complex sequences of subsystem calls without replacing the entire subsystem interface.

##### Flyweight

[Not implemented](#)

Share the immutable portion of state among many similar objects to reduce memory consumption.

##### Proxy

[Not implemented](#)

Control access to another object through a proxy sharing its interface—for example, to check authorization, cache results, or defer loading.

#### Behavioral

Skills: 11

[Not implemented](#)

Eleven approaches to handling requests, selecting algorithms, delivering notifications, managing state, and distributing responsibility.

##### Chain of Responsibility

[Not implemented](#)

Pass a request through a chain of handlers until one processes it or passes it onward.

##### Command

[Not implemented](#)

Represent an action as a request object that can be stored, queued, or executed later.

##### Interpreter

[Not implemented](#)

Represent the rules of a small domain-specific language as an expression structure with defined interpretation behavior.

##### Iterator

[Not implemented](#)

Traverse collection elements through a defined interface without exposing their internal representation.

##### Mediator

[Not implemented](#)

Move interactions between several components into a mediator so each component need not depend directly on every other one.

##### Memento

[Not implemented](#)

Save an external snapshot that allows restoring an object's state without revealing its internal implementation.

##### Observer

[Not implemented](#)

Notify subscribers when a source changes without knowing which particular action each subscriber will take.

##### State

[Not implemented](#)

Delegate an object's reaction to a given command to its current state object instead of using an extensive conditional tree.

##### Strategy

[Not implemented](#)

Interchange algorithms sharing an interface so the solution method can change independently of the client.

##### Template Method

[Not implemented](#)

Define an algorithm skeleton with fixed steps while subclasses implement selected details through specified extension points.

##### Visitor

[Not implemented](#)

Move operations on a family of types into a separate visitor while keeping the element structure relatively stable.
### Artificial Intelligence

Groups: 7 · Skills: 34

[Not implemented](#)

Examines systems performing recognition, prediction, generation, and other forms of intelligent information processing. Includes explicitly programmed rules and trained models, how they work, prompting, technical trade-offs, and reliability verification.

#### AI Fundamentals

Skills: 6

[Not implemented](#)

Explores the roles of programmed rules and training data in AI, common task objectives, and limits of result reliability. Classify tasks by their desired outputs, not only by a model's name or underlying mathematical technique.

##### Distinguish Rules from Trained Models

[Not implemented](#)

Distinguish systems governed by explicitly programmed rules from models whose parameters are adjusted through training on data. Both use algorithms and may be combined in one product; not every AI system necessarily relies on machine learning.

##### Explain Learning from Examples

[Not implemented](#)

Show how training adjusts model parameters using examples and a quality criterion to generalize to new data. Memorizing training examples alone does not establish reliable performance on unseen data.

##### Classify AI Tasks

[Not implemented](#)

Determine whether a task aims to recognize a category or property of existing data, predict an unknown or future value, or generate new content. Object recognition in a photo, demand forecasting, and image generation have distinct desired outcomes. A generative language model also predicts successive tokens internally, so its mechanism is not identical to the task's objective.

##### Identify a Potential AI Error

[Not implemented](#)

Recognize signs of an unreliable response, such as implausibly specific details, contradictions with context, or unverifiable references. A confident tone is not evidence of truth; material claims need independent verification.

##### Explain Generative AI

[Not implemented](#)

Describe how models create new text, images, or other content based on input context and patterns learned during training.

##### Explain Predictive AI

[Not implemented](#)

Describe estimating a numerical value, category, or event probability from known features, for example forecasting rainfall.

#### Imitation and Understanding

Skills: 2

[Not implemented](#)

Discussions of machine intelligence distinguish outward similarity of responses from claims of internal understanding. A behavioral criterion and a philosophical thought experiment ask different questions; neither alone proves or disproves consciousness.

##### Explain the Turing Test

[Not implemented](#)

Explain Alan Turing's proposed approach to evaluating whether a machine can produce dialogue that a person cannot distinguish from human responses under test conditions. Successful imitation does not establish consciousness or comprehensive understanding.

##### Explain Searle's Chinese Room

[Not implemented](#)

Analyze John Searle's thought experiment about rule-based symbol manipulation without necessarily understanding their meaning. Distinguish a debated philosophical argument from a proven fact about the internal states of all AI systems.

#### Prompting

Skills: 7

[Not implemented](#)

Specifying requirements for an AI request: objective, context, constraints, desired output format, and iterative refinement. Prompt components can vary independently; checking whether answers are true belongs to AI reliability.

##### Specify a Prompt Objective

[Not implemented](#)

Give a model a defined task and desired outcome, such as 'compare three explanations and highlight their differences,' instead of 'tell me something.' The objective specifies the work, not the output format.

##### Provide Prompt Context

[Not implemented](#)

Supply relevant facts, intended audience or use, and conditions needed to interpret a request correctly. Context helps but should exclude unnecessary personal information.

##### Specify Prompt Constraints

[Not implemented](#)

Define the boundaries of acceptable output, such as permitted sources, length, exclusions, or a prohibition on inventing missing data. Unlike the objective, constraints define which responses are not acceptable.

##### Specify an Output Format

[Not implemented](#)

Describe the required structure, such as a table with named columns or JSON with defined fields, without confusing formatting with factual correctness.

##### Refine a Prompt Based on Results

[Not implemented](#)

Compare output with the original goal and adjust specific parts of a prompt responsible for discrepancies. Rewording cannot substitute for fact-checking the model's claims.

##### Specify a Role in a Prompt

[Not implemented](#)

State a desired subject-matter role or response style without treating the declared role as evidence of actual professional experience.

##### Break a Complex Prompt into Subtasks

[Not implemented](#)

Split a multi-stage request into sequential prompts with verifiable intermediate outcomes while preserving the original objective.

#### Model Architectures and Resources

Skills: 5

[Not implemented](#)

Compare AI model characteristics: activation of components, numerical precision, latency, memory requirements, and fit for a task. These depend on the model and execution conditions, not on a universal AI ranking.

##### Compare Dense and MoE Models

[Not implemented](#)

Distinguish an architecture activating all relevant dense computation from a mixture-of-experts architecture where a router activates only some expert blocks. Total parameter count is not the same as the number of parameters active for each token.

##### Explain Quantization

[Not implemented](#)

Show how representing weights or activations with fewer bits reduces memory use and may improve speed, while potentially changing numerical accuracy and output quality. This is a trade-off, not cost-free compression.

##### Compare Response Latency

[Not implemented](#)

Compare the time between submitting a request and receiving the first useful output under consistent conditions. Time to first token is different from subsequent generation speed: a short initial delay does not guarantee that a long response finishes quickly.

##### Compare Model Memory Requirements

[Not implemented](#)

Estimate RAM or GPU memory needed for model weights and runtime working data at a specified numerical precision and context length. Disk file size is not the same as peak runtime memory use.

##### Choose a Model for a Task

[Not implemented](#)

Weigh independent constraints for a scenario—accuracy, latency, available memory, cost, and privacy—and justify the selection. No single model is best on every criterion simultaneously.

#### Reliability and Responsible AI Use

Skills: 4

[Not implemented](#)

Protecting data and identifying unreliable results or unfair consequences of AI use. Fact-checking, bias assessment, and human accountability address different risks.

##### Verify Facts in an AI Response

[Not implemented](#)

Identify verifiable claims from model output and compare them with independent trustworthy sources, checking provenance, date, and context. An AI response cannot confirm itself or another retelling of the same response.

##### Recognize AI Bias Risks

[Not implemented](#)

Notice how training data or deployment rules may produce systematically different outcomes for groups or individuals. One erroneous output does not necessarily establish systematic bias.

##### Protect Personal Data in Prompts

[Not implemented](#)

Identify information about individuals that should not be disclosed to an external AI service and remove or generalize it without defeating the task objective. Public access to a model does not imply that submitted data stays private.

##### Explain Human Responsibility for AI-Assisted Decisions

[Not implemented](#)

Distinguish an automatically generated recommendation from a decision for which a person or organization is accountable. Verification of grounds, the ability to contest results, and control over final action matter.

#### Language Model Tokens and Context

Skills: 6

[Not implemented](#)

Language models process tokens, evaluate possible continuations, and operate within a limited context window; model parameter count does not determine context length.

##### Explain Tokens

[Not implemented](#)

Understand a token as a unit defined by a tokenizer: single letters, word fragments, whole words, or punctuation may be encoded in different ways.

##### Distinguish Tokens, Characters, and Words

[Not implemented](#)

Show that a word may contain several tokens and a token may contain several characters; the segmentation depends on the model and language.

##### Explain Next-Token Selection

[Not implemented](#)

A model computes a probability distribution over continuations given the available context, then incorporates the chosen token into the context for the next step.

##### Distinguish Sampling from Choosing the Most Likely Token

[Not implemented](#)

Compare decoding by sampling from a probability distribution with deterministically selecting its highest-probability continuation.

##### Explain a Language Model's Context Window

[Not implemented](#)

Identify the limit on how many tokens a system can use for a request and understand that different models have different limits.

##### Explain Context Window Overflow

[Not implemented](#)

Explain that when the limit is exceeded, a service may reject the request, truncate earlier content, or summarize parts of it.

#### Safe Interaction with AI

Skills: 4

[Not implemented](#)

Recognizing unjustified model confidence, excessive agreement, dependency risks, and the need for continued human judgment.

##### Recognize AI Sycophancy

[Not implemented](#)

Distinguish evidence-based support from unfounded praise and reinforcement of an incorrect belief; a positive tone does not establish correctness.

##### Explain Risks of Overreliance on AI

[Not implemented](#)

Explain why extended conversations with chatbots should not replace interactions with people, independent checks, or asking for help.

##### Identify Untrusted Instructions in AI Input

[Not implemented](#)

Distinguish the content of an external document being analyzed from the user's instructions; third-party text should not automatically control system behavior.

##### Protect Secrets When Using AI

[Not implemented](#)

Avoid entering passwords, confirmation codes, access keys, or confidential information into chatbots without proper authorization and verified safeguards.
### Robotics and Automation

Groups: 2 · Skills: 8

[Not implemented](#)

Programming the control logic of physical or simulated actuators in response to sensor readings. Engineering may also study mechanical design; this taxonomy emphasizes the relationship among information, rules, and actions.

#### Robotic System Components

Skills: 4

[Not implemented](#)

Information-processing roles of sensors, controllers, and actuators: receive a reading, apply a control rule, and change a state. This examines functional relationships rather than mechanical component design.

##### Identify a Sensor's Purpose

[Not implemented](#)

Determine which physical quantity or environmental state a sensor converts into a signal for the controller, such as distance, light, or temperature. A sensor supplies information but does not itself make control decisions.

##### Identify an Actuator's Purpose

[Not implemented](#)

Recognize a device that receives a command and performs a physical action: a motor rotates a wheel while an LED changes light output. An actuator is not a sensor even if connected to the same controller.

##### Identify a Robot Controller

[Not implemented](#)

Explain the component that reads inputs, executes programmed rules, and sends commands to actuators. The controller connects information with action and need not resemble a large standalone computer.

##### Model the Sensor-to-Action Relationship

[Not implemented](#)

Relate a measured condition, a controller rule, and an actuator command, such as 'stop the motor if distance falls below the threshold.' Distinguish the sensor reading from the programmed decision.

#### Robot Control

Skills: 4

[Not implemented](#)

Construct and adjust commands for movement, obstacle response, and repeated robot operations. Unlike general programming, these algorithms interact with a physical or simulated environment.

##### Create a Robot Movement Sequence

[Not implemented](#)

Plan the ordered movement, orientation, and stopping commands that take a robot from its initial to its target state, accounting for direction. This is a motion-control problem, not simply a sequence of abstract words.

##### Implement Robot Obstacle Response

[Not implemented](#)

Link a sensor reading or simulated state to a maneuver such as stopping, turning, or bypassing an obstacle, and verify the action occurs only under the intended condition.

##### Configure a Repeated Robot Action

[Not implemented](#)

Control the number of repetitions or termination condition of a physical or simulated operation, such as repeatedly checking a sensor while moving. Account for environmental changes between iterations.

##### Debug Robot Behavior

[Not implemented](#)

Determine whether a navigation or response error arises from a sensor reading, controller condition, or actuator command, and correct the appropriate rule. Debugging requires comparing expected and observed actions.
### Digital Safety and Responsibility

Groups: 4 · Skills: 20

[Not implemented](#)

Protection of personal information and accounts, respect for others, and the consequences of digital technologies. Designing and testing digital interface UX belongs to a separate Informatics domain.

#### Privacy

Skills: 5

[Not implemented](#)

Identifying personal information, deciding who may receive it, and evaluating long-term consequences of disclosure. Privacy is not identical to password protection or responding to fraud.

##### Identify Personal Data

[Not implemented](#)

Recognize information that identifies a person directly or in combination: name with address, photograph, contact details, or location. Even a seemingly harmless fact may be personal in context.

##### Choose Safe Data-Sharing Methods

[Not implemented](#)

Select an appropriate audience and channel, considering privacy, permissions, and the risk of forwarding. Public information may remain accessible even after deletion from its original service.

##### Recognize a Digital Footprint

[Not implemented](#)

Connect online actions with records retained by services or other people, such as posts, comments, and access history. Visibility only to friends does not ensure the consequences disappear.

##### Distinguish a Private Chat from a Public Link

[Not implemented](#)

Check who can access a shared conversation or document; do not automatically assume a link is private.

##### Explain Data Re-identification

[Not implemented](#)

Explain how supposedly anonymized records can sometimes be linked to a person through external clues, such as habitual routes and times.

#### Account Protection

Skills: 9

[Not implemented](#)

Reducing unauthorized access involves strong passwords, independent authentication factors, phishing detection, link risk assessment, address verification, and safe responses to contacts. Technical security settings and behavioral choices reinforce one another.

##### Create a Strong Passphrase

[Not implemented](#)

Select a sufficiently long, unpredictable, account-specific sequence of words or symbols without readily accessible personal details. Do not require daily password changes without a reason or mistake character variety for overall security.

##### Explain Multi-Factor Authentication

[Not implemented](#)

Explain how different factor categories can be combined for sign-in: knowledge (password), possession (device or security key), and biometrics. Two passwords are not two independent factors; MFA lowers risk but cannot make an account invulnerable.

##### Configure Multi-Factor Authentication

[Not implemented](#)

In a safe practice or personal environment, choose and activate a supported additional factor and plan account recovery. Distinguish configuring protection from merely explaining it; never require disclosure of secret codes.

##### Recognize a Phishing Message

[Not implemented](#)

Identify attempts to elicit passwords, confirmation codes, or secrets through impersonation, urgency, threats, or fake forms. This examines intent and social-engineering tactics; technical domain checks and safe responses are separate skills.

##### Respond to Suspicious Digital Contact

[Not implemented](#)

Choose an immediate safe response to an unclear request or online pressure: do not reveal secrets, stop engaging, verify identity through an independent channel, and contact a trusted adult or official support.

##### Explain Why Software Updates Matter

[Not implemented](#)

Explain how trusted updates can patch vulnerabilities and defects exploited by attackers; distinguish official updates from fake prompts to install unfamiliar files.

##### Assess the Risk of Following a Link

[Not implemented](#)

Based on context, requested actions, and warning signs, predict possible consequences such as fake login forms, suspicious downloads, or other unwanted behavior. Opening a page does not automatically cause infection; identifying the true domain is a different skill.

##### Verify a Website's Domain

[Not implemented](#)

Determine the actual domain in a link, separating it from subdomains, paths, and button labels, and detect impersonation through minor spelling changes or lookalike characters. In `facebook.com.example.org` the domain is `example.org`; visual similarity or HTTPS does not prove that an operator is trustworthy.

##### Assess an Email Sender's Authenticity

[Not implemented](#)

Recognize that a sender's displayed name and image do not prove identity; check the address and an independent communication channel.

#### Ethics of Digital Interaction

Skills: 4

[Not implemented](#)

Respect for other users and creators' rights, including recognizing bullying, attribution, and licensing conditions. Social norms and copyright differ from technical account protection.

##### Identify Appropriate Online Behavior

[Not implemented](#)

Distinguish respectful communication from repeated humiliation, threats, and bullying. Disagreement alone is not cyberbullying, and anonymity does not make harmful messages acceptable.

##### Attribute Digital Materials

[Not implemented](#)

When using another person's text, images, sound, or code, credit the creator and original source in an appropriate format. Attribution does not replace permission and does not override licensing terms.

##### Choose a Safe Way to Report a Problem

[Not implemented](#)

Determine when to contact a trusted adult, moderator, or official support and what minimum information to share without exposing other people's data. Selecting a reporting recipient differs from the immediate response to a dangerous message.

##### Distinguish Digital Content Licenses

[Not implemented](#)

Read basic permissions and restrictions for copying, changing, and sharing text, images, sounds, or programs. Free access, the public domain, and open licenses are different legal conditions.

#### Social and Environmental Impact of Computing

Skills: 2

[Not implemented](#)

Digital systems may affect social groups and the environment through uneven benefits and harms, energy consumption, material use, and electronic waste. Evaluation requires a specific context, not an abstract 'good/bad' label.

##### Assess an Algorithm's Impact on User Groups

[Not implemented](#)

Compare whether an automated rule produces different consequences for people with different characteristics or needs, and explain potential reasons. An identical formal rule does not necessarily yield an equally fair outcome.

##### Assess Computing's Environmental Impact

[Not implemented](#)

Connect devices and services with energy consumption, resource extraction, hardware lifespan, and electronic waste. Comparing alternatives requires more than electricity used during one run.
### Digital Product UX

Groups: 3 · Skills: 8

[Not implemented](#)

An Informatics perspective on people's experience with programs, digital devices, and electronic interfaces: goals, navigation, feedback, accessibility, usability, and ethics. Engineering separately studies UX for physical products and engineering systems; a shared discipline name does not imply shared Skill identities across textbooks.

#### Digital Interaction Design

Skills: 4

[Not implemented](#)

Designing user action flows in applications and digital devices, understandable transitions, status feedback, and safeguards against common errors.

##### Identify a Digital Product User's Goal

[Not implemented](#)

Determine the specific action a person intends to perform in a program or on a digital device, distinguishing the user goal from internal technical system operations.

##### Design Digital Interface Navigation

[Not implemented](#)

Organize transitions among screens, sections, or states so users can find desired actions and understand their current position within a digital product.

##### Design Digital Interface Feedback

[Not implemented](#)

Provide clear feedback about taps, loading, errors, and completed actions so people need not guess whether the system has responded.

##### Prevent Common Digital Interaction Errors

[Not implemented](#)

Identify actions that are easy to perform incorrectly and choose digital safeguards, such as clear labels, input validation, or confirmation before irreversible operations.

#### Accessibility

Skills: 2

[Not implemented](#)

Address different ways people perceive and operate interfaces and verify actual usability rather than judging only visual appeal.

##### Identify Needs of Users with Different Abilities

[Not implemented](#)

Determine how people with different vision, hearing, motor abilities, or input methods access information and control a digital product. Mouse-only controls, for example, create barriers for keyboard users.

##### Test Digital Interaction Accessibility

[Not implemented](#)

Test concrete interaction methods without a mouse, without sound, or with enlarged text and record barriers. No complaints or an attractive design do not prove accessibility.

#### Experience Evaluation and Ethics

Skills: 2

[Not implemented](#)

Test whether an interface supports real tasks and identify designs that covertly restrict users' informed choices.

##### Test Digital Interface Usability

[Not implemented](#)

Give a person a concrete task on a device or in an app and observe whether they find the necessary actions without hints; identify confusing transitions and messages.

##### Identify Manipulative Interface Patterns

[Not implemented](#)

Recognize designs that covertly steer people toward unwanted choices, such as confusing cancellation, preselected add-ons, or deceptive button wording. Distinguish persuasive design from hidden restrictions on informed choice.
### Digital Creativity and Games

Groups: 3 · Skills: 10

[Not implemented](#)

Creating and editing digital content, game mechanics and rules, and procedural generation of resources. Digital product UX has its own domain, while the use of musical or engineering learning tools does not in itself create Informatics skills.

#### Digital Materials

Skills: 3

[Not implemented](#)

Creating, modifying, and selecting tools for digital outcomes with specific purposes. Editing an existing file, for example, is a distinct action from choosing a tool for future work.

##### Create a Simple Digital Artifact

[Not implemented](#)

Combine text, images, or other elements into a finished artifact with a defined message and audience, such as an explanatory card. Meaningful coherence matters more than a particular editor.

##### Edit a Digital Artifact

[Not implemented](#)

Make purposeful changes to an existing file while preserving intended meaning: correct a caption, reorder elements, or resize an image. This is distinct from creating a new artifact.

##### Choose a Digital Creative Tool

[Not implemented](#)

Match a tool's technical capabilities to desired outcomes, such as distinguishing an image editor from a spreadsheet tool. This competency does not require Informatics to teach the internal structure of tools students happen to use in other subjects.

#### Game Design

Skills: 3

[Not implemented](#)

Define game rules, create mechanics, and evaluate their effects on gameplay. Describing a rule, implementing it as interaction, and testing balance are related but independently assessable.

##### Formulate a Game Rule

[Not implemented](#)

State a condition, permitted action, or consequence clearly enough that players interpret it consistently—for example, when points are awarded and when a round ends.

##### Design a Game Mechanic

[Not implemented](#)

Define the relationship between a player's action, a change in game state, and feedback: pressing a control initiates movement; collision with an object changes the score. A mechanic makes a rule operative, not just a written description.

##### Test the Balance of a Simple Game

[Not implemented](#)

Test whether rules and limitations make one choice always winning or render a game impossible to finish; compare outcomes with the design goal. Balance depends on game objectives; equal odds for every action are not universal requirements.

#### Procedural Generation

Skills: 4

[Not implemented](#)

Produce images, sounds, objects, or game worlds through rules and parameters instead of storing every finished variant. Distinguish parameter changes, reproducibility through a seed, and resource trade-offs.

##### Explain Procedural Resource Generation

[Not implemented](#)

Distinguish storing a finished image, sound, or world from running rules that generate one from parameters. Compact rules can create a large resource but require computation at generation time.

##### Configure Generator Parameters

[Not implemented](#)

Determine how changing object count, color palette, or another parameter alters generated results while the algorithm stays the same. Parameter adjustment is not rewriting the generation rules.

##### Reproduce Results Using a Generation Seed

[Not implemented](#)

Explain why the same pseudorandom seed, algorithm, parameters, and call order produce identical results. Changing any of these may break reproducibility.

##### Compare Resource Storage and Generation

[Not implemented](#)

Assess trade-offs between stored data volume, compact rule descriptions, initialization time, and CPU/GPU/RAM use. Procedural generation is not the same as lossless or lossy compression of a ready-made file.
### Data Structures

Groups: 8 · Skills: 34

[Not implemented](#)

Organization of values in sequences, stacks, queues, dictionaries, sets, trees, and graphs, including access, modification, and selection of appropriate structures. A structure is not an algorithm for processing it.

#### Sequences

Skills: 7

[Not implemented](#)

Ordered collections including arrays, lists, and linked representations. Indexing, insertion, removal, and traversal have different requirements and costs.

##### Explain Array Structure

[Not implemented](#)

An array holds items at defined positions and supports index-based access; rules for length and element types depend on the language.

##### Explain List Structure

[Not implemented](#)

A list represents an ordered collection with element operations, regardless of whether its underlying representation uses an array or linked nodes.

##### Distinguish Arrays from Linked Lists

[Not implemented](#)

Indexed arrays and chains of linked nodes offer different access methods and modification costs.

##### Access a Sequence Element by Index

[Not implemented](#)

Retrieve an element of an ordered collection by its position, accounting for indexing origin and valid bounds in the selected language.

##### Insert an Element into a Sequence

[Not implemented](#)

Add a new item at a specified position and predict how it affects the order of other items or links between nodes.

##### Remove an Element from a Sequence

[Not implemented](#)

Delete an item at a position while preserving the proper order and accessibility of the remaining elements.

##### Traverse a Sequence

[Not implemented](#)

Visit a collection's elements in order from beginning to end without skipping positions or performing unnecessary repetitions.

#### Stack

Skills: 3

[Not implemented](#)

A structure using last-in, first-out (LIFO) access to its top element. Pushing, popping, and handling an empty stack are distinct operations.

##### Explain LIFO

[Not implemented](#)

In a stack, the most recently added element is removed first, like the top plate in a pile; this does not mean sorting by value.

##### Push an Element onto a Stack

[Not implemented](#)

Use `push` to place a new value on top without changing the order of previously added elements.

##### Pop an Element from a Stack

[Not implemented](#)

Use `pop` to remove the top value while accounting for the special case of an empty stack.

#### Queue

Skills: 3

[Not implemented](#)

A structure following first-in, first-out (FIFO) order: elements join at the back and leave from the front.

##### Explain FIFO

[Not implemented](#)

In a queue, the earliest added element is served first unless separate priority rules apply.

##### Enqueue an Element

[Not implemented](#)

Add a value to the back without rearranging those already waiting.

##### Dequeue an Element

[Not implemented](#)

Remove the front element of a FIFO structure, preserving the order of the rest and handling an empty queue.

#### Sets

Skills: 4

[Not implemented](#)

Collections of unique elements supporting membership tests, union, and intersection. Positional indexing is not an inherent property of a set.

##### Explain Set Structure

[Not implemented](#)

A set consists of unique elements under a defined equality rule; inserting an existing value does not add another copy.

##### Test Set Membership

[Not implemented](#)

Determine whether a value belongs to a set without requiring its positional index.

##### Compute Set Union

[Not implemented](#)

Create the set of all values that occur in either of two sets, eliminating duplicates.

##### Compute Set Intersection

[Not implemented](#)

Find only values shared by two sets, distinguishing intersection from union.

#### Dictionaries

Skills: 3

[Not implemented](#)

Key-to-value mappings supporting lookup, updates, and absent-key handling. A key need not be a positional sequence index.

##### Explain Dictionary Structure

[Not implemented](#)

A dictionary maps keys to values; keys need not be numeric or correspond to array positions.

##### Retrieve a Dictionary Value by Key

[Not implemented](#)

Find an entry using its key and handle the case in which the key does not exist.

##### Update a Dictionary Value

[Not implemented](#)

Replace the value associated with an existing key without accidentally duplicating the key.

#### Trees

Skills: 4

[Not implemented](#)

Trees organize nodes and edges into acyclic hierarchies; binary search trees also impose an ordering rule on keys.

##### Explain Tree Structure

[Not implemented](#)

Identify roots, nodes, edges, and parent–child relationships within a hierarchy; trees need not be binary.

##### Distinguish Leaf and Internal Tree Nodes

[Not implemented](#)

A leaf has no children; an internal node has at least one child. The distinction follows the structure, not the node's name.

##### Find a Path in a Tree

[Not implemented](#)

Identify the actual sequence of connected nodes between two positions without inventing nonexistent links.

##### Explain Binary Search Trees

[Not implemented](#)

Keys in a binary search tree obey an ordering rule across subtrees that is not required of an arbitrary tree.

#### Graphs

Skills: 6

[Not implemented](#)

Graphs describe vertices and connections, including cycles, directed relationships, and numeric edge weights.

##### Explain Graph Structure

[Not implemented](#)

Represent a road or social network as vertices and edges without assuming every graph is a tree.

##### Distinguish Directed and Undirected Graphs

[Not implemented](#)

Determine whether an edge permits travel only one way or represents a connection that can be traversed in both directions.

##### Distinguish Weighted and Unweighted Graphs

[Not implemented](#)

Identify how numeric edge weights can represent time, distance, or cost rather than simply whether a link exists.

##### Identify Adjacent Vertices

[Not implemented](#)

Find vertices directly connected to a given vertex and distinguish them from vertices reached through intermediate nodes.

##### Find a Path in a Graph

[Not implemented](#)

Construct a sequence of connected vertices from start to goal while respecting edge directions.

##### Distinguish Trees from Graphs with Cycles

[Not implemented](#)

A tree has no cycles, whereas a general graph may have cycles and multiple alternative paths between vertices.

#### Structure Selection

Skills: 4

[Not implemented](#)

Select data structures based on required operations and evaluate access, insertion, and storage costs. The comparison concerns data organization rather than only algorithms that process it.

##### Choose a Structure for Required Operations

[Not implemented](#)

Identify whether a task needs positional indexing, uniqueness, key lookup, FIFO/LIFO order, or hierarchical relationships.

##### Compare Element Access Costs

[Not implemented](#)

Compare typical direct access in an indexed array with traversal through a linked list to the desired node.

##### Compare Collection Insertion Costs

[Not implemented](#)

Explain why an array may require moving elements while a linked list may require changing links, although the insertion point still needs to be located.

##### Distinguish Data Structures from Algorithms

[Not implemented](#)

A data structure defines how information is organized and accessed; an algorithm specifies a sequence of operations on that information.
### Algorithms

Groups: 5 · Skills: 23

[Not implemented](#)

Repeatable procedures for computational problems, organized by purpose: searching, sorting, collection processing, general construction, and analysis. Every named elementary algorithm has its own independent Skill; prerequisites and performance assessments may be separate skills within the same group. Concrete models can explain algorithms without imposing an age limit on the taxonomy.

#### Construction

Skills: 6

[Not implemented](#)

General ways of specifying an algorithm's goal, sequence, conditions, and repetition, regardless of purpose. Distinguish describing a correct procedure from implementing it in a programming language.

##### Define an Algorithm's Goal

[Not implemented](#)

Specify a verifiable outcome and acceptable inputs, such as finding the index of a target number in a sorted array or establishing its absence. Separate the objective from the steps of the solution.

##### Construct a Sequential Algorithm

[Not implemented](#)

Specify a finite ordered sequence of actions in which each uses the state left by the preceding step, without branching. This is a logical solution description; coding the steps as executable instructions belongs to Programming.

##### Design Conditional Branching

[Not implemented](#)

Specify mutually exclusive or priority-based paths using testable conditions, including the action taken when a condition is false. For example, choose one half of a search range after comparing numbers.

##### Design Repetition

[Not implemented](#)

Define the body of a repeated procedure, its continuation or termination condition, and state changes between steps. This prevents infinite loops and distinguishes repetition from copying identical instructions.

##### Implement a Recursive Algorithm

[Not implemented](#)

Independently construct a recursive solution with a valid base case and progressively smaller subproblems so calls terminate. Test boundary inputs; being able to explain existing recursion is not equivalent to designing an algorithm.

##### Compare Algorithms Against Requirements

[Not implemented](#)

Compare correct approaches to the same problem based on constraints such as sortedness, number of checks, resources, and clarity. An algorithm with fewer steps may be unsuitable without its prerequisite.

#### Search

Skills: 6

[Not implemented](#)

Methods of locating target items: scanning in order, halving a sorted range, or traversing an ordered tree. Each named algorithm has its own Skill, with prerequisite and comparison skills where independently meaningful.

##### Apply Linear Search

[Not implemented](#)

Inspect items one by one until the target is found or the collection ends; prior sorting is unnecessary. In the no-match case the entire collection may need checking.

##### Apply Binary Search

[Not implemented](#)

Inspect the middle element of a sorted range, discard the half that cannot contain the target, and repeat until a match or an empty range.

##### Identify Binary Search Prerequisites

[Not implemented](#)

Verify that elements are sorted under a consistent criterion and support less-than/greater-than comparisons; without these properties, eliminating half the candidates may be incorrect.

##### Predict Search Scaling

[Not implemented](#)

Compare 100 and 1,000 possible positions: the binary search bound grows from 7 to 10 checks although the dataset is ten times larger; explain this through repeated approximate halving.

##### Apply Binary Tree Search

[Not implemented](#)

Compare the key with the current tree node and move into the appropriate subtree until the value is found or the path ends.

##### Compare Search Methods by Check Count

[Not implemented](#)

Compare the number of opened positions in linear and binary search over the same dataset, distinguishing one lucky result from the algorithm's general guarantees.

#### Sorting

Skills: 4

[Not implemented](#)

Put elements in order according to a criterion using successive selection, insertion into a sorted prefix, or swapping adjacent items. Each method has its own independently assessable Skill.

##### Explain a Sorting Criterion

[Not implemented](#)

Define a key and direction such as ascending numbers or alphabetic names; all comparisons in the algorithm must follow that rule.

##### Apply Selection Sort

[Not implemented](#)

On each pass, find the smallest remaining item and move it to the next position in the sorted prefix.

##### Apply Insertion Sort

[Not implemented](#)

Take the next item, find its correct place in an already sorted prefix, and shift larger values to the right.

##### Apply Bubble Sort

[Not implemented](#)

Compare adjacent elements and swap out-of-order pairs, repeating passes until the entire collection is correctly sorted.

#### Collection Processing

Skills: 4

[Not implemented](#)

Step-by-step procedures that aggregate values while traversing a collection, such as counting, totaling, minimum, and maximum. Objects or cards can illustrate the operations.

##### Apply Element Counting

[Not implemented](#)

Traverse a collection, incrementing a counter for every item that meets the given condition.

##### Apply Sum Accumulation

[Not implemented](#)

Traverse a numeric collection, adding each value to an accumulator initialized to zero.

##### Apply Maximum Finding

[Not implemented](#)

Maintain the largest value seen so far and update it when a larger number appears.

##### Apply Minimum Finding

[Not implemented](#)

Maintain the smallest value seen so far and update it when a smaller number appears.

#### Analysis

Skills: 3

[Not implemented](#)

Compare procedures using worst-case operation bounds, time growth classes, and memory costs. These are cross-cutting ways to assess algorithms, not additional algorithms themselves.

##### Estimate an Algorithm's Worst Case

[Not implemented](#)

Determine an upper bound on checks for a given strategy and rules, without confusing it with the steps taken in one lucky execution.

##### Distinguish Linear and Logarithmic Growth

[Not implemented](#)

Explain the difference between operations that grow approximately in proportion to input size and those tied to repeated halving; formal `O(n)` and `O(log n)` notation can deepen the analysis.

##### Explain Time–Memory Trade-offs

[Not implemented](#)

Compare algorithms where fewer operations may require extra intermediate data; speed is not the only criterion for a sound choice.
### Git and Open Source

Groups: 3 · Skills: 11

[Not implemented](#)

A distinct subject area covering software change history, collaboration in repositories, and licensed cooperative software creation rather than an automatic component of every digital lesson.

#### Git Version Control

Skills: 6

[Not implemented](#)

Git provides a history of commits and branches, while change-review processes help combine the work of multiple contributors.

##### Explain a Repository

[Not implemented](#)

A repository holds a project and its history, allowing earlier versions and author contributions to be examined.

##### Explain a Commit

[Not implemented](#)

A Git commit captures a coherent state of changes with an identifier and links to preceding history.

##### Explain a Branch

[Not implemented](#)

A branch represents a line of development on which commits can be created without immediately changing the main history.

##### Explain a Pull Request

[Not implemented](#)

A pull request on a collaborative development platform organizes review of proposed changes before they are merged.

##### Explain Branch Merging

[Not implemented](#)

Merging combines lines of history; incompatible overlapping changes require conflict resolution.

##### Distinguish Local and Remote Repositories

[Not implemented](#)

A local repository supports independent committing, while a remote repository enables sharing between contributors.

#### Open Source

Skills: 2

[Not implemented](#)

Software openness depends not only on visibility of source code but also on rights to use, modify, and distribute it.

##### Explain Open Source

[Not implemented](#)

An open-source license permits studying, using, modifying, and redistributing code under its defined conditions.

##### Distinguish Open Source from Publicly Visible Code

[Not implemented](#)

Being able to read a program's source does not automatically grant permission to modify or redistribute it.

#### Collaborative Digital Product Development

Skills: 3

[Not implemented](#)

Joint development requires agreed contribution and review rules, coordination among contributors, and tracking versions. Collaboration applies to public and private repositories and does not itself determine licensing.

##### Explain Contribution Guidelines

[Not implemented](#)

Rules for contributions, code review, and discussing changes help teams maintain a shared project.

##### Coordinate Changes in a Shared Digital Project

[Not implemented](#)

Agree on ownership of changes, merge order, and resolution when contributors edit the same area. Collaboration is not just placing files in a common folder.

##### Track Digital Product Versions

[Not implemented](#)

Compare successive file or project states, identify when changes appeared, and restore earlier saved versions where necessary. Multiple files labeled 'final2' do not necessarily form a transparent history.
### History of Programming

Groups: 2 · Skills: 9

[Not implemented](#)

Traces the origins of algorithmic ideas, programming practices, software tools, networking solutions, and computing machines in historical context. Recognizes individual and collaborative contributions, including women's long-undervalued work, without making every biography a separate competency.

#### Key Contributions

Skills: 6

[Not implemented](#)

Historical developments in program descriptions, practical machine programming, compilation, software reliability, network protocols, and computability can be examined by the problems they solved and their lasting importance. Specific people and teams remain required examples in the Subject Proposition.

##### Explain the Origins of Programming

[Not implemented](#)

Use descriptions for Charles Babbage's Analytical Engine to show how machine operations could be specified before modern computers existed. Examine Ada Lovelace's work and her vision of computation extending beyond ordinary arithmetic.

##### Explain Early Electronic Programming

[Not implemented](#)

Explain how teams developed and tested programs for the first large electronic computers despite complex methods of entering instructions. The six ENIAC programmers exemplify substantial contributions that went underrecognized for decades.

##### Explain the Development of Compilers

[Not implemented](#)

Explain how translating more human-readable program notation into machine instructions changed programming. Include the contributions of Grace Hopper and other researchers to early compilers and languages without confusing a compiler with the language itself.

##### Explain the Development of Software Reliability

[Not implemented](#)

Use spaceflight software to explain error handling, execution priorities, and recovery from failures. Include Margaret Hamilton's leadership of Apollo software work and the collaborative nature of its development.

##### Explain the Elimination of Network Loops

[Not implemented](#)

Use the history of local-area network bridges to explain how redundant physical links can create frame-forwarding loops and how Spanning Tree Protocol creates a loop-free logical topology. Credit Radia Perlman's contribution without mistaking STP for an IP routing algorithm.

##### Explain Computability Theory

[Not implemented](#)

Describe the idea of a formal model of universal computation and limits on which problems are algorithmically solvable. Alan Turing's work is a principal historical example; his cryptanalysis and the debate over machine intelligence are separate topics.

#### Machines and Cryptanalysis

Skills: 3

[Not implemented](#)

The development of computing devices and specialized cryptanalytic machines illustrates how formal instructions and mechanized checking addressed historical problems. Philosophical issues of imitation and understanding belong to AI instead.

##### Explain Historical Cryptanalysis Methods

[Not implemented](#)

Explain how mathematical analysis of patterns and systematic elimination of possibilities helped find cipher-machine settings. Historical examples include Polish cryptanalysts, Joan Clarke, Alan Turing, Gordon Welchman, and other specialists at Bletchley Park.

##### Explain the Purpose of the Bombe

[Not implemented](#)

The Bombe was an electromechanical machine used to test possible Enigma key settings, built upon earlier Polish cryptanalytic work.

##### Explain the Development of Programmable Computers

[Not implemented](#)

Compare how storage of instructions, selection of operations, and execution control evolved from mechanical concepts to electronic machines. This is the history of devices and their architecture, distinct from early hands-on programming techniques.