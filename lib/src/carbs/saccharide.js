import {Transient} from 'aurelia-dependency-injection';

export class Saccharide {
  static metadata() { return [new Transient()]; };
  constructor() {
    this._glucose = 0;
    this._fructose = 0;
    this._galactose = 0;
  }
  get glucose() { return this._glucose; }
  get fructose() { return this._fructose; }
  get galactose() { return this._galactose; }
  
  set amount(value) { throw new Error('Amount setter is not implemented'); }
  get amount() {
    return this._glucose +
           this._fructose +
           this._galactose;
  }
}