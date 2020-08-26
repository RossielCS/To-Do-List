import creator from './aux-methods';
import verifyInput from './modal-proj';

const inputInfo = [
  ['To-do Title:', 'title', 'text', 'input-todo', '\\D{3,30}'],
  ['Description:', 'description', 'text', 'input-todo', '\\D{3,50}'],
  ['Notes:', 'notes', 'textarea', 'input-todo', ''],
];

function createModal(main, headerTitle) {
  const modalWindow = creator(main, 'div', 'append');
  modalWindow.setAttribute('class', 'modal');

  const modal = creator(modalWindow, 'div', 'append');
  modal.setAttribute('class', 'modal-content');

  const header = creator(modal, 'h3', 'append');
  header.innerHTML = `${headerTitle}`;
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

function createFormToDo(modal) {
  const form = creator(modal, 'form', 'append');
  form.setAttribute('id', 'proj-form');
  /*
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
  */

  for (let i = 0; i < inputInfo.length; i += 1) {
    const element = creator(form, 'label', 'append');
    element.setAttribute('for', 'name');
    element.innerHTML = 'Project Name:';
    const input = creator(form, 'input', 'append');
    addAttributestoInput(input, 'name', 'text', 'input-proj', '\\D{3,50}');
  }
}