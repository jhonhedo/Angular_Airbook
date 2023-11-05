import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {

  userName: String;
  email: string;
  phone: number;
  DOB: Date;
  password1: string;
  password2: string;
  passwordError: string = '';

  constructor(private router: Router) {
    this.userName = '';
    this.email = '';
    this.phone = 0;
    this.DOB = new Date();
    this.password1 = '';
    this.password2 = '';
  }

  checkPassword() {
    if (this.password1 !== this.password2) {
      this.passwordError = 'Password does not match'
      return
    }
    else {  // Clear the error message if passwords match
      this.passwordError = '';
    }
  }

  onSubmit() {
    this.checkPassword(); // Check passwords before form submission


    if (this.passwordError) {  // Prevent form submission if passwords do not match
      return;
    }

    alert(`username: ${this.userName} ` + `email: ${this.email} ` + `Dob: ${this.DOB} ` +
    `Password: ${this.password1} ` + 
    `phone: ${this.phone} `);

  // let url = `http://localhost:8080/`;
  // this.http.get<any>(url).subscribe(data => {
  //   // alert(JSON.stringify(data));
  //   // alert(data.trainNo)
  //   this.data = data;
  // })
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
