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

// main function for return convert string
const convertStage = function () {
  const arrayNumbers = []; // array utilizing for convert numbers from data
  const onlyNumbers = []; // contain base numbers of data

  for (let i = 0; i < quiteParts.length; i++) {
    for (let j = 0; j < quiteParts[i].length; j++) {
      if (quiteParts[i][j] != 0) {
        arrayNumbers.push(quiteParts[i][j]);
      }
    }

    onlyNumbers.push(parseInt(arrayNumbers.join('')));
    doZero(arrayNumbers);
  }

  const divideNumber = []; // divide number to convert this with modulo
  const conectObject = {}; // empty object to next pushig conected relations
  const binarArray = []; // for 1 or 0 into

  for (let v = 1; v <= onlyNumbers.length; v++) {
    for (let d = 0; d < v; d++) {
      doZero(divideNumber);
      doZero(binarArray);
      divideNumber.push(onlyNumbers[d]);
    }

    for (i = 0; i < divideNumber.length; i++) {
      if (Math.floor(divideNumber[i] / 2) != 0 && !isNaN(Math.floor(divideNumber[i] / 2))) {
        divideNumber.push(Math.floor(divideNumber[i] / 2));
      }
      binarArray.push(divideNumber[i] % 2);
    }
    conectObject[binarArray] = divideNumber[0]; // assigning variables and properties as links to determine number
  }

  const mainArray = []; // prepare empty array for result

  // eject only keys of object, which contain converting numbers
  const extract = Object.keys(conectObject);

  // regulation stage
  for (let i = 0; i < extract.length; i++) {
    mainArray.push(extract[i].split(',').reverse().join(''));
  }

  const finallyResult = mainArray.join('');

  return finallyResult;
};

console.log(checkFunction('2009-09-18')); // correct
// console.log(checkFunction(`2009-09-18-`)); // not correct

module.exports = checkFunction;
