const data = require('../data/zoo_data');

function isManager(id) {
  // https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  return managerId;
}

module.exports = { isManager, getRelatedEmployees };
