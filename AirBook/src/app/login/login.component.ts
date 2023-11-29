import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  data!: any;
  successMsg: string;
  // userdata!:any;

  constructor(private http: HttpClient, private router: Router) {
    this.username = ''
    this.password = ''
    this.successMsg= ''
  }

  login() {
    const username = this.username;
    const password = this.password;



    let url = `http://localhost:7777/user-controller/login?userName=${this.username}&password=${this.password}`;
    this.http.get<any>(url).subscribe(data => {
      if (data === null) {
        this.successMsg = 'Login failed..! Incorrect username or password';
        console.log(this.successMsg)
      } else {
        this.data = data;
        if (username === data.userName && password === data.password) {
          this.successMsg = 'Login success..!';
          console.log(this.successMsg)
          sessionStorage.setItem('userData', JSON.stringify(this.data));
          this.router.navigate(['/']);
        }
      }
    });


  }
  cancel() {
    this.router.navigate(['/']);
  }
}
