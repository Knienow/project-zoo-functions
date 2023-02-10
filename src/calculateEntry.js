const data = require('../data/zoo_data');

/* const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]; */

const countEntrants = (entrants) => {
  const filterAge1 = entrants.filter((elem) => elem.age < 18);
  // console.log(filterAge1);
  const filterAge2 = entrants.filter((elem) => elem.age >= 18 && elem.age < 50);
  // console.log(filterAge2);
  const filterAge3 = entrants.filter((elem) => elem.age >= 50);
  // console.log(filterAge3);
  const child = Object.keys(filterAge1).length;
  const adult = Object.keys(filterAge2).length;
  const senior = Object.keys(filterAge3).length;

  return { child, adult, senior };
};

/* console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
])); */

const calculateEntry = (entrants) => {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalTickets = countEntrants(entrants);
  const valuesObjectTickets = Object.values(totalTickets);
  const childTickets = valuesObjectTickets[0] * 20.99;
  const adultTickets = valuesObjectTickets[1] * 49.99;
  const seniorTickets = valuesObjectTickets[2] * 24.99;
  const sumTickets = childTickets + adultTickets + seniorTickets;

  return sumTickets;
};

/* prices:
    adult: 49.99,
    senior: 24.99,
    child: 20.99, */

console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
module.exports = { calculateEntry, countEntrants };
