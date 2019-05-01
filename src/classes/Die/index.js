export class Die {
  constructor(sides) {
    this.sides = sides;
  }
  roll() {
    const result = Math.floor(Math.random() * this.sides) + 1;
    return result;
  }
}