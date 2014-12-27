export class Cycle {
  constructor() {
    this._days = [];
  };

  addDay(day) { this._days.push(day); };
  get days() { return this._days; };
};