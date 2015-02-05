import {Sucrose}  from './sucrose';
import {Lactose}  from './lactose';
import {Maltose}  from './maltose';
import {Transient} from 'aurelia-dependency-injection';

export class Disaccharides {
  static metadata() { return [new Transient()]; };
  static inject() {
    return [
      Sucrose,
      Lactose,
      Maltose
    ];
  }
  constructor(sucrose, lactose, maltose) {
    this._sucrose = sucrose;
    this._lactose = lactose;
    this._maltose = maltose;
  }
  get sucrose() { return this._sucrose.amount; }
  set sucrose(value) { this._sucrose.amount = value; }
  get lactose() { return this._lactose.amount; }
  set lactose(value) { this._lactose.amount = value; }
  get maltose() { return this._maltose.amount; }
  set maltose(value) { this._maltose.amount = value; }

  get glucose_total() {
    return this._sucrose.glucose +
      this._lactose.glucose +
      this._maltose.glucose;
  }
  get fructose_total() {
    return this._sucrose.fructose +
      this._lactose.fructose +
      this._maltose.fructose;
  }
  get galactose_total() {
    return this._sucrose.galactose +
      this._lactose.galactose +
      this._maltose.galactose;
  }
}