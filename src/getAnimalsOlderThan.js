const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalArray = data.species.find((element) => element.name === animal);
  return animalArray.residents.every((element) => element.age > age);
};

// .species.filter((spec) => spec.id === ids); duvida porque filter nao funciona

module.exports = getAnimalsOlderThan;
