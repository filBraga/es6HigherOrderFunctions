const data = require('../data/zoo_data');

function countAnimals(animal) {
  const obj = {};
  data.species.forEach((specie) => { obj[specie.name] = specie.residents.length; });
  if (animal === undefined) { return obj; }
  const value = data.species.find((specie) => specie.name === animal.specie);
  return value.residents.length;
}

module.exports = countAnimals;
