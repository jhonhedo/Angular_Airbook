import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-showflight',
  templateUrl: './showflight.component.html',
  styleUrls: ['./showflight.component.css']
})

export class ShowflightComponent {
  filterFlightsByPrice: any;
  minPrice: any;
  maxPrice: any;
  selectedFlight!: any;
  filteredFlights!: String
  flightsli: flightsli = new flightsli();
  // flightsString: string | null = sessionStorage.getItem("flights");
  // flightList = JSON.parse(this.flightsString);
flightList : flightsli[]=[]
  //preferredAirlines = ["air india", "jet", "indigo"]

  preferredAirlines: any[] = [
    { name: "Air India" },
    { name: "Air India Express" },
    { name: "Air Asia" },
    { name: "Akasa Air" },
    { name: "IndiGO" },
    { name: "SpiceJet" }
  ];
  selectedAirlines: string[] = [];
   flightsString = sessionStorage.getItem("flights");
  constructor(private router: Router) {

  }

  selectPreferredAirline() {
    const selectedAirlines = this.preferredAirlines.filter(airline => airline.selected);
    this.selectedFlight = selectedAirlines.map(airline => airline.name);
    
    alert("You have selected " + this.selectedFlight + " as preferred airlines");
    
    const flightsString: string | null = sessionStorage.getItem("flights");
  
    if (flightsString) {
      const flightList: flightsli[] = JSON.parse(flightsString);
  
      // Filter flightList based on selectedFlight
      const filteredFlights = flightList.filter(flight => flight.flightName === this.selectedFlight);
  
      console.log(filteredFlights);
    } else {
      console.error("Flights data in sessionStorage is null or not a valid JSON string");
    }
  }
  

  flights: any[] = JSON.parse(sessionStorage.getItem('flights') || '[]');
  selectedPriceRange: number = 50; //new change


  ngOnInit() {

  }



  selectedItem(selectedflight: any) {
    sessionStorage.setItem('selectedflight', JSON.stringify(selectedflight));
    this.router.navigate(['/review']);
    console.log(selectedflight)
  }

}
function filterFlightsByPrice(this: any) {
  const minPrice = 3000;
  const maxPrice = 15000;
  if (this.flights) {
    const filteredFlights = this.flights.filter((flight: { price: number }) => flight.price >= minPrice && flight.price <= maxPrice);

    this.flights = filteredFlights;

  } else {
    console.error("this.flights are not avaliable");
  }
}


export class flightsli{
  flightName!: String 
}