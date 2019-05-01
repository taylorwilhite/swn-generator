import { generateAdventure } from "../generateAdventure";
import { generatePerson } from "../generatePerson";
import { generatePlace } from "../generatePlace";

export const generate = (type) => {
  let func
  let param
  switch (type) {
    case 'Adventure':
      func = generateAdventure;
      break;
    case 'Person':
      func = generatePerson;
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