import './assets/stylesheets/style.scss';
import { creator } from './modules/aux-methods';
import { Project, startProject, projectsCont } from './modules/project';
import { ToDo, startToDo, toDosCont } from './modules/todo';
import {
  createNav, liIds, liNames, liIcons,
} from './modules/dom-navbar';
import createProjectModal from './modules/dom-modal-proj';
import { createToDoModal, inputInfo, radioButtons } from './modules/dom-modal-todo';
import { createShowToDos, priorityImgs } from './modules/dom-show-todos';
import createShowProj from './modules/dom-show-proj';

const content = document.getElementById('content');

const main = creator(content, 'main', 'append');
createNav(main, liIds, liNames, liIcons);

const displaySection = creator(main, 'article', 'append');
displaySection.setAttribute('id', 'sect-selected-todo');

startProject(projectsCont);
startToDo(toDosCont);

const navList = document.getElementsByTagName('ul')[0].children;

navList[0].addEventListener('click', () => {
  if (!document.querySelector('.modal')) {
    const modalProject = createProjectModal(main, projectsCont, Project);
    modalProject.style.display = 'block';
  }
});

navList[1].addEventListener('click', () => {
  if (!document.querySelector('.modal')) {
    const modalToDo = createToDoModal(
      main, inputInfo, radioButtons, projectsCont, ToDo, projectsCont,
    );
    modalToDo.style.display = 'block';
  }
});

navList[2].addEventListener('click', () => {
  createShowProj(displaySection, projectsCont);
});

navList[3].addEventListener('click', () => {
  createShowToDos(displaySection, priorityImgs);
});

navList[3].click();
