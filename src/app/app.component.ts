import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskmanager';

  constructor(private router:Router){

  }

  employees_list(){
    this.router.navigate(["list"]);
  }

  new_employee(){
    this.router.navigate(["add"]);
  }
}
