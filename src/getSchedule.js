const data = require('../data/zoo_data');

const daysOfWeek = () => {
  // funçao para pegar todos os dias da semana
  const days = Object.keys(data.hours);
  return days;
};

const allAnimals = () => {
  // funçao para pegar todos os animais
  const animals = data.species.map((value) => value.name);
  return animals;
};
// console.log(allAnimals());

const hoursArray = () => {
  // funçao para criar um objeto de dias da semana com as horas disponiveis
  const days = daysOfWeek();
  const objHour = {};
  days.forEach((day) => {
    objHour[day] = data.hours[day];
  });
  return objHour;
};
// console.log(hoursArray());

const animalArray = () => {
  // funçao para criar um objeto de dias da semana com os animais do dia
  const days = daysOfWeek();
  const animalArr = {};
  days.forEach((day) => {
    const objAnimalsName = data.species.filter((name) =>
      name.availability.includes(day));
    const pushValue = objAnimalsName.map((num) => num.name);
    animalArr[day] = pushValue;
  });
  return animalArr;
};
// console.log(animalArray());

const checkIfIsUndefinec = () => {
  const days = daysOfWeek();
  const hours = hoursArray();
  const animalAvailable = animalArray();
  const obj = {};
  days.forEach((day) => {
    obj[day] = {
      officeHour: `Open from ${Object.values(hours[day])[0]}am until ${
        Object.values(hours[day])[1]}pm`,
      exhibition: animalAvailable[day],
    };
  });
  obj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return obj;
};

const checkIfIsMonday = () => {
  const obj = { Monday: {} };
  obj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return obj;
};

const checkIfIsDay = (scheduleTarget) => {
  const hours = hoursArray();
  const obj = {};
  obj[scheduleTarget] = { exhibition: animalArray()[scheduleTarget],
    officeHour: `Open from ${Object.values(hours[scheduleTarget])[0]}am until ${
      Object.values(hours[scheduleTarget])[1]}pm` };
  return obj;
};

const checkIfIsAnimal = (scheduleTarget) => {
  const x = data.species.find((value) => value.name === scheduleTarget);
  return x.availability;
};

// Função Principal abaixo

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return checkIfIsUndefinec();
  }
  if (scheduleTarget === 'Monday') {
    return checkIfIsMonday();
  }
  if (daysOfWeek().includes(scheduleTarget)) {
    return checkIfIsDay(scheduleTarget);
  }
  if (allAnimals().includes(scheduleTarget)) {
    return checkIfIsAnimal(scheduleTarget);
  } return checkIfIsUndefinec();
}

module.exports = getSchedule;
