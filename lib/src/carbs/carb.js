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

    this.delegate('_monosaccharides', 'glucose', 'free_glucose');
    this.delegate('_monosaccharides', 'fructose', 'free_fructose');
    this.delegate('_monosaccharides', 'galactose', 'free_galactose');

    this.delegate('_disaccharides', 'sucrose');
    this.delegate('_disaccharides', 'maltose');
    this.delegate('_disaccharides', 'lactose');

    this.delegate('_polysaccharides', 'strach');
    this.delegate('_polysaccharides', 'glycogen');
    this.delegate('_polysaccharides', 'fibre_insoluble');
    this.delegate('_polysaccharides', 'fibre_soluble');
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