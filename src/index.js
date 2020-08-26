import './assets/stylesheets/style.scss';
import creator from './modules/aux-methods';
import Project from './modules/project';
import ToDo from './modules/todo';
import { createNav, liNamesList } from './modules/dom-navbar';
import { createProjectModal, addCBtoSubmit } from './modules/dom-modal-window';

const projectsContainer = [];
const content = document.getElementById('content');

const main = creator(content, 'main', 'append');
createNav(main, liNamesList);
const modal = createProjectModal(main);
addCBtoSubmit(modal, projectsContainer);

const allToDos = creator(main, 'section', 'append');
allToDos.setAttribute('id', 'sect-all-todos');

const showToDo = creator(main, 'article', 'append');
showToDo.setAttribute('id', 'sect-selected-todo');

const navList = document.getElementsByTagName('ul')[0].children;

// const defaultProject = Project('default');
// projectsContainer.push(defaultProject);

navList[1].addEventListener('click', () => {
  modal.style.display = 'block';
});

navList[3].addEventListener('click', () => {
  console.log(projectsContainer[0].getName());
});
