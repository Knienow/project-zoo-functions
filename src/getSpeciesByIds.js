const data = require('../data/zoo_data');

const getSpeciesByIds = (...specieId) => {
  const result = data.species.filter((specie) => specie.id === specieId);
  if (result !== undefined) {
    return result;
  }
  return [];
};

module.exports = getSpeciesByIds;
