
const momentTime = moment().startOf('day').add(7, 'hour');
const currentDay = moment().format('dddd, MMMM Do YYYY');

let dateEl = $('#currentDay');
console.log(dateEl);
dateEl.text(currentDay);

let timeBlockList = $('.time-block');
console.log(timeBlockList);

const currentHr = moment().hour();
console.log(currentHr);
for (var i = 0; i < timeBlockList.length; i++) {
  if (timeBlockList[i].dataset.time == currentHr) {
      timeBlockList[i].classList.remove("past");
      timeBlockList[i].classList.remove("future");
      timeBlockList[i].classList.add("present");
  };
  if (timeBlockList[i].dataset.time > currentHr) {
      timeBlockList[i].classList.remove("past");
      timeBlockList[i].classList.remove("present");
      timeBlockList[i].classList.add("future");
  };
  if (timeBlockList[i].dataset.time < currentHr) {
      timeBlockList[i].classList.remove("present");
      timeBlockList[i].classList.remove("future");
      timeBlockList[i].classList.add("past");
  }
};