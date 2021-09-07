import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
// import { DepartmentComponent } from './class4/routing/department/department.component';
// import { EmployeeComponent } from './class4/routing/employee/employee.component';
import { DepartmentComponent } from './class4/routing2/department/department.component';
import { EmployeeComponent } from './class4/routing2/employee/employee.component';
import { DepartmentDetailComponent } from './class4/routing2/department-detail/department-detail.component';

const routes: Routes = [
    {path: 'department', component: DepartmentComponent},
    {path: 'department/:id', component: DepartmentDetailComponent},
    {path: 'employee', component: EmployeeComponent}
]

@NgModule ({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}