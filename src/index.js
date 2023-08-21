
import allTasks from "./Components/allTasks";
import impTasks from "./Components/impTasks";
import todayTasks from "./Components/todayTasks";
import Task from "./Components/task";
import { parse, format } from 'date-fns';

export let tasks = [];
export const taskbox = document.querySelector('.task');

const savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks(allTasks)
}


const taskForm = document.getElementById('task-form');
const overlay = document.createElement('div');
overlay.className = 'overlay';

const addButton = document.getElementById('addButton');
addButton.addEventListener('click', () => {
    overlay.appendChild(taskForm);
    document.body.appendChild(overlay);
})

let editingTask = null;

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (editingTask) {
        // Edit existing task
        editingTask.title = taskForm.title.value;
        editingTask.description = taskForm.description.value;
        editingTask.dueDate = parse(taskForm.dueDate.value, 'yyyy-MM-dd', new Date());
        editingTask.priority = taskForm.priority.value;

        // Update task in the DOM
        editingTask.updateTask();

        editingTask = null;
    } else {
        // Add new task
        const title = taskForm.title.value;
        const description = taskForm.description.value;
        const dueDate = parse(taskForm.dueDate.value, 'yyyy-MM-dd', new Date());
        const priority = taskForm.priority.value;

        const newTask = new Task(title, description, dueDate, priority);
        tasks.push(newTask);

        taskbox.appendChild(newTask.addNewTask());

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    taskForm.reset();
    overlay.parentNode.removeChild(overlay);
});

taskbox.addEventListener('click', (e) => {
    const editButton = e.target.closest('.edit-button');
    if (editButton) {
        // Get the task element containing the edit button
        const taskElement = editButton.closest('.task');

        // Find the corresponding task instance
        const taskIndex = Array.from(taskbox.children).indexOf(taskElement);
        const task = tasks[taskIndex];

        // Fill the form fields with task's data for editing
        taskForm.title.value = task.title;
        taskForm.description.value = task.description;
        taskForm.dueDate.value = format(task.dueDate, 'yyyy-MM-dd');
        taskForm.priority.value = task.priority;

        editingTask = task;

        // Show the form for editing
        overlay.appendChild(taskForm);
        document.body.appendChild(overlay);
    }
});

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
    if (taskNode instanceof Node) {
        taskbox.appendChild(taskNode);
    }
}

renderTasks(allTasks);