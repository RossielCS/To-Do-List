import './assets/stylesheets/style.scss';
import { creator } from './modules/aux-methods';
import { Project, startProject, projectsCont } from './modules/project';
import { ToDo, toDosCont, getToDosStorage } from './modules/todo';
import { createNav, liNamesList } from './modules/dom-navbar';
import createProjectModal from './modules/dom-modal-proj';
import { createToDoModal, inputInfo, radioButtons } from './modules/dom-modal-todo';
import createShowToDos from './modules/dom-show-todos';
import createShowProj from './modules/dom-show-proj';

// window.localStorage.clear();

const content = document.getElementById('content');

const main = creator(content, 'main', 'append');
createNav(main, liNamesList);

const displaySection = creator(main, 'article', 'append');
displaySection.setAttribute('id', 'sect-selected-todo');

startProject(projectsCont);
getToDosStorage(toDosCont);

/*
projectsCont['1'] = Project('Project Two');

const todoOne = ToDo('First TO-DO', 'This is a test.',
'2020-10-15', '01', 'Project Default', '0', 'These are all the notes.');
projectsCont['0'].addToDo(todoOne);
const todoTwo = ToDo('Second TO-DO', 'This is a test.',
'2020-11-21', '04', 'Project Two', '1', 'These are all the notes.');
projectsCont['1'].addToDo(todoTwo);
const todoThree = ToDo('Third TO-DO', 'This is a test.',
'2020-11-25', '03', 'Project Two', '1', 'These are all the notes.');
projectsCont['1'].addToDo(todoThree);
*/

const navList = document.getElementsByTagName('ul')[0].children;

navList[0].addEventListener('click', () => {
  window.localStorage.clear();
});

navList[1].addEventListener('click', () => {
  if (!document.querySelector('.modal')) {
    const modalProject = createProjectModal(main, projectsCont, Project);
    modalProject.style.display = 'block';
  }
});

navList[2].addEventListener('click', () => {
  if (!document.querySelector('.modal')) {
    const modalToDo = createToDoModal(
      main, inputInfo, radioButtons, projectsCont, ToDo, projectsCont,
    );
    modalToDo.style.display = 'block';
  }
});

navList[3].addEventListener('click', () => {
  createShowProj(displaySection, projectsCont);
});

navList[4].addEventListener('click', () => {
  createShowToDos(displaySection, projectsCont);
});

navList[4].click();
