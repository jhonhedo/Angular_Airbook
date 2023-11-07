import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentreview',
  templateUrl: './paymentreview.component.html',
  styleUrls: ['./paymentreview.component.css']
})
export class PaymentreviewComponent {

  constructor(private router: Router) { }

  redirectToNextPage() {
    // Use the Router service to navigate to the next page
    this.router.navigate(['/cardpayment']); // Replace 'next-page' with your actual route path
  }
}
