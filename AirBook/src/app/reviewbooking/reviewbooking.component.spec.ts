import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewbookingComponent } from './reviewbooking.component';

describe('ReviewbookingComponent', () => {
  let component: ReviewbookingComponent;
  let fixture: ComponentFixture<ReviewbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewbookingComponent]
    });
    fixture = TestBed.createComponent(ReviewbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
