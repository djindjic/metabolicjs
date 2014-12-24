import di from 'aurelia-dependency-injection';
import {Person} from 'lib/metabolic';

describe('Person', function(){
  beforeEach(function() {
    let container = new di.Container();
    this.person = container.get(Person);

    this.person.age = 34;
    this.person.gender = 'male';
    this.person.height = 172;
    this.person.weight = 81;
  });
  it('set and get properties', function(){
    expect(this.person.age).toBe(34);
    expect(this.person.gender).toBe('male');
    expect(this.person.height).toBe(172);
    expect(this.person.weight).toBe(81);
  });

  it('calculate bmi', function(){
    expect(this.person.bmi).toBe(27.38);
  });

  it('calculate bf', function(){
    expect(this.person.bf).toBe(24.48);
  });
});