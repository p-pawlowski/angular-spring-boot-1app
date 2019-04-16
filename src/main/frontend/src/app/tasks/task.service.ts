
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class TaskService{

    constructor(private http: HttpClient ){

    }

    getTasks(){
        return this.http.get('/api/tasks');
    }

}
