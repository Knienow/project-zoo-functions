const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (managerId) => {
  const managersList = employees.some((people) => people.managers.includes(managerId));
  // console.log(managersList);
  return managersList;
};
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

const getRelatedEmployees = (managerId) => {
  if ((isManager(managerId)) !== true) {
    // console.log(isManager);
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const manager = employees.find((element) => element.id.includes(managerId));
  // console.log(getManager);
  const team = employees.filter((employee) => employee.managers.includes(manager.id));
  const members = team.map((member) => `${member.firstName} ${member.lastName}`);
  return members;
};

// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
