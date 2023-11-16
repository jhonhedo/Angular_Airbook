import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reviewbooking',
  templateUrl: './reviewbooking.component.html',
  styleUrls: ['./reviewbooking.component.css']
})
export class ReviewbookingComponent {
  P: Passenger = new Passenger();
  messageIfAny!: string;
  data: any = {};

  //for showing selected data from session storage
  selectedflight: any = JSON.parse(sessionStorage.getItem('selectedflight') || '[]');
  noOfPassengers: any = JSON.parse(sessionStorage.getItem('passengers')|| '[]');
  passengerArray: any[] = Array(this.noOfPassengers).fill({});

  ngOnInit() {
    console.log('Selected Object:',this.selectedflight)
    
  }

constructor(private http: HttpClient, private router: Router) { }

//for passanger data
submitForm() {
  alert(JSON.stringify(this.P));
  let url = "http://localhost/7777/passenger-controller/add-passenger";
  this.http.post<any>(url, this.P).subscribe(data => {
    console.log('Form Data:', this.data);
    // You can now send this data to your backend API.
    this.router.navigate(['/seatselection']);
  })
}
}

export class Passenger {
  first_name!: string;
  last_name!: string;
}
