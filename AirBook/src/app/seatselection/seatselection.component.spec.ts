import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatselectionComponent } from './seatselection.component';

describe('SeatselectionComponent', () => {
  let component: SeatselectionComponent;
  let fixture: ComponentFixture<SeatselectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatselectionComponent]
    });
    fixture = TestBed.createComponent(SeatselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
