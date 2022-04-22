import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from '../Model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private url: any = "http://localhost:8080/task";
  constructor(
    private http: HttpClient
  ) { }
  
  getTask(){
    return this.http.get<Task[]>(this.url);
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  edit(task: Task){
    return this.http.put(this.url, task);
  }
}
