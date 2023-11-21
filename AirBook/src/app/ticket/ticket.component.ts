import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{
  tickets: any[] = [];
  constructor(private http: HttpClient) {}

 
 ngOnInit(): void {
  this.http.get<any[]>('http://localhost:8080/api/admin/users')
    .subscribe(
      data => {
        this.tickets = data;
        console.log(data);
    })
  }
  }
 
export class Ticket{
  AirlineName!:String;
  From:String;
  To:String;
  Passenger:String;
  BoardTime:number;
  Departure:number;
  Arrival:number;
  Seat:number;
}


