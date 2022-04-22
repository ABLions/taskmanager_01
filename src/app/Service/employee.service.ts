import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../Model/employee';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  employUpdated = new Subject<Employee[]>();
  
  private url: any = "http://localhost:8080/employees";
  constructor(
    private http: HttpClient
  ) { }
  
  getEmployees(){
    return this.http.get<Employee[]>(this.url);
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  edit(employee: Employee){
    return this.http.put(this.url, employee);
  }
}
