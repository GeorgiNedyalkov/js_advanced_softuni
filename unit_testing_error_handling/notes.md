# Unit Testing and Error Handling

## Agenda:

1. Error handling

- Error Types
- Exceptions & try/catch block

2. Unit Testing

- The AAA pattern

3. Mocha & Chai

## Error Handling

The code we write solves problem.

The work of a function is that it should:

- Do what its _name_ suggests
- Indicate a _problem_
- Any other behavior is _incorrect_ (thus must throw error).

If a function failes to do what its name suggests, it should:

- Return a special value (e.g. _undefined_, _false_, _-1_)
- Throw an _exception / error_
- Exceptions inducate _abnormal_ execution _circumstances_

### Types of Errros

There are three types of errors in programming:

- _Syntaxt Errors_ - during parsing
- _Runtime Errors_ - occur during execution.
  - After compilation, when the application is running.
- _Logical Errors (Bugs)_ - occur when a mistake has been made in the logic of the script and the expected result is incorrect.

- _Exception_ - a function unable to do its work (_fatal error_): RangeError, TypeError, ReferenceError.

- _Special Values_: NaN, Invalid Date

### Throwing Errors (Exceptions)

The throw statements let's you create custom errors:

- General Error
- Range Error
- Type Error
- Reference Error

## Unit Testing

- A _unit test_ is a piece of code that checks whether a certain functionality _works as expected_.
- Allows developers to see _where_ and _why_ errors occur.

It enables:

- _Easier maintenance_ of the code base: Bugs are found asap.
- _Faster development_: TDD Test Driven Development. Tests before code.
- _Automated way to find code wrongness_: if most features have tests, running them shows their correctness.

### Unit Test structure

- The _AAA_ pattern: _Arrange_, _Act_, _Assert_
- Arrange all necessary preconditions and inputs.
- Act on the object or methods under test.
- Assert that the obtained results are what we expect.

## Modules

Definition, Import and Export

### Modules

- A _set of functions_ to be included in applications

### Ideology of good tests

1. Bad cases - function doesn't have needed correct parameters to work
2. Good cases - the function works
   2.5 Check with working values - more than 1 test to cover for defaults
   2.6 Check edge cases for correct values
   2.7 If there are a small consisted amount of correct return values.
3. Code coverage - have I tested every condition on every line - line coverage
4. Super Edge cases - value overflows, similar code errors (used isNaN instead of Number)

First we throw exceptions because if they are not correct everything fails.
