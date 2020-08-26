import './assets/stylesheets/style.scss';
import creator from './aux-methods';
import Project from './project';
import ToDo from './todo';
import { createNav, liNamesList } from './navbar-dom';
import createProjectModal from './modal-window';

const projectsContainer = [];
const content = document.getElementById('content');
const main = creator(content, 'main', 'append');
createNav(main, liNamesList);
const navList = document.getElementsByTagName('ul')[0].children;
const modal = createProjectModal(main);
const defaultProject = Project('default');
projectsContainer.push(defaultProject);

navList[1].addEventListener('click', () => {
  modal.style.display = 'block';
});

const submitBtn = document.getElementById('create-proj-btn');
submitBtn.addEventListener('click', (e) => {
  const name = document.getElementById('name').value;
  const test = Project(name);
  projectsContainer.push(test);
  console.log(projectsContainer);
  console.log(projectsContainer[1].getName());
  e.preventDefault();
});

/*
const allToDos = creator(main, 'section', 'append');
allToDos.setAttribute('id', 'all-todos');

const showToDo = creator(main, 'article', 'append');
showToDo.setAttribute('id', 'selected-todo');
*/
