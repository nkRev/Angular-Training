import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  template: `
  <br>
  <br>
  <hr>
  <h1>PROPERTY BINDING</h1>
  <br>
  <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" width="200" />
  <br>
  <img [src]="image" width="200"/>
  <br>
  <img src={{image}} width="200" />

  <br>
  <button disabled>Button</button>
  <button disabled = "{{isDisabled}}">Button - interpolation</button>
  <button [disabled] = "isDisabled">Button - Property Binding</button>

  `,
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {

  public isDisabled = false;
  public image = 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'

  constructor() { }

  ngOnInit(): void {
  }

}
