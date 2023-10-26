import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  ownerName: string = '';
  cvv: string = '';
  cardNumber: string = '';
  message: string = '';
  attmpts: number = 0;
  chances: number = 3;

  confirm() {
    if (this.ownerName ==="kishore" && this.cvv ==="nk123" && this.cardNumber ==="123456789") {
      this.message = "Payment completed successfully..!!";
    } else {
      this.attmpts++;
      this.chances--;

      if (this.attmpts >= 3) {
        this.message = "Please wait 24 hours...!!";
      } else {
        this.message = "Login failed. You have" + this.chances + "attempts remaining.";
      }
    }
  }

}
