export class Saccharide {
  constructor() {
    this._glucose = 0;
    this._fructose = 0;
    this._galactose = 0;
  };
  get glucose() { return this._glucose; };
  get fructose() { return this._fructose; };
  get galactose() { return this._galactose; };
  set amount(value) { throw new Error('Amount setter is not implemented'); };
  get amount() { throw new Error('Amount getter is not implemented'); };
};