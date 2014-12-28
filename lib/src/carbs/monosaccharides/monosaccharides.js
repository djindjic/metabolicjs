import {Saccharide} from 'lib/src/carbs/saccharide';

export class Monosaccharides extends Saccharide {
  constructor() {
    super();
  }

  set glucose(value) { this._glucose = value; }
  get glucose() { return super.glucose; }
  set fructose(value) { this._fructose = value; }
  get fructose() { return super.fructose; }
  set galactose(value) { this._galactose = value; }
  get galactose() { return super.galactose; }
}