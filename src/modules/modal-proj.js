import Project from './project';

function clearInputs(inputs) {
  inputs.forEach(element => {
    element.value = '';
  });
}

function verifyInput(inputs, projectsCont, modal) {
  const allInputs = [...inputs];
  if (allInputs.some(x => x.checkValidity())) {
    const allValues = allInputs.map(x => x.value);
    const newProject = Project(...allValues);
    projectsCont.push(newProject);
    clearInputs(allInputs);
    modal.style.display = 'none';
  } else {
    return false;
  }
  return true;
}

export default verifyInput;