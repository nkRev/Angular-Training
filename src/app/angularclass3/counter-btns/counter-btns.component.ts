import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-btns',
  templateUrl: './counter-btns.component.html',
  styleUrls: ['./counter-btns.component.css'],
})
export class CounterBtnsComponent implements OnInit {
  @Input()
  counter = 0;

  @Output()
  change = new EventEmitter();

  increment() {
    this.counter++;
    this.change.emit(this.counter);
  }

  decrement() {
    this.counter--;
    this.change.emit(this.counter);
  }

  constructor() {}

  ngOnInit(): void {}
}
