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

  it('calculate body mass index', function(){
    expect(this.person.body_mass_index).toBe(27.38);
  });

  it('calculate average body fat', function(){
    expect(this.person.average_body_fat).toBe(24.48);
  });
});