import Project from './project';

function clearInputs(inputs) {
  inputs.forEach(element => {
    element.value = '';
  });
}

function getValues(allInputs) {
  const values = [];
  for (let i = 0; i < allInputs.length; i += 1) {
    if (allInputs[i].type === 'select') {
      values.push(allInputs[i].options[allInputs[i].options.selectedIndex].value);
    }
    if (allInputs[i].type === 'radio') {
      if (allInputs[i].checked) values.push(allInputs[i].value);
    }
    if (allInputs[i].value === '' && (allInputs[i].type === 'text' || allInputs[i].type === 'date') && allInputs[i].id !== 'notes') {
      return false;
    }
    if (allInputs[i].value !== '' && allInputs[i].type !== 'radio') {
      values.push(allInputs[i].value);
    }
  }
  return false;
}

function verifyInput(inputs, projectsCont, modal, objMethod) {
  const allInputs = [...inputs];
  const allValues = getValues(allInputs);
  if (allValues) {
    const newObj = objMethod(...allValues);
    console.log(newObj.getProject());
    if (objMethod === Project) projectsCont.push(newObj);
    clearInputs(allInputs);
    modal.style.display = 'none';
    return true;
  }
  return false;
}

export default verifyInput;