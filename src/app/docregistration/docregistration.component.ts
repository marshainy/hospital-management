import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-docregistration',
  templateUrl: './docregistration.component.html',
  styleUrls: ['./docregistration.component.css']
})
export class DocregistrationComponent implements OnInit {
 
 doctor: Doctor=new Doctor();
 submitted=false;
 hide=true;
  constructor(private doctorservice: DoctorService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted=true;
    console.log(this.doctor);
    this.doctorservice.createDoctor(this.doctor).subscribe(
      data=>console.log(data),error=>console.error(error)
    );

    this.doctor=new Doctor();
    
    this.router.navigate(['/doctormanagement']);
  }
}
