import {
  creator, createModal, addAttributestoInput,
  createSubmitCancelBtn, addCBToSubmit, addCBToCancelAndModal,
} from './aux-methods';

function createFormProj(modal) {
  const form = creator(modal, 'form', 'append');
  form.setAttribute('id', 'proj-form');

  const nameLabel = creator(form, 'label', 'append');
  nameLabel.setAttribute('for', 'name');
  nameLabel.innerHTML = 'Project Name';
  const name = creator(form, 'input', 'append');
  name.setAttribute('class', 'input-proj');
  addAttributestoInput(name, 'name', 'text');

  createSubmitCancelBtn(form);
  return form;
}

function createProjectModal(main, projectsCont, Project) {
  const modal = createModal(main, 'New Project');
  const form = createFormProj(modal.children[0]);
  addCBToSubmit(form, modal, projectsCont, Project, 'input-proj');
  addCBToCancelAndModal(form);
  return modal;
}

export default createProjectModal;