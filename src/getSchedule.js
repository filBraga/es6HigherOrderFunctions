const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');


function getSchedule(scheduleTarget) {
  // seu código aqui
  const obj = {};
  const days = Object.keys(data.hours);
  // console.log(days);
  days.forEach((day) => {
    obj[day] = {
      officeHour: `Open from ${Object.values(hours[days][0])}am until ${Object.values(hours[days][1])}pm`,
      exhibition: ,
    };
  });

}


function getExhibition() {
  
}

module.exports = getSchedule;
