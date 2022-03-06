const doZero = (fix) => fix.length = 0; // return empty array
const doZeroObject = (fix) => fix = undefined; // return empty object
const arrayParts = []; // array with each one number
const quiteParts = []; // array with link numbers as data type

// function for check correct string
const checkFunction = function(input) {
  if(typeof(input) === 'string'){
    const checkArray = [];
    for(let i=0;i<input.length; i++){
      if(input[i] == '-'){
        checkArray.push(input[i]);
      };
    };
    if(checkArray.length > 2 || checkArray.length < 2){
      return false;
    }else{
      return mainFunction(input);
    };
  }else{
    return false
  };
};

// main function for return array with correct data
const mainFunction = function(input) {
  for(let i=0; i<input.length; i++){
    if(input[i] !== '-'){
      arrayParts.push(input[i]);
    }else if(input[i] == '-'){
      quiteParts.push(arrayParts.join(''));
      doZero(arrayParts);
    };
  };

  quiteParts.push(arrayParts.join('')); // add last string from input
  return quiteParts;
};



console.log(checkFunction(`2009-09-18`)); // correct
console.log(checkFunction(`2009-09-18-`)); // not correct
