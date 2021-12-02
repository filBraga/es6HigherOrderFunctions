const data = require('../data/zoo_data');

function isManager(id) {
  // https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const managerArr = data.employees.filter((id) => id.managers.includes(managerId));
  const finalArr = managerArr.map((value) => `${value.firstName} ${value.lastName}`);
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return finalArr;
}

// getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');

module.exports = { isManager, getRelatedEmployees };
