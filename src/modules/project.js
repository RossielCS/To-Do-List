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
window.localStorage.setItem('projectsCont', JSON.stringify(projectsCont));

export { Project, projectsCont };