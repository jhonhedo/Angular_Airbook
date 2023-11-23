import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  errorMessage: string = '';
  message: string = '';
  adminName: string;
  password: string;
  data: any;
 

  constructor(private http: HttpClient, private router:Router) {
    this.adminName = '';
    this.password = '';
    this.errorMessage = '';
  }

  login() {
    const adminName = this.adminName;
    const password = this.password;

    let url = `http://localhost:7777/admin-registration/admin-login?adminName=${this.adminName}&password=${this.password}`;
    this.http.post<any>(url, null).subscribe(
      (data) => {
        this.data = data;

        if (this.adminName === 'your_username' && this.password === 'your_password') {
          this.message = 'Invalid username and password!';
          // You may want to navigate to another page or perform other actions upon successful login
        } else {
          this.errorMessage = 'Login is successful!';
        }
      },
      // (error) => {
      //   console.error('Error during login:', error);
      //   alert('An error occurred during login');
      //   // Handle the error appropriately (e.g., display a user-friendly error message)
      // }
    );
  }

  cancel() {
    this.router.navigate(['/admindash']);
  }
}
