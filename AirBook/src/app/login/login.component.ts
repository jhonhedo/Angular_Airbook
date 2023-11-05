import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  data!:any;
  constructor(private http: HttpClient) {
    this.username = ''
    this.password = ''
    this.errorMessage = '';
  }

  login() {
    const username = this.username;
    const password = this.password;
    
    let url = `http://localhost:7777/user-controller/login?userName=${this.username}&password=${this.password}`;
      this.http.get<any>(url).subscribe(data => {
        alert(JSON.stringify(data));
        alert(data.trainNo)
        this.data = data;
      })

      //use only for frontend
    if (username === 'John' && password === 'hedo') {
      alert('Login successful ' + `username: ${this.username} ` + `password:${this.password}`);
      // Successful login, perform necessary actions (e.g., navigate to a different page)
    } else {
      alert('Login failed');
      // Display an error message to the user (e.g., incorrect username or password)
      this.errorMessage = 'Incorrect username or password';
    }
  }
}
