import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent{
  constructor(private router: Router) { }
  selectedSeats: string[] = [];
  pricePerSeat = 50;
 
  seatData = [
    ['1', '2', '3', '4', '5', '6'],
    ['7', '8', '9', '10', '11', '12'],
    ['13', '14', '15', '16', '17', '18'],
    ['4A', '4B', '4C', '4D', '4E', '5F'],
    ['5A', '5B', '5C', '5D', '5E', '5F'],
    ['6A', '6B', '6C', '6D', '6E', '6F'],
    ['7A', '7B', '7C', '7D', '7E', '7F'],
    ['8A', '8B', '8C', '8D', '9E', '9F'],
    ['10A', '10B', '10C', '10D', '10E', '10F']
  ];
 
 


  selectSeat(seat: string): void {
    if (!this.selectedSeats.includes(seat)) {
      this.selectedSeats.push(seat);
    } else {
      const index = this.selectedSeats.indexOf(seat);
      if (index !== -1) {
        this.selectedSeats.splice(index, 1);
      }
    }
  }

  isSeatSelected(seat: string): boolean {
    return this.selectedSeats.includes(seat);
  }

  getTotalPrice(): number {
    return this.selectedSeats.length * this.pricePerSeat;
  }

  redirectToNextPage(){
    this.router.navigate(['/paymentreview']); 
    // console.log('Selected Seats:', this.selectedSeats);
    // console.log('Total Price:', this.getTotalPrice());

  }
}


