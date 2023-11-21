import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addpassenger',
  templateUrl: './addpassenger.component.html',
  styleUrls: ['./addpassenger.component.css']
})
export class AddpassengerComponent {

  P: Passenger = new Passenger();
  //noOfPassengers = 4; hardcode
  //noOfPassengers: any = JSON.parse(sessionStorage.getItem('passengers')|| '[]');
  //passengerArray: any[] = Array(this.noOfPassengers).fill({});
  passengerArray: Passenger[] = [];

  data: any = {};

  constructor(private http: HttpClient, private router: Router) {
    this.addPassenger();
  }


  addPassenger() {
    // Use values from this.P when adding a new passenger
    const newPassenger: Passenger = { first_name: this.P.first_name, last_name: this.P.last_name };
    this.passengerArray.push(newPassenger);

    // Optionally, you can clear the form fields after adding a passenger
    this.P.first_name = '';
    this.P.last_name = '';
  }

  submitForm() {
    this.data = this.passengerArray;
    let reservation = new Reservation();
    reservation.passengers = this.passengerArray;
    let url = "http://localhost:7777/passenger-controller/add-passenger";
    this.http.post<any>(url, reservation).subscribe(data => {
      console.log('Form Data:', this.data);
      console.log('msg:', data);
      // You can now send this data to your backend API.
      this.router.navigate(['/seatselection']);
    })
  }
}

export class Passenger {
  first_name!: string;
  last_name!: string;
}

export class Reservation {
  passengers: Passenger[] = [];
}
