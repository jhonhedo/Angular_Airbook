import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowflightsComponent } from './adminshowflights.component';

describe('AdminshowflightsComponent', () => {
  let component: AdminshowflightsComponent;
  let fixture: ComponentFixture<AdminshowflightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminshowflightsComponent]
    });
    fixture = TestBed.createComponent(AdminshowflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
