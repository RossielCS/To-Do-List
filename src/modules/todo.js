const ToDo = (
  title, descr, dueDate, priority,
  projName, projIndex, notes = '',
) => {
  let status = false;
  let index = '';
  const getAllProp = () => [
    title, descr, dueDate, priority,
    projName, projIndex, notes, index, status];
  const getProjTitle = () => projName;
  const getProjIndex = () => projIndex;
  const getTitle = () => title;
  const getPriority = () => priority;
  const getStatus = () => status;
  const getIndex = () => index;
  return {
    getAllProp,
    getProjTitle,
    getProjIndex,
    getTitle,
    getPriority,
    getStatus,
    getIndex,
    updateAllProp(...params) {
      [title, descr, dueDate, priority,
        projName, projIndex, notes] = [...params];
    },
    updateStatus() {
      status = !status;
      return status;
    },
    updateIndex(newIndex) {
      index = newIndex;
      return index;
    },
    updateProjTitle(newTitle) {
      projName = newTitle;
    },
    setStatus(newStatus) {
      status = newStatus;
    },
  };
};

const toDosCont = {};

function createDefaultToDo() {
  const todo = ToDo('First To-do', 'This to-do is for demonstration purposes.', (new Date()).toISOString().substring(0, 10), '04', 'Project Default', 0, 'To edit the to-do, you can click on this section, and to check it as done, click on the priority circle.');
  todo.updateIndex(1);
  toDosCont[1] = todo;
  const savedToDos = JSON.parse(localStorage.getItem('toDosCont')) || {};
  savedToDos[1] = todo.getAllProp();
  localStorage.setItem('toDosCont', JSON.stringify(savedToDos));
}

function getToDosStorage(toDosCont) {
  const savedToDos = JSON.parse(localStorage.getItem('toDosCont')) || {};
  const num = Object.keys(savedToDos)[Object.keys(savedToDos).length - 1];
  const index = parseInt(num, 10) + 1;
  for (let i = 0; i < index; i += 1) {
    if (savedToDos[i + 1]) {
      const todo = ToDo(...savedToDos[i + 1]);
      todo.updateIndex(i + 1);
      todo.setStatus(savedToDos[i + 1][8]);
      toDosCont[i + 1] = todo;
    }
  }
  return toDosCont;
}

function startToDo(toDosCont) {
  const savedToDos = JSON.parse(localStorage.getItem('toDosCont')) || {};
  if (!Object.values(savedToDos).length) createDefaultToDo();
  getToDosStorage(toDosCont);
}

export { ToDo, startToDo, toDosCont };