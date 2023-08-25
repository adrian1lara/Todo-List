
import { allTasks } from "./Components/allTasks";
import impTasks from "./Components/impTasks";
import { todayTasks } from "./Components/todayTasks";

export const taskbox = document.getElementById('task');

const allTask = document.getElementById('allTasks');
allTask.addEventListener('click', () => {
    renderTasks(allTasks);
})


const todayTask = document.getElementById('todayTasks');
todayTask.addEventListener('click', () => {
    renderTasks(todayTasks);
})

const impTask = document.getElementById('impTasks');
impTask.addEventListener('click', () => {
    renderTasks(impTasks);
})


// render the tasks
function renderTasks(component)  {
    taskbox.innerHTML = '';
    const taskNode = component();
    taskbox.appendChild(taskNode);
}

renderTasks(allTasks);
