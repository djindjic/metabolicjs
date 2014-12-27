import {Saccharide} from './saccharide';

export class Glycogen extends Saccharide {
  constructor() {
    super();
  }

  set amount(value) {
    this._glucose = value;
  }
}