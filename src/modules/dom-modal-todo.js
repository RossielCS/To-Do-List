import creator from './aux-methods';
import verifyInput from './modal-proj';

const inputInfo = [
  ['To-do Title:', 'title', 'text', 'input-todo', '\\D{3,30}'],
  ['Description:', 'description', 'text', 'input-todo', '\\D{3,50}'],
  ['Due Date:', 'due-date', 'date', 'input-todo', ''],
  ['Notes:', 'notes', 'textarea', 'input-todo', '.{3,300}'],
];

const radioButtons = [
  ['critical', 'radio', 'input-proj', '', 'priority'],
  ['high', 'radio', 'input-proj', '', 'priority'],
  ['medium', 'radio', 'input-proj', '', 'priority'],
  ['low', 'radio', 'input-proj', '', 'priority'],
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
  params[0].setAttribute('class', `${params[3]}`);
  if (params[2] === 'radio') {
    params[0].setAttribute('name', `${params[1]}`);
    params[0].setAttribute('value', `${params[1]}`);
  } else {
    params[0].setAttribute('name', `${params[1]}`);
  }
  if (params[2] === 'text') params[0].setAttribute('pattern', `${params[4]}`);
  params[0].required = true;
}

function createFormToDo(modal, inputInfo, radioButtons) {
  const form = creator(modal, 'form', 'append');
  form.setAttribute('id', 'todo-form');

  for (let i = 0; i < inputInfo.length; i += 1) {
    if (i === 3) {
      for (let i = 0; i < radioButtons.length; i += 1) {
        const priorityTitle = creator(form, 'p', 'append');
        priorityTitle.innerHTML = 'Priority:';

        const critical = creator(form, 'input', 'append');
        addAttributestoInput(critical, ...radioButtons[i]);
      }
    } else {
      const element = creator(form, 'label', 'append');
      element.setAttribute('for', `${inputInfo[i][1]}`);
      element.innerHTML = `${inputInfo[i][0]}`;
      const input = creator(form, 'input', 'append');
      addAttributestoInput(
        input, inputInfo[i][1], inputInfo[i][2], inputInfo[i][3], inputInfo[i][4],
      );
    }
  }

  const submitBtn = creator(form, 'button', 'append');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'create-todo-btn');
  submitBtn.innerHTML = 'SUBMIT';
}

function addCBToSubmit(modal, projectsCont) {
  const button = document.getElementById('create-todo-btn');
  const text = document.getElementById('text-todo');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementsByClassName('input-todo');
    if (!verifyInput(input, projectsCont, modal)) {
      text.style.display = 'block';
    } else {
      text.style.display = 'none';
    }
  });
}

function createToDoModal(main, inputInfo, radioButtons, projectsCont) {
  const modal = createModal(main, 'Add new To-Do');
  createFormToDo(modal, inputInfo, radioButtons);
  addCBToSubmit(modal, projectsCont);
  return modal;
}

export { createToDoModal, inputInfo, radioButtons };