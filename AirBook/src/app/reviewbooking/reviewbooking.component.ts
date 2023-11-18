import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { AddpassengerComponent } from '';
@Component({
  selector: 'app-reviewbooking',
  templateUrl: './reviewbooking.component.html',
  styleUrls: ['./reviewbooking.component.css']
})


export class ReviewbookingComponent {
  
  messageIfAny!: string;
  
  

  //for showing selected data from session storage
  selectedflight: any = JSON.parse(sessionStorage.getItem('selectedflight') || '[]');
  // noOfPassengers: any = JSON.parse(sessionStorage.getItem('passengers')|| '[]');
  // passengerArray: any[] = Array(this.noOfPassengers).fill({});
 

  ngOnInit() {
    console.log('Selected Object:',this.selectedflight)
    
    
  }

constructor(private http: HttpClient, private router: Router) { }

}


