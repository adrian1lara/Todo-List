import { myTasks } from "./allTasks";

const ImpTaskContainer = document.getElementById('ImpTask');

const displayImpTasks = () => {
    ImpTaskContainer.innerHTML = '';
    const impTask = myTasks.filter((task) => {
        
        return task.priority === 'High';
    })

    impTask.forEach((task) => {
        const div = document.createElement('div');
        const titleLabel = document.createElement('h2');
        const descriptionLabel = document.createElement('div');
        const dueDateLabel = document.createElement('p');
        const priorityLabel = document.createElement('p');

        div.className = 'newTask-box';
        titleLabel.className = 'task-title';
        descriptionLabel.className = 'task-description';
        dueDateLabel.className = 'task-date';
        priorityLabel.className = 'task-priority';

        titleLabel.textContent = task.title;
        descriptionLabel.textContent = task.description;
        dueDateLabel.textContent = task.date;
        priorityLabel.textContent = task.priority;

        div.appendChild(titleLabel);
        div.appendChild(descriptionLabel);
        div.appendChild(dueDateLabel);
        div.appendChild(priorityLabel);


        ImpTaskContainer.appendChild(div);

    })

}


function impTasks() {
    ImpTaskContainer.style.display = 'block';
    displayImpTasks();

    return ImpTaskContainer;
}

export default impTasks;