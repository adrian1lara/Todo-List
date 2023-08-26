import '../style.css';
import Task from "./task";
import { format, isSameDay, parseISO } from "date-fns";
import { myTasks } from "./allTasks";
import { removeTask } from "./allTasks";
import { showAllTaskForm } from './allTasks';

const taskContainer = document.getElementById('TodayTask');
const todayTaskForm = document.getElementById('todayTask-form');
const titleInput = document.getElementById('todayTitle');
const descriptionInput = document.getElementById('todayDescription');
const priorityInput = document.getElementById('todayPriority');
const submitTodayButton = document.getElementById('addTodayTask');
export const showTodayForm = document.getElementById('showTodayForm');

let selectedTodayTask = null;


const addButtonClickListener = () => {
    showAllTaskForm.style.display = 'none';
    showTodayForm.style.display = 'flex';
    showTodayForm.addEventListener('click', () => {
        todayTaskForm.style.display = 'flex';
    })
}

const createTodayTask = () => {
    const newTitle = titleInput.value;
    const newDescription = descriptionInput.value;
    const dueDateValue = new Date();
    const newPriority = priorityInput.value;

    if (!newTitle || !newDescription || !newPriority) {
        alert('All fields are required');
        return;
    }

    if (selectedTodayTask) {
        selectedTodayTask.title = newTitle;
        selectedTodayTask.description = newDescription;
        selectedTodayTask.date = format(dueDateValue, 'yyyy-MM-dd');
        selectedTodayTask.priority = newPriority;
        selectedTodayTask = null;
        displayTodayTasks();
    
    } else {
        const newTask = new Task(newTitle, newDescription, format(dueDateValue, 'yyyy-MM-dd'), newPriority);
        myTasks.push(newTask);
        displayTodayTasks();
    }

    titleInput.value = '';
    descriptionInput.value = '';
    
}

const displayTodayTasks = () => {
    taskContainer.innerHTML = '';
    const today = new Date()
    const todayTask = myTasks.filter((task) => {
        const taskDate = parseISO(task.date);

        return isSameDay(taskDate, today);
    })

    todayTask.forEach((task) => {
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

        editButton.addEventListener('click', () => {
            console.log("Editar");
            submitTodayButton.removeEventListener('click', createTodayTask);
            submitTodayButton.addEventListener('click', updateTodayTask);
            submitTodayButton.textContent = 'Update';

            updateTodayTask(task);
            todayTaskForm.style.display = 'flex';
            submitTodayButton.removeEventListener('click', updateTodayTask);
            submitTodayButton.addEventListener('click', createTodayTask);
        })

        submitTodayButton.textContent = 'Add Task';

        deleteButton.addEventListener('click', () => {
            removeTask(task);
            displayTodayTasks();
        })

        console.log(task);

        div.appendChild(titleLabel);
        div.appendChild(descriptionLabel);
        div.appendChild(dueDateLabel);
        div.appendChild(priorityLabel);
        div.appendChild(deleteButton);
        div.appendChild(editButton);

        taskContainer.appendChild(div);
    })

    todayTaskForm.style.display = 'none';
}

const updateTodayTask = (task) => {
    selectedTodayTask = task;
    titleInput.value = task.title;
    descriptionInput.value = task.description;
    priorityInput.value = task.priority;
}


function todayTasks() {
    taskContainer.style.display = 'block';
    addButtonClickListener();
    submitTodayButton.addEventListener('click', createTodayTask);
    displayTodayTasks();
    return taskContainer;
}

export { todayTasks , createTodayTask } ;