// RESULT
// '12345'

const value = 12345;

// 1. Concat Empty String
console.log(value + '');

// 2. Template Strings
console.log(`${value}`);

// 3. JSON.stringify
console.log(JSON.stringify(value));

// 4. toString()
console.log(value.toString());

// 5. String()
console.log(String(value));

