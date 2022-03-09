const arrayNumbers = []; // array with calculation numbers

// function for calculation numbers
const checkFunction = function (insertInput) {
  inputReplace = insertInput.split('').reverse().join('');

  for (let i = inputReplace.length - 1; i >= 0; i--) {
    arrayNumbers.push(inputReplace[i] * 2 ** i);
  }

  const resultNumber = arrayNumbers.reduce((previousValue, currentValue) => previousValue + currentValue);

  console.log(resultNumber); // 222
  console.log(arrayNumbers); // [ 128, 64, 0, 16, 8,  4, 2,  0 ]
};

checkFunction('11011110');
