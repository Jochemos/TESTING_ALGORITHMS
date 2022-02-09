// Stage two: Object inheritance

// Each object has a link to another object [objectObject]
// Any object inherits properties and values
const calculateProfitPrototype = {
  baseTxt: 'margin from sale product in gross value is: ',
  secoundTxt: 'Price mark-up value is:',
  numberOne: 'cost is: ',
  numberTwo: 'then product sale is: ',

  descriptionText(id) {
    console.log(`Product number is: ${id}`);
  },

  resultMargin(productBrand, productionCost, saleProduct) {
    const resultMargin = ((saleProduct - productionCost) / saleProduct) * 100;
    console.log(`${this.productBrand} ${this.numberOne} $${productionCost}, ${this.numberTwo} $${saleProduct}, ${this.baseTxt} ${resultMargin.toFixed(2)} %`);
  },

  resultMarkUp(productBrand, productionCost, saleProduct) {
    const resultMarkUp = ((saleProduct - productionCost) / productionCost) * 100;
    console.log(`${this.secoundTxt} ${resultMarkUp.toFixed(2)} %`);
  },
};

const hat = {
  id: 'nike23567',
  productBrand: 'Hat: Nike',
  productionCost: 15,
  saleProduct: 35,
};

const boots = {
  id: 'adidas90834',
  productBrand: 'Boots: Adidas',
  productionCost: 134,
  saleProduct: 267,
};

// method for changes the prototype of object
Object.setPrototypeOf(hat, calculateProfitPrototype);
Object.setPrototypeOf(boots, calculateProfitPrototype);

// Match variables to define functions
hat.descriptionText(hat.id); // describe id of product
hat.resultMargin(hat.productBrand, hat.productionCost, hat.saleProduct); // describe margin of product
hat.resultMarkUp(hat.productBrand, hat.productionCost, hat.saleProduct); // describe mark-up price of product

boots.descriptionText(boots.id);
boots.resultMargin(boots.productBrand, boots.productionCost, boots.saleProduct);
boots.resultMarkUp(boots.productBrand, boots.productionCost, boots.saleProduct);

// © github.com/jochemos
