import { creator } from './aux-methods';

function createNav(main, liNamesList) {
  const navbar = creator(main, 'nav', 'append');
  const navList = creator(navbar, 'ul', 'append');
  for (let i = 0; i < 5; i += 1) {
    const li = creator(navList, 'li', 'append');
    li.setAttribute('id', `${liNamesList[i]}`);
    li.innerHTML = `${liNamesList[i]}`;
  }

  return navbar;
}

const liNamesList = [
  'search-bar', 'add-proj', 'add-todo', 'all-proj', 'all-todos',
];

export { createNav, liNamesList };
