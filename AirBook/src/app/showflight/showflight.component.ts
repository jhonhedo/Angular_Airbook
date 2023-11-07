import { Component } from '@angular/core';

@Component({
  selector: 'app-showflight',
  templateUrl: './showflight.component.html',
  styleUrls: ['./showflight.component.css']
})
export class ShowflightComponent {

  flights: any[] = JSON.parse(sessionStorage.getItem('flights') || '[]');
  
  ngOnInit() {
    
    // "airline": null,
    // "departureTime": "2023-11-05T10:00:00",
    // "arrivalTime": "2023-11-05T15:30:00",
    // "from": "Mumbai",
    // "to": "Goa",
      }

}
// <div *ngFor="let flight of flights">
//   <div>
//     <p>From: {{ flight.from }}</p>
//     <p>To: {{ flight.to }}</p>
//     <!-- Add more properties as needed -->
//   </div>
// </div>
// export class FlightComponent implements OnInit {
//   flights: any[] = JSON.parse(sessionStorage.getItem('flights') || '[]');

//   constructor() { }

//   ngOnInit() {
//     // Load your flight data here or in the constructor
//   }
// }