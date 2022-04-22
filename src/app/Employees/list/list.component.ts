import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Service/employee.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/views/Employees/confirm-dialog/confirm-dialog.component';
import { EmployeeModalComponent } from 'src/app/views/Employees/employee-modal/employee-modal.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  displayedColumns = ['idEmployee','name','position','task', 'actions'];
  dataSource!: MatTableDataSource<Employee>;


  constructor(
    private service:EmployeeService,
    private dialog: MatDialog,
    private route: Router) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(data=>{
      console.log(data)
      this.dataSource = new MatTableDataSource(data);
    })
  }

  openModal(employee?: Employee){
    let emp = employee != null ? employee: new Employee();
    this.dialog.open(EmployeeModalComponent,{
      width: '260px',
      data: emp
    })
  }

  onDeleted(id:number){
    let dialogRef = this.dialog.open(ConfirmDialogComponent,{});
    dialogRef.afterClosed().subscribe(status=>{
      console.log(status);
      if(status){
        this.service.delete(id).subscribe(()=>{
          this.service.getEmployees().subscribe(data=>{
            this.dataSource =  new MatTableDataSource(data);
          })
        })
      }
    })
  }

}
