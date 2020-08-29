import './assets/stylesheets/style.scss';
import { creator } from './modules/aux-methods';
import Project from './modules/project';
import ToDo from './modules/todo';
import { createNav, liNamesList } from './modules/dom-navbar';
import createProjectModal from './modules/dom-modal-proj';
import { createToDoModal, inputInfo, radioButtons } from './modules/dom-modal-todo';
import { createShowToDos, todosInfo } from './modules/dom-show-todos';
import { createShowProj, todosList } from './modules/dom-show-proj';

const projectsCont = {};
const content = document.getElementById('content');

const main = creator(content, 'main', 'append');
createNav(main, liNamesList);

const displaySection = creator(main, 'article', 'append');
displaySection.setAttribute('id', 'sect-selected-todo');

// const allToDos = creator(main, 'section', 'append');
// allToDos.setAttribute('id', 'sect-all-todos');

const navList = document.getElementsByTagName('ul')[0].children;

const defaultProject = Project('default');
projectsCont['0'] = defaultProject;
projectsCont['1'] = Project('default2');

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
  createShowProj(displaySection, projectsCont, todosList);
});

navList[4].addEventListener('click', () => {
  createShowToDos(displaySection, projectsCont, todosInfo);
});

navList[4].click();
