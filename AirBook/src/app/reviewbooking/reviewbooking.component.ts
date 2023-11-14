import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reviewbooking',
  templateUrl: './reviewbooking.component.html',
  styleUrls: ['./reviewbooking.component.css']
})
export class ReviewbookingComponent {
  p: Passenger = new Passenger();
  messageIfAny!: string;
  data: any = {};
  selectedflight: any[] = JSON.parse(sessionStorage.getItem('selectedflight') || '[]');

  constructor(private http: HttpClient, private router: Router) { }

  submitForm() {
    alert(JSON.stringify(this.p));
    let url = "http://localhost/7777/passenger-controller/add-passenger";
    this.http.post<any>(url, this.p).subscribe(data => {
      console.log('Form Data:', this.data);
      // You can now send this data to your backend API.
      this.router.navigate(['/']);
    })
  }
}



export class Passenger {
  firstname!: string;
  lastname!: string;
}