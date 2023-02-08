const data = require('../data/zoo_data');

const specieFilter = (filters) => data.species.filter((elem) => elem.name === filters.species);

const filterByName = (specieFiltered) => specieFiltered[0].residents.length;

const filterBySex = (filters, specieFiltered) => {
  const filterSex = specieFiltered[0].residents.filter((elem) => elem.sex === filters.sex);
  return filterSex.length;
};

const applyFilter = (filters) => {
  const specieFiltered = specieFilter(filters);
  if (specieFiltered.length === 0) {
    return 0;
  }
  if (!filters.sex) {
    return filterByName(specieFiltered);
  }

  return filterBySex(filters, specieFiltered);
};

const countAnimals = (filters) => {
  if (filters && filters.species) {
    return applyFilter(filters);
  }

  const object = {};
  data.species.forEach((specie) => {
    object[specie.name] = specie.residents.length;
  });
  return object;
};

module.exports = countAnimals;
