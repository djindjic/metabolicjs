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
      expect(strach.amount).to.equal(20);
    });
    it('glycogen', function(){
      let glycogen = this.container.get(Glycogen);
      glycogen.amount = 20;
      expect(glycogen.amount).to.equal(20);
    });
  });
  describe('Amounts to monosaccharides', function(){
    it('strach', function(){
      let strach = this.container.get(Strach);
      strach.amount = 20;
      expect(strach.fructose).to.equal(0);
      expect(strach.glucose).to.equal(20);
      expect(strach.galactose).to.equal(0);
    });
    it('glycogen', function(){
      let glycogen = this.container.get(Glycogen);
      glycogen.amount = 20;
      expect(glycogen.fructose).to.equal(0);
      expect(glycogen.glucose).to.equal(20);
      expect(glycogen.galactose).to.equal(0);
    });
  });
  describe('Polysaccharides object', function(){
    beforeEach(function() {
      this.polysaccharides = this.container.get(Polysaccharides);
    });
    describe('Amount getter and setter', function(){
      it('strach', function(){
        this.polysaccharides.strach = 20;
        expect(this.polysaccharides.strach).to.equal(20);
      });
      it('glycogen', function(){
        this.polysaccharides.glycogen = 20;
        expect(this.polysaccharides.glycogen).to.equal(20);
      });
    });
    describe('Amounts to monosaccharides', function(){
      it('strach', function(){
        this.polysaccharides.strach = 20;
        expect(this.polysaccharides.fructose_total).to.equal(0);
        expect(this.polysaccharides.glucose_total).to.equal(20);
        expect(this.polysaccharides.galactose_total).to.equal(0);
      });
      it('glycogen', function(){
        this.polysaccharides.glycogen = 20;
        expect(this.polysaccharides.fructose_total).to.equal(0);
        expect(this.polysaccharides.glucose_total).to.equal(20);
        expect(this.polysaccharides.galactose_total).to.equal(0);
      });
    });
  });
});