import {
  getValuesFromInput, verifyInput, setValuesForInputs,
  updateValues, setValueToInputProj,
} from './input';
import { toDosCont } from './todo';
import { projectsCont } from './project';

function creator(parent, newElement, position) {
  const child = document.createElement(`${newElement}`);
  if (position === 'append') {
    parent.appendChild(child);
  } else {
    parent.insertBefore(child, position);
  }
  return child;
}

function createModal(main, headerTitle) {
  const modalWindow = creator(main, 'div', 'append');
  modalWindow.setAttribute('class', 'modal');

  const modal = creator(modalWindow, 'div', 'append');
  modal.setAttribute('class', 'modal-content');

  const header = creator(modal, 'h3', 'append');
  header.innerHTML = `${headerTitle}`;

  const message = creator(modal, 'p', 'append');
  message.innerHTML = 'Please fill in all required fields.';
  message.setAttribute('class', 'input-msg-required');
  return modalWindow;
}

function addAttributestoInput(...params) {
  params[0].setAttribute('id', `${params[1]}`);
  params[0].setAttribute('type', `${params[2]}`);
  if (params[2] === 'radio') {
    params[0].setAttribute('name', `${params[3]}`);
    params[0].setAttribute('value', `${params[4]}`);
  } else {
    params[0].setAttribute('name', `${params[1]}`);
  }
  if (params[1] === 'notes') params[0].maxLength = '200';
}

function createFormEle(form, className, inputInfo, i, projectsList) {
  const element = creator(form, 'label', 'append');
  element.innerHTML = `${inputInfo[i][0]}`;
  element.setAttribute('for', `${inputInfo[i][1]}`);
  let input = '';
  if (inputInfo[i][2] === 'select') {
    input = creator(form, 'select', 'append');
    input.setAttribute('class', `${className}`);
    const values = Object.values(projectsList);
    for (let i = 0; i < values.length; i += 1) {
      const option = creator(input, 'option', 'append');
      option.setAttribute('value', `${values[i].getTitle()}`);
      option.innerHTML = `${values[i].getTitle()}`;
      if (i === 0) option.selected = true;
    }
  } else {
    input = creator(form, 'input', 'append');
    input.setAttribute('class', `${className}`);
  }
  addAttributestoInput(
    input, inputInfo[i][1], inputInfo[i][2],
  );
}

function createSubmitCancelBtn(form) {
  const submitBtn = creator(form, 'button', 'append');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('class', 'btn-submit');
  submitBtn.innerHTML = 'SUBMIT';

  const cancelBtn = creator(form, 'button', 'append');
  cancelBtn.setAttribute('type', 'button');
  cancelBtn.innerHTML = 'CANCEL';
}

function reloadPage() {
  if (document.getElementById('show-all-proj')) {
    document.getElementById('all-proj').click();
  } else {
    document.getElementById('all-todos').click();
  }
}

// Params: form, modal, projectsCont, objMethod, formClass
function addCBToSubmit(...params) {
  const btn = params[0].getElementsByTagName('button')[0];
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementsByClassName(`${params[4]}`);
    const inputsValues = getValuesFromInput(input);
    const validation = verifyInput(inputsValues, params[2], params[1], params[3]);
    const message = e.target.closest('.modal-content').children[1];
    if (!validation) {
      message.style.display = 'block';
    } else {
      const form = document.getElementById('todo-form');
      message.style.display = 'none';
      document.querySelector('.modal').remove();
      if (form) {
        document.getElementById('all-todos').click();
      } else {
        document.getElementById('all-proj').click();
      }
    }
  });
}

function addCBToCancelAndModal(form) {
  const btn = form.getElementsByTagName('button')[1];
  const modalWindow = document.getElementsByClassName('modal')[0];
  const arrEle = [btn, modalWindow];
  arrEle.forEach(x => {
    x.addEventListener('click', (e) => {
      if (e.target === x) document.querySelector('.modal').remove();
    });
  });
}

function createShowContainer(parent, idName, titleText) {
  const body = creator(parent, 'section', 'append');
  body.setAttribute('id', `${idName}`);

  const title = creator(body, 'h1', 'append');
  title.innerHTML = `${titleText}`;

  return body;
}

function removeSection() {
  if (document.getElementById('sect-selected-todo').children[0]) {
    document.getElementById('sect-selected-todo').children[0].remove();
  }
}

function addCBToEditBtn(button, formClass, inputClass, obj) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const message = e.target.closest('.modal-content').children[1];
    const input = document.getElementsByClassName(`${inputClass}`);
    const inputsValues = getValuesFromInput(input);
    if (!inputsValues) {
      message.style.display = 'block';
    } else {
      message.style.display = 'none';
      updateValues(obj.getIndex(), formClass, inputsValues);
      document.querySelector('.modal').remove();
      reloadPage();
    }
  });
}

function createEditBtn(button, formClass, inputClass, obj) {
  const form = document.getElementById(`${formClass}`);
  const editBtn = creator(form, 'button', button);
  editBtn.innerHTML = 'EDIT';
  addCBToEditBtn(editBtn, formClass, inputClass, obj);
  return editBtn;
}

function addCBToDeleteBtn(deleteBtn, element, formClass) {
  deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const li = element.closest('li');
    const index = li.getAttribute('id-data').slice(5);
    li.remove();
    if (formClass === 'todo-form') {
      delete toDosCont[index];
      const savedToDo = JSON.parse(localStorage.getItem('toDosCont'));
      delete savedToDo[index];
      localStorage.setItem('toDosCont', JSON.stringify(savedToDo));
    } else {
      const savedToDos = JSON.parse(localStorage.getItem('toDosCont'));
      const savedProjects = JSON.parse(localStorage.getItem('projectsCont'));
      Object.values(toDosCont).forEach(obj => {
        if (obj.getProjIndex() === projectsCont[index].getIndex()) {
          delete toDosCont[obj.getIndex()];
          delete savedToDos[obj.getIndex()];
        }
      });
      delete projectsCont[index];
      delete savedProjects[index];

      localStorage.setItem('toDosCont', JSON.stringify(savedToDos));
      localStorage.setItem('projectsCont', JSON.stringify(savedProjects));
    }
    document.querySelector('.modal').remove();
    reloadPage();
  });
}

function createDeleteBtn(button, formClass) {
  const form = document.getElementById(`${formClass}`);
  const deleteBtn = creator(form, 'button', button);
  deleteBtn.innerHTML = 'DELETE';
  deleteBtn.setAttribute('class', 'delete-todo');
  return deleteBtn;
}

// Params: element, navlinkClass, formClass, inputClass, obj
function addEditingToElement(...params) {
  params[0].addEventListener('click', (e) => {
    if (!document.querySelector('.modal')) {
      document.getElementById(`${params[1]}`).click();
      const btnSubmit = document.getElementsByClassName('btn-submit')[0];
      createEditBtn(btnSubmit, `${params[2]}`, `${params[3]}`, params[4]);
      if (params[4].getIndex() !== 0) {
        const deleteBtn = createDeleteBtn(btnSubmit, `${params[2]}`);
        addCBToDeleteBtn(deleteBtn, e.target, params[2]);
        const warningMessage = document.getElementById('delete-warning');
        if (warningMessage) warningMessage.style.display = 'block';
      }
      btnSubmit.remove();
      if (params[2] === 'todo-form') {
        const todoInfo = params[4].getAllProp();
        setValuesForInputs(todoInfo);
      } else {
        const projTitle = params[4].getTitle();
        setValueToInputProj(projTitle);
      }
    }
  });
}

export {
  creator, createModal, addAttributestoInput, createFormEle,
  createSubmitCancelBtn, addCBToSubmit, addCBToCancelAndModal,
  createShowContainer, removeSection, createEditBtn,
  createDeleteBtn, addEditingToElement,
};