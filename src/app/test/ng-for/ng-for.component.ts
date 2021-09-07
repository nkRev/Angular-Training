import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {


  public employees = [
    { id: 1, name: 'Nicky', gender: 'Male', email: 'Nicky@gmail.com' },
    { id: 2, name: 'Paul', gender: 'Male', email: 'p@gmail.com' },
    { id: 3, name: 'Watson', gender: 'Male', email: 'w@gmail.com' },
    { id: 4, name: 'Freddy', gender: 'Male', email: 'Freddy@gmail.com' },
    { id: 5, name: 'Josh', gender: 'Male', email: 'Josh@gmail.com' },
    { id: 6, name: 'Miguel', gender: 'Male', email: 'Miguel@gmail.com' },
    { id: 7, name: 'Bob', gender: 'Male', email: 'Bob@gmail.com' }
  ]





  constructor() { }

  ngOnInit(): void {
  }

}
