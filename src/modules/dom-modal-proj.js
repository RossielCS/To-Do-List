import creator from './aux-methods';
import verifyInput from './modal-proj';

function createModal(parent) {
  const modal = creator(parent, 'div', 'append');
  modal.setAttribute('class', 'modal-content');
  return modal;
}

function addAttributestoInput(...params) {
  params[0].setAttribute('id', `${params[1]}`);
  params[0].setAttribute('type', `${params[2]}`);
  params[0].setAttribute('name', `${params[1]}`);
  params[0].setAttribute('class', `${params[3]}`);
  if (params[2] !== 'textarea') params[0].setAttribute('pattern', `${params[4]}`);
  params[0].required = true;
}

function createFormProj(main) {
  const modalWindow = creator(main, 'div', 'append');
  modalWindow.setAttribute('class', 'modal');

  const modal = createModal(modalWindow);

  const header = creator(modal, 'h3', 'append');
  header.innerHTML = 'Add New Project';

  const form = creator(modal, 'form', 'append');
  form.setAttribute('id', 'proj-form');

  const nameLabel = creator(form, 'label', 'append');
  nameLabel.setAttribute('for', 'name');
  nameLabel.innerHTML = 'Project Name:';
  const textBox = creator(form, 'p', 'append');
  textBox.setAttribute('id', 'text-proj');
  textBox.innerHTML = 'The name must be at least 3 characters long.';
  textBox.style.display = 'none';
  const name = creator(form, 'input', 'append');
  addAttributestoInput(name, 'name', 'text', 'input-proj', '\\D{3,50}');

  const submitBtn = creator(form, 'button', 'append');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'create-proj-btn');
  submitBtn.innerHTML = 'SUBMIT';
  return modalWindow;
}

function addCBToSubmit(modal, projectsCont, objMethod) {
  const button = document.getElementById('create-proj-btn');
  const text = document.getElementById('text-proj');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementsByClassName('input-proj');
    if (!verifyInput(input, projectsCont, modal, objMethod)) {
      text.style.display = 'block';
    } else {
      text.style.display = 'none';
    }
  });
}

function createProjectModal(main, projectsCont, Project) {
  const modal = createFormProj(main);
  addCBToSubmit(modal, projectsCont, Project);
  return modal;
}

export default createProjectModal;