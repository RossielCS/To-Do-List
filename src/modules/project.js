const Project = (title) => {
  const getTitle = () => title;
  const toDos = [];
  const getToDos = () => toDos;
  return {
    getTitle,
    getToDos,
    addToDo(toDo) {
      toDos.push(toDo);
      return toDos;
    },
    updateName(newTitle) {
      title = newTitle;
      return title;
    },
  };
};

export default Project;