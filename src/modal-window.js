import creator from './aux-methods';

function createModal(parent) {
  const modal = creator(parent, 'div', 'append');
  modal.setAttribute('class', 'modal');
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
  const modal = createModal(main);
  const form = creator(modal, 'form', 'append');

  const nameLabel = creator(form, 'label', 'append');
  nameLabel.setAttribute('for', 'name');
  nameLabel.innerHTML = 'Project Name:';
  const name = creator(form, 'input', 'append');
  addAttributes(name, 'name', 'text', '\\w{4,20}');

  const submitBtn = creator(form, 'button', 'append');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'create-proj-btn');
  submitBtn.innerHTML = 'SUBMIT';
  return modal;
}

export default createProjectModal;