import {
  creator, createModal, addAttributestoInput, createFormEle, addCBToSubmit,
} from './aux-methods';

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
  const submitBtn = creator(form, 'button', 'append');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerHTML = 'SUBMIT';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  return form;
}

// main, inputInfo, radioButtons, projectsCont, objMethod
function createToDoModal(...params) {
  const modal = createModal(params[0], 'Add new To-Do');
  const form = createFormToDo(modal, 'input-todo', params[1], params[2]);
  addCBToSubmit(form, modal, params[3], params[4], 'input-todo');
  return modal;
}

export { createToDoModal, inputInfo, radioButtons };