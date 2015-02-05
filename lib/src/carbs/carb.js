//http://food.oregonstate.edu/learn/carbohydrate.html
//http://en.wikipedia.org/wiki/Digestion#Carbohydrate_digestion
//http://www.extension.iastate.edu/humansciences/content/carbohydrate
import {Monosaccharides} from './monosaccharides/monosaccharides';
import {Disaccharides}   from './disaccharides/disaccharides';
import {Polysaccharides} from './polysaccharides/polysaccharides';
import {Forwardable}     from 'forwardablejs';
import {Transient} from 'aurelia-dependency-injection';

// @Inject(Monosaccharides, Disaccharides, Polysaccharides)
export class Carb {
  static metadata() { return [new Transient()]; };
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

    Forwardable.delegate(this, this._monosaccharides, 'glucose', 'free_glucose');
    Forwardable.delegate(this, this._monosaccharides, 'fructose', 'free_fructose');
    Forwardable.delegate(this, this._monosaccharides, 'galactose', 'free_galactose');

    Forwardable.delegate(this, this._disaccharides, 'sucrose');
    Forwardable.delegate(this, this._disaccharides, 'maltose');
    Forwardable.delegate(this, this._disaccharides, 'lactose');

    Forwardable.delegate(this, this._polysaccharides, 'strach');
    Forwardable.delegate(this, this._polysaccharides, 'glycogen');
    Forwardable.delegate(this, this._polysaccharides, 'fibre_insoluble');
    Forwardable.delegate(this, this._polysaccharides, 'fibre_soluble');
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