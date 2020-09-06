import {
  creator, createShowContainer, removeSection, addEditingToElement,
} from './aux-methods';
import { toDosCont } from './todo';
import checked from '../assets/images/checked.png';
import critical from '../assets/images/critical.png';
import high from '../assets/images/high.png';
import medium from '../assets/images/medium.png';
import low from '../assets/images/low.png';

const priorityImgs = [
  checked, critical, high, medium, low,
];

function sortToDos(toDosCont) {
  const allTodos = [];
  Object.values(toDosCont).forEach(x => {
    allTodos.push(x);
  });
  allTodos.sort((x, y) => x.getPriority() - y.getPriority(), 0);
  return allTodos;
}

function setPriority(priority, priorityImgs) {
  switch (priority) {
    case '01':
      return ['CRITICAL', priorityImgs[1]];
    case '02':
      return ['HIGH', priorityImgs[2]];
    case '03':
      return ['MEDIUM', priorityImgs[3]];
    default:
      return ['LOW', priorityImgs[4]];
  }
}

function addCBToChangeStatus(element, todo, priorityImgs, priorityIndex) {
  element.addEventListener('click', (e) => {
    const status = todo.updateStatus();
    const target = e.target.closest('.todo-priority');
    const content = target.closest('li').children[1];
    const savedTodos = JSON.parse(localStorage.getItem('toDosCont'));
    savedTodos[todo.getIndex()] = todo.getAllProp();
    localStorage.setItem('toDosCont', JSON.stringify(savedTodos));
    if (status) {
      target.style.backgroundImage = `url('${priorityImgs[0]}')`;
      target.getElementsByTagName('p')[0].style.visibility = 'hidden';
      content.style.backgroundColor = '#efefef';
    } else {
      target.style.backgroundImage = `url('${setPriority(priorityIndex, priorityImgs)[1]}')`;
      target.getElementsByTagName('p')[0].style.visibility = 'visible';
      content.style.backgroundColor = '#fff';
    }
  });
}

function todoList(container, ulClass, priorityImgs) {
  const ulCont = creator(container, 'div', 'append');
  ulCont.setAttribute('class', `${ulClass}`);
  const ul = creator(ulCont, 'ul', 'append');
  const allTodos = sortToDos(toDosCont);
  for (let i = 0; i < allTodos.length; i += 1) {
    const todoValues = allTodos[i].getAllProp();

    const li = creator(ul, 'li', 'append');
    li.setAttribute('id-data', `todo-${allTodos[i].getIndex()}`);

    const priority = creator(li, 'div', 'append');
    const priorityText = setPriority(todoValues[3], priorityImgs)[0];
    priority.setAttribute('class', `todo-priority ${priorityText.toLowerCase()}`);
    const priorityPara = creator(priority, 'p', 'append');
    priorityPara.innerHTML = `${priorityText}`;
    addCBToChangeStatus(priority, allTodos[i], priorityImgs, todoValues[3]);

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

    if (!todoValues[8]) {
      priority.style.backgroundImage = `url('${setPriority(todoValues[3], priorityImgs)[1]}')`;
    } else {
      priority.style.backgroundImage = `url('${priorityImgs[0]}')`;
      priorityPara.style.visibility = 'hidden';
      todoContent.style.backgroundColor = '#efefef';
    }
  }
  return ulCont;
}

function createShowToDos(parent, priorityImgs) {
  removeSection();
  const container = createShowContainer(parent, 'show-all-todo', 'All To-Dos');
  todoList(container, 'show-ul-cont', priorityImgs);
  return container;
}

export { createShowToDos, priorityImgs };