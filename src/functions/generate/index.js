import { generateAdventure } from "../generateAdventure";
import { generatePerson } from "../generatePerson";

export const generate = (type) => {
  let func
  switch (type) {
    case 'Adventure':
      func = generateAdventure;
      break;
    case 'Person':
      func = generatePerson;
      break;
  }

  return func();
}