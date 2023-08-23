import Task from './task.js'
import { taskbox } from '../index.js';


const taskForm = document.getElementById('task-form');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const dueDateInput = document.getElementById('dueDate');
const priorityInput = document.getElementById('priority');
const submitButton = document.getElementById('addTask');
const allTaskDiv = document.createElement('div');


let myTasks = []; 

const addButtonClickListener = () => {
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', () => {
        
        taskForm.style.display = 'flex';

    })
}

const createNewTask = () => {
    const newTitle = titleInput.value;
    const newDescription = descriptionInput.value;
    const newDueDate = dueDateInput.value;
    const newPriority = priorityInput.value;

    if (titleInput.value === '' || descriptionInput.value === '' || dueDateInput.value === '' || priorityInput.value === '') {
        alert('All fields are required');
    } else {
        const newTask = new Task(newTitle, newDescription, newDueDate, newPriority);
        myTasks.push(newTask);
        displayTasks();

        titleInput.value = '';
        descriptionInput.value = '';
    }
}


const displayTasks = () => {
    taskbox.innerHTML = '';
    myTasks.forEach((task, index) => {
        const div = document.createElement('div');
        const titleLabel = document.createElement('h2');
        const descriptionLabel = document.createElement('p');
        const dueDateLabel = document.createElement('p');
        const priorityLabel = document.createElement('p');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');

        titleLabel.textContent = task.title;
        descriptionLabel.textContent = task.description;
        dueDateLabel.textContent = task.date;
        priorityLabel.textContent = task.priority;
        deleteButton.textContent = 'Delete';
        editButton.textContent = 'Edit';

        div.setAttribute('data-index', index);

        deleteButton.addEventListener('click', () => {
            myTasks.splice(index, 1);
            console.log(myTasks);
            displayTasks();
        })

        editButton.addEventListener('click', () => {    

            taskForm.style.display = 'flex';

            titleInput.value = task.title;
            descriptionInput.value = task.description;
            dueDateInput.value = task.date;
            priorityInput.value = task.priority;

            console.log('EDITAR');
            const editIndex = parseInt(div.getAttribute('data-index'));

            if (myTasks[editIndex]) {
                // Verificar si el elemento en el índice es válido
                submitButton.removeEventListener('click', createNewTask); // Eliminar el manejador de evento anterior
                submitButton.textContent = 'Save Edit'; // Cambiar el texto del botón
        
                submitButton.addEventListener('click', () => {
                    // Verificar si los campos están completos
                    if (titleInput.value === '' || descriptionInput.value === '' || dueDateInput.value === '' || priorityInput.value === '') {
                        alert('All fields are required');
                    } else {
                        // Actualizar el elemento en myTasks usando el índice
                        myTasks[editIndex].title = titleInput.value;
                        myTasks[editIndex].description = descriptionInput.value;
                        myTasks[editIndex].date = dueDateInput.value;
                        myTasks[editIndex].priority = priorityInput.value;
        
                        submitButton.textContent = 'Add Task'; 
                        submitButton.removeEventListener('click', editButton); 
                        submitButton.addEventListener('click', createNewTask); 
        
                        // Restablecer los campos del formulario
                        titleInput.value = '';
                        descriptionInput.value = '';
                        dueDateInput.value = '';
                        taskForm.style.display = 'none'; // Ocultar el formulario de edición
                    }
                });
            } else {
                console.log("Invalid index or task not found");
            }

            displayTasks();

        })

        div.appendChild(titleLabel);
        div.appendChild(descriptionLabel);
        div.appendChild(dueDateLabel);
        div.appendChild(priorityLabel);
        div.appendChild(deleteButton);
        div.appendChild(editButton);

        taskbox.appendChild(div);
    })

    taskForm.style.display = 'none';
};


function allTasks() {
    addButtonClickListener();
    submitButton.addEventListener('click', createNewTask);
    displayTasks();
}

export default allTasks;