import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  reservationsData: any[] = [];
  user: any = JSON.parse(sessionStorage.getItem('userData') || '[]');
  userId: number = this.user.userId;
  tickets: any[];

  constructor(private http: HttpClient) { }

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
   
   this.fetchReservations();
   
  }

  fetchReservations() {
    this.http.get<any[]>('http://localhost:7777/reservation_controller/reservation/myreservation', {
      params: { userId: this.userId.toString() }
    })
    .subscribe(
      data => {
        if (data && data.length > 0) {
          data.forEach(reservation => {
            const {
              amount,
              reservationId,
              flightClass,
              reservationDate,
              flight: {
                flightId,
                from,
                to,
                arrivalTime,
                departureTime
              },
              passengers
            } = reservation;

            const extractedData = {
              amount,
              reservationId,
              flightClass,
              reservationDate,
              flight: {
                flightId,
                from,
                to,
                arrivalTime,
                departureTime
              },
              passengers: passengers.map((passenger: any) => ({
                firstName: passenger.firstName,
                lastName: passenger.lastName,
                gender: passenger.gender
              }))
            };

            this.reservationsData.push(extractedData);
          });
        }
      },
      error => {
        console.error('Error fetching reservations:', error);
      }
    );
  }

  convertToPDF() {
    // Set the options for html2pdf
    const options = {
      margin: 10,
      filename: 'tickets.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

   
    const mainElement = document.getElementsByTagName('main')[0];

    
    html2pdf().from(mainElement).set(options).outputPdf(pdf => {
      console.log('pdf conversion completed...')
    }
      );
  }
}
  

