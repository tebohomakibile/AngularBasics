import { Component, OnInit, Input } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: any;

  @Input('expectedEmployeeObj') employeeOBJ: Employee;

  constructor() {}



  ngOnInit() {
    this.employee = {
      name: this.employeeOBJ.name,
      profession: this.employeeOBJ.profession,
      address: this.employeeOBJ.address,
      phone: this.employeeOBJ.phone
    };

  }

}
