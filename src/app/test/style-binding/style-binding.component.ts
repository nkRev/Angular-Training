import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  hasError = false
  specialColor = '#999999'

  public customStyle = {
    color: 'blue',
    fontStyle: 'italic'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
