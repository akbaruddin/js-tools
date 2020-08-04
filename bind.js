var pokemon = {
  firstName: 'Pika',
  lastName: 'Chu ',
  getPokeName: function() {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
};

const pokemonName = function() {
  console.log(this.getPokeName() + 'I choose you!');
};

const logPokemon = pokemonName.bind(pokemon);
logPokemon();

// with `this`
const myObj = {
  name: "Tester" 
}

function getNameOf(user) {
  return this.name + ' on board of ' + user
}

const check = getNameOf.bind(myObj, 'Space')
check();

// without `this`
const user = {
  name: "Tester",
  path: "Drive"
}

function getNameOf(user) {
  return user.name + ' on board of ' + user.path
}

const check = getNameOf.bind(
  null /* this or null(this not required) */,
  user
);
check();