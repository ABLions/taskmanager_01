import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Service/employee.service';
import { TaskService } from 'src/app/Service/task.service';
import { Task } from 'src/app/Model/Task'


@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css']
})
export class EmployeeModalComponent implements OnInit {

  
  employee!: Employee;
  task!: Task[];

  constructor(
    private dialogRef: MatDialogRef<EmployeeModalComponent>,
    private employeeService: EmployeeService,
    private taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) private data: Employee
    ) { }

  ngOnInit(): void {
    this.employee =  new Employee();
    this.employee.idEmployee = this.data.idEmployee;
    this.employee.name = this.data.name;
    this.employee.task = this.data.task;

    this.taskService.getTask().subscribe(data=>{
      console.log(data);
      this.task = data;
    });

  }

  save(){
    this.employeeService.edit(this.employee).subscribe(()=>{
      return this.employeeService.getEmployees().subscribe(data=>{
        this.employeeService.employUpdated.next(data);
      })
    });
    this.cancel();
  }

  cancel(){
    this.dialogRef.close();
  }

}
