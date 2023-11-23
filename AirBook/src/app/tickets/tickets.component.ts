import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  tickets: any[] = [];
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    // this.http.get<any[]>('http://localhost:8080/')
    //   .subscribe(
    //     data => {
    //       this.tickets = data;
    //       console.log(data);
    //   })
  }
}

export class Ticket {
  flightNo!: String;
  from!: String;
  to!: String;
  passenger!: String;
  boardTime!: Time;
  departure!: Date;
  arrival!: Date;
  seatNo!: number;
}

