import {Component, OnInit} from '@angular/core';
import {Task} from "../task.model";
import {TaskService} from "../task.service";

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.taskService.getTasks()
            .subscribe(
                (tasks: any[]) => {
                    this.tasks = tasks;
                },
                (error) => console.log(error)
            );

        this.taskService.onTaskAdded.subscribe(
            (task: Task) => this.tasks.push(task)
        );

        this.taskService.onTaskDeleted.subscribe(
            (task: Task) =>
                this.tasks.splice(this.tasks.indexOf(task), 1)
        );


    }

    getDueDateLabel(task: Task) {
        return task.completed ? 'badge badge-success' : 'badge badge-primary';

    }

    onTaskChange(event, task) {
        this.taskService.saveTask(task, event.target.checked).subscribe();
    }

    delete(task: Task) {
        return this.taskService.deleteTask(task).subscribe(
            (newTask: Task) => {
                this.taskService.onTaskDeleted.emit(newTask);
            }
        );
    }
}
