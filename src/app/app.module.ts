import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//router module
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Exercise2Component } from './test/exercise2/exercise2.component';
import { Exercise2extendedComponent } from './test/exercise2extended/exercise2extended.component';
import { EventBindingComponent } from './test/event-binding/event-binding.component';
import { ClassBindingComponent } from './test/class-binding/class-binding.component';
import { StyleBindingComponent } from './test/style-binding/style-binding.component';
import { NgifComponent } from './test/ngif/ngif.component';
import { NgSwitchComponent } from './test/ng-switch/ng-switch.component';
import { NgForComponent } from './test/ng-for/ng-for.component';
import { NgForTrackByComponent } from './test/ng-for-track-by/ng-for-track-by.component';
import { Demo1Component } from './angularclass3/demo1/demo1.component';
import { PipesComponent } from './angularclass3/pipes/pipes.component';
import { EmployeeListComponent } from './angularclass3/employee-list/employee-list.component';
import { TitlePipe } from "./title.pipe";
import { InputOutputComponent } from './angularclass3/input-output/input-output.component';
import { CounterComponent } from './angularclass3/counter/counter.component';
import { CounterBtnsComponent } from './angularclass3/counter-btns/counter-btns.component';
import { EmployeeListInputOutputComponent } from './class4/employee-list-input-output/employee-list-input-output.component';
import { EmployeeDetailInputOutputComponent } from './class4/employee-detail-input-output/employee-detail-input-output.component';
import { PostComponent } from './class4/httpService/components/post/post.component';
import { Post2Component } from './class4/httpService2/components/photos/post2.component';
import { DepartmentComponent } from './class4/routing2/department/department.component';
import { EmployeeComponent } from './class4/routing2/employee/employee.component';
import { DepartmentDetailComponent } from './class4/routing2/department-detail/department-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Exercise2Component,
    Exercise2extendedComponent,
    EventBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    NgifComponent,
    NgSwitchComponent,
    NgForComponent,
    NgForTrackByComponent,
    Demo1Component,
    PipesComponent,
    EmployeeListComponent,
    TitlePipe,
    InputOutputComponent,
    CounterComponent,
    CounterBtnsComponent,
    EmployeeListInputOutputComponent,
    EmployeeDetailInputOutputComponent,
    PostComponent,
    Post2Component,
    DepartmentComponent,
    EmployeeComponent,
    DepartmentDetailComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
