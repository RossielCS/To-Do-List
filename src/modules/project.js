const Project = (title) => {
  let index = '';
  const getTitle = () => title;
  const getIndex = () => index;
  return {
    getTitle,
    getIndex,
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