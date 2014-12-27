import {Saccharide} from 'lib/src/carbs/saccharide';

export class Glycogen extends Saccharide {
  constructor() {
    super();
  }

  set amount(value) {
    this._glucose = value;
  }
  get amount() { return super.amount; }
}