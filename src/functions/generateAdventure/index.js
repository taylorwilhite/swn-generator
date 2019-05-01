import { Adventure, Restraint, Twist } from "../../constants/Adventures";
import { Die } from "../../classes/Die";

export const generateAdventure = () => {
  const d8 = new Die(8);
  const area = d8.roll();
  const d5 = new Die(5);
  const d20 = new Die(20);
  const situation = Adventure[area]["situation"][d5.roll()];
  const focus = Adventure[area]["focus"][d5.roll()];
  const restraint = Restraint[d20.roll()];
  const twist = Twist[d20.roll()];
  return `${situation} AND ${focus}. ${restraint}. The Twist? ${twist}.`
};
