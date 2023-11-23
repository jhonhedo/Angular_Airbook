import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-showflight',
  templateUrl: './showflight.component.html',
  styleUrls: ['./showflight.component.css']
})

export class ShowflightComponent implements OnInit{

  flights: any[] = JSON.parse(sessionStorage.getItem('flights') || '[]');
  selectedPriceRange: number = 50; //new change
  filterFlightsByPrice: any;
  selectedFlight!: any;
  filteredFlights = this.flights;
  flightsli: flightsli = new flightsli();
  // flightsString: string | null = sessionStorage.getItem("flights");
  // flightList = JSON.parse(this.flightsString);
flightList : flightsli[]=[]
  p1:any;
  p2:any;
  selectedSortOption: string = '';
  preferredAirlines: any[] = [
    { name: "Air India" },
    { name: "Air India Express" },
    { name: "air asia" },
    { name: "Akasa Air" },
    { name: "IndiGO" },
    { name: "SpiceJet" }
  ];
  selectedAirlines: string[] = [];
   flightsString = sessionStorage.getItem("flights");
  router: any;
  constructor (private http: HttpClient){

  }
  //preferredAirlines: any[] = [];
  selectPreferredAirline() {
    const selectedAirlines = this.preferredAirlines.filter(airline => airline.selected);
    this.selectedFlight = selectedAirlines.map(airline => airline.name);
    
    alert("You have selected " + this.selectedFlight + " as preferred airlines");
    
        // Filter flightList based on selectedFlight
     // const filteredFlights = this.flights.filter(flight => flight.flightName == this.selectedFlight);
     this.filteredFlights=this.flights.filter(flight=>this.selectedFlight.includes(flight.flightName));
      console.log(this.flights);
      console.log(this.filteredFlights);
  }
  



  ngOnInit() {

  }



  selectedItem(selectedflight: any) {
    sessionStorage.setItem('selectedflight', JSON.stringify(selectedflight));
    this.router.navigate(['/review']);
    console.log(selectedflight)
  }

  sort() {
    if (this.selectedSortOption === 'asc') {
       this.filteredFlights = this.flights.slice().sort((p1, p2) => (p1.price > p2.price ? 1 : -1));
    } else if (this.selectedSortOption === 'dsc') {
        this.filteredFlights = this.flights.slice().sort((p1, p2) => (p1.price > p2.price ? -1 : 1));
    }
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


