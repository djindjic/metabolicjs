import di from 'aurelia-dependency-injection';
import {
  Carb,
  Sucrose,
  Lactose,
  Maltose,
  Strach,
  Glycogen,
  Fibre
} from 'lib/metabolic';

describe('Carb', function(){
  beforeEach(function() {
    this.container = new di.Container();
    this.carb = this.container.get(Carb);
  });
  it('calculate amount of fructose and glucose by entered sucrose', function(){
    this.carb.sucrose = 20;
    expect(this.carb.fructose).toBe(10);
    expect(this.carb.glucose).toBe(10);
  });
  it('calculate amount of galactose and glucose by entered lactose', function(){
    this.carb.lactose = 20;
    expect(this.carb.galactose).toBe(10);
    expect(this.carb.glucose).toBe(10);
  });
  it('calculate amount of glucose by entered maltose', function(){
    this.carb.maltose = 20;
    expect(this.carb.glucose).toBe(20);
  });
  it('calculate amount of glucose by entered strach', function(){
    this.carb.strach = 20;
    expect(this.carb.glucose).toBe(20);
  });
  it('calculate amount of glucose by entered glycogen', function(){
    this.carb.glycogen = 20;
    expect(this.carb.glucose).toBe(20);
  });
  it('sucrose amount getter and setter', function(){
    let sucrose = this.container.get(Sucrose);
    sucrose.amount = 20;
    expect(sucrose.amount).toBe(20);
  });
});