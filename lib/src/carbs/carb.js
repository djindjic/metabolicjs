//http://food.oregonstate.edu/learn/carbohydrate.html
//http://en.wikipedia.org/wiki/Digestion#Carbohydrate_digestion
import {Sucrose}  from './sucrose';
import {Lactose}  from './lactose';
import {Maltose}  from './maltose';
import {Strach}   from './strach';
import {Glycogen} from './glycogen';
import {Fibre}    from './fibre';

export class Carb {
  static inject() {
    return [
      Sucrose,
      Lactose,
      Maltose,
      Strach,
      Glycogen,
      Fibre
    ];
  };
  constructor(sucrose, lactose, maltose, strach, glycogen, fibre) {
    //monosaccharides
    this._glucose = 0;
    this._fructose = 0;
    this._galactose = 0;

    //disaccharides
    this._sucrose = sucrose;
    this._lactose = lactose;
    this._maltose = maltose;

    //polysaccharides
    this._strach = strach;
    this._glycogen = glycogen;
    this._fibre = fibre;
  };
  //monosaccharides
  get glucose() {
    return this._glucose +
      this._sucrose.glucose +
      this._lactose.glucose +
      this._maltose.glucose +
      this._strach.glucose +
      this._glycogen.glucose;

  };
  set glucose(value) { this._glucose = value; };
  get fructose() {
    return this._fructose +
      this._sucrose.fructose +
      this._lactose.fructose +
      this._maltose.fructose +
      this._strach.fructose +
      this._glycogen.fructose;

  };
  set fructose(value) { this._fructose = value; }
  get galactose() {
    return this._galactose +
      this._sucrose.galactose +
      this._lactose.galactose +
      this._maltose.galactose +
      this._strach.galactose +
      this._glycogen.galactose;

  };
  set galactose(value) { this._galactose = value; };

  //disaccharides
  get sucrose() { return this._sucrose.amount; };
  set sucrose(value) { this._sucrose.amount = value; };
  get lactose() { return this._lactose.amount; };
  set lactose(value) { this._lactose.amount = value; };
  get maltose() { return this._maltose.amount; };
  set maltose(value) { this._maltose.amount = value; };
  //polysaccharides
  get strach() { return this._strach.amount; };
  set strach(value) { this._strach.amount = value; };
  get glycogen() { return this._glycogen.amount; };
  set glycogen(value) { this._glycogen.amount = value; };
  get fibre() { return this._fibre.amount; };
  set fibre(value) { this._fibre.amount = value; };
};