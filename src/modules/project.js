const Project = (title) => {
  let index = '';
  const getTitle = () => title;
  const getIndex = () => index;
  // const toDos = [];
  // const getToDos = () => toDos;
  return {
    getTitle,
    getIndex,
    // getToDos,
    /* addToDo(toDo) {
      toDos.push(toDo);
      return toDos;
    }, */
    updateTitle(newTitle) {
      title = newTitle;
      return title;
    },
    updateIndex(newIndex) {
      index = newIndex;
      return index;
    },
  };
};

const projectsCont = {};

export { Project, projectsCont };