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
      projectsCont[index] = newObj;
    } else {
      index = Object.keys(toDosCont).length + 1;
      toDosCont[index] = newObj;
    }
    newObj.updateIndex(index);
    modal.style.display = 'none';
    return true;
  }
  return false;
}

function setValuesForInputs(todoInfo) {
  const inputs = document.getElementsByClassName('input-todo');
  let j = 0;
  for (let i = 0; i < inputs.length; i += 1) {
    if (i === 3) {
      while (j < 7) {
        inputs[j].checked = inputs[j].value === todoInfo[3];
        j += 1;
      }
      i += 3;
      j = 3;
    } else if (inputs[i].type === 'select-one') {
      inputs[i].options.selectedIndex = todoInfo[j];
    } else {
      inputs[i].value = todoInfo[j];
    }
    j += 1;
  }
}

function getValuesFromToDo(todo) {
  let todoInfo = [];
  const methods = [
    todo.getTitle(), todo.getDescr(), todo.getDueDate(),
    todo.getPriority(), todo.getProjectIndex(), todo.getNotes(),
  ];
  todoInfo = methods.map(x => x);
  setValuesForInputs(todoInfo);
  return todoInfo;
}

function updateValues(objIndex, formClass, inputsValues) {
  if (formClass === 'todo-form') {
    toDosCont[objIndex].updateTitle(inputsValues[0]);
    toDosCont[objIndex].updateDescr(inputsValues[1]);
    toDosCont[objIndex].updateDueDate(inputsValues[2]);
    toDosCont[objIndex].updatePriority(inputsValues[3]);
    toDosCont[objIndex].updateProject(inputsValues[4]);
    toDosCont[objIndex].updateProjectIndex(inputsValues[5]);
    toDosCont[objIndex].updateNotes(inputsValues[6]);
  } else {
    projectsCont[objIndex].updateTitle(inputsValues[0]);
  }
}

export {
  getValuesFromInput, verifyInput, getValuesFromToDo, updateValues,
};