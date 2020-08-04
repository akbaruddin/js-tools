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

## number to string

Best for String Conversion

```Javascript
const value = 12345;
String(value);
```

File: [number_to_string.js](./number_to_string.js)

## attributes extract

File: [attributes.js](./attributes.js)

## Tips

### Converting `NodeList` to `Arrays`

If you run the `document.querySelectorAll("p")` function, it will probably return an array of DOM elements, the `NodeList` object. But this object doesn’t have all the array’s functions, like: `sort()`, `reduce()`, `map()`, `filter()`.

To enable these and many other native array functions, you need to convert `NodeList` into `Arrays`. To run this technique, just use this function: `[].slice.call(elements)`:

```javascript
// NodeList
var elements = document.querySelectorAll("p");

// Now the NodeList is an array ES5
var arrayElements = [].slice.call(elements);

// This is another way of converting NodeList to Array var ES6
arrayElements = Array.from(elements);
```

## Null

- `null` is assigned.
- `null` is always intentional.
- `null` indicates a lack of value.

## Undefined

- `undefined` can be assigned.
- `undefined` is often unintentional.
- `undefined` indicates a variable is declared but not defined.

## Both

- Both `null` and `undefined` are primitives.
- Both `null` and `undefined` are `falsy` values.
- `null` and `undefined` are loosely equal.