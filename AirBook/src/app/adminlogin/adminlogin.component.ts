import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  errorMessage: string;
  adminName: string;
  password: string;
  data: any;
  message:any;

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

        if (adminName === this.data.adminName && password === this.data.password) {
         // alert('Login successful ' + `username: ${this.adminName} ` + `password:${this.password}`);
         this.message="Login successful";
          // Successful login, perform necessary actions (e.g., navigate to a different page)
          this.router.navigate(['/admindash']);
        } else {
          alert('Login failed');
          // Display an error message to the user (e.g., incorrect username or password)
          this.errorMessage = 'Incorrect username or password';
        }
      },
      (error) => {
        console.error('Error during login:', error);
        alert('An error occurred during login');
        // Handle the error appropriately (e.g., display a user-friendly error message)
      }
    );
  }

  cancel() {
    this.router.navigate(['/admindash']);
  }
}
