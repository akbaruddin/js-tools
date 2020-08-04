var pokemon = {
  firstName: 'Pika',
  lastName: 'Chu ',
  getPokeName: function() {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
};

var pokemonName = function(snack, hobby) {
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms');
pokemonName.apply(pokemon,['sushi', 'algorithms']);