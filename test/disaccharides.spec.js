import di from 'aurelia-dependency-injection';
import {
  Disaccharides,
  Sucrose,
  Lactose,
  Maltose
} from 'lib/metabolic';

describe('Disaccharides', function(){
  beforeEach(function() {
    this.container = new di.Container();
  });
  describe('Amount getters ad setters', function(){
    it('sucrose', function(){
      let sucrose = this.container.get(Sucrose);
      sucrose.amount = 20;
      expect(sucrose.amount).toBe(20);
    });
    it('lactose', function(){
      let lactose = this.container.get(Lactose);
      lactose.amount = 20;
      expect(lactose.amount).toBe(20);
    });
    it('maltose', function(){
      let maltose = this.container.get(Maltose);
      maltose.amount = 20;
      expect(maltose.amount).toBe(20);
    });
  });
  describe('Amounts to monosaccharides', function(){
    it('sucrose', function(){
      let sucrose = this.container.get(Sucrose);
      sucrose.amount = 20;
      expect(sucrose.fructose).toBe(10);
      expect(sucrose.glucose).toBe(10);
      expect(sucrose.galactose).toBe(0);
    });
    it('lactose', function(){
      let lactose = this.container.get(Lactose);
      lactose.amount = 20;
      expect(lactose.fructose).toBe(0);
      expect(lactose.glucose).toBe(10);
      expect(lactose.galactose).toBe(10);
    });
    it('maltose', function(){
      let maltose = this.container.get(Maltose);
      maltose.amount = 20;
      expect(maltose.fructose).toBe(0);
      expect(maltose.glucose).toBe(20);
      expect(maltose.galactose).toBe(0);
    });
  });
  describe('Disaccharides object', function(){
    beforeEach(function() {
      this.disaccharides = this.container.get(Disaccharides);
    });
    describe('Amount getter and setter', function(){
      it('sucrose', function(){
        this.disaccharides.sucrose = 20;
        expect(this.disaccharides.sucrose).toBe(20);
      });
      it('lactose', function(){
        this.disaccharides.lactose = 20;
        expect(this.disaccharides.lactose).toBe(20);
      });
      it('maltose', function(){
        this.disaccharides.maltose = 20;
        expect(this.disaccharides.maltose).toBe(20);
      });
    });
    describe('Amounts to monosaccharides', function(){
      it('sucrose', function(){
        this.disaccharides.sucrose = 20;
        expect(this.disaccharides.fructose_total).toBe(10);
        expect(this.disaccharides.glucose_total).toBe(10);
        expect(this.disaccharides.galactose_total).toBe(0);
      });
      it('lactose', function(){
        this.disaccharides.lactose = 20;
        expect(this.disaccharides.fructose_total).toBe(0);
        expect(this.disaccharides.glucose_total).toBe(10);
        expect(this.disaccharides.galactose_total).toBe(10);
      });
      it('maltose', function(){
        this.disaccharides.maltose = 20;
        expect(this.disaccharides.fructose_total).toBe(0);
        expect(this.disaccharides.glucose_total).toBe(20);
        expect(this.disaccharides.galactose_total).toBe(0);
      });
    });
  });
});