var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(chocolateBars,twix){
  return [twix,...chocolateBars];
  }


function destructivelyAddElementToBeginningOfArray(chocolateBars,twix){
  chocolateBars.unshift(twix);
    return chocolateBars;
}

function addElementToEndOfArray(chocolateBars,twix){
  return [...chocolateBars,twix];
  }


function destructivelyAddElementToEndOfArray(chocolateBars,twix){
  chocolateBars.push(twix);
    return chocolateBars;
  }



function accessElementInArray(array,index){
    return array[index];
  }



function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
    return chocolateBars;
  }



function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars.slice(1);
  return chocolateBars;
  }



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
