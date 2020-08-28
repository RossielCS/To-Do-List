import verifyInput from './input';

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
    params[0].setAttribute('value', `${params[1]}`);
  } else {
    params[0].setAttribute('name', `${params[1]}`);
  }
  if (params[1] === 'notes') params[0].rows = '10';
}

function createFormEle(form, className, inputInfo, i, projectsList) {
  const element = creator(form, 'label', 'append');
  element.innerHTML = `${inputInfo[i][0]}`;
  element.setAttribute('for', `${inputInfo[i][1]}`);
  let input = '';
  if (inputInfo[i][2] === 'select') {
    input = creator(form, 'select', 'append');
    input.setAttribute('class', `${className}`);

    for (let i = 0; i < projectsList.length; i += 1) {
      const option = creator(input, 'option', 'append');
      option.setAttribute('value', `${projectsList[i].getName()}`);
      option.innerHTML = `${projectsList[i].getName()}`;
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
  submitBtn.innerHTML = 'SUBMIT';

  const cancelBtn = creator(form, 'button', 'append');
  cancelBtn.setAttribute('type', 'button');
  cancelBtn.innerHTML = 'CANCEL';
}

function addCBToSubmit(...params) {
  const btn = params[0].getElementsByTagName('button')[0];
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementsByClassName(`${params[4]}`);
    const validation = verifyInput(input, params[2], params[1], params[3]);
    const message = e.target.closest('.modal-content').children[1];
    if (!validation) {
      message.style.display = 'block';
    } else {
      message.style.display = 'none';
      document.querySelector('.modal').remove();
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

export {
  creator, createModal, addAttributestoInput, createFormEle,
  createSubmitCancelBtn, addCBToSubmit, addCBToCancelAndModal,
};