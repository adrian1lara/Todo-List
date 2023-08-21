import Task from "./task";
import { taskbox, tasks } from "..";

function allTasks() {
    const savedTasks = localStorage.getItem('tasks');
    const taskNodeList = JSON.parse(savedTasks).map(task => {
        const { title, description, dueDate, priority } = task;
        return new Task(title, description, new Date(dueDate), priority).addNewTask();
    });

    const fragment = document.createDocumentFragment();
    taskNodeList.forEach(taskNode => {
        fragment.appendChild(taskNode);
    });

    return fragment;
}

export default allTasks;