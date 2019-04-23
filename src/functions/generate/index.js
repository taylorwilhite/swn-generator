import { generateAdventure } from "../generateAdventure";
import { generateNPC } from "../generateNPC";

export const generate = (type) => {
  let func
  switch (type) {
    case 'Adventure':
      func = generateAdventure;
      break;
    case 'NPC':
      func = generateNPC;
      break;
  }

  return func();
}