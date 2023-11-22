import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-adminfetchflights',
  templateUrl: './adminfetchflights.component.html',
  styleUrls: ['./adminfetchflights.component.css']
})
export class AdminfetchflightsComponent implements OnInit{
  
  flights: any[] = [];
  imageUrl!: string;
 

  constructor(private http: HttpClient, private router:Router) { }
  
 // flights1: any[] = JSON.parse(sessionStorage.getItem('flights') || '[]');

  // selectedItem(selectedflight: any) {
  //   sessionStorage.setItem('selectedflight', JSON.stringify(selectedflight));
  //     this.router.navigate(['/review']);
  //   console.log(selectedflight)
  // }
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:7777/flights-controller/getAllFlights')
      .subscribe(
        data => {
          this.flights= data;
          console.log(this.flights);
        }
      );
  }

  cancelFlight(id: number): void {
    const url = `http://localhost:7777/flights-controller/flightstatus?flightId=${id}`;
    this.http.post<any[]>(url,null).subscribe(
      () => {
        console.log(`Flight with ID ${id} cancel successfully.`);
      }
    );
  }

}

