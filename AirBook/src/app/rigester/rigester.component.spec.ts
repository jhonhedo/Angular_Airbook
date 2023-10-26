import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigesterComponent } from './rigester.component';

describe('RigesterComponent', () => {
  let component: RigesterComponent;
  let fixture: ComponentFixture<RigesterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RigesterComponent]
    });
    fixture = TestBed.createComponent(RigesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
