const data = require('../data/zoo_data');

const { hours } = data;

const generateSchedule = (filter) => {
  const openingHours = {};
  filter.forEach((day) => {
    const animalsOfTheDay = data.species.filter(({ availability }) =>
      availability.some((elem) => elem === day));
    const mapAnimal = animalsOfTheDay.map((elem) => elem.name);
    openingHours[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: mapAnimal,
    };
  });
  return openingHours;
};

const visitationOnSpecificDay = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  return generateSchedule([scheduleTarget]);
};

const visitationDays = (scheduleTarget) => {
  const openingHours = generateSchedule(Object.keys(hours));
  openingHours.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return openingHours;
};

const validationParameterIsDay = (scheduleTarget) => Object.keys(hours).includes(scheduleTarget);

const validationParameterIsAnimal = (scheduleTarget) => {
  const animalsName = data.species.map((specie) => specie.name);
  return animalsName.includes(scheduleTarget);
};

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget && validationParameterIsAnimal(scheduleTarget)) {
    const specieFiltered = data.species.filter((elem) => elem.name === scheduleTarget);
    const animal = specieFiltered.find((key) => key.availability);
    // console.log(animal);
    return animal.availability;
  }
  if (scheduleTarget && validationParameterIsDay(scheduleTarget)) {
    return visitationOnSpecificDay(scheduleTarget);
  }
  return visitationDays();
};

// console.log(getSchedule('lions'));
module.exports = getSchedule;
