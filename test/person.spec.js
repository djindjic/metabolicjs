import {Container} from 'aurelia-dependency-injection';
import {Person} from 'lib/metabolic';

describe('Person', function(){
  beforeEach(function() {
    let container = new Container();
    this.person = container.get(Person);

    this.person.age = 34;
    this.person.gender = 'male';
    this.person.height = 172;
    this.person.weight = 81;
  });
  it('set and get properties', function(){
    expect(this.person.age).to.equal(34);
    expect(this.person.gender).to.equal('male');
    expect(this.person.height).to.equal(172);
    expect(this.person.weight).to.equal(81);
  });

  it('calculate body mass index', function(){
    expect(this.person.body_mass_index).to.equal(27.38);
  });

  it('calculate average body fat', function(){
    expect(this.person.average_body_fat).to.equal(24.48);
  });
});