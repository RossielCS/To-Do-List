const Project = (title) => {
  const getTitle = () => title;
  // const toDos = [];
  // const getToDos = () => toDos;
  return {
    getTitle,
    // getToDos,
    /* addToDo(toDo) {
      toDos.push(toDo);
      return toDos;
    }, */
    updateTitle(newTitle) {
      title = newTitle;
      return title;
    },
  };
};

const projectsCont = {};

export { Project, projectsCont };