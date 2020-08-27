import creator from './aux-methods';
import verifyInput from './modal-proj';

const inputInfo = [
  ['To-do Title:', 'title', 'text'],
  ['Description:', 'description', 'text'],
  ['Due Date:', 'due-date', 'date'],
  ['Notes:', 'notes', 'textarea'],
];

const radioButtons = [
  ['critical', 'radio', 'priority'],
  ['high', 'radio', 'priority'],
  ['medium', 'radio', 'priority'],
  ['low', 'radio', 'priority'],
];

function createModal(main, headerTitle) {
  const modalWindow = creator(main, 'div', 'append');
  modalWindow.setAttribute('class', 'modal');

  const modal = creator(modalWindow, 'div', 'append');
  modal.setAttribute('class', 'modal-content');

  const header = creator(modal, 'h3', 'append');
  header.innerHTML = `${headerTitle}`;
  return modalWindow;
}

function addAttributestoInput(...params) {
  params[0].setAttribute('id', `${params[1]}`);
  params[0].setAttribute('type', `${params[2]}`);
  if (params[2] === 'radio') {
    params[0].setAttribute('name', `${params[3]}`);
    params[0].setAttribute('value', `${params[1]}`);
  } else {
    params[0].setAttribute('name', `${params[1]}`);
  }
  if (params[2] !== 'textarea') params[0].required = true;
}

function createFormEle(form, className, inputInfo, i) {
  const element = creator(form, 'label', 'append');
  element.innerHTML = `${inputInfo[i][0]}`;
  element.setAttribute('for', `${inputInfo[i][1]}`);
  const input = creator(form, 'input', 'append');
  input.setAttribute('class', `${className}`);
  addAttributestoInput(
    input, inputInfo[i][1], inputInfo[i][2],
  );
}

function createRadioBtn(form, className, radioButtons, i) {
  const radio = creator(form, 'input', 'append');
  radio.setAttribute('class', `${className}`);
  addAttributestoInput(radio, ...radioButtons[i]);
  const label = creator(form, 'label', 'append');
  label.setAttribute('for', `${radioButtons[i][0]}`);
  label.innerHTML = `${radioButtons[i][0]}`;
  if (i === 3) radio.checked = true;
}

function createFormToDo(modal, className, inputInfo, radioButtons) {
  const form = creator(modal, 'form', 'append');
  form.setAttribute('id', 'todo-form');
  for (let i = 0; i < inputInfo.length; i += 1) {
    if (i === 3) {
      const priorityTitle = creator(form, 'p', 'append');
      priorityTitle.innerHTML = 'Priority:';

      for (let i = 0; i < radioButtons.length; i += 1) {
        createRadioBtn(form, className, radioButtons, i);
      }
    }
    createFormEle(form, className, inputInfo, i);
  }
  return form;
}

function createSubmitBtn(form, modal, projectsCont, objMethod) {
  const submitBtn = creator(form, 'button', 'append');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'create-todo-btn');
  submitBtn.innerHTML = 'SUBMIT';
  submitBtn.addEventListener('click', () => {
    const input = document.getElementsByClassName('input-todo');
    verifyInput(input, projectsCont, modal, objMethod);
  });
}

// main, inputInfo, radioButtons, projectsCont, objMethod
function createToDoModal(...params) {
  const modal = createModal(params[0], 'Add new To-Do');
  const form = createFormToDo(modal, 'input-todo', params[1], params[2]);
  createSubmitBtn(form, modal, params[3], params[4]);
  return modal;
}

export { createToDoModal, inputInfo, radioButtons };