import { Age, Background, Role, Problem, Desire, Trait } from '../../constants/NPCs';
import { Die } from '../../classes/Die';

export const generateNPC = () => {
  const d4 = new Die(4);
  const d6 = new Die(6);
  const d8 = new Die(8);
  const d10 = new Die(10);
  const d12 = new Die(12);
  const d20 = new Die(20);

  const age = Age[d4.roll()];
  const background = () => {
    const roll = d6.roll();

    if (roll > 4) {
      return Background[roll] + Background[d4.roll()];
    } else {
      return Background[roll];
    }
  }
  const role = Role[d8.roll()];
  const problem = () => {
    const roll = d10.roll();
    if (roll === 10) {
      return Problem[roll] + Problem[new Die(9).roll()];
    } else {
      return Problem[roll];
    }
  }
  const desire = Desire[d12.roll()];
  const trait = Trait[d20.roll()];

  return `They are a ${age} ${role} from ${background()}. ${desire} but ${problem()}, and their primary trait is ${trait}`
}