import {
  creator, createShowContainer, removeSection, addDeleteMethod,
} from './aux-methods';

function getProjectsToDos(projectsCont) {
  const allTodos = [];
  Object.values(projectsCont).forEach(proj => {
    const todos = proj.getToDos();
    todos.map(x => allTodos.push(x));
  });
  console.log(allTodos);
  return allTodos;
}

function todoList(container, projectsCont, ulClass) {
  const ulCont = creator(container, 'div', 'append');
  ulCont.setAttribute('class', `${ulClass}`);
  const ul = creator(ulCont, 'ul', 'append');
  const allTodos = getProjectsToDos(projectsCont);
  for (let i = 0; i < allTodos.length; i += 1) {
    const li = creator(ul, 'li', 'append');

    const header = creator(li, 'div', 'append');
    header.setAttribute('class', 'title-btn');

    const title = creator(header, 'h3', 'append');
    title.innerHTML = `${allTodos[i].getTitle()}`;

    const deleteBtn = creator(header, 'button', 'append');
    deleteBtn.innerHTML = 'DELETE';
    deleteBtn.setAttribute('class', 'delete-todo');
    addDeleteMethod(deleteBtn);

    const descr = creator(li, 'p', 'append');
    descr.innerHTML = `${allTodos[i].getDescr()}`;

    const dueDate = creator(li, 'p', 'append');
    dueDate.innerHTML = `${allTodos[i].getDueDate()}`;

    const notes = creator(li, 'p', 'append');
    notes.innerHTML = `${allTodos[i].getNotes()}`;
  }
  return ulCont;
}

function createShowToDos(parent, projectsCont) {
  removeSection();
  const container = createShowContainer(parent, 'show-all-todo', 'All TO-DOs');
  todoList(container, projectsCont, 'show-ul-cont');
  return container;
}

export default createShowToDos;