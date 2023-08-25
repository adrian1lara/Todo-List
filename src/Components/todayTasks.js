import Task from "./task";
import { format, isSameDay, parseISO } from "date-fns";
import { createNewTask, dueDateInput, myTasks } from "./allTasks";
//import { taskbox} from "..";
import { removeTask,  } from "./allTasks";
import { titleInput, descriptionInput, priorityInput, addButtonClickListener } from "./allTasks";
import { submitButton } from "./allTasks";
import { taskForm } from "./allTasks";

const taskContainer = document.getElementById('TodayTask');


const createTodayTask = () => {
    const newTitle = titleInput.value;
    const newDescription = descriptionInput.value;
    const dueDateValue = new Date();
    const newPriority = priorityInput.value;

    if (!newTitle || !newDescription || !newPriority) {
        alert('All fields are required');
        return;
    }


    const newTask = new Task(newTitle, newDescription, format(dueDateValue, 'yyyy-MM-dd'), newPriority);
    myTasks.push(newTask);
    displayTodayTasks();


    titleInput.value = '';
    descriptionInput.value = '';
    
}

const displayTodayTasks = () => {
    const today = new Date()
    const todayTask = myTasks.filter((task) => {
        const taskDate = parseISO(task.date);

        return isSameDay(taskDate, today);
    })

    taskContainer.innerHTML = '';
    todayTask.forEach((task) => {
        const div = document.createElement('div');
        const titleLabel = document.createElement('h2');
        const descriptionLabel = document.createElement('div');
        const dueDateLabel = document.createElement('p');
        const priorityLabel = document.createElement('p');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');
        

        titleLabel.className = 'task-title';
        descriptionLabel.className = 'task-description';
        dueDateLabel.className = 'task-date';
        priorityLabel.className = 'task-priority';

        titleLabel.textContent = task.title;
        descriptionLabel.textContent = task.description;
        dueDateLabel.textContent = task.date;
        priorityLabel.textContent = task.priority;
        deleteButton.textContent = 'Delete';
        editButton.textContent = 'Edit';

        editButton.addEventListener('click', () => {
            console.log("Editar");
        })

        deleteButton.addEventListener('click', () => {
            removeTask(task);
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

    taskForm.style.display = 'none';
}

function todayTasks() {

    taskContainer.style.display = 'block';
    addButtonClickListener();
    dueDateInput.style.display = 'none';
    submitButton.removeEventListener('click', createNewTask);
    submitButton.addEventListener('click', createTodayTask);
    displayTodayTasks();
    return taskContainer;
}

export { todayTasks , createTodayTask } ;