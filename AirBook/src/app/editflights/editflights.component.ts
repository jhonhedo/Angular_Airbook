import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editflights',
  templateUrl: './editflights.component.html',
  styleUrls: ['./editflights.component.css']
})
export class EditflightsComponent implements OnInit {
  flightObject: any[] = [];
  flightId: number;
 // flightDetails: any; // You might want to replace 'any' with a more specific type
  flightDetails: FlightDetails = new FlightDetails();
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Get the flightId from the route parameters
    this.route.params.subscribe(params => {
      this.flightId = +params['id']; // Assuming your route parameter is named 'id'
      this.loadFlightDetails();
    });
  }

  loadFlightDetails(): void {
    // Fetch flight details based on flightId
    const url = `http://localhost:7777/flights-controller/fetchflights/${this.flightId}`;
    this.http.get<FlightDetails>(url).subscribe(
      (data) => {
        this.flightDetails = data;
      },
      (error) => {
        console.error('Error fetching flight details:', error);
      }
    );
  }
  updateFlightDetails(): void {
    // Send updated details to the server using a PUT request
    const url = `http://localhost:7777/flights-controller/update-flights/${this.flightId}`;
    this.http.put<any>(url, this.flightDetails).subscribe(
      () => {
        console.log(`Flight with ID ${this.flightId} updated successfully.`);
        // Optionally, you can navigate to a different page after successful update
        this.router.navigate(['/editflightdetails']);
      },
      (error) => {
        console.error('Error updating flight details:', error);
      }
    );
  }
  
  // singleFlightDetails(id: number): void {
  //   this.http.get<any[]>(`http://localhost:7777/flights-controller/fetch-details?flightId=${id}`)
  //   .subscribe(
  //     data => {
  //       this.flightObject= data;
  //       console.log(this.flights);
  //     this.updateFlightDetails()
  //     }
  //   );
  // }
  
}
export class FlightDetails {
  flightId!:number;
  airline_id!: number;
  from!: string;
  to!: string;
  departureTime!: Date;
  arrivalTime!: Date;
  price!: number;
}