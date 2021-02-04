import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from '../api.response';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrls: ['./updatedoctor.component.css']
})
export class UpdatedoctorComponent implements OnInit {
 doctorID:number;
 doctor:Doctor;
 apiResponse:ApiResponse;
 hide=true;

  constructor(private router:Router,private doctorservice:DoctorService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.doctor=new Doctor();
    this.doctorID=this.route.snapshot.params['doctorID'];
    this.doctorservice.getDoctorById(this.doctorID).subscribe(
      data=>{
        console.log(data)
        this.doctor=data;
      },
      error=>console.error(error)
    );

  }
  onSubmit()
  {
    this.doctorservice.updateDoctor(this.doctorID,this.doctor).subscribe(
      data=>console.log(data),
      error=>console.error(error)
    );
    this.doctor=new Doctor();
    this.router.navigate(['/doctormanagement']);
  }

  }


