import Task from './task.js'
//import { taskbox } from '../index.js';
import { format, parseISO, isValid } from 'date-fns';
import { showTodayForm } from './todayTasks.js';
import '../style.css';

const taskcontainer = document.getElementById('AllTask');

const taskForm = document.getElementById('task-form');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const dueDateInput = document.getElementById('dueDate');
const priorityInput = document.getElementById('priority');
const submitButton = document.getElementById('addTask');
const cancelButton = document.getElementById('cancelTask');
export const showAllTaskForm = document.getElementById('addButton');


let myTasks = []; 

cancelButton.addEventListener('click', () => {
    taskForm.style.display = 'none';
    titleInput.value = '';
    descriptionInput.value = '';
    priorityInput.value = 'Low';
})

let selectedTask = null;


const addButtonClickListener = () => {
    showTodayForm.style.display = 'none';
    showAllTaskForm.style.display = 'flex';
    showAllTaskForm.addEventListener('click', () => {
        taskForm.style.display = 'flex';
    })
}

const createNewTask = () => {
    const newTitle = titleInput.value;
    const newDescription = descriptionInput.value;
    const dueDateValue = parseISO(dueDateInput.value);
    const newPriority = priorityInput.value;

    if (!newTitle || !newDescription || !dueDateValue || !newPriority ) {
        alert('All fields are required');
        return;
    }

    
    if (!isValid(dueDateValue)) {
        alert('Invalid due date');
        return;
    }

    if (selectedTask) {
        selectedTask.title = newTitle;
        selectedTask.description = newDescription;
        selectedTask.date = format(dueDateValue, 'yyyy-MM-dd');
        selectedTask.priority = newPriority;
        selectedTask = null;
        displayTasks();
    } else {
        const newTask = new Task(newTitle, newDescription, format(dueDateValue, 'yyyy-MM-dd'), newPriority);
        myTasks.push(newTask);
        displayTasks();
    }

    titleInput.value = '';
    descriptionInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'Low';
};



const displayTasks = () => {
    taskcontainer.innerHTML = '';
    myTasks.forEach((task) => {
        const div = document.createElement('div');
        const titleLabel = document.createElement('h2');
        const descriptionLabel = document.createElement('div');
        const dueDateLabel = document.createElement('p');
        const priorityLabel = document.createElement('p');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');


        div.className = 'newTask-box';
        titleLabel.className = 'task-title';
        descriptionLabel.className = 'task-description';
        dueDateLabel.className = 'task-date';
        priorityLabel.className = 'task-priority';
        deleteButton.className = 'task-delete';
        editButton.className = 'task-edit';

        titleLabel.textContent = task.title;
        descriptionLabel.textContent = task.description;
        dueDateLabel.textContent = task.date;
        priorityLabel.textContent = task.priority;
        deleteButton.textContent = 'Delete';
        editButton.textContent = 'Edit';


        deleteButton.addEventListener('click', () => {
            removeTask(task);
            displayTasks();
        })

        editButton.addEventListener('click', () => {    
            
            submitButton.removeEventListener('click', createNewTask);
            submitButton.addEventListener('click', updateTask);
            submitButton.textContent = 'Update';

            updateTask(task);

            taskForm.style.display = 'flex';
            submitButton.removeEventListener('click', updateTask);
            submitButton.addEventListener('click', createNewTask);
        })
        
        submitButton.textContent = 'Add Task';

        div.appendChild(titleLabel);
        div.appendChild(descriptionLabel);
        div.appendChild(dueDateLabel);
        div.appendChild(priorityLabel);
        div.appendChild(deleteButton);
        div.appendChild(editButton);

        taskcontainer.appendChild(div);
    })

    taskForm.style.display = 'none';
};

const removeTask = (task) => {
    myTasks.splice(myTasks.indexOf(task), 1);
}

const updateTask = (task) => {
    selectedTask = task;
    titleInput.value = task.title;
    descriptionInput.value = task.description;
    priorityInput.value = task.priority;
    dueDateInput.value = task.date;
}



function allTasks() {
    taskcontainer.style.display = 'block';
    addButtonClickListener();
    submitButton.addEventListener('click', createNewTask);
    displayTasks();

    return taskcontainer;
}   

export { allTasks, myTasks, removeTask };