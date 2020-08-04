// 1.
const user = 'Test Online'
user = 'Test Offline'

// 2.
const user1 = {
  first_name: 'test',
  last_name: 'online',
  email: 'hi@test.com',
  net_worth: 2000
}

// this would work, user is still mutable!
user1.last_name = 'Samson';

// this would work too, user is still mutable and getting rich :)!
user1.net_worth = 983265975975950;

// user is mutated
console.log(user1);

