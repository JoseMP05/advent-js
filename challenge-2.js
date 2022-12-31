/*
NOBODY WANTS TO DO EXTRA HOURS AT WORK

A millionaire bought a social network, and he doesn't bring good news. He 
has announced that each time an employee misses a working day due to a 
holiday, they will have to compensate it with two extra hours another 
working day of the same year.

Obviously the people who work in the company have not made the slightest 
joke and are preparing a program that tells them the number of extra 
hours they would do in the year if the new rule were applied.

Since it is office work, their working hours are from Monday to Friday. 
So you only have to worry about the holidays that fall on those days.

Given a year and an array with the dates of the holidays, return the 
number of extra hours that would be done during that year:*/

function countHours(year, holidays) {
  let hours = 0;
  holidays.forEach((day) => {
    const evalDate = new Date(`${year}/${day}`);
    if (evalDate.getDay() !== 0 && evalDate.getDay() !== 6) hours += 2;
  });
  return hours;
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // format MM/DD
const extraHours = countHours(year, holidays);

console.log(extraHours);
