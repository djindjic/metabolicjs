import {Saccharide} from './saccharide'

export class Lactose extends Saccharide {
  constructor() {
  	super();
  }

  set amount(value) {
    this._glucose = value / 2;
    this._galactose = value / 2;
  }
}