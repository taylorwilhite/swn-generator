import { Manner, Outcome, Motivation, Want, Power, Hook } from '../../constants/NPCs';

class Die {
  constructor(sides) {
    this.sides = sides;
  }
  roll() {
    const result = Math.floor(Math.random() * this.sides) + 1;
    return result;
  }
}

export const generateNPC = () => {
  const d20 = new Die(20);
  const manner = Manner[d20.roll()];
  const outcome = Outcome[d20.roll()];
  const motivation = Motivation[d20.roll()];
  const want = Want[d20.roll()];
  const power = Power[d20.roll()];
  const hook = Hook[d20.roll()];

  return `They are ${manner}. Their motivation is ${motivation} and they want the PCs to ${want}. ${power} and ${outcome}. ${hook}`
}