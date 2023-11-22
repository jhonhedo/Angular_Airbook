import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentreview',
  templateUrl: './paymentreview.component.html',
  styleUrls: ['./paymentreview.component.css']
})
export class PaymentreviewComponent {
  Tax: number = 1966;
  selectedflight: any = JSON.parse(sessionStorage.getItem('selectedflight') || '[]');
  Amount:number =this.selectedflight.price + this.Tax;
  constructor(private router: Router) { }
 

  redirectToNextPage() {
  
    sessionStorage.setItem('amount', JSON.stringify(this.Amount));
    this.router.navigate(['/cardpayment']); // Replace 'next-page' with your actual route path
  }
}
