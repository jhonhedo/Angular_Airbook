import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminfetchflights',
  templateUrl: './adminfetchflights.component.html',
  styleUrls: ['./adminfetchflights.component.css']
})
export class AdminfetchflightsComponent implements OnInit{
  
  flights: any[] = [];
  imageUrl!: string;
  router: any;

  constructor(private http: HttpClient) { }
  
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
          console.log(data);
        }
      );
  }

  deleteProduct(id: number): void {
    const url = `http://localhost:7777/flights-controller/flightstatus?flightId/${id}`;
   
    this.http.delete<any[]>(url).subscribe(
      () => {
        console.log(`Item with ID ${id} deleted successfully.`);
      }
    );
  }
 
 
 
}

