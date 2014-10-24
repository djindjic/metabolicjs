import {Calculator} from "lib/calculator";

var calculator = new Calculator();

export class Person {
  constructor(gander, age, heigth, weight, bmi, bf) {

    this.gander = gander;
	this.age = age;
	this.heigth = heigth;
	this.weight = weight;
	this.bmi = calculator.bmi(this);
	this.bf = calculator.bf(this);
  }
}