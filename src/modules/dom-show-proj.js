import {
  creator, createShowContainer, removeSection,
} from './aux-methods';

function projectsList(container, projectsCont, ulClass) {
  const ulCont = creator(container, 'div', 'append');
  ulCont.setAttribute('class', `${ulClass}`);
  const ul = creator(ulCont, 'ul', 'append');
  Object.values(projectsCont).forEach(proj => {
    const li = creator(ul, 'li', 'append');
    li.setAttribute('class', 'title-btn');
    li.setAttribute('id-data', `proj-${proj.getIndex()}`);

    const projTitle = creator(li, 'h2', 'append');
    projTitle.innerHTML = proj.getTitle();

    const deleteBtn = creator(li, 'button', 'append');
    deleteBtn.innerHTML = 'DELETE';
    deleteBtn.setAttribute('class', 'delete-todo');
    // addDeleteMethod(deleteBtn);
  });
  return ulCont;
}

function createShowProj(parent, projectsCont) {
  removeSection();
  const container = createShowContainer(parent, 'show-all-proj', 'All Projects');
  projectsList(container, projectsCont, 'show-ul-cont');
  return container;
}

export default createShowProj;