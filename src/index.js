
import { allTasks } from "./Components/allTasks";
import impTasks from "./Components/impTasks";
import { todayTasks } from "./Components/todayTasks";

export const taskbox = document.getElementById('task');

const allTask = document.getElementById('allTasks');
allTask.addEventListener('click', () => {
    impTask.style.borderBottom = 'none';
    todayTask.style.borderBottom = 'none';
    allTask.style.borderBottom = '1px solid #fff';
    renderTasks(allTasks);
})


const todayTask = document.getElementById('todayTasks');
todayTask.addEventListener('click', () => {
    impTask.style.borderBottom = 'none';
    allTask.style.borderBottom = 'none';
    todayTask.style.borderBottom = '1px solid #fff';

    renderTasks(todayTasks);
})

const impTask = document.getElementById('impTasks');
impTask.addEventListener('click', () => {
    todayTask.style.borderBottom = 'none';
    allTask.style.borderBottom = 'none';
    impTask.style.borderBottom = '1px solid #fff';
    renderTasks(impTasks);
})


// render the tasks
function renderTasks(component)  {
    taskbox.innerHTML = '';
    const taskNode = component();
    taskbox.appendChild(taskNode);
}

renderTasks(allTasks);
