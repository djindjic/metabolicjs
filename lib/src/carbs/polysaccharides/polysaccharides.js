import {Strach}   from './strach';
import {Glycogen} from './glycogen';
import {Fibre}    from './fibre';
import {Transient} from 'aurelia-dependency-injection';

export class Polysaccharides {
  static metadata() { return [new Transient()]; };
  static inject() {
    return [
      Strach,
      Glycogen,
      Fibre
    ];
  }
  constructor(strach, glycogen, fibre) {
    this._strach = strach;
    this._glycogen = glycogen;
    this._fibre = fibre;
  }
  get strach() { return this._strach.amount; }
  set strach(value) { this._strach.amount = value; }
  get glycogen() { return this._glycogen.amount; }
  set glycogen(value) { this._glycogen.amount = value; }
  get fibre_insoluble() { return this._fibre.insoluble; }
  set fibre_insoluble(value) { this._fibre.insoluble = value; }
  get fibre_soluble() { return this._fibre.soluble; }
  set fibre_soluble(value) { this._fibre.soluble = value; }

  get glucose_total() {
    return this._strach.glucose +
      this._glycogen.glucose;
  }
  get fructose_total() {
    return this._strach.fructose +
      this._glycogen.fructose;
  }
  get galactose_total() {
    return this._strach.galactose +
      this._glycogen.galactose;
  }
  get fibre_insoluble_total() {
    return this._fibre.insoluble;
  }
  get fibre_soluble_total() {
    return this._fibre.soluble;
  }
}