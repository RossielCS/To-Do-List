import './assets/stylesheets/style.scss';
import { creator } from './modules/aux-methods';
import Project from './modules/project';
import ToDo from './modules/todo';
import { createNav, liNamesList } from './modules/dom-navbar';
import createProjectModal from './modules/dom-modal-proj';
import { createToDoModal, inputInfo, radioButtons } from './modules/dom-modal-todo';

const projectsCont = [];
const content = document.getElementById('content');

const main = creator(content, 'main', 'append');
createNav(main, liNamesList);

// const allToDos = creator(main, 'section', 'append');
// allToDos.setAttribute('id', 'sect-all-todos');

const showToDo = creator(main, 'article', 'append');
showToDo.setAttribute('id', 'sect-selected-todo');

const navList = document.getElementsByTagName('ul')[0].children;

const defaultProject = Project('default');
projectsCont.push(defaultProject);

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
});
