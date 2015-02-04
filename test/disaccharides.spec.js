import {Container} from 'aurelia-dependency-injection';
import {
  Disaccharides,
  Sucrose,
  Lactose,
  Maltose
} from 'lib/metabolic';

describe('Disaccharides', function(){
  beforeEach(function() {
    this.container = new Container();
  });
  describe('Amount getters ad setters', function(){
    it('sucrose', function(){
      let sucrose = this.container.get(Sucrose);
      sucrose.amount = 20;
      expect(sucrose.amount).to.equal(20);
    });
    it('lactose', function(){
      let lactose = this.container.get(Lactose);
      lactose.amount = 20;
      expect(lactose.amount).to.equal(20);
    });
    it('maltose', function(){
      let maltose = this.container.get(Maltose);
      maltose.amount = 20;
      expect(maltose.amount).to.equal(20);
    });
  });
  describe('Amounts to monosaccharides', function(){
    it('sucrose', function(){
      let sucrose = this.container.get(Sucrose);
      sucrose.amount = 20;
      expect(sucrose.fructose).to.equal(10);
      expect(sucrose.glucose).to.equal(10);
      expect(sucrose.galactose).to.equal(0);
    });
    it('lactose', function(){
      let lactose = this.container.get(Lactose);
      lactose.amount = 20;
      expect(lactose.fructose).to.equal(0);
      expect(lactose.glucose).to.equal(10);
      expect(lactose.galactose).to.equal(10);
    });
    it('maltose', function(){
      let maltose = this.container.get(Maltose);
      maltose.amount = 20;
      expect(maltose.fructose).to.equal(0);
      expect(maltose.glucose).to.equal(20);
      expect(maltose.galactose).to.equal(0);
    });
  });
  describe('Disaccharides object', function(){
    beforeEach(function() {
      this.disaccharides = this.container.get(Disaccharides);
    });
    describe('Amount getter and setter', function(){
      it('sucrose', function(){
        this.disaccharides.sucrose = 20;
        expect(this.disaccharides.sucrose).to.equal(20);
      });
      it('lactose', function(){
        this.disaccharides.lactose = 20;
        expect(this.disaccharides.lactose).to.equal(20);
      });
      it('maltose', function(){
        this.disaccharides.maltose = 20;
        expect(this.disaccharides.maltose).to.equal(20);
      });
    });
    describe('Amounts to monosaccharides', function(){
      it('sucrose', function(){
        this.disaccharides.sucrose = 20;
        expect(this.disaccharides.fructose_total).to.equal(10);
        expect(this.disaccharides.glucose_total).to.equal(10);
        expect(this.disaccharides.galactose_total).to.equal(0);
      });
      it('lactose', function(){
        this.disaccharides.lactose = 20;
        expect(this.disaccharides.fructose_total).to.equal(0);
        expect(this.disaccharides.glucose_total).to.equal(10);
        expect(this.disaccharides.galactose_total).to.equal(10);
      });
      it('maltose', function(){
        this.disaccharides.maltose = 20;
        expect(this.disaccharides.fructose_total).to.equal(0);
        expect(this.disaccharides.glucose_total).to.equal(20);
        expect(this.disaccharides.galactose_total).to.equal(0);
      });
    });
  });
});