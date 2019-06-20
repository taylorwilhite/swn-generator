import { Weather, Nature, Friendly, Range, Hostiles, Feature } from "../../constants/WildEnc";
import { Die } from '../../classes/Die';

export const generateWildEnc = () => {
  const d4 = new Die(4);
  const d6 = new Die(6);
  const d8 = new Die(8);
  const d10 = new Die(10);
  const d12 = new Die(12);
  const d20 = new Die(20);

  const weather = Weather[d6.roll()];
  const nature = Nature[d8.roll()];
  const friendly = Friendly[d10.roll()];
  const range = Range[d4.roll()];
  const hostiles = Hostiles[d12.roll()];
  const feature = Feature[d20.roll()];

  return `${range} in the ${weather}, the PCs encounter ${nature}. There's a ${friendly} and ${hostiles} involved, and also ${feature}`;
}