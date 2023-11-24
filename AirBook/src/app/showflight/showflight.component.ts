import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


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
flightList : flightsli[]=[]
  p1:any;
  p2:any;
  selectedSortOption: string = '';
  preferredAirlines: any[] = [];

  selectedAirlines: string[] = [];
   flightsString = sessionStorage.getItem("flights");
   selectedTimeRange: string = ''; // This will store the selected time range //working on Time Range======================
  constructor (private http: HttpClient, private router: Router){

  }
   
  selectPreferredAirline() {
    console.log("preferred air lines :"+this.preferredAirlines)
    const selectedAirlines = this.preferredAirlines.filter(airline => airline.selected);
    this.selectedFlight = selectedAirlines.map(airline => airline.name);
    
    alert("You have selected " + this.selectedFlight + " as preferred airlines");
     this.filteredFlights=this.flights.filter(flight=>this.selectedFlight.includes(flight.flightName));
  }
  
 

  ngOnInit(): void {
    this.http.get('http://localhost:7777/flights-controller/all-flights')
      .subscribe(
        (data: any[]) => {
          console.log('Fetched data:', data); // Log the fetched data to see its structure
          // Assuming the response structure is an array of objects with a 'name' property
          this.preferredAirlines = data.map(item => ({ name: item, selected: false }));
          alert("preferredAirlines data :"+this.preferredAirlines)
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
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

selectTimeRange(timeRange: string): void {
  this.selectedTimeRange = timeRange;

  // Filter flights based on the selected time range
  switch (timeRange) {
    case 'Before 6AM':
      this.filteredFlights = this.flights.filter(flight => this.isBefore6AM(flight.departureTime));
      break;
    case '6AM - 12PM':
      this.filteredFlights = this.flights.filter(flight => this.isBetween6AMand12PM(flight.departureTime));
      break;
    case '12PM - 6PM':
      this.filteredFlights = this.flights.filter(flight => this.isBetween12PMand6PM(flight.departureTime));
      break;
    case 'After 6PM':
      this.filteredFlights = this.flights.filter(flight => this.isAfter6PM(flight.departureTime));
      break;
    default:
      this.filteredFlights = this.flights; // No filter
      break;
  }
}

isBefore6AM(departureTime: string): boolean {
  const time = new Date(`${departureTime}`);
  return time.getHours() < 6;
}

isBetween6AMand12PM(departureTime: string): boolean {
  const time = new Date(`${departureTime}`);
  const hours = time.getHours();
  return hours >= 6 && hours < 12;
}

isBetween12PMand6PM(departureTime: string): boolean {
  const time = new Date(`${departureTime}`);
  const hours = time.getHours();
  return hours >= 12 && hours < 18;
}

isAfter6PM(departureTime: string): boolean {
  const time = new Date(`${departureTime}`);
  return time.getHours() >= 18;
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


