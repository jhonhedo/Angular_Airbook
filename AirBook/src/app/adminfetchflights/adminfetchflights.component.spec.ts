import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfetchflightsComponent } from './adminfetchflights.component';

describe('AdminfetchflightsComponent', () => {
  let component: AdminfetchflightsComponent;
  let fixture: ComponentFixture<AdminfetchflightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminfetchflightsComponent]
    });
    fixture = TestBed.createComponent(AdminfetchflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
