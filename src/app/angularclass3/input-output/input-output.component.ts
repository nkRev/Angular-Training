import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input()
  childData = '';

  @Output()
  childEvent = new EventEmitter()

  onButtonClick(){
    this.childEvent.emit('Hi from child component!')
  }

  constructor() { }

  ngOnInit(): void {
  }



}
