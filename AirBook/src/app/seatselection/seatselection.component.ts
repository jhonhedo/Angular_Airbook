import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({

  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrls: ['./seatselection.component.css']
})
export class SeatselectionComponent {
  constructor(private router: Router) { }

  redirectToNextPage() {
    // Use the Router service to navigate to the next page
    this.router.navigate(['/paymentreview']); 
  }

}
