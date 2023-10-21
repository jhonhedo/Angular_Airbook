import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashordComponent } from './admindashord.component';

describe('AdmindashordComponent', () => {
  let component: AdmindashordComponent;
  let fixture: ComponentFixture<AdmindashordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindashordComponent]
    });
    fixture = TestBed.createComponent(AdmindashordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
