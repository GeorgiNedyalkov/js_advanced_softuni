# Classes, Constructors, and Prototypes

A class is a structure of an object that later allows other objects to be created with the same
properties and methods, i.e. instances of said class.

The tools to define classes is the constructor functions and prototype objects.

Classes define:

- _Data_ (properties, attributes)
- _Actions_ (behavior)

Class declarations are not hoised!

## Constructors

The `new` operator follow by a function invocation creates a new object with no properties
and then invokes the function, passing the new object as the value of the `this` keyword.

This tools means we can write programs that use classes to make sure that objects have the same
properties and methods.

## Prototypes and Inheritance

A method is a function that is invoked as a property of an object. When a function is called this way
the object through which it is accessed becomes the value of `this`.

### Instance of operator

`instanceof`
