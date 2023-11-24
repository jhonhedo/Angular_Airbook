import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

  // convertToPDF() {
  //   var data = document.getElementById('contentToConvert');
  //   html2canvas(data).then(canvas => {
  //     var imgWidth = 208;
  //     var pageHeight = 295;
  //     var imgHeight = canvas.height * imgWidth / canvas.width;
  //     var heightLeft = imgHeight;

  //     const contentDataURL = canvas.toDataURL('image/png');
  //     let pdf = new jspdf.jsPDF('p', 'mm', 'a4');
  //     var position = 0;
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
  //     pdf.save('new-file.pdf');
  //   });
  // }
}
