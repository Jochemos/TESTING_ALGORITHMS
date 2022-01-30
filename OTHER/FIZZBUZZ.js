const funFunction = (num) => {
  const f = "FIZZ";
  const b = "BUZZ";

  for (let i = 0; i < num && !isNaN(num); i++) {
    if (num % 15 === 0) {
      return f+b; //FIZZBUZZ
    } else if (num % 3 === 0) {
      return f; // FIZZ
    } else if( num % 5 === 0) {
      return b; // BUZZ
    } else {
      try {
        throw new Error(100, 'no Fizz, no BUZZ !');
      } catch(e) {
        alert('code:' + e.number + ', info: ' + e.message);
      };
    };
  };

  for (let i = num; i === undefined; i++) {
    try {
      throw new Error(101, 'No data !');
    } catch(e) {
      alert('code:' + e.number + ', info: ' + e.message);
    };
  };

  for (let i = num; isNaN(i); i++) {
    try {
      throw new Error(102, 'Validate error, string detected !');
    } catch(e) {
      alert('code:' + e.number + ', info: ' + e.message);
    };
  };
};

const checkItOut = funFunction(/*ENTER YOUR NUMBER*/);
console.log(`${checkItOut}`);
