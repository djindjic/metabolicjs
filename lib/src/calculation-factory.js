import Decimal from 'decimal.js';

export class CalculationFactory {
  //http://en.wikipedia.org/wiki/Body_mass_index
  body_mass_index(person) {
    let result = person.weight / Math.pow(person.height/100, 2);
    let resultDecimal = new Decimal(result.toString());
    return resultDecimal.toDecimalPlaces(2).toNumber();
  }
  //http://www.ncbi.nlm.nih.gov/pubmed/2043597
  average_body_fat(person) {
    var sex = person.gender === 'male' ? 1 : 0;
    let result = 1.20 * this.body_mass_index(person) + 0.23 * person.age - 10.8 * sex - 5.4;
    let resultDecimal = new Decimal(result.toString());
    return resultDecimal.toDecimalPlaces(2).toNumber();
  }
}