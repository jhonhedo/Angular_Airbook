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


  constructor(private http: HttpClient, private router: Router) {
    this.addPassenger();
  }


  addPassenger() {
    // Use values from this.P when adding a new passenger
    const newPassenger: Passenger = { firstName: this.P.firstName, lastName: this.P.lastName, gender: this.P.gender };
    this.passengerArray.push(newPassenger);

    // Optionally, you can clear the form fields after adding a passenger
    this.P.firstName = '';
    this.P.lastName = '';
    this.P.gender = '';
  }

  submitForm() {
    
    let reservation = new Reservation();
    reservation.passengers = this.passengerArray;
    // let url = "http://localhost:7777/passenger-controller/add-passenger";
    // this.http.post<any>(url, reservation).subscribe(data => {
    //   console.log('Form Data:', reservation);
    //   console.log('msg:', data); 
    //   this.router.navigate(['/seatselection']);
    // })
    sessionStorage.setItem('passengersData', JSON.stringify(reservation));
    this.router.navigate(['/seatselection']);
  }
}

export class Passenger {
  firstName!: string;
  lastName!: string;
  gender!: string;
}

export class Reservation {
  passengers: Passenger[] = [];
}
