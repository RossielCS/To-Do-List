const ToDo = (
  project = 'default Project', title,
  descr, dueDate, priority, notes = '',
) => {
  const priorityList = {
    '01': 'Critical',
    '02': 'High',
    '03': 'Medium',
    '04': 'Low',
  };
  const getProject = () => project;
  const getTitle = () => title;
  const getDescr = () => descr;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getNotes = () => notes;
  return {
    getProject,
    getTitle,
    getDescr,
    getDueDate,
    getPriority,
    getNotes,
    updateProject(newProject) {
      project = newProject;
      return project;
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
  };
};

export default ToDo;