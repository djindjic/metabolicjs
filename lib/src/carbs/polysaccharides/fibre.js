//http://www.glycemicindex.com/faqsList.php#4
import {Transient} from 'aurelia-dependency-injection';

export class Fibre {
  static metadata() { return [new Transient()]; };
  constructor() {
    this._insoluble = 0;
    this._soluble = 0;
  }

  set insoluble(value) {
    this._insoluble = value;
  }
  get insoluble() { return this._insoluble; }
  set soluble(value) {
    this._soluble = value;
  }
  get soluble() { return this._soluble; }
}