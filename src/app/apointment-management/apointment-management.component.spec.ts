import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApointmentManagementComponent } from './apointment-management.component';

describe('ApointmentManagementComponent', () => {
  let component: ApointmentManagementComponent;
  let fixture: ComponentFixture<ApointmentManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApointmentManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApointmentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
