const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employee = data.employees.find((element) => element.id === id);
  const animals = data.species.find((element) => element.id === employee.responsibleFor[0]);
  return Object.values(animals.residents.sort((a, b) => (a.age > b.age ? -1 : 1))[0]);
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
