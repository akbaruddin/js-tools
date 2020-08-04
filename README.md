# Functions Examples

## Call and Apply

`call()` and `apply()` to invoke the function immediately.

`call()`: expects all parameters to be passed in individually
`apply()`: expects an array of all of our parameters

File: [call_apply.js](./call_apply.js)

## bind

`bind()` method creates a new function that, when called, has its this keyword set to the provided value.

File: [bind.js](./bind.js)

## Date function

File: [dates.js](./dates.js)

## Object.freeze() vs const

**const** and **Object.freeze()** are totally different.

- **const** behaves like `let`. The only difference is, it defines a variable that cannot be reassigned. Variables declared by `const` are block scoped and not function scoped like variables declared with `var`

- **Object.freeze()** takes an object as an argument and returns the same object as an immutable object. This implies that **no properties** of the object can be **added**, **removed**, or **changed**.

Const File: [const_file.js](./const_file.js)

#### Object.freeze()

To disable any changes to the object we need `Object.freeze()`.

Freeze File: [freeze_file.js](./freeze_file.js)