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
  it('get total amount of fructose and glucose by entered sucrose', function(){
    this.carb.sucrose = 20;
    expect(this.carb.fructose_total).toBe(10);
    expect(this.carb.glucose_total).toBe(10);
  });
  it('get total amount of galactose and glucose by entered lactose', function(){
    this.carb.lactose = 20;
    expect(this.carb.galactose_total).toBe(10);
    expect(this.carb.glucose_total).toBe(10);
  });
  it('get total amount of glucose by entered maltose', function(){
    this.carb.maltose = 20;
    expect(this.carb.glucose_total).toBe(20);
  });
  it('get total amount of glucose by entered strach', function(){
    this.carb.strach = 20;
    expect(this.carb.glucose_total).toBe(20);
  });
  it('get total amount of glucose by entered glycogen', function(){
    this.carb.glycogen = 20;
    expect(this.carb.glucose_total).toBe(20);
  });
  it('get total amount of fructose, glucose and galactose by entered sucrose, lactose, maltose, strach and glycogen', function(){
    this.carb.sucrose  = 20;
    this.carb.lactose  = 20;
    this.carb.maltose  = 20;
    this.carb.strach   = 20;
    this.carb.glycogen = 20;
    expect(this.carb.fructose_total).toBe(10);
    expect(this.carb.glucose_total).toBe(80);
    expect(this.carb.galactose_total).toBe(10);
  });
  //getter and setters
  it('sucrose amount getter and setter', function(){
    let sucrose = this.container.get(Sucrose);
    sucrose.amount = 20;
    expect(sucrose.amount).toBe(20);
  });
  it('lactose amount getter and setter', function(){
    let lactose = this.container.get(Lactose);
    lactose.amount = 20;
    expect(lactose.amount).toBe(20);
  });
  it('maltose amount getter and setter', function(){
    let maltose = this.container.get(Maltose);
    maltose.amount = 20;
    expect(maltose.amount).toBe(20);
  });
  it('strach amount getter and setter', function(){
    let strach = this.container.get(Strach);
    strach.amount = 20;
    expect(strach.amount).toBe(20);
  });
  it('glycogen amount getter and setter', function(){
    let glycogen = this.container.get(Glycogen);
    glycogen.amount = 20;
    expect(glycogen.amount).toBe(20);
  });
});