import { creator } from './aux-methods';

function showAllToDos(parent) {
  const title = creator(parent, 'h1', 'append');
  title.innerHTML = 'All TO-DOs';

  const body = creator(parent, 'section', 'append');
  body.innerHTML = 'BODY';
  body.setAttribute('id', 'show-proj-todo');

  return body;
}

function objList(container, projectsCont) {
  let ul = '';
  Object.values(projectsCont).forEach(proj => {
    ul = creator(container, 'ul', 'append');
    const projTitle = creator(ul, 'h2', 'append');
    projTitle.innerHTML = proj.getTitle();
    const todos = proj.getToDos();
    for (let i = 0; i < todos.length; i += 1) {
      const li = creator(ul, 'li', 'append');

      const title = creator(li, 'h3', 'append');
      title.innerHTML = `${todos[i].getTitle()}`;

      const descr = creator(li, 'p', 'append');
      descr.innerHTML = `${todos[i].getDescr()}`;

      const dueDate = creator(li, 'p', 'append');
      dueDate.innerHTML = `${todos[i].getDueDate()}`;

      const notes = creator(li, 'p', 'append');
      notes.innerHTML = `${todos[i].getNotes()}`;
    }
  });
  return ul;
}

function createShowToDos(parent, projectsCont) {
  const container = showAllToDos(parent);
  objList(container, projectsCont);
  return container;
}

export default createShowToDos;