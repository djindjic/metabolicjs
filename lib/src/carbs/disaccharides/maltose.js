import {Saccharide} from 'lib/src/carbs/saccharide';

export class Maltose extends Saccharide {
  constructor() {
    super();
  }

  set amount(value) {
    this._glucose = value;
  }
  get amount() { return super.amount; }
}