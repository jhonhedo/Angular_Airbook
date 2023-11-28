import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../addpassenger/addpassenger.component';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private router: Router,private http: HttpClient) { };
  
  cardName!: string;
  cardNumber!: number;
  cvv!: string;
  message: string = '';
  
  reservationDetails: ReservationDetails = new ReservationDetails();

redirectToNextPage() {
  
  this.reservationDetails.cardName = this.cardName;
  this.reservationDetails.cardNumber = this.cardNumber;
  this.reservationDetails.cvv = this.cvv;
  this.reservationDetails.paymentMode = 'card'
  this.reservationDetails.userId = JSON.parse(sessionStorage.getItem('userData')||'{}').userId;
  this.reservationDetails.classFlight = (sessionStorage.getItem('class'));
  this.reservationDetails.flightId = JSON.parse(sessionStorage.getItem('selectedflight') || '{}').flightId;
  this.reservationDetails.passengers = JSON.parse(sessionStorage.getItem('passengersData') || '[]');
  this.reservationDetails.amount = parseInt(sessionStorage.getItem('amount') || '{}');
  console.log('Class:', sessionStorage.getItem('class'));
  console.log('Selected Flight:', sessionStorage.getItem('selectedflight.flightId'));
  console.log('Passenger Data:', sessionStorage.getItem('passengerData'));
  console.log('Amount:', sessionStorage.getItem('amount'));
  console.log(this.reservationDetails);
  this.http.post("http://localhost:7777/reservation_controller/flight/reservation",this.reservationDetails)
  .subscribe((response:any)=>{
    console.log(response)
    alert("payment success...")
  })

  this.router.navigate(['/']); // Replace 'next-page' with your actual route path // Replace 'next-page' with your actual route path
} 
}




export class ReservationDetails{
  flightId!:any;
  userId!:number;
  classFlight!:any;
  reservationDate: Date = new Date();
  passengers: Passenger[];
  amount!: number;
  paymentDate!: Date;
  paymentMode!: string;
  cardName!: string;
  cardNumber!: number;
  cvv!: string;
}

