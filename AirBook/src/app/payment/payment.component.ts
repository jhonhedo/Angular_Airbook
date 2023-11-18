import { Component } from '@angular/core';

declare var Rozarpay:  any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  payNow(){

    const rozorpayoptions = {
      description :'sample razorpay demo',
      currency:'INR',
      amount: 30000,
      name:'sai',
    }
  }
}
