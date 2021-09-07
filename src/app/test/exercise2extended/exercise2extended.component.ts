import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2extended',
  templateUrl: './exercise2extended.component.html',
  styleUrls: ['./exercise2extended.component.css']
})
export class Exercise2extendedComponent implements OnInit {
  public isDisabled = false;
  public image = 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'

  constructor() { }

  ngOnInit(): void {
  }

}
