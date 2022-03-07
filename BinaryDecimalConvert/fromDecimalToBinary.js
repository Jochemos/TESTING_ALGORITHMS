const doZero = (fix) => fix.length = 0; // return empty array
const doZeroObject = (fix) => fix = undefined; // return empty object
const arrayParts = []; // array with each one number
const quiteParts = []; // array with link numbers as data type

// function for check correct string
const checkFunction = function (input) {
  if (typeof (input) === 'string') {
    const checkArray = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] == '-') {
        checkArray.push(input[i]);
      }
    }
    if (checkArray.length > 2 || checkArray.length < 2) {
      return false;
    }
    middleFunction(input);
    return convertStage();
  }
  return false;
};

// middle function for return array with correct data
const middleFunction = function (input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== '-') {
      arrayParts.push(input[i]);
    } else if (input[i] == '-') {
      quiteParts.push(arrayParts.join(''));
      doZero(arrayParts);
    }
  }

  quiteParts.push(arrayParts.join('')); // add last string from input
};

const convertStage = function () {
  const arrayNumbers = [];
  const onlyNumbers = [];

  for (let i = 0; i < quiteParts.length; i++) {
    for (let j = 0; j < quiteParts[i].length; j++) {
      if (quiteParts[i][j] != 0) {
        arrayNumbers.push(quiteParts[i][j]);
      }
    }

    onlyNumbers.push(parseInt(arrayNumbers.join('')));
    doZero(arrayNumbers);
  }

  const k = (x) => {
    for (let i = 0; i < x.length; i++) {
      console.log(Math.floor(x[i] / 2));
    }
  };

  k(onlyNumbers);

  console.log(onlyNumbers);
};

console.log(checkFunction('2009-09-18')); // correct
// console.log(checkFunction(`2009-09-18-`)); // not correct
