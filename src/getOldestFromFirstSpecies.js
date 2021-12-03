const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const getEmployee = employees.filter((value) => value.id.includes(id));
  const firstAnimal = getEmployee.find((value) => value.responsibleFor);
  const animalId = firstAnimal.responsibleFor[0];
  const animalObj = data.species.find((value) => value.id === animalId);
  const animalResidentsObj = animalObj.residents;
  let indexAnimal = 0;
  animalResidentsObj.forEach((value) => {
    if (value.age > indexAnimal) {
      indexAnimal = value.age;
    }
  });
  const result = animalResidentsObj.find((value) => value.age === indexAnimal);
  return Object.values(result);
}

module.exports = getOldestFromFirstSpecies;
