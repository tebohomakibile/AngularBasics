import { Component } from '@angular/core';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { Employee } from './employee-details/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  empObj: Employee;

  constructor() {
    this.empObj = new Employee();

    this.empObj.name = 'Teboho Makibile';
    this.empObj.profession = 'Software developer';
    this.empObj.address = '304 Oak Avenue Ferndale';
    this.empObj.phone = [
      '1234567890',
      '0987654321'
    ];
  }
}
