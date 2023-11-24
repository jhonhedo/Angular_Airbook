import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  reservationsData: any[] = []; // Array to store extracted data
  passengersData: any[] = []; // Array to store passenger data
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
     // this.f.flightId = this.tickets.fli
    // forkJoin([
    //   this.http.get<any[]>('http://localhost:7777/reservation_controller/reservation/myreservation', {
    //     params: { userId: this.userId.toString() }
    //   }),
    //   this.http.get<any[]>(`http://localhost:7777/passenger-controller/passenger-controller/get-passenger?reservationId=${this.userId}`)
    // ]).subscribe(
    //   ([reservations, passengers]) => {
    //     this.reservationsData = reservations;
    //     this.passengersData = passengers;
    //     this.mapPassengersToReservations();
    //   },
    //   error => {
    //     console.error('Error fetching data:', error);
    //   }
    // );
   this.fetchReservations();
   this.fetchPassengers();
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
              }
            } = reservation;

            // Create an object with extracted data
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
              passenger: {} // Placeholder for passenger data
            };

            // Push the object into the array
            this.reservationsData.push(extractedData);
          });
        }
      },
      error => {
        console.error('Error fetching reservations:', error);
      }
    );
  }
  fetchPassengers() {
    console.log(this.userId);
    const url = `http://localhost:7777/passenger-controller/passenger-controller/get-passenger?reservationId=${this.userId}`;
    this.http.get<any[]>(url).subscribe(
      data => {
        this.passengersData = data;
        console.log(data);
        this.mapPassengersToReservations();
      },
      error => {
        console.error('Error fetching passengers:', error);
      }
    );
  }
  mapPassengersToReservations() {
    this.reservationsData.forEach(reservation => {
      // Find the matching passenger for the current reservation
      const matchingPassenger = this.passengersData.find(
        passenger => passenger.reservationId === reservation.reservationId
      );
  
      // If a matching passenger is found, associate it with the reservation
      if (matchingPassenger) {
        reservation.passenger = {
          firstName: matchingPassenger.firstName,
          lastName: matchingPassenger.lastName,
          gender: matchingPassenger.gender,
          seatNo: matchingPassenger.seatNo
        };
      }
    });
  }
  
}
