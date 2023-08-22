import Task from "./task";
import { taskbox, tasks } from "..";
import { format } from "date-fns";


function allTasks() {
    const div = document.createElement('div');
    tasks.map(task => {
        div.appendChild(task.addNewTask());
    });

    console.log(tasks)
    return div;
}

export default allTasks;