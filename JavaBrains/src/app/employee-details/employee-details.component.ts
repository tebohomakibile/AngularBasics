import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee = {
    name: 'Teboho Makibile',
    profession: 'Angular Developer',
    address: '304 Oak Avenue Ferndale',
    phone: [
      '1234567890',
      '0987654321',
      '6543217890'
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
