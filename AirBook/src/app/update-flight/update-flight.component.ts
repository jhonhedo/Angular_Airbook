
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {
  error:any; // Assign an initial value or assign it dynamically
  flight!:any; 
  flightId!:number;// Use 'any' type for simplicity
url=`http://localhost:7777/flights-controller/update-flight/{flightId}`
  
constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.flightId = +params['id']; // Convert the id to a number
      // In a real app, you would fetch the flight details from a service
      // For simplicity, let's assume flight details are hardcoded
      this.flight = { id: this.flightId, name: 'Sample Flight' ,arrivalTime:this};
    });
  }
    updateFlight(): void {
      // In a real app, you would call a service to update the flight details
      // For simplicity, let's just log the updated flight details
      console.log('Flight details updated:', this.flight);
    }
  }
