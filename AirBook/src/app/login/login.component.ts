import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string;
  username: string;
  password: string;
  data!: any;
  

  constructor(private http: HttpClient, private router: Router) {
    this.username = ''
    this.password = ''
    this.errorMessage = '';
  }
 
  login() {
    const username = this.username;
    const password = this.password;



     let url = `http://localhost:7777/user-controller/login?userName=${this.username}&password=${this.password}`;
    this.http.post<any>(url,null).subscribe(data => {
      alert(JSON.stringify(data));
      this.data = data;

      if (username === data.userName && password === data.password) {
          
        // Successful login, perform necessary actions (e.g., navigate to a different page)
        sessionStorage.setItem('UserData', JSON.stringify(data));
        this.router.navigate(['/']);
      } else {
        alert('Login failed');
        
        this.errorMessage = 'Incorrect username or password';
      }
    })

  }
  cancel() {
    this.router.navigate(['/']);
  }
}
