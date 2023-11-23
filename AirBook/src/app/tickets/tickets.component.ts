import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent  implements OnInit{
  tickets:any [] = [] ;
  user: any = JSON.parse(sessionStorage.getItem('userData') || '[]');
  userId: number = this.user.userId;
  constructor(private http: HttpClient) { }
  
  f: Ticket = new Ticket();
   

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:7777/reservation_controller/reservation/myreservation', {
        params: { userId: this.userId.toString() }
      })
      .subscribe(
        data => {
          this.tickets = data;
          console.log(data);
        }
      );
      
  }
}

export class Ticket {
  flightId!: String;
  from!: String;
  to!: String;
  passenger!: String;
  boardTime!: Time;
  departure!: Date;
  arrival!: Date;
  seatNo!: number;
  class!: string;
}

