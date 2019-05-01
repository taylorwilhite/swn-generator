import { Problem, Restraint, Twist } from "../../constants/Problems";
import { Die } from "../../classes/Die";

export const generateProblem = () => {
  const d8 = new Die(8);
  const area = d8.roll();
  const d5 = new Die(5);
  const d20 = new Die(20);
  const situation = Problem[area]["situation"][d5.roll()];
  const focus = Problem[area]["focus"][d5.roll()];
  const restraint = Restraint[d20.roll()];
  const twist = Twist[d20.roll()];
  return `${situation} AND ${focus}. ${restraint}. The Twist? ${twist}.`
};
