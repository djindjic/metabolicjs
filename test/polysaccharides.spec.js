import di from 'aurelia-dependency-injection';
import {
  Polysaccharides,
  Strach,
  Glycogen,
  Fibre
} from 'lib/metabolic';

describe('Polysaccharides', function(){
  beforeEach(function() {
    this.container = new di.Container();
  });
  describe('Amount getters ad setters', function(){
    it('strach', function(){
      let strach = this.container.get(Strach);
      strach.amount = 20;
      expect(strach.amount).toBe(20);
    });
    it('glycogen', function(){
      let glycogen = this.container.get(Glycogen);
      glycogen.amount = 20;
      expect(glycogen.amount).toBe(20);
    });
  });
  describe('Amounts to monosaccharides', function(){
    it('strach', function(){
      let strach = this.container.get(Strach);
      strach.amount = 20;
      expect(strach.fructose).toBe(0);
      expect(strach.glucose).toBe(20);
      expect(strach.galactose).toBe(0);
    });
    it('glycogen', function(){
      let glycogen = this.container.get(Glycogen);
      glycogen.amount = 20;
      expect(glycogen.fructose).toBe(0);
      expect(glycogen.glucose).toBe(20);
      expect(glycogen.galactose).toBe(0);
    });
  });
  describe('Polysaccharides object', function(){
    beforeEach(function() {
      this.polysaccharides = this.container.get(Polysaccharides);
    });
    describe('Amount getter and setter', function(){
      it('strach', function(){
        this.polysaccharides.strach = 20;
        expect(this.polysaccharides.strach).toBe(20);
      });
      it('glycogen', function(){
        this.polysaccharides.glycogen = 20;
        expect(this.polysaccharides.glycogen).toBe(20);
      });
    });
    describe('Amounts to monosaccharides', function(){
      it('strach', function(){
        this.polysaccharides.strach = 20;
        expect(this.polysaccharides.fructose_total).toBe(0);
        expect(this.polysaccharides.glucose_total).toBe(20);
        expect(this.polysaccharides.galactose_total).toBe(0);
      });
      it('glycogen', function(){
        this.polysaccharides.glycogen = 20;
        expect(this.polysaccharides.fructose_total).toBe(0);
        expect(this.polysaccharides.glucose_total).toBe(20);
        expect(this.polysaccharides.galactose_total).toBe(0);
      });
    });
  });
});