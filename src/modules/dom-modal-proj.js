import {
  creator, createModal, addAttributestoInput, addCBToSubmit,
} from './aux-methods';

function createFormProj(modal) {
  const form = creator(modal, 'form', 'append');
  form.setAttribute('id', 'proj-form');

  const nameLabel = creator(form, 'label', 'append');
  nameLabel.setAttribute('for', 'name');
  nameLabel.innerHTML = 'Project Name:';
  const name = creator(form, 'input', 'append');
  name.setAttribute('class', 'input-proj');
  addAttributestoInput(name, 'name', 'text');

  const submitBtn = creator(form, 'button', 'append');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'create-proj-btn');
  submitBtn.innerHTML = 'SUBMIT';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  return form;
}

function createProjectModal(main, projectsCont, Project) {
  const modal = createModal(main, 'New Project');
  const form = createFormProj(modal);
  addCBToSubmit(form, modal, projectsCont, Project, 'input-proj');
  return modal;
}

export default createProjectModal;