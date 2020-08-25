const Project = (name) => {
  const getName = () => name;
  const toDos = [];
  const getToDos = () => toDos;
  return {
    getName,
    getToDos,
    addToDo(toDo) {
      toDos.push(toDo);
      return toDos;
    },
    updateName(newName) {
      name = newName;
      return newName;
    },
  };
};

export default Project;