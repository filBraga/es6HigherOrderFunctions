const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => species.filter((element) => ids.includes(element.id));
// (spec) => ids.includes(spec.id)
// myArray.filter(x => x.id === '45'); duvida, por que essa nao funciona.

module.exports = getSpeciesByIds;

// .includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
