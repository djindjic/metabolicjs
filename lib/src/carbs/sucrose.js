import {Saccharide} from './saccharide';

export class Sucrose extends Saccharide {
  constructor() {
    super();
  }

  set amount(value) {
    this._glucose = value / 2;
    this._fructose = value / 2;
  }
  get amount() { return super.amount }
}