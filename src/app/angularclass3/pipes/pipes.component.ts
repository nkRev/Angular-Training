import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name = 'Nicky Kayyarath'
  message = 'Hello my name is Nicky'
  person = {
    firstName: 'Robert',
    lastName: 'Paulson'
  }

  currentDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
