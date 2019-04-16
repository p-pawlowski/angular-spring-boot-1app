
import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Task} from "./task.model";


@Injectable()
export class TaskService{

    onTaskAdded = new EventEmitter<Task>();

    constructor(private http: HttpClient ){

    }

    getTasks(){
        return this.http.get('/api/tasks');
    }

    saveTask(task: Task, checked: boolean){
        task.completed = checked;
        return this.http.post('/api/tasks/save', task);
    }

    addTask(task: Task){
        return this.http.post('/api/tasks/save', task);
    }

}
