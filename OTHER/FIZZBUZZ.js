const funFunction = (num) =>{
  const f = "FIZZ";
  const b = "BUZZ";

  for(let i=0; i<num && !isNaN(num); i++){
    if(num%15 === 0){
      return f+b; //FIZZBUZZ
    }else if(num%3 === 0){
      return f; // FIZZ
    }else if(num%5 === 0){
      return b; // BUZZ
    }else{
      return `no ${f}.. no ${b}..` // no FIZZ.. no BUZZ..
    };
  };

  for(let i=num; i===undefined; i++){
    return `enter your number`;
  };

  for(let i=num; isNaN(i); i++){
    return `this is string, input number...`;
  };

};

const checkItOut = funFunction(/*ENTER YOUR NUMBER*/);
console.log(`${checkItOut}`);
