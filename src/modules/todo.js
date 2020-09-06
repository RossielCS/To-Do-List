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
    setStatus(newStatus) {
      status = newStatus;
    },
  };
};

const toDosCont = {};

function getToDosStorage(toDosCont) {
  const savedToDos = JSON.parse(localStorage.getItem('toDosCont')) || {};
  for (let i = 0; i < Object.keys(savedToDos).length; i += 1) {
    const todo = ToDo(...savedToDos[i + 1]);
    todo.updateIndex(i + 1);
    todo.setStatus(savedToDos[i + 1][8]);
    toDosCont[i + 1] = todo;
  }
  return toDosCont;
}

export { ToDo, toDosCont, getToDosStorage };