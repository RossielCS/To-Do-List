import {
  creator, createShowContainer, removeSection, createEditBtn, createDeleteBtn,
} from './aux-methods';
import { getValuesFromToDo } from './input';
import { toDosCont } from './todo';

function sortToDos(toDosCont) {
  const allTodos = [];
  Object.values(toDosCont).forEach(x => {
    allTodos.push(x);
  });
  allTodos.sort((x, y) => x.getPriority() - y.getPriority(), 0);
  return allTodos;
}

function setPriority(priority) {
  switch (priority) {
    case '01':
      return 'Critical';
    case '02':
      return 'High';
    case '03':
      return 'Medium';
    default:
      return 'Low';
  }
}

function addCBToChangeStatus(element, todo) {
  element.addEventListener('click', () => {
    todo.updateStatus();
  });
}

function addEditToContent(todoContent, todo) {
  todoContent.addEventListener('click', () => {
    if (!document.querySelector('.modal')) {
      document.getElementById('add-todo').click();
      const modal = document.getElementsByClassName('modal')[0];
      modal.style.visibility = 'hidden';
      const btnSubmit = document.getElementsByClassName('btn-submit')[0];
      createEditBtn(btnSubmit, 'todo-form', 'input-todo', todo);
      createDeleteBtn(btnSubmit, 'todo-form');
      btnSubmit.remove();
      getValuesFromToDo(todo);
      modal.style.visibility = 'visible';
    }
  });
}

function todoList(container, ulClass) {
  const ulCont = creator(container, 'div', 'append');
  ulCont.setAttribute('class', `${ulClass}`);
  const ul = creator(ulCont, 'ul', 'append');
  const allTodos = sortToDos(toDosCont);
  for (let i = 0; i < allTodos.length; i += 1) {
    const li = creator(ul, 'li', 'append');

    const priority = creator(li, 'div', 'append');
    const priorityText = setPriority(allTodos[i].getPriority());
    priority.setAttribute('class', `todo-priority ${priorityText.toLowerCase()}`);
    priority.innerHTML = `${priorityText}`;
    addCBToChangeStatus(priority, allTodos[i]);

    const todoContent = creator(li, 'div', 'append');
    todoContent.setAttribute('class', 'todo-content');
    // todoContent.setAttribute('id-data', `todo-${allTodos[i].getIndex()}`);
    addEditToContent(todoContent, allTodos[i]);

    const header = creator(todoContent, 'div', 'append');
    header.setAttribute('class', 'title-btn');

    const title = creator(header, 'h3', 'append');
    title.innerHTML = `${allTodos[i].getTitle()}`;

    const descr = creator(todoContent, 'p', 'append');
    descr.innerHTML = `${allTodos[i].getDescr()}`;

    const dueDate = creator(todoContent, 'p', 'append');
    dueDate.innerHTML = `${allTodos[i].getDueDate()}`;

    const notes = creator(todoContent, 'p', 'append');
    notes.innerHTML = `${allTodos[i].getNotes()}`;
  }
  return ulCont;
}

function createShowToDos(parent) {
  removeSection();
  const container = createShowContainer(parent, 'show-all-todo', 'All TO-DOs');
  todoList(container, 'show-ul-cont');
  return container;
}

export default createShowToDos;