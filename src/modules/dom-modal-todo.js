import {
  creator, createModal, addAttributestoInput, createFormEle,
  createSubmitCancelBtn, addCBToSubmit, addCBToCancel,
} from './aux-methods';

const inputInfo = [
  ['Title', 'title', 'text'],
  ['Description', 'description', 'text'],
  ['Due Date', 'due-date', 'date'],
  ['Select which Project it belongs to', 'form-projects', 'select'],
  ['Notes (optional)', 'notes', 'textarea'],
];

const radioButtons = [
  ['critical', 'radio', 'priority'],
  ['high', 'radio', 'priority'],
  ['medium', 'radio', 'priority'],
  ['low', 'radio', 'priority'],
];

function createRadioBtn(container, className, radioButtons, i) {
  const radioBox = creator(container, 'div', 'append');

  const radio = creator(radioBox, 'input', 'append');
  radio.setAttribute('class', `${className}`);
  addAttributestoInput(radio, ...radioButtons[i]);
  const label = creator(radioBox, 'label', 'append');
  label.setAttribute('for', `${radioButtons[i][0]}`);
  label.innerHTML = `${radioButtons[i][0]}`;
  if (i === 3) radio.checked = true;
}

function createFormToDo(modal, className, inputInfo, radioButtons, projectsList) {
  const form = creator(modal, 'form', 'append');
  form.setAttribute('id', 'todo-form');
  for (let i = 0; i < inputInfo.length; i += 1) {
    if (i === 3) {
      const priorityTitle = creator(form, 'p', 'append');
      priorityTitle.innerHTML = 'Priority:';
      const radioContainer = creator(form, 'div', 'append');
      radioContainer.setAttribute('class', 'radio-container');

      for (let i = 0; i < radioButtons.length; i += 1) {
        createRadioBtn(radioContainer, className, radioButtons, i);
      }
    }
    createFormEle(form, className, inputInfo, i, projectsList);
  }
  createSubmitCancelBtn(form);
  return form;
}

// main, inputInfo, radioButtons, projectsCont, objMethod
function createToDoModal(...params) {
  const modal = createModal(params[0], 'New To-Do');
  const form = createFormToDo(modal.children[0], 'input-todo', params[1], params[2], params[5]);
  addCBToSubmit(form, modal, params[3], params[4], 'input-todo');
  addCBToCancel(form);
  return modal;
}

export { createToDoModal, inputInfo, radioButtons };