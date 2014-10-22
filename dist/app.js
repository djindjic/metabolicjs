"use strict";
var calculation = require("services/calculationFactory").default;

var Person = function() {
  var Person = function Person(gander, age, heigth, weight, bmi, bf) {

    this.gander = gander;
    this.age = age;
    this.heigth = heigth;
    this.weight = weight;
    this.bmi = CalculationFactory.bmi(this);
    this.bf = CalculationFactory.bf(this);
  };

  return Person;
}();

exports.Person = Person;