import format from 'date-fns/format';
import { tasks } from '..';
import { setEditMode } from '../index.js';
import { parse } from 'date-fns';

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskElement = this.createTaskElement();
    }
       
    createTaskElement() {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        
        const taskTitleElement = document.createElement('h2');
        taskTitleElement.textContent = this.title;
        
        const taskDescriptionElement = document.createElement('p');
        taskDescriptionElement.className = 'description';
        taskDescriptionElement.textContent = this.description;
        
        const taskDueDateElement = document.createElement('p');
        taskDueDateElement.className = 'dueDate';
        taskDueDateElement.textContent = format(this.dueDate, 'dd/MM/yyyy');
        
        const taskPriorityElement = document.createElement('p');
        taskPriorityElement.className = 'priority';
        taskPriorityElement.textContent = this.priority;
        
        const taskEditButton = document.createElement('button');
        taskEditButton.className = 'edit-button';
        taskEditButton.textContent = 'Edit';

        
        const taskDeleteButton = document.createElement('button');
        taskDeleteButton.className = 'delete-button';
        taskDeleteButton.textContent = 'Delete';
        
        taskElement.appendChild(taskTitleElement);
        taskElement.appendChild(taskDescriptionElement);
        taskElement.appendChild(taskDueDateElement);
        taskElement.appendChild(taskPriorityElement);
        taskElement.appendChild(taskEditButton);
        taskElement.appendChild(taskDeleteButton);

        taskEditButton.addEventListener('click', () => {
            setEditMode(this.taskElement);
            this.openEditForm();
        })

        taskDeleteButton.addEventListener('click', () => {
            this.removeTask();
        })

        return taskElement;
    }
    
    addNewTask() {
        return this.taskElement;
    }
    
    updateTask(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

        this.taskElement.querySelector('h2').textContent = this.title;
        this.taskElement.querySelector('.description').textContent = this.description;
        this.taskElement.querySelector('.dueDate').textContent = format(this.dueDate, 'dd/MM/yyyy');
        this.taskElement.querySelector('.priority').textContent = this.priority;

    }

    openEditForm() {
        this.taskElement.style.display = 'none';

        const editForm = document.getElementById('task-form');
        editForm.style.display = 'flex';

        const titleInput = document.getElementById('title');
        titleInput.value = this.title;

        const descriptionInput = document.getElementById('description');
        descriptionInput.value = this.description;

        const dueDateInput = document.getElementById('dueDate');
        dueDateInput.value = format(this.dueDate, 'yyyy-MM-dd');

        const priorityInput = document.getElementById('priority');
        priorityInput.value = this.priority;

        const sumbitButton = editForm.querySelector('button[type="submit"]');
        sumbitButton.textContent = 'Update';

        sumbitButton.addEventListener('click', (e) => {
            e.preventDefault();

            const newTitle = titleInput.value;
            const newDescription = descriptionInput.value;
            const newDueDate = parse(dueDateInput.value, 'yyyy-MM-dd', new Date());
            const newPriority = priorityInput.value;

            this.updateTask(newTitle, newDescription, newDueDate, newPriority);

            setEditMode(this.taskElement);

            this.taskElement.style.display = 'flex';
            editForm.style.display = 'none';

            sumbitButton.textContent = 'Add';

        })
    }
    
    removeTask() {
        tasks.splice(tasks.indexOf(this.addNewTask), 1);
        this.taskElement.remove();
    }
}

export default Task;