import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  public show: boolean = false
  public buttonName:any = "Show"

  toggle(){
    this.show = !this.show
    if(this.show){
      this.buttonName = "Hide"
    }else{
      this.buttonName = "Show"
    }
  }

  public employees = [
    { id: 1, name: 'Nicky', gender: 'Male', email: 'Nicky@gmail.com' },
    { id: 2, name: 'Tina', gender: 'Female', email: 'Belcher@gmail.com' },
    { id: 3, name: 'Stacy', gender: 'Female', email: 'Stacy@gmail.com' },
    { id: 4, name: 'Shaggy', gender: 'Male', email: 'Shaggy@gmail.com' },
    { id: 5, name: 'Ted', gender: 'Male', email: 'Ted@gmail.com' },
    { id: 6, name: 'Kurt', gender: 'Male', email: 'Kurt@gmail.com' },
    { id: 7, name: 'Bob', gender: 'Male', email: 'RobertPaulson@gmail.com' }
  ]


  constructor() { }

  
  ngOnInit(): void {
  }

}
