import { Component, OnInit, Input } from '@angular/core';
import { Emp } from './employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input('employee') empOBJ: Emp;

  employee: any;

  constructor() {}

  ngOnInit() {
    this.employee = {
      name: this.empOBJ.name,
      profession: this.empOBJ.profession,
      address: this.empOBJ.address,
      phone: this.empOBJ.phone
    };
  }

}
