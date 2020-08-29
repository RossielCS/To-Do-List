import {
  creator, createShowContainer, createObjList, removeSection,
} from './aux-methods';

function todosList(todos, ul) {
  for (let i = 0; i < todos.length; i += 1) {
    const li = creator(ul, 'li', 'append');

    const title = creator(li, 'h3', 'append');
    title.innerHTML = `${todos[i].getTitle()}`;
  }
}

function createShowProj(parent, projectsCont, todosList) {
  removeSection();
  const container = createShowContainer(parent, 'show-all-proj', 'All Projects');
  createObjList(container, projectsCont, 'show-ul-cont', todosList);
  return container;
}

export { createShowProj, todosList };