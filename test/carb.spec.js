import di from 'aurelia-dependency-injection';
import {
  Carb
} from 'lib/metabolic';

describe('Carb', function(){
  beforeEach(function() {
    this.container = new di.Container();
    this.carb = this.container.get(Carb);
  });
  it('get total amount of fructose and glucose by entered sucrose', function(){
    this.carb.disaccharides.sucrose = 20;
    expect(this.carb.fructose_total).toBe(10);
    expect(this.carb.glucose_total).toBe(10);
    expect(this.carb.galactose_total).toBe(0);
  });
  it('get total amount of galactose and glucose by entered lactose', function(){
    this.carb.disaccharides.lactose = 20;
    expect(this.carb.galactose_total).toBe(10);
    expect(this.carb.glucose_total).toBe(10);
    expect(this.carb.fructose_total).toBe(0);
  });
  it('get total amount of glucose by entered maltose', function(){
    this.carb.disaccharides.maltose = 20;
    expect(this.carb.glucose_total).toBe(20);
    expect(this.carb.fructose_total).toBe(0);
    expect(this.carb.galactose_total).toBe(0);
  });
  it('get total amount of glucose by entered strach', function(){
    this.carb.polysaccharides.strach = 20;
    expect(this.carb.glucose_total).toBe(20);
    expect(this.carb.fructose_total).toBe(0);
    expect(this.carb.galactose_total).toBe(0);
  });
  it('get total amount of glucose by entered glycogen', function(){
    this.carb.polysaccharides.glycogen = 20;
    expect(this.carb.glucose_total).toBe(20);
    expect(this.carb.fructose_total).toBe(0);
    expect(this.carb.galactose_total).toBe(0);
  });
  it('get total amount of fructose, glucose and galactose by entered sucrose, lactose, maltose, strach and glycogen', function(){
    this.carb.monosaccharides.glucose = 10;
    this.carb.monosaccharides.fructose = 10;
    this.carb.monosaccharides.galactose = 10;
    this.carb.disaccharides.sucrose  = 20;
    this.carb.disaccharides.lactose  = 20;
    this.carb.disaccharides.maltose  = 20;
    this.carb.polysaccharides.strach   = 20;
    this.carb.polysaccharides.glycogen = 20;
    expect(this.carb.fructose_total).toBe(20);
    expect(this.carb.glucose_total).toBe(90);
    expect(this.carb.galactose_total).toBe(20);
  });
});