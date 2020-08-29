import {
  creator, createShowContainer, createObjList, removeSection,
} from './aux-methods';

function todosInfo(todos, ul) {
  for (let i = 0; i < todos.length; i += 1) {
    const li = creator(ul, 'li', 'append');

    const title = creator(li, 'h3', 'append');
    title.innerHTML = `${todos[i].getTitle()}`;

    const descr = creator(li, 'p', 'append');
    descr.innerHTML = `${todos[i].getDescr()}`;

    const dueDate = creator(li, 'p', 'append');
    dueDate.innerHTML = `${todos[i].getDueDate()}`;

    const notes = creator(li, 'p', 'append');
    notes.innerHTML = `${todos[i].getNotes()}`;
  }
}

function createShowToDos(parent, projectsCont, todosInfo) {
  removeSection();
  const container = createShowContainer(parent, 'show-all-todo', 'All TO-DOs');
  createObjList(container, projectsCont, 'show-ul-cont', todosInfo);
  return container;
}

export { createShowToDos, todosInfo };