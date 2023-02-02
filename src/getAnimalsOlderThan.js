const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animalName, age) => {
  const dataAnimal = data.species.filter((specie) => animalName === specie.name);
  if (dataAnimal.length === 0) {
    return false;
  }
  for (let index = 0; index < dataAnimal.length; index += 1) {
    if (!dataAnimal[index].residents.every((elem) => elem.age >= age)) {
      return false;
    }
  }
  return true;
};

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
