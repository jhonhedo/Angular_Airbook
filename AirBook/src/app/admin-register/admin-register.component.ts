import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {

  adminName: String;
  email: string;
  phone: number;
  DOB: Date;
  password1: string;
  password2: string;
  passwordError: string = '';

  constructor(private router: Router, private http: HttpClient) {
    this.adminName = '';
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
     alert('register successful ' + `username: ${this.adminName}`+`${this.password1}`+
     `${this.email}`+`${this.phone}`+`${this.DOB}`)
    let userData ={
      "adminName":this.adminName,
      "password":this.password1,
      "email":this.email,
      "phone":this.phone,
      "dob":this.DOB

    };

    this.http.post("http://localhost:7777/admin-registration/add-admin",userData)
    .subscribe((response:any)=>{
      console.log(response)
      alert("Admin rigister success")
      
      
    })

  }

  cancel() {
    this.router.navigate(['/']);
  }

}

