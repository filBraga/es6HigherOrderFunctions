// Commit
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let adult = 0;
  let child = 0;
  let senior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      child += 1;
    } else if (element.age >= 50) {
      senior += 1;
    } else { adult += 1; }
  });
  const resultado = { adult, child, senior };
  // resultado.adult = adult;
  // resultado.child = child;
  // resultado.senior = senior;
  return resultado;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || (Object.keys(entrants).length === 0)) { return 0; }
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  const numEntrants = countEntrants(entrants);
  return numEntrants.adult * data.prices.adult + numEntrants.child
   * data.prices.child + numEntrants.senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };
