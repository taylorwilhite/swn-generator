import { Reward, Civil, Wild, Hazard } from '../../constants/Places';
import { Die } from '../../classes/Die';

export const generatePlace = (placeType) => {
  const d20 = new Die(20);
  const d8 = new Die(8);
  const d5 = new Die(5);

  const hazardType = d8.roll();
  
  const reward = Reward[d20.roll()];
  let activity;
  if(placeType === 'Civil') {
    activity = Civil[d20.roll()];
  } else {
    activity = Wild[d20.roll()];
  }
  const hazard = Hazard[hazardType]["hazard"][d5.roll()];
  const danger = Hazard[hazardType]["danger"][d5.roll()];

  return `When the PCs arrive they find ${activity}. They must contend with ${hazard} or else risk ${danger}. Their reward is ${reward}.`
}