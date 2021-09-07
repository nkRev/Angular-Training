import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-employee-detail-input-output',
  templateUrl: './employee-detail-input-output.component.html',
  styleUrls: ['./employee-detail-input-output.component.css']

})
export class EmployeeDetailInputOutputComponent implements OnInit {
  employees: any[] = [];

  // constructor() {
  //   let dataSerice = new ServiceService();
  //   this.employees = dataSerice.getEmployees();
  // }
  ngOnInit(): void {}
}
