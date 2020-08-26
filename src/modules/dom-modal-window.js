import creator from './aux-methods';
import Project from './project';

function createModal(parent) {
  const modal = creator(parent, 'div', 'append');
  modal.setAttribute('class', 'modal-content');
  return modal;
}

function addAttributes(element, name, type, pattern = '') {
  element.setAttribute('id', `${name}`);
  element.setAttribute('type', `${type}`);
  element.setAttribute('name', `${name}`);
  if (type !== 'textarea') element.setAttribute('pattern', `${pattern}`);
  element.required = true;
}

function createProjectModal(main) {
  const modalWindow = creator(main, 'div', 'append');
  modalWindow.setAttribute('class', 'modal');

  const modal = createModal(modalWindow);

  const header = creator(modal, 'h3', 'append');
  header.innerHTML = 'Add New Project';

  const form = creator(modal, 'form', 'append');

  const nameLabel = creator(form, 'label', 'append');
  nameLabel.setAttribute('for', 'name');
  nameLabel.innerHTML = 'Project Name:';
  const name = creator(form, 'input', 'append');
  addAttributes(name, 'name', 'text', '\\D{3,20}');

  const submitBtn = creator(form, 'button', 'append');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'create-proj-btn');
  submitBtn.innerHTML = 'SUBMIT';
  return modalWindow;
}

function addCBtoSubmit(modal, projectsContainer) {
  const button = document.getElementById('create-proj-btn');
  button.addEventListener('click', (e) => {
    const name = document.getElementById('name').value;
    const test = Project(name);
    projectsContainer.push(test);
    modal.style.display = 'none';
    e.preventDefault();
  });
}

export { createProjectModal, addCBtoSubmit };