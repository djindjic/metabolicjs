//http://food.oregonstate.edu/learn/carbohydrate.html
//http://en.wikipedia.org/wiki/Digestion#Carbohydrate_digestion
import {Monosaccharides} from './monosaccharides/monosaccharides';
import {Disaccharides}   from './disaccharides/disaccharides';
import {Polysaccharides} from './polysaccharides/polysaccharides';

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
  }

  get monosaccharides() { return this._monosaccharides; }
  get disaccharides() { return this._disaccharides; }
  get polysaccharides() { return this._polysaccharides; }

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
  get fibre_insoluble_total() {
    return this._polysaccharides.fibre.insoluble;
  }
  get fibre_soluble_total() {
    return this._polysaccharides.fibre.soluble;
  }
}