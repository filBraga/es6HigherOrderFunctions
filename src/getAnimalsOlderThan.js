const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalFilter = data.species.filter((spec) => animal.includes(spec.id));
  return animalFilter;
};

//     .species.filter((spec) => spec.id === ids);

module.exports = getAnimalsOlderThan;
