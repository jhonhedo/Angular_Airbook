import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showflight',
  templateUrl: './showflight.component.html',
  styleUrls: ['./showflight.component.css']
})
export class ShowflightComponent {
constructor(private router: Router){

}

  flights: any[] = JSON.parse(sessionStorage.getItem('flights') || '[]');

  selectedItem(selectedflight: any) {
    sessionStorage.setItem('selectedflight', JSON.stringify(selectedflight));
      this.router.navigate(['/review']);
    console.log(selectedflight)
  }
  ngOnInit() {

    // "airline": null,
    // "departureTime": "2023-11-05T10:00:00",
    // "arrivalTime": "2023-11-05T15:30:00",
    // "from": "Mumbai",
    // "to": "Goa",
  }

}
