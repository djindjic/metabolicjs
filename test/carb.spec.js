import di from 'aurelia-dependency-injection';
import {
  Carb
} from 'lib/metabolic';

describe('Carb', function(){
  beforeEach(function() {
    this.container = new di.Container();
    this.container.registerTransient(Carb, Carb);
    this.carb = this.container.get(Carb);
  });
  describe('Total amount of monosaccharides and fibre', function(){
    it('by entered sucrose', function(){
      this.carb.disaccharides.sucrose = 20;
      expect(this.carb.fructose_total).to.equal(10);
      expect(this.carb.glucose_total).to.equal(10);
      expect(this.carb.galactose_total).to.equal(0);
      expect(this.carb.fibre_total).to.equal(0);
    });
    it('by entered lactose', function(){
      this.carb.disaccharides.lactose = 20;
      expect(this.carb.galactose_total).to.equal(10);
      expect(this.carb.glucose_total).to.equal(10);
      expect(this.carb.fructose_total).to.equal(0);
      expect(this.carb.fibre_total).to.equal(0);
    });
    it('by entered maltose', function(){
      this.carb.disaccharides.maltose = 20;
      expect(this.carb.glucose_total).to.equal(20);
      expect(this.carb.fructose_total).to.equal(0);
      expect(this.carb.galactose_total).to.equal(0);
      expect(this.carb.fibre_total).to.equal(0);
    });
    it('by entered strach', function(){
      this.carb.polysaccharides.strach = 20;
      expect(this.carb.glucose_total).to.equal(20);
      expect(this.carb.fructose_total).to.equal(0);
      expect(this.carb.galactose_total).to.equal(0);
      expect(this.carb.fibre_total).to.equal(0);
    });
    it('by entered glycogen', function(){
      this.carb.polysaccharides.glycogen = 20;
      expect(this.carb.glucose_total).to.equal(20);
      expect(this.carb.fructose_total).to.equal(0);
      expect(this.carb.galactose_total).to.equal(0);
      expect(this.carb.fibre_total).to.equal(0);
    });
    it('by entered fibre', function(){
      this.carb.polysaccharides.fibre = 20;
      expect(this.carb.glucose_total).to.equal(0);
      expect(this.carb.fructose_total).to.equal(0);
      expect(this.carb.galactose_total).to.equal(0);
      expect(this.carb.fibre_total).to.equal(20);
    });
    it('by entered sucrose, lactose, maltose, strach, glycogen and fibre', function(){
      this.carb.monosaccharides.glucose = 10;
      this.carb.monosaccharides.fructose = 10;
      this.carb.monosaccharides.galactose = 10;
      this.carb.disaccharides.sucrose = 20;
      this.carb.disaccharides.lactose = 20;
      this.carb.disaccharides.maltose = 20;
      this.carb.polysaccharides.strach = 20;
      this.carb.polysaccharides.glycogen = 20;
      this.carb.polysaccharides.fibre = 30;
      expect(this.carb.fructose_total).to.equal(20);
      expect(this.carb.glucose_total).to.equal(90);
      expect(this.carb.galactose_total).to.equal(20);
      expect(this.carb.fibre_total).to.equal(30);
    });
  });
  it('injected dependencies is not a singletons', function(){
    let firstCarb = this.container.get(Carb);
    let secondCarb = this.container.get(Carb);
    secondCarb.monosaccharides.glucose = 20;
    expect(firstCarb.monosaccharides).not.equal(secondCarb.monosaccharides);
  });
});