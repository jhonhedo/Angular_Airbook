import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage!: string;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if (username === 'John' && password === 'hedo') {
      console.log('Login successful');
      // Successful login, perform necessary actions (e.g., navigate to a different page)
    } else {
      console.log('Login failed');
      // Display an error message to the user (e.g., incorrect username or password)
      this.errorMessage = 'Incorrect username or password';
    }
  }
}
