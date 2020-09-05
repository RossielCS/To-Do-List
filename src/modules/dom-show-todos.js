import {
  creator, createShowContainer, removeSection, addEditingToElement,
} from './aux-methods';
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
      return 'CRITICAL';
    case '02':
      return 'HIGH';
    case '03':
      return 'MEDIUM';
    default:
      return 'LOW';
  }
}

function addCBToChangeStatus(element, todo) {
  element.addEventListener('click', () => {
    todo.updateStatus();
  });
}

function todoList(container, ulClass) {
  const ulCont = creator(container, 'div', 'append');
  ulCont.setAttribute('class', `${ulClass}`);
  const ul = creator(ulCont, 'ul', 'append');
  const allTodos = sortToDos(toDosCont);
  for (let i = 0; i < allTodos.length; i += 1) {
    const todoValues = allTodos[i].getAllProp();

    const li = creator(ul, 'li', 'append');
    li.setAttribute('id-data', `todo-${allTodos[i].getIndex()}`);

    const priority = creator(li, 'div', 'append');
    const priorityText = setPriority(todoValues[3]);
    priority.setAttribute('class', `todo-priority ${priorityText.toLowerCase()}`);
    const priorityPara = creator(priority, 'p', 'append');
    priorityPara.innerHTML = `${priorityText}`;
    addCBToChangeStatus(priority, allTodos[i]);

    const todoContent = creator(li, 'div', 'append');
    todoContent.setAttribute('class', 'todo-content');
    addEditingToElement(todoContent, 'add-todo', 'todo-form', 'input-todo', allTodos[i]);

    const header = creator(todoContent, 'div', 'append');
    header.setAttribute('class', 'title-btn');

    const projTitle = creator(header, 'h3', 'append');
    projTitle.setAttribute('class', 'proj-title-todo');
    projTitle.innerHTML = allTodos[i].getProjTitle();

    const title = creator(header, 'h4', 'append');
    title.innerHTML = `${todoValues[0]}`;

    const descr = creator(todoContent, 'p', 'append');
    descr.innerHTML = `${todoValues[1]}`;

    const dueDate = creator(todoContent, 'p', 'append');
    dueDate.innerHTML = `${todoValues[2]}`;

    const notes = creator(todoContent, 'p', 'append');
    notes.innerHTML = `${todoValues[6]}`;
  }
  return ulCont;
}

function createShowToDos(parent) {
  removeSection();
  const container = createShowContainer(parent, 'show-all-todo', 'All To-Dos');
  todoList(container, 'show-ul-cont');
  return container;
}

export default createShowToDos;