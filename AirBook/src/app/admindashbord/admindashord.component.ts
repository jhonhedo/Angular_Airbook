import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admindashord',
  templateUrl: './admindashord.component.html',
  styleUrls: ['./admindashord.component.css']
})
export class AdmindashordComponent {


  // private url = `http://localhost:7777/flights-controller/delete-flight/{flightId}`;
  // constructor(private http: HttpClient) { }
  // flightId!: number;
  // deleteFlight(): Observable<any> {
  //   const burl = `${this.url}/delete-flight/$flightId`;
  //   return this.http.delete<any>(burl);
  // }

  // deleteFlight(flightId: number) {
  //   this.deleteFlight(flightId)
  //     .subscribe(() => {
  //         console.log('Flight deleted successfully!');
  //       })
  //    }
}

