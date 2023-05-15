
const momentTime = moment().startOf('day').add(7, 'hour');
const currentDay = moment().format('dddd, MMMM Do YYYY');

let dateEl = $('#currentDay');
console.log(dateEl);
dateEl.text(currentDay);

let timeBlockList = $('.time-block');
console.log(timeBlockList);

const currentHr = moment().hour();
console.log(currentHr);

for(var i= 9; i < 17; i++){
if(i<currentHr){
  console.log('past')
  console.log(i)
  $('#'+ i).addClass('past')                    
}
}