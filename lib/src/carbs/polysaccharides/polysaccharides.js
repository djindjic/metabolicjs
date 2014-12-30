import {Strach}   from './strach';
import {Glycogen} from './glycogen';
import {Fibre}    from './fibre';

export class Polysaccharides {
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
  get fibre() { return this._fibre; }
  set fibre(value) { this._fibre = value; }

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