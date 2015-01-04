//http://food.oregonstate.edu/learn/carbohydrate.html
//http://en.wikipedia.org/wiki/Digestion#Carbohydrate_digestion
//http://www.extension.iastate.edu/humansciences/content/carbohydrate
import {Monosaccharides} from './monosaccharides/monosaccharides';
import {Disaccharides}   from './disaccharides/disaccharides';
import {Polysaccharides} from './polysaccharides/polysaccharides';
import {Forwardable}     from 'forwardablejs';
// import {Inject} from 'aurelia-dependency-injection';

// @Inject(Monosaccharides, Disaccharides, Polysaccharides)
export class Carb {
  static inject() {
    return [
      Monosaccharides,
      Disaccharides,
      Polysaccharides
    ];
  }
  constructor(monosaccharides, disaccharides, polysaccharides) {
    this._monosaccharides = monosaccharides;
    this._disaccharides = disaccharides;
    this._polysaccharides = polysaccharides;

    // Object.assign(Carb.prototype, Forwardable.prototype);
    // this.delegate('_disaccharides', 'sucrose');
  }

  get free_glucose() { return this._monosaccharides.glucose; }
  set free_glucose(value) { this._monosaccharides.glucose = value; }
  get free_fructose() { return this._monosaccharides.fructose; }
  set free_fructose(value) { this._monosaccharides.fructose = value; }
  get free_galactose() { return this._monosaccharides.galactose; }
  set free_galactose(value) { this._monosaccharides.galactose = value; }

  get sucrose() { return this._disaccharides.sucrose; }
  set sucrose(value) { this._disaccharides.sucrose = value; }
  get maltose() { return this._disaccharides.maltose; }
  set maltose(value) { this._disaccharides.maltose = value; }
  get lactose() { return this._disaccharides.lactose; }
  set lactose(value) { this._disaccharides.lactose = value; }

  get strach() { return this._polysaccharides.strach; }
  set strach(value) { this._polysaccharides.strach = value; }
  get glycogen() { return this._polysaccharides.glycogen; }
  set glycogen(value) { this._polysaccharides.glycogen = value; }

  get fibre_insoluble() {
    return this._polysaccharides.fibre_insoluble;
  }
  set fibre_insoluble(value) {
    this._polysaccharides.fibre_insoluble = value;
  }
  get fibre_soluble() {
    return this._polysaccharides.fibre_soluble;
  }
  set fibre_soluble(value) {
    this._polysaccharides.fibre_soluble = value;
  }

  get glucose_total() {
    return this._monosaccharides.glucose +
      this._disaccharides.glucose_total +
      this._polysaccharides.glucose_total;
  }
  get fructose_total() {
    return this._monosaccharides.fructose +
      this._disaccharides.fructose_total +
      this._polysaccharides.fructose_total;
  }
  get galactose_total() {
    return this._monosaccharides.galactose +
      this._disaccharides.galactose_total +
      this._polysaccharides.galactose_total;
  }

}