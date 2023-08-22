
import allTasks from "./Components/allTasks";
import impTasks from "./Components/impTasks";
import todayTasks from "./Components/todayTasks";
import Task from "./Components/task";
import { parse, format, parseISO } from 'date-fns';

export let tasks = [];
export const taskbox = document.querySelector('.task');
const addButton = document.getElementById('addButton');

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

addButton.addEventListener('click', () => {
    const taskForm = document.getElementById('task-form');

    taskForm.style.display = 'flex';
    addButton.style.display = 'none';

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title');
        const description = document.getElementById('description');
        const dueDate = document.getElementById('dueDate');
        const priority = document.getElementById('priority');

        const date = parseISO(dueDate.value);
        format(date, 'dd/MM/yyyy');
        
        const task = new Task(title.value, description.value, date, priority.value);
        console.log(task);

        tasks.push(task);
        renderTasks(allTasks);

        taskForm.style.display = 'none';
        addButton.style.display = 'block';

        taskForm.reset();

    })

})








// render the tasks
function renderTasks(component)  {
    taskbox.innerHTML = '';
    const taskNode = component();
    if (taskNode instanceof Node) {
        taskbox.appendChild(taskNode);
    }
}

renderTasks(allTasks);