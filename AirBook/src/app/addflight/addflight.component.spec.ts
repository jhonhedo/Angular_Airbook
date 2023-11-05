import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddflightComponent } from './addflight.component';

describe('AddflightComponent', () => {
  let component: AddflightComponent;
  let fixture: ComponentFixture<AddflightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddflightComponent]
    });
    fixture = TestBed.createComponent(AddflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
