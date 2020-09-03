const ToDo = (
  title, descr, dueDate, priority,
  projName, projIndex, notes = '',
) => {
  let status = false;
  let index = '';
  const getAllProp = () => [title, descr, dueDate, priority, projIndex, notes];
  const getProjTitle = () => projName;
  const getProjIndex = () => projIndex;
  const getPriority = () => priority;
  const getStatus = () => status;
  const getIndex = () => index;
  return {
    getAllProp,
    getProjTitle,
    getProjIndex,
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
  };
};

const toDosCont = {};

const todoOne = ToDo('First TO-DO', 'This is a test.', '2020-10-15', '01', 'Project Default', '0', 'These are all the notes.');
todoOne.updateIndex('1');
toDosCont['1'] = todoOne;
window.localStorage.setItem('toDosCont', JSON.stringify(toDosCont));
export { ToDo, toDosCont };