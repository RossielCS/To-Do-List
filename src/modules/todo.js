const ToDo = (
  title, descr, dueDate, priority,
  projName, projIndex, notes = '',
) => {
  let status = false;
  let index = '';
  const getAllProp = () => [title, descr, dueDate, priority, projIndex, notes];
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
  };
};

const toDosCont = {};

const todoOne = ToDo('First TO-DO', 'This is a test.', '2020-10-15', '01', 'Project Default', '0', 'These are all the notes.');
todoOne.updateIndex('1');
toDosCont['1'] = todoOne;

const todoTwo = ToDo('Second TO-DO', 'This is a test.', '2020-11-21', '04', 'New Project', '2', 'These are all the notes.');
todoTwo.updateIndex('2');
toDosCont['2'] = todoTwo;

window.localStorage.setItem('toDosCont', JSON.stringify(toDosCont));

export { ToDo, toDosCont };