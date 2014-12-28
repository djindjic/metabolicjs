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
        expect(this.monosaccharides.fructose).toBe(0);
        expect(this.monosaccharides.glucose).toBe(20);
        expect(this.monosaccharides.galactose).toBe(0);
      });
      it('fructose', function(){
        this.monosaccharides.fructose = 20;
        expect(this.monosaccharides.fructose).toBe(20);
        expect(this.monosaccharides.glucose).toBe(0);
        expect(this.monosaccharides.galactose).toBe(0);
      });
      it('galactose', function(){
        this.monosaccharides.galactose = 20;
        expect(this.monosaccharides.fructose).toBe(0);
        expect(this.monosaccharides.glucose).toBe(0);
        expect(this.monosaccharides.galactose).toBe(20);
      });
    });
  });
});