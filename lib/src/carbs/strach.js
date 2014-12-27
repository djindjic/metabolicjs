import {Saccharide} from './saccharide'

export class Strach extends Saccharide {
  constructor() {
  	super();
  }

  set amount(value) {
    this._glucose = value;
  }
}