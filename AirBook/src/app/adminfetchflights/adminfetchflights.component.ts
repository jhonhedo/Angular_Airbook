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
  service: any;
  flightService: any;
  url: string;
  color:string;

 

  constructor(private http: HttpClient,private router: Router) { }
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
        alert("flight cancel successfully");
        console.log(`Flight with ID ${id} cancel successfully.`);
      }
    );
  }
  onEdit(id:number)
  {
    let url=`http://localhost:7777/flights-controller/fetch-details?flightId=${id}`; 
  
    this.http.get<any>(url).subscribe(data=>{
      sessionStorage.setItem("flight",JSON.stringify(data));
      console.log(data)
      console.log(data.flightId)
      console.log(data.from)
      console.log(data.to)
      this.router.navigate(["/editflight"]);
    })
  }
  // DeleteFlightById(Id:any)
  // {
  //   const url=`http://localhost:7777/flights-controller/delete-flight?flightId=${Id}`;
  //   debugger
  //   this.http.post<any[]>(url,null).subscribe(
  //     () => {
  //     alert("user deleted");
  //     return this.http.delete(this.url+"editflight"+Id);
  //   })
  // }
}



