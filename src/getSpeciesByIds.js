const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((spec) => ids.includes(spec.id));
}

module.exports = getSpeciesByIds;

// .includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
