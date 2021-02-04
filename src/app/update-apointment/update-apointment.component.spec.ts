import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApointmentComponent } from './update-apointment.component';

describe('UpdateApointmentComponent', () => {
  let component: UpdateApointmentComponent;
  let fixture: ComponentFixture<UpdateApointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateApointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateApointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
