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
      if (allInputs[i].type !== 'textarea' && allInputs[i].value === '') return false;
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
    if (objMethod === Project) projectsCont.push(newObj);
    clearInputs(allInputs);
    modal.style.display = 'none';
    projectsCont.map(x => console.log(x.getName()));
    return true;
  }
  return false;
}

export default verifyInput;