import './assets/stylesheets/style.scss';
import Project from './project';
import ToDo from './todo';

function test() {
  const content = document.getElementById('content');
  content.innerHTML = 'It works!!!';
}

const obj = Project('default Project');
const todo = ToDo(
  undefined, 'title test', 'this is a test', '28/07/2020',
  '02', 'These are the notes',
);

test();
console.log(obj);
console.log(todo.getProject());
if (todo.getProject() === obj.getName()) obj.addToDo(todo);

console.log(obj.getToDos());