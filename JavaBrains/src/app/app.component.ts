import { Component } from '@angular/core';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emp: EmployeeDetailsComponent;

  constructor(){
    this.emp = new EmployeeDetailsComponent();
  
  }
}
