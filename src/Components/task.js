import format from 'date-fns/format';
import { tasks } from '..';

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
        taskEditButton.addEventListener('click', () => {
            this.updateTask();
        })
        
        const taskDeleteButton = document.createElement('button');
        taskDeleteButton.className = 'delete-button';
        taskDeleteButton.textContent = 'Delete';
        taskDeleteButton.addEventListener('click', () => {
            this.removeTask();
        })

        
        taskElement.appendChild(taskTitleElement);
        taskElement.appendChild(taskDescriptionElement);
        taskElement.appendChild(taskDueDateElement);
        taskElement.appendChild(taskPriorityElement);
        taskElement.appendChild(taskEditButton);
        taskElement.appendChild(taskDeleteButton);

        return taskElement;
    }
    
    addNewTask() {
        return this.taskElement;
    }
    
    updateTask() {
        this.taskElement.querySelector('h2').textContent = this.title;
        this.taskElement.querySelector('.description').textContent = this.description;
        this.taskElement.querySelector('.dueDate').textContent = format(this.dueDate, 'dd/MM/yyyy');
        this.taskElement.querySelector('.priority').textContent = this.priority;
    }
    
    removeTask() {
        tasks.splice(tasks.indexOf(this.addNewTask), 1);
        this.taskElement.remove();
    }
}

export default Task;