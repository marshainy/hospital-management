import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorConsoleComponent } from './doctor-console.component';

describe('DoctorConsoleComponent', () => {
  let component: DoctorConsoleComponent;
  let fixture: ComponentFixture<DoctorConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
