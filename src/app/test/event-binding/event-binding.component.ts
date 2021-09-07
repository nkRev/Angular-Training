import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public message = 'Hello Guest!'
  public comment = ''

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    console.log('button clicked')
    this.message = 'Hello Nicky!'
  }

  onChange(){
    this.message = 'Change happen'
  }

  onGetValue(input: any){
    console.log(input)
  }

  onKeyUp(data:any){
    this.comment = data
  }

}
