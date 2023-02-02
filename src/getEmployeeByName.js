const data = require('../data/zoo_data');

const getEmployeeByName = (eName) => {
  if (eName === undefined) {
    return {};
  }
  const empl = data.employees.find((emp) => eName === emp.firstName || eName === emp.lastName);
  return empl;
};

module.exports = getEmployeeByName;
