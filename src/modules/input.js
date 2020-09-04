import { Project, projectsCont } from './project';
import { toDosCont } from './todo';

function getValuesFromInput(inputs) {
  const allInputs = [...inputs];
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

function verifyInput(inputsValues, projectsCont, modal, objMethod) {
  let index = '';
  if (inputsValues) {
    const newObj = objMethod(...inputsValues);
    if (objMethod === Project) {
      index = Object.keys(projectsCont).length + 1;
      newObj.updateIndex(index);
      projectsCont[index] = newObj;
      const savedProj = JSON.parse(localStorage.getItem('projectsCont'));
      savedProj[index] = newObj.getAllProp();
      localStorage.setItem('projectsCont', JSON.stringify(savedProj));
    } else {
      index = Object.keys(toDosCont).length + 1;
      newObj.updateIndex(index);
      toDosCont[index] = newObj;
      const savedToDos = JSON.parse(localStorage.getItem('toDosCont')) || {};
      savedToDos[index] = newObj.getAllProp();
      localStorage.setItem('toDosCont', JSON.stringify(savedToDos));
    }
    modal.style.display = 'none';
    return true;
  }
  return false;
}

function setValuesForInputs(todoInfo) {
  const inputs = document.getElementsByClassName('input-todo');
  [inputs[0].value, inputs[1].value, inputs[2].value,
    inputs[7].options.selectedIndex, inputs[8].value] = [
    todoInfo[0], todoInfo[1], todoInfo[2],
    todoInfo[5], todoInfo[6]];
  for (let i = 3; i < 7; i += 1) {
    inputs[i].checked = inputs[i].value === todoInfo[3];
  }
}

function setValueToInputProj(title) {
  const inputs = document.getElementsByClassName('input-proj');
  inputs[0].value = title;
}

function updateValues(objIndex, formClass, inputsValues) {
  if (formClass === 'todo-form') {
    toDosCont[objIndex].updateAllProp(...inputsValues);
    const savedToDos = JSON.parse(localStorage.getItem('toDosCont'));
    savedToDos[objIndex] = toDosCont[objIndex].getAllProp();
    localStorage.setItem('toDosCont', JSON.stringify(savedToDos));
  } else {
    console.log(inputsValues);
    /* projectsCont[objIndex].updateTitle(inputsValues[0]);
    toDosCont[objIndex].updateAllProp(...inputsValues);
    const savedToDos = JSON.parse(localStorage.getItem('toDosCont'));
    savedToDos[objIndex] = toDosCont[objIndex].getAllProp();
    localStorage.setItem('toDosCont', JSON.stringify(savedToDos)); */
  }
}

export {
  getValuesFromInput, verifyInput, setValuesForInputs,
  updateValues, setValueToInputProj,
};