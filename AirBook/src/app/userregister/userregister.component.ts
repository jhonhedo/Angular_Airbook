import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})

export class UserregisterComponent {
  userName: string;
  email: string;
  phone: number;
  DOB: Date;
  password1: string;
  password2: string;
  passwordError: string = '';

  constructor(private router: Router, private http: HttpClient) {
    this.userName = '';
    this.email = '';
    this.phone = 0;
    this.DOB = new Date();
    this.password1 = '';
    this.password2 = '';
  }

  checkPassword() {
    if (this.password1 !== this.password2) {
      this.passwordError = 'Password does not match';
      return;
    } else {
      // Clear the error message if passwords match
      this.passwordError = '';
    }
  }

  onSubmit() {
    this.checkPassword(); // Check passwords before form submission

    if (this.passwordError) {  // Prevent form submission if passwords do not match
      return;
    }
     alert('Login successful ' + `username: ${this.userName}`+`${this.password1}`+
     `${this.email}`+`${this.phone}`+`${this.DOB}`)
    let userData ={
      "userName":this.userName,
      "password":this.password1,
      "email":this.email,
      "phone":this.phone,
      "dob":this.DOB

    };

    this.http.post("http://localhost:7777/user-controller/registration",userData)
    .subscribe((response:any)=>{
      console.log(response)
      alert("User rigister success")
      
      
    })

  }

  cancel() {
    this.router.navigate(['/']);
  }
}
