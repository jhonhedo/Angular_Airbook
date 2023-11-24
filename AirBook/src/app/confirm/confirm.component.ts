import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  flights = {
    from: ''
  };
  
  constructor(private router: Router,private route: ActivatedRoute) {}
  backToPage(){
    this.router.navigate(['/admindash']);
  }

}
