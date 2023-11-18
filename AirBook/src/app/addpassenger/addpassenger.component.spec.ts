import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpassengerComponent } from './addpassenger.component';

describe('AddpassengerComponent', () => {
  let component: AddpassengerComponent;
  let fixture: ComponentFixture<AddpassengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpassengerComponent]
    });
    fixture = TestBed.createComponent(AddpassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
