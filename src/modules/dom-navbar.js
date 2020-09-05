import { creator } from './aux-methods';
import * as images from '../assets/images';

const liNames = [
  'Add a Project', ' Add a To-Do', 'All Projects', 'All To-Dos',
];

const liIds = [
  'add-proj', 'add-todo', 'all-proj', 'all-todos',
];

const liIcons = [
  images.add_proj, images.add_todo, images.all_proj, images.all_todos,
];

/*
function createBg(menuCell, index, saladsImages) {
  menuCell.setAttribute('class', 'menu-salad-bg');
  menuCell.style.backgroundImage = `url('${saladsImages}')`;
}
*/

function createNav(main, liIds, liNames, liIcons) {
  const navbar = creator(main, 'nav', 'append');
  const navList = creator(navbar, 'ul', 'append');
  for (let i = 0; i < 4; i += 1) {
    const li = creator(navList, 'li', 'append');
    li.setAttribute('id', `${liIds[i]}`);

    const icon = creator(li, 'div', 'append');
    icon.style.backgroundImage = `url('${liIcons[i]}')`;

    const text = creator(li, 'p', 'append');
    text.innerHTML = `${liNames[i]}`;
  }

  return navbar;
}

export {
  createNav, liIds, liNames, liIcons,
};
