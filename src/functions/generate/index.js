import { generateProblem } from "../generateProblem";
import { generatePerson } from "../generatePerson";
import { generatePlace } from "../generatePlace";
import {generateNPC} from "../generateNPC";
import { generatePatron } from "../generatePatron";
import { generateUrbanEnc } from "../generateUrbanEnc";

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
    case 'Patron':
      func = generatePatron;
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
    case 'Urban Encounter':
      func = generateUrbanEnc;
      break;
  }

  if(param !== '') {
    return func(param);
  } else {
    return func();
  }
}