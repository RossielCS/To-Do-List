const ToDo = (
  title, descr, dueDate, priority,
  projectName, projectIndex, notes = '',
) => {
  const priorityList = {
    '01': 'Critical',
    '02': 'High',
    '03': 'Medium',
    '04': 'Low',
  };
  let status = false;
  const getProjectName = () => projectName;
  const getProjectIndex = () => projectIndex;
  const getTitle = () => title;
  const getDescr = () => descr;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getNotes = () => notes;
  const getStatus = () => status;
  return {
    getProjectName,
    getProjectIndex,
    getTitle,
    getDescr,
    getDueDate,
    getPriority,
    getNotes,
    getStatus,
    updateProject(newProject) {
      projectName = newProject;
      return projectName;
    },
    updateProjectIndex(newIndex) {
      projectIndex = newIndex;
      return projectIndex;
    },
    updateTitle(newTitle) {
      title = newTitle;
      return title;
    },
    updateDescr(newDescr) {
      descr = newDescr;
      return descr;
    },
    updateDueDate(newDueDate) {
      dueDate = newDueDate;
      return dueDate;
    },
    updatePriority(newPriority) {
      priority = priorityList[newPriority];
      return priority;
    },
    updateNotes(newNotes) {
      notes = newNotes;
      return notes;
    },
    updateStatus() {
      status = !status;
      return status;
    },
  };
};

const toDosCont = {};
const todoOne = ToDo('First TO-DO', 'This is a test.', '2020-10-15', '01', 'Project Default', '0', 'These are all the notes.');
toDosCont['0'] = todoOne;

export { ToDo, toDosCont };