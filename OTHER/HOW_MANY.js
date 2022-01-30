const myFun = (input) => {
  const obj = {};

  if (!isNaN(ParseInt(input))) {
    try {
      throw new Error(401, 'String not found !');
    } catch(e) {
      alert('code:' + e.number + ', info: ' + e.message)
    };
  };

  for (const element of input) {
    obj[element] = obj[element] + 1 || 1;
  };

  const x = Object.entries(obj).map(e => e.reverse()).sort().reverse();

  console.log(`The letter ${x[0][1]} are the most numerous, there are ${x[0][0]} of them`);
};

myFun(`asfgrgsggtssg`);
