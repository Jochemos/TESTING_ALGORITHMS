// Stage five: Class with TypeScript
// TypeScript is a subset of JavaScript, extends to static types and more

// interface use for describe shape of object
interface MarginModel {
  // any properties or methods of interface have specify static type annotation
  productionCost: number;
  saleProduct: number;
  identyProd(): string;
  resultMargin(): string;
}

interface MarkUpModel {
  productionCost: number;
  saleProduct: number;
  resultMarkUp(): string;
}

// interface implement to class
class ProductMargin implements MarginModel {

  // define the key words of access control (public or private) and determine the type
  constructor(public id: string, public productBrand: string, public productionCost: number, public saleProduct: number) {
    this.id = id;
    this.productBrand = productBrand;
    this.productionCost = productionCost;
    this.saleProduct = saleProduct;
  }

  identyProd() {
    const identyProduct = `Product id: ${this.id}`;
    return `${identyProduct}`;
  }

  resultMargin() {
    const numberOne = 'cost is:';
    const numberTwo = 'then product sale is:';
    const baseTxt = 'margin from sale product in gross value is:';

    const resultCalc = () => {
      // type assertion tells the compiler how to treat a value (type restriction)
      const calcMargin = ((this.saleProduct - this.productionCost) / this.saleProduct) * 100 as number;
      return calcMargin.toFixed(2);
    };

    return `${this.productBrand} ${numberOne} $${this.productionCost}, ${numberTwo} $${this.saleProduct}, ${baseTxt} ${resultCalc() as string} %`;
  };
};

// extend class no change, but keyword extends must be first, next implement interface
class ProductMarkUp extends ProductMargin implements MarkUpModel {

  // below properties are use to determine the type of later use
  public readonly id: string;
  public productBrand: string;
  public productionCost: number;
  public saleProduct: number;

  constructor(id: string, productBrand: string, productionCost: number, saleProduct: number) {

    // get access to properites and methods from base class
    super(id, productBrand, productionCost, saleProduct);

  }

  resultMarkUp() {
    const identyProdExtends = super.identyProd();
    const secoundTxt = 'Price mark-up value is:';
    const resultCalc = () => {
      const calcMarkUp = ((this.saleProduct - this.productionCost) / this.productionCost) * 100 as number;
      return calcMarkUp.toFixed(2);
    };

    return `${identyProdExtends}: ${secoundTxt} ${resultCalc() as string} %`;
  }
};

const dataStore = {
  hat: new ProductMarkUp('nike23567', 'Hat: Nike', 15, 35),
  boots: new ProductMarkUp('adidas90834', 'Boots: Adidas', 134, 267),
};

Object.keys(dataStore).forEach(item => {
    console.log(dataStore[item].identyProd());
    console.log(dataStore[item].resultMargin());
    console.log(dataStore[item].resultMarkUp());

});
