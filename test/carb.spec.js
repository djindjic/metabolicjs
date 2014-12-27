import di from 'aurelia-dependency-injection';
import {
  Carb
  // Sucrose,
  // Lactose,
  // Maltose,
  // Strach,
  // Glycogen,
  // Fibre
} from 'lib/metabolic';

describe('Carb', function(){
  beforeEach(function() {
    let container = new di.Container();
    this.carb = container.get(Carb);
  });
  it('calculate amount of glucose by entered strach', function(){
    this.carb.strach = 20;
    expect(this.carb.glucose).toBe(20);
  });
  it('calculate amount of fructose by entered sucrose', function(){
    this.carb.sucrose = 20;
    expect(this.carb.glucose).toBe(10);
  });
  it('calculate amount of galactose by entered lactose', function(){
    this.carb.lactose = 20;
    expect(this.carb.galactose).toBe(10);
  });
});