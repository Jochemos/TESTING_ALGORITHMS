// Stage four: Class and Collections
// Class work like functions constructors, but under mask all implement is prototypes

// any class is defined by keyword class
class ProductMargin {
  // defined property of object
  constructor(id, productBrand, productionCost, saleProduct) {
    this.id = id;
    this.productBrand = productBrand;
    this.productionCost = productionCost;
    this.saleProduct = saleProduct;
  }

  // the method is add to prototype
  identyProd() {
    const identyProd = `Product id: ${this.id}`;
    return `${identyProd}`;
  }

  resultMargin() {
    const numberOne = 'cost is:';
    const numberTwo = 'then product sale is:';
    const baseTxt = 'margin from sale product in gross value is:';

    const resultCalc = ((this.saleProduct - this.productionCost) / this.saleProduct) * 100;

    return `${this.productBrand} ${numberOne} $${this.productionCost}, ${numberTwo} $${this.saleProduct}, ${baseTxt} ${resultCalc.toFixed(2)} %`;
  }
}

// keyword extends opportunity inheritance
class ProductMarkUp extends ProductMargin {
  constructor(id, productBrand, productionCost, saleProduct) {
    // get access to properites and methods from base class
    super(id, productBrand, productionCost, saleProduct);
  }

  resultMarkUp() {
    const identyProdExtends = super.identyProd();
    const secoundTxt = 'Price mark-up value is:';
    const resultCalc = ((this.saleProduct - this.productionCost) / this.productionCost) * 100;

    return `${identyProdExtends}: ${secoundTxt} ${resultCalc.toFixed(2)} %`;
  }
}

// constant product values and create new objects on one collection object
const dataStore = {
  hat: new ProductMarkUp('nike23567', 'Hat: Nike', 15, 35),
  boots: new ProductMarkUp('adidas90834', 'Boots: Adidas', 134, 267),
};

// return array with names of properties defined by object
Object.keys(dataStore).forEach((key) => {
  // describe results on console
  console.log(dataStore[key].resultMargin());
  console.log(dataStore[key].resultMarkUp());
});
