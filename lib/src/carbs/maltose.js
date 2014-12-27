import {Saccharide} from './saccharide';

export class Maltose extends Saccharide {
  constructor() {
    super();
  }

  set amount(value) {
    this._glucose = value;
  }
}