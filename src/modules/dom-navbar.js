import { creator } from './aux-methods';
import addProj from '../assets/images/add_proj.png';
import addToDo from '../assets/images/add_todo.png';
import allProj from '../assets/images/all_proj.png';
import allToDos from '../assets/images/all_todos.png';

const liNames = [
  'New Project', 'New To-Do', 'All Projects', 'All To-Dos',
];

const liIds = [
  'add-proj', 'add-todo', 'all-proj', 'all-todos',
];

const liIcons = [
  addProj, addToDo, allProj, allToDos,
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
