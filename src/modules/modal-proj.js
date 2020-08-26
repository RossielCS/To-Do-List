import Project from './project';

function verifyInput(inputValue, projectsContainer, modal) {
  if (inputValue.checkValidity()) {
    inputValue.setCustomValidity('');
    const test = Project(inputValue.value);
    projectsContainer.push(test);
    modal.style.display = 'none';
  } else {
    return false;
  }
  return true;
}

export default verifyInput;