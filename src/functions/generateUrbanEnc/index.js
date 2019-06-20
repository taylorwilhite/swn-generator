import { Venue, Reason, Nature, Subject, Antagonist, Feature } from "../../constants/UrbanEnc";
import { Die } from '../../classes/Die';

export const generateUrbanEnc = () => {
  const d4 = new Die(4);
  const d6 = new Die(6);
  const d8 = new Die(8);
  const d10 = new Die(10);
  const d12 = new Die(12);
  const d20 = new Die(20);

  const venue = Venue[d6.roll()];
  const reason = Reason[d8.roll()];
  const nature = Nature[d10.roll()];
  const subject = Subject[d4.roll()];
  const antagonist = Antagonist[d12.roll()];
  const feature = Feature[d20.roll()];

  return `The PCs see ${nature} because of ${subject} ${venue}. They get pulled in because ${reason}, and must contend with ${antagonist} and the fact there's ${feature}`;
}