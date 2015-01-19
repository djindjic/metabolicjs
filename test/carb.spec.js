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
      this.carb.sucrose = 20;
      expect(this.carb.fructose_total).to.equal(10);
      expect(this.carb.glucose_total).to.equal(10);
      expect(this.carb.galactose_total).to.equal(0);
      expect(this.carb.fibre_insoluble).to.equal(0);
      expect(this.carb.fibre_soluble).to.equal(0);
    });
    it('by entered lactose', function(){
      this.carb.lactose = 20;
      expect(this.carb.galactose_total).to.equal(10);
      expect(this.carb.glucose_total).to.equal(10);
      expect(this.carb.fructose_total).to.equal(0);
      expect(this.carb.fibre_insoluble).to.equal(0);
      expect(this.carb.fibre_soluble).to.equal(0);
    });
    it('by entered maltose', function(){
      this.carb.maltose = 20;
      expect(this.carb.glucose_total).to.equal(20);
      expect(this.carb.fructose_total).to.equal(0);
      expect(this.carb.galactose_total).to.equal(0);
      expect(this.carb.fibre_insoluble).to.equal(0);
      expect(this.carb.fibre_soluble).to.equal(0);
    });
    it('by entered strach', function(){
      this.carb.strach = 20;
      expect(this.carb.glucose_total).to.equal(20);
      expect(this.carb.fructose_total).to.equal(0);
      expect(this.carb.galactose_total).to.equal(0);
      expect(this.carb.fibre_insoluble).to.equal(0);
      expect(this.carb.fibre_soluble).to.equal(0);
    });
    it('by entered glycogen', function(){
      this.carb.glycogen = 20;
      expect(this.carb.glucose_total).to.equal(20);
      expect(this.carb.fructose_total).to.equal(0);
      expect(this.carb.galactose_total).to.equal(0);
      expect(this.carb.fibre_insoluble).to.equal(0);
      expect(this.carb.fibre_soluble).to.equal(0);
    });
    it('by entered fibre insoluble', function(){
      this.carb.fibre_insoluble = 20;
      expect(this.carb.glucose_total).to.equal(0);
      expect(this.carb.fructose_total).to.equal(0);
      expect(this.carb.galactose_total).to.equal(0);
      expect(this.carb.fibre_insoluble).to.equal(20);
      expect(this.carb.fibre_soluble).to.equal(0);
    });
    it('by entered fibre soluble', function(){
      this.carb.fibre_soluble = 20;
      expect(this.carb.glucose_total).to.equal(0);
      expect(this.carb.fructose_total).to.equal(0);
      expect(this.carb.galactose_total).to.equal(0);
      expect(this.carb.fibre_insoluble).to.equal(0);
      expect(this.carb.fibre_soluble).to.equal(20);
    });
    it('by entered sucrose, lactose, maltose, strach, glycogen and fibre', function(){
      this.carb.free_glucose = 10;
      this.carb.free_fructose = 10;
      this.carb.free_galactose = 10;
      this.carb.sucrose = 20;
      this.carb.lactose = 20;
      this.carb.maltose = 20;
      this.carb.strach = 20;
      this.carb.glycogen = 20;
      this.carb.fibre_soluble = 40;
      this.carb.fibre_insoluble = 50;
      expect(this.carb.fructose_total).to.equal(20);
      expect(this.carb.glucose_total).to.equal(90);
      expect(this.carb.galactose_total).to.equal(20);
      expect(this.carb.fibre_insoluble).to.equal(50);
      expect(this.carb.fibre_soluble).to.equal(40);
    });
  });
  it('injected dependencies is not a singletons', function(){
    let containerTest = new di.Container();
    containerTest.registerTransient(Carb, Carb);
    let firstCarb = containerTest.get(Carb);
    let secondCarb = containerTest.get(Carb);
    secondCarb.free_glucose = 20;
    expect(firstCarb.free_glucose).not.equal(secondCarb.free_glucose);
  });
});