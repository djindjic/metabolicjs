import calculation from "services/calculationFactory";

export class Person {
  constructor(gander, age, heigth, weight, bmi, bf) {

    this.gander = gander;
	this.age = age;
	this.heigth = heigth;
	this.weight = weight;
	this.bmi = CalculationFactory.bmi(this);
	this.bf = CalculationFactory.bf(this);
  }
}