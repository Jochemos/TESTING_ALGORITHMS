const myFun = (setA, setB) => {

  if(((setA && setB) === undefined) || setA.length != setB.length ){
    return null;
  }

  const product = [];

  for(let xA = 0; xA < setA.length; xA += 1){
    if(setA[xA] === undefined){
      return null;
    }
    /*
    product.push(`
      ${setA[xA]}:`); //small fix for console view
    */
    for(let yB = 0; yB < setB.length; yB += 1){
      if(setB[yB] === undefined){
        return null;
      }

      product.push(`${setA[xA]}`);
      product.push(`${setB[yB]}`);
    }
  }

  return product.join(" ");

}

let exampleView = myFun([1,2,3,4], [`a`, `b`, `c`, `d`]);

console.log(`${exampleView}`);

module.exports = myFun;
