import { generateProblem } from "../generateProblem";
import { generatePerson } from "../generatePerson";
import { generatePlace } from "../generatePlace";
import {generateNPC} from "../generateNPC";

export const generate = (type) => {
  let func
  let param
  switch (type) {
    case 'Problem':
      func = generateProblem;
      break;
    case 'Person':
      func = generatePerson;
      break;
    case 'NPC':
      func = generateNPC;
      break;
    case 'Civilized Place':
      func = generatePlace;
      param = 'Civil';
      break;
    case 'Wild Place':
      func = generatePlace;
      param = 'Wild';
      break;
  }

  if(param !== '') {
    return func(param);
  } else {
    return func();
  }
}