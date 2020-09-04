const ToDo = (
  title, descr, dueDate, priority,
  projName, projIndex, notes = '',
) => {
  let status = false;
  let index = '';
  const getAllProp = () => [title, descr, dueDate, priority, projName, projIndex, notes, index];
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
        projName, projIndex, notes, index] = [...params];
    },
    updateStatus() {
      status = !status;
      return status;
    },
    updateIndex(newIndex) {
      index = newIndex;
      return index;
    },
  };
};

const toDosCont = {};

function getToDosStorage(toDosCont) {
  const savedToDos = JSON.parse(localStorage.getItem('toDosCont')) || [];
  for (let i = 0; i < savedToDos.length; i += 1) {
    const todoOne = ToDo(...savedToDos[i]);
    todoOne.updateIndex(i + 1);
    toDosCont[i + 1] = todoOne;
  }
  return toDosCont;
}

export { ToDo, toDosCont, getToDosStorage };