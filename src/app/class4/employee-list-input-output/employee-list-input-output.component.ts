import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employee-list-input-output',
  templateUrl: './employee-list-input-output.component.html',
  styleUrls: ['./employee-list-input-output.component.css'],
  providers: [ServiceService]
})
export class EmployeeListInputOutputComponent implements OnInit {
  
  employees: any[] = [];

  constructor(private dataService: ServiceService) { 
    let dataSerice = new ServiceService();
     this.employees =  dataSerice.getEmployees()
  }
  ngOnInit(): void {}
}
