import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent {
 

  constructor(private http: HttpClient, private router: Router) { 
    this.flights.departureTime = new Date();
  }

  flights: Flights = new Flights();
  messageIfAny!: string;
  data: any = {};

  submitForm() {
    alert(JSON.stringify(this.flights));
    let url = "http://localhost:7777/flights-controller/adding-flights";
    this.http.post<any>(url, this.flights).subscribe(data => {
    console.log('Form Data:', this.data);
    // You can now send this data to your backend API.
    this.router.navigate(['/addflight']);
  })
}
}
//Flight is getting added but it is not taking departure time
export class Flights {
  airline_id!: number;
  from!: string;
  to!: string;
  departureTime!: Date;
  arrivalTime!: Date;
  price!: number;
  
}
export class air
{
  id: number|undefined
}


