import { Adventure, Restraint, Twist } from "../../constants/Adventures";

class Die {
  constructor(sides) {
    this.sides = sides;
  }
  roll() {
    const result = Math.floor(Math.random() * this.sides) + 1;
    return result;
  }
}

export const generateAdventure = () => {
  const d8 = new Die(8);
  const area = d8.roll();
  const d5 = new Die(5);
  const d20 = new Die(20);
  const situation = Adventure[area]["situation"][d5.roll()];
  const focus = Adventure[area]["focus"][d5.roll()];
  const restraint = Restraint[d20.roll()];
  const twist = Twist[d20.roll()];
  return {
    sitch: `${situation} AND ${focus}`,
    setup: `${restraint} BUT ${twist}`
  };
};
