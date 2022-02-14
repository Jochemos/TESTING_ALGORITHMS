// Stage one: insert basic generic types implement by TypeScript
// Generic class include generic type parameter. That class work by determine type

// import class from earlier file classEvolution folder
import ProductMarkUp from '../classEvolution/fifthStage';

// array includes all product
const dataStore = [new ProductMarkUp('nike23567', 'Hat: Nike', 15, 35), new ProductMarkUp('adidas90834', 'Boots: Adidas', 134, 267), new ProductMarkUp('snowboard140222', 'Board: Burton', 652, 1234)];

// limit generic type by shape - only products with id may be utilizing
class DataCollection<Gen extends { id: string }> {
  // variable which insert values in array
  private parts: Gen[] = [];

  // constructor accept array values <Gen>
  constructor(initAll: Gen[]) {
    this.parts.push(...initAll);
  };

  // below method opportunity add new product to pool
  addNew(initNew: Gen) {
    this.parts.push(initNew);
  };

  // return product describe by itselves id
  getOne(index: number): Gen {
    return this.parts[index]
  };
};

// new instance class generic with argument generic type
const productsData = new DataCollection<ProductMarkUp>(dataStore);

// return data from particular product
const SnowEquipment = productsData.getOne(2);

console.log(SnowEquipment.identyProd());
console.log(SnowEquipment.resultMargin());
console.log(SnowEquipment.resultMarkUp());

// adding new product and extract profite
const newProduct = productsData.addNew(new ProductMarkUp('skis45982', 'Skis: Fischer Sports', 1894, 2788));

const snowparkTickets = productsData.getOne(3);

console.log(snowparkTickets.resultMarkUp());
