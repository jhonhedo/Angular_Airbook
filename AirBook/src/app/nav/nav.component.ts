import { Component, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
  showLoginComponent: boolean = false;
  loggedInUser: any = JSON.parse(sessionStorage.getItem('UserData') || '{}');

  constructor(private el: ElementRef, private router: Router) {}

  toggleLoginComponent() {
    this.router.navigate(['/login'])
    this.showLoginComponent = !this.showLoginComponent;
    // this.router.navigate(['/nav'])
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.showLoginComponent = false;
    }
  }

  logout() {
    // Clear user data from sessionStorage or perform other logout actions
    sessionStorage.clear();
    this.loggedInUser = null;
    this.router.navigate(['/']);
  }
}
//Is this code there for all
