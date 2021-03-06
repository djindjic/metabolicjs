//import {Inject} from 'aurelia-dependency-injection';
import {CalculationFactory} from './calculation-factory';

// @Inject(CalculationFactory)
export class Person {
  static inject() { return [CalculationFactory]; }
  constructor(calculationFactory) {
    this.calculationFactory = calculationFactory;
  }

  set age(value) { this._age = value; }
  get age() { return this._age; }

  set gender(value) { this._gender = value; }
  get gender() { return this._gender; }

  set height(value) { this._height = value; }
  get height() { return this._height; }

  set weight(value) { this._weight = value; }
  get weight() { return this._weight; }

  get body_mass_index() {
    return this.calculationFactory.body_mass_index(this);
  }

  get average_body_fat() {
    return this.calculationFactory.average_body_fat(this);
  }
}