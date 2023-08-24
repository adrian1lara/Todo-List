import { isSameDay, parseISO } from "date-fns";
import { myTasks } from "./allTasks";
import { taskbox } from "..";

const displayTodayTasks = () => {
    const today = new Date()
    const todayTask = myTasks.filter((task) => {
        const taskDate = parseISO(task.date);

        return isSameDay(taskDate, today);
    })

    taskbox.innerHTML = '';
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

        titleLabel.value = task.title;
        descriptionLabel.value = task.description;
        dueDateLabel.value = task.date;
        priorityLabel.value = task.priority;

        console.log(task);

        div.appendChild(titleLabel);
        div.appendChild(descriptionLabel);
        div.appendChild(dueDateLabel);
        div.appendChild(priorityLabel);
        div.appendChild(deleteButton);
        div.appendChild(editButton);

        taskbox.appendChild(div);
    })

}

function todayTasks() {
    displayTodayTasks();
}

export default todayTasks;