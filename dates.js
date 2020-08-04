// Long name
// # October
const today = new Date()
console.log(
  today.toLocaleString('default', { month: 'long' })
);

// Short name
// # Oct
const today = new Date()
console.log(
  today.toLocaleString('default', { month: 'short' })
);