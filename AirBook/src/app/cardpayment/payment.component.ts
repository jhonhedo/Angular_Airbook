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

  message: string = '';
  cardDetails: CreditCard = new CreditCard();
  reservationDetails: ReservationDetails = new ReservationDetails();

redirectToNextPage() {
  
  this.cardDetails.paymentMode = 'card'
  this.reservationDetails.flightId = parseInt(sessionStorage.getItem('selectedflight') || '{}');
  this.reservationDetails.passengers = JSON.parse(sessionStorage.getItem('passengerData') || '[]');
  this.cardDetails.amount = parseInt(sessionStorage.getItem('amount') || '{}');
 
  //change the api url
  // this.http.post("http://localhost:7777/user-controller/registration",this.reservationDetails)
  // .subscribe((response:any)=>{
  //   console.log(response)
  //   alert("Data sent sucessfully...")
  // })

  this.router.navigate(['/ticket']); // Replace 'next-page' with your actual route path // Replace 'next-page' with your actual route path
} 
}


export class CreditCard {
  amount!: number;
  paymentDate!: Date;
  paymentMode!: string;
  cardName!: string;
  cardNumber!: number;
  cvv!: string;
}

export class ReservationDetails{
  flightId!:any;
  passengers: Passenger[] = [];
  payment!: CreditCard ;
}

