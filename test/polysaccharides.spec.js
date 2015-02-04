import {Container} from 'aurelia-dependency-injection';
import {
  Polysaccharides,
  Strach,
  Glycogen,
  Fibre
} from 'lib/metabolic';

describe('Polysaccharides', function(){
  beforeEach(function() {
    this.container = new Container();
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
  describe('Fibre getters nad setters', function(){
    it('insoluble', function(){
      let fibre = this.container.get(Fibre);
      fibre.insoluble = 20;
      expect(fibre.insoluble).to.equal(20);
    });
    it('soluble', function(){
      let fibre = this.container.get(Fibre);
      fibre.soluble = 20;
      expect(fibre.soluble).to.equal(20);
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
        expect(this.polysaccharides.glycogen).to.equal(0);
        expect(this.polysaccharides.fibre_insoluble).to.equal(0);
        expect(this.polysaccharides.fibre_soluble).to.equal(0);
      });
      it('glycogen', function(){
        this.polysaccharides.glycogen = 20;
        expect(this.polysaccharides.glycogen).to.equal(20);
        expect(this.polysaccharides.strach).to.equal(0);
        expect(this.polysaccharides.fibre_insoluble).to.equal(0);
        expect(this.polysaccharides.fibre_soluble).to.equal(0);
      });
    });
    describe('Amounts to monosaccharides', function(){
      it('strach', function(){
        this.polysaccharides.strach = 20;
        expect(this.polysaccharides.fructose_total).to.equal(0);
        expect(this.polysaccharides.glucose_total).to.equal(20);
        expect(this.polysaccharides.galactose_total).to.equal(0);
        expect(this.polysaccharides.fibre_insoluble).to.equal(0);
        expect(this.polysaccharides.fibre_soluble).to.equal(0);
      });
      it('glycogen', function(){
        this.polysaccharides.glycogen = 20;
        expect(this.polysaccharides.fructose_total).to.equal(0);
        expect(this.polysaccharides.glucose_total).to.equal(20);
        expect(this.polysaccharides.galactose_total).to.equal(0);
        expect(this.polysaccharides.fibre_insoluble).to.equal(0);
        expect(this.polysaccharides.fibre_soluble).to.equal(0);
      });
    });
    describe('Fibre amounts', function(){
      it('insoluble', function(){
        this.polysaccharides.fibre_insoluble = 20;
        expect(this.polysaccharides.fibre_insoluble).to.equal(20);
        expect(this.polysaccharides.fibre_soluble).to.equal(0);
        expect(this.polysaccharides.fructose_total).to.equal(0);
        expect(this.polysaccharides.glucose_total).to.equal(0);
        expect(this.polysaccharides.galactose_total).to.equal(0);
      });
      it('soluble', function(){
        this.polysaccharides.fibre_soluble = 20;
        expect(this.polysaccharides.fibre_insoluble).to.equal(0);
        expect(this.polysaccharides.fibre_soluble).to.equal(20);
        expect(this.polysaccharides.fructose_total).to.equal(0);
        expect(this.polysaccharides.glucose_total).to.equal(0);
        expect(this.polysaccharides.galactose_total).to.equal(0);
      });
    });
  });
});