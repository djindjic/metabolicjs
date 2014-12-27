export class Day {
  constructor() {
    this._meals = [];
    this._trainings = [];
  };

  addMeal(meal) { this._meals.push(meal); };
  addTraining(training) { this._trainings.push(training); };
  get meals() { return this._meals; };
  get trainings() { return this._trainings; };
};