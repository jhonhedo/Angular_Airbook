import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})


export class PaymentComponent {

  constructor(private router: Router) { };

  ownerName: string = '';
  cvv: string = '';
  cardNumber: string = '';
  message: string = '';
  attempts: number = 0;
  chances: number = 3;

  confirm() {
    if (this.ownerName ==="kishore" && this.cvv ==="nk123" && this.cardNumber ==="123456789") {
      this.message = "Payment completed successfully..!!";
      this.router.navigate(['/ticket']); // Replace 'next-page' with your actual route path
    } else {
      this.attempts++;
      this.chances--;

      if (this.attempts >= 3) {
        this.message = "Please wait 24 hours...!!";
      } else {
        this.message = "Login failed. You have" + this.chances + "attempts remaining.";
      }
    }
  }

  redirectToNextPage() {
    // Use the Router service to navigate to the next page
    this.router.navigate(['/ticket']); // Replace 'next-page' with your actual route path
  }

}
