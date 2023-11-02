import { Component,ViewEncapsulation,ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None,// Disable view encapsulation
})
export class NavComponent {

  constructor(private el: ElementRef) {}
  showLoginComponent: boolean = false;

  toggleLoginComponent() {
    this.showLoginComponent = !this.showLoginComponent;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.showLoginComponent = false;
    }
  }
}
