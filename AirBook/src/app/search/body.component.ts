import { Component ,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  encapsulation: ViewEncapsulation.None, // Disable view encapsulation
})
export class BodyComponent {

  showTravelerInputs: boolean = false;

  toggleTravelerInputs() {
    this.showTravelerInputs = !this.showTravelerInputs;
  }
}
