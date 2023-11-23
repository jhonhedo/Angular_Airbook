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
  //this.reservationDetails.userId = parseInt(sessionStorage.getItem('user'|null));
  this.reservationDetails.classFlight = (sessionStorage.getItem('class'));
  this.reservationDetails.flightId = parseInt(sessionStorage.getItem('selectedflight') || '{}');
  this.reservationDetails.passengers = JSON.parse(sessionStorage.getItem('passengerData') || '[]');
  this.cardDetails.amount = parseInt(sessionStorage.getItem('amount') || '{}');
 
  
  this.http.post("http://localhost:7777/reservation_controller/flight/reservation",this.reservationDetails)
  .subscribe((response:any)=>{
    console.log(response)
    alert("Data sent sucessfully...")
  })

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
  userId!:any;
  classFlight!:any;
  reservationDate: Date = new Date();
  passengers: Passenger[] = [];
  payment : CreditCard = new CreditCard() ;
}

