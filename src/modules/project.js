const Project = (title) => {
  let index = '';
  const getTitle = () => title;
  const getIndex = () => index;
  const getAllProp = () => [title, index];
  return {
    getTitle,
    getIndex,
    getAllProp,
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

function createDefaultProject() {
  const defaultProject = Project('Project Default');
  defaultProject.updateIndex(0);
  projectsCont[0] = defaultProject.getAllProp();

  const secondProject = Project('Project Two');
  secondProject.updateIndex(1);
  projectsCont[1] = secondProject.getAllProp();
  localStorage.setItem('projectsCont', JSON.stringify(projectsCont));
}

function getProjStorage(projectsCont) {
  const savedProj = JSON.parse(localStorage.getItem('projectsCont'));
  for (let i = 0; i < Object.keys(savedProj).length; i += 1) {
    const proj = Project(...savedProj[i]);
    proj.updateIndex(i);
    projectsCont[i] = proj;
  }
  return savedProj;
}

function startProject(projectsCont) {
  if (!JSON.parse(localStorage.getItem('projectsCont'))) createDefaultProject();
  getProjStorage(projectsCont);
}

export { Project, projectsCont, startProject };