import di from 'aurelia-dependency-injection';
import {
  Monosaccharides
} from 'lib/metabolic';

describe('Monosaccharides', function(){
  beforeEach(function() {
    this.container = new di.Container();
  });
  describe('Monosaccharides object', function(){
    beforeEach(function() {
      this.monosaccharides = this.container.get(Monosaccharides);
    });
    describe('Amount getter and setter', function(){
      it('glucose', function(){
        this.monosaccharides.glucose = 20;
        expect(this.monosaccharides.fructose).to.equal(0);
        expect(this.monosaccharides.glucose).to.equal(20);
        expect(this.monosaccharides.galactose).to.equal(0);
      });
      it('fructose', function(){
        this.monosaccharides.fructose = 20;
        expect(this.monosaccharides.fructose).to.equal(20);
        expect(this.monosaccharides.glucose).to.equal(0);
        expect(this.monosaccharides.galactose).to.equal(0);
      });
      it('galactose', function(){
        this.monosaccharides.galactose = 20;
        expect(this.monosaccharides.fructose).to.equal(0);
        expect(this.monosaccharides.glucose).to.equal(0);
        expect(this.monosaccharides.galactose).to.equal(20);
      });
    });
  });
});