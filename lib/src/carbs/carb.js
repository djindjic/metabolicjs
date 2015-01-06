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

    Object.assign(Carb.prototype, Forwardable.prototype);

    this.delegate('_disaccharides', 'sucrose');
    this.delegate('_disaccharides', 'maltose');
    this.delegate('_disaccharides', 'lactose');

    this.delegate('_polysaccharides', 'strach');
    this.delegate('_polysaccharides', 'glycogen');
    this.delegate('_polysaccharides', 'fibre_insoluble');
    this.delegate('_polysaccharides', 'fibre_soluble');
  }

  get free_glucose() { return this._monosaccharides.glucose; }
  set free_glucose(value) { this._monosaccharides.glucose = value; }
  get free_fructose() { return this._monosaccharides.fructose; }
  set free_fructose(value) { this._monosaccharides.fructose = value; }
  get free_galactose() { return this._monosaccharides.galactose; }
  set free_galactose(value) { this._monosaccharides.galactose = value; }

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