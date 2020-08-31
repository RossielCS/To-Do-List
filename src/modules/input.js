import Project from './project';

function getValues(allInputs) {
  const values = [];
  for (let i = 0; i < allInputs.length; i += 1) {
    if (allInputs[i].value === '' && allInputs[i].id !== 'notes') {
      return false;
    }
    if (allInputs[i].type === 'radio') {
      if (allInputs[i].checked) values.push(allInputs[i].value);
    } else if (allInputs[i].type === 'select-one') {
      values.push(allInputs[i].options[allInputs[i].options.selectedIndex].value);
      values.push(allInputs[i].options.selectedIndex);
    } else {
      values.push(allInputs[i].value);
    }
  }
  return values;
}

function verifyInput(inputs, projectsCont, modal, objMethod) {
  const allInputs = [...inputs];
  const allValues = getValues(allInputs);
  if (allValues) {
    const newObj = objMethod(...allValues);
    if (objMethod === Project) {
      const index = Object.keys(projectsCont).length - 1;
      projectsCont[index] = newObj;
    } else {
      projectsCont[newObj.getProjectIndex()].addToDo(newObj);
    }
    modal.style.display = 'none';
    return true;
  }
  return false;
}

export default verifyInput;