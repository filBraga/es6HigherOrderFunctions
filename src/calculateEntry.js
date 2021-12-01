// Commit
const en = require('faker/lib/locales/en');
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
  let adult = 0;
  let child = 0;
  let senior = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      child += 1;
    } else if (entrant.age >= 50) {
      senior += 1;
    } else { adult += 1; }
  });
  const precoAdulto = data.prices.adult;
  const precoChild = data.prices.child; const precoSenior = data.prices.senior;
  const precoTotal = adult * precoAdulto + child * precoChild + senior * precoSenior;
  return precoTotal;
}

module.exports = { calculateEntry, countEntrants };
