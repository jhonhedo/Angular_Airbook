import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flights } from '../addflight/addflight.component';

@Component({
  selector: 'app-editflights',
  templateUrl: './editflights.component.html',
  styleUrls: ['./editflights.component.css']
})
export class EditflightsComponent implements OnInit {
  submitForm() {
    throw new Error('Method not implemented.');
  }
  updateFlightDetails(arg0: number) {
    throw new Error('Method not implemented.');
  }
  flightObject: any[] = [];
  flightId: number;
  flightDetails: FlightDetails = new FlightDetails();
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
  data: any;
  id: number;

  ngOnInit(): void {
    console.log(this.data);
    this.flightDetails = JSON.parse(sessionStorage.getItem("flight") ?? '{}');
  }
 onshowdetails(){
  let url=`http://localhost:7777/flights-controller/update-flights`
  this.http.put(url,this.flightDetails).subscribe(data =>{
    
    this.router.navigate(['/confirm']);
  })
 }
}

export class FlightDetails {
  flightId!: number;
  airline_id!: number;
  from!: string;
  to!: string;
  departureTime!: Date;
  arrivalTime!: Date;
  price!: number;

}

