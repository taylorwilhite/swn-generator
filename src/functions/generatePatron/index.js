import { Trust, Challenge, Opposition, Eager, Reward, Complication } from "../../constants/Patrons";
import { Die } from '../../classes/Die';

export const generatePatron = () => {
  const d4 = new Die(4);
  const d6 = new Die(6);
  const d8 = new Die(8);
  const d10 = new Die(10);
  const d12 = new Die(12);
  const d20 = new Die(20);

  const trust = Trust[d6.roll()];
  const challenge = Challenge[d8.roll()];
  const opposition = Opposition[d10.roll()];
  const eager = Eager[d4.roll()];
  const reward = Reward[d12.roll()];
  const complication = Complication[d20.roll()];

  return `They are ${eager} and ${trust}. They ask the PC to ${challenge}, and the PCs could potentially gain ${reward}; However, they're opposed by ${opposition} and ${complication}`;
}
