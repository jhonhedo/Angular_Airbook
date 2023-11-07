import { Component } from '@angular/core';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent {
  formData: any = {};

  submitForm() {
    // Handle the form submission and send the data to your API here
    console.log('Form Data:', this.formData);
    // You can now send this data to your backend API.
  }
}
