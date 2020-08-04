const user = {
  first_name: 'test',
  last_name: 'online',
  email: 'hi@test.com',
  net_worth: 2000
}

Object.freeze(user);

user.last_name = 'Samson';
// this won't work, user is still immutable!

user.net_worth = 983265975975950;
// this won't work too, user is still immutable and still broke :(!

console.log(user);
// user is immutated

// ------------------------------------------------------
// Objects with nested properties are not actually frozen
// ------------------------------------------------------
const user1 = {
  first_name: 'test',
  last_name: 'online',
  contact: {
    email: 'hi@test.com',
    telephone: 08109445504,
  }
}

Object.freeze(user1);

user1.last_name = 'Samson';
// this won't work, user is still immutable!

user1.contact.telephone = 07054394926;
// this will work because the nested object is not frozen

console.log(user);

