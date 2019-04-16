import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task.model";
import {formatDate} from "@angular/common";

@Component({
    selector: 'app-tasks-add',
    templateUrl: './tasks-add.component.html',
    styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

    addTaskValue: string = null;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
    }

    onTaskAdd(event) {
        let task: Task = new Task(event.target.value, false, formatDate(new Date(), 'dd/MM/yyyy', 'en'));
        this.taskService.addTask(task).subscribe(
            (newTask: Task) => {
                this.addTaskValue = ' ';
                this.taskService.onTaskAdded.emit(newTask);
            }
        );
    }

}
