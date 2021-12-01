const data = require('../data/zoo_data');

function countAnimals(animal) {
  const obj = {};
  data.species.forEach((specie) => { obj[specie.name] = specie.residents.length; });
  if (animal === undefined) { return obj; }
  if (animal.sex !== undefined) {
    const value = data.species.find((specie) => specie.name === animal.specie);
    let acc = 0;
    value.residents.forEach((resident) => {
      if (resident.sex !== animal.sex) acc += 1;
    });
    return value.residents.length - acc;
  }
  const value = data.species.find((specie) => specie.name === animal.specie).residents.length;
  return value;
}

module.exports = countAnimals;
