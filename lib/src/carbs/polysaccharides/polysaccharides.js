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
  set strach(value) { return this._strach.amount = value; }
  get glycogen() { return this._glycogen.amount; }
  set glycogen(value) { return this._glycogen.amount = value; }
  get fibre() { return this._fibre.amount; }
  set fibre(value) { return this._fibre.amount = value; }

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
}