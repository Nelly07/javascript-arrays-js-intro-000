var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array,element){
    var newchocolateBars=['twix',...chocolateBars];{
      return newchocolateBars;
  }
}
addElementToBeginningOfArray(newchocolateBars,'twix');


var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function destructivelyAddElementToBeginningOfArray(array,element){
  chocolateBars.push('twix');{
    return chocolateBars;
  }
}
destructivelyAddElementToBeginningOfArray(chocolateBars,'twix');

function addElementToEndOfArray(array,element){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  [...chocolateBars,"twix"];{
    return chocolateBars;
  }
}
addElementToEndOfArray9(chocolateBars,'twix')

function destructivelyAddElementToEndOfArray(array,element){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  [...chocolateBars,"twix"];
  chocolateBars=[...chocolateBars,'twix'];{
    return chocolateBars;
  }
}
destructivelyAddElementToEndOfArray(chocolateBars,'twix');



function accessElementInArray(array,index){
  const color=["red","blue","green"];{
    console.log(color[1]);
  }
}
accessElementInArray(color,[1]);


function destructivelyRemoveElementFromBeginningOfArray(array){
  var colors =["la","ba","ga"];
  colors.shift();{
    console.log(colors);
  }
}
destructivelyRemoveElementFromBeginningOfArray(newcolors);


function removeElementFromBeginningOfArray(array){
  var cats=["Milo", "Garfield", "Otis"];
  newcats=cats.slice(1);
  newcats;{
    console.log(cats);
  }
}
removeElementFromBeginningOfArray(cats);


function destructivelyRemoveElementFromEndOfArray(array){
  var iceCreams = ["chocolate", "vanilla", "raspberry"];
  iceCreams.pop();{
    console.log(iceCreams);
  }
}
destructivelyRemoveElementFromEndOfArray(iceCreams);


function removeElementFromEndOfArray(array){
  var cars = ["merz", "bmw", "audi"];
  cars.slice(0, cars.length - 1);{
    console.log(cars);
  }
}
removeElementFromEndOfArray(cars);
