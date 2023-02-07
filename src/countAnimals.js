const data = require('../data/zoo_data');

const countAnimals = ({ species: animal }) => {
  if ({ species: animal } === undefined) {
    return data.species.length;
  }
};

console.log(countAnimals());
module.exports = countAnimals;
