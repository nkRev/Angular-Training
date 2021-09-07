import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>test component</h1>
  <h1>Hello Mark</h1>
  <h1>Hello {{ firstName }}</h1>
  <h1>{{ 10 + 40 + 50 }}</h1>
  <h1> Welcome {{ firstName }}</h1>
  <h1>{{'Welcome' + firstName}}</h1>
  <h1>{{ message.length }}</h1>
  <h1>{{ message.toUpperCase() }}</h1>
  <h1>{{ greetUser() }}</h1>
  `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public firstName = 'Nicky';
  public message =
    'String Interpolation binds data from .ts to the template by using double curly braces ';

  greetUser() {
    return 'Hi ' + this.firstName;
  }

  constructor() {}

  ngOnInit(): void {}
}
