import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees = [
    {code: 'emp101', name: 'Nicky', gender : 'male', salary: 10000, DOB: '01/23/1992'},
    {code: 'emp102', name: 'Stacy', gender : 'female', salary: 100000, DOB: '05/02/1982'},
    {code: 'emp103', name: 'Bob', gender : 'male', salary: 150000, DOB: '03/19/2002'},
    {code: 'emp104', name: 'Tina', gender : 'female', salary: 80000, DOB: '10/23/1972'},
    {code: 'emp105', name: 'Mark', gender : 'male', salary: 1000, DOB: '12/25/1999'},
    {code: 'emp106', name: 'Zotar', gender: 'alien', salary: 45000, DOB: '07/04/1776'}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
