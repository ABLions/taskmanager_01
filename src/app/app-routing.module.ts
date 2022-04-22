import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Employees/add/add.component';
import { EditComponent } from './Employees/edit/edit.component';
import { ListComponent } from './Employees/list/list.component';

const routes: Routes = [
  {path:'list', component: ListComponent},
  {path:'add', component: AddComponent},
  {path:'edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
