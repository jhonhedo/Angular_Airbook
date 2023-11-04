import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  encapsulation: ViewEncapsulation.None, // Disable view encapsulation
})
export class BodyComponent {
  city1: string;
  city2: string;
  DapartureDate: Date;
  ArrivalDate: Date;
  selectedClass: string;
  Passengers: number = 0;
  data!: any;
  

  constructor(private http: HttpClient) {
    this.city1 = '';
    this.city2 = '';
    this.DapartureDate = new Date();
    this.ArrivalDate = new Date();
    this.selectedClass = '';
  }

  showTravelerInputs = false;
  children: number = 0;
  adults: number = 1;
  infants: number = 0;

  
  get totalPassengers(): number {
    return this.children + this.adults + this.infants;
  }

  toggleTravelerInputs() {
    this.showTravelerInputs = !this.showTravelerInputs;
  }

  updateTotalPassengers() {
    this.Passengers = this.totalPassengers;
  }

  searchFlight() {
    alert(`From: ${this.city1} ` + `To: ${this.city2} ` + `Depart: ${this.DapartureDate} ` +
      `Arrival: ${this.ArrivalDate} ` + 
      `class: ${this.selectedClass} ` + `Passengers: ${this.Passengers}`);

    // let url = `http://localhost:8080/`;
    // this.http.get<any>(url).subscribe(data => {
    //   // alert(JSON.stringify(data));
    //   // alert(data.trainNo)
    //   this.data = data;
    // })
  }

  // Swapcities
  swapCities() {
    // const temp = this.city1;
    // this.city1 = this.city2;
    // this.city2 = temp;
  }
}
