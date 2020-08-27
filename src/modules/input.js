import Project from './project';

function clearInputs(inputs) {
  inputs.forEach(element => {
    element.value = '';
  });
}

function getValues(allInputs) {
  const values = [];
  for (let i = 0; i < allInputs.length; i += 1) {
    if (allInputs[i].type === 'radio') {
      if (allInputs[i].checked) values.push(allInputs[i].value);
    } else {
      values.push(allInputs[i].value);
    }
  }
  return values;
}

function verifyInput(inputs, projectsCont, modal, objMethod) {
  const allInputs = [...inputs];
  if (allInputs.every(x => x.checkValidity())) {
    const allValues = getValues(allInputs);
    const newObj = objMethod(...allValues);
    if (objMethod === Project) projectsCont.push(newObj);
    clearInputs(allInputs);
    modal.style.display = 'none';
  } else {
    return false;
  }
  return true;
}

export default verifyInput;