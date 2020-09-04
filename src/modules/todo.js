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
/*
const todoOne = ToDo('First TO-DO', 'This is a test.', '2020-10-15',
'01', 'Project Default', 0, 'These are all the notes.');
toDosCont[1] = todoOne;
todoOne.updateIndex(1);
const todoTwo = ToDo('Second TO-DO', 'This is a test.', '2020-11-21',
'04', 'Project Two', 1, 'These are all the notes.');
todoTwo.updateIndex(2);
toDosCont[2] = todoTwo;

const addToDos = {};
addToDos[1] = todoOne.getAllProp();
addToDos[2] = todoTwo.getAllProp();
localStorage.setItem('toDosCont', JSON.stringify(addToDos));
*/
function getToDosStorage(toDosCont) {
  const savedToDos = JSON.parse(localStorage.getItem('toDosCont')) || {};
  for (let i = 0; i < Object.keys(savedToDos).length; i += 1) {
    const todo = ToDo(...savedToDos[i + 1]);
    todo.updateIndex(i + 1);
    toDosCont[i + 1] = todo;
  }
  return toDosCont;
}

export { ToDo, toDosCont, getToDosStorage };