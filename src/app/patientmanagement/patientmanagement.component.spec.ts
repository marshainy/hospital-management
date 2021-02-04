import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientmanagementComponent } from './patientmanagement.component';

describe('PatientmanagementComponent', () => {
  let component: PatientmanagementComponent;
  let fixture: ComponentFixture<PatientmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
