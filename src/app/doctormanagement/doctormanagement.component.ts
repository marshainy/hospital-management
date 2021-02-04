import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctormanagement',
  templateUrl: './doctormanagement.component.html',
  styleUrls: ['./doctormanagement.component.css']
})
export class DoctormanagementComponent implements OnInit {
 
  doctor:any[];

  constructor(private doctorservice:DoctorService,private router:Router) { }

  ngOnInit(): void {
    this.doctorservice.getDoctor().subscribe(data=>{
      console.log(data);
      this.doctor=data;
    }
    )
  }
  deleteDoctor(doctorID:number){
    this.doctorservice.deleteDoctor(doctorID).subscribe(
      data=>{
       
        this.doctor=[]
        console.log(data);
        this.doctor.push(data)
        this.router.navigate(['/doctormanagement']);
      },
      error=>console.error(error)
    );
     

  }



  updateDoctor(doctorID: number){
    this.router.navigate(['dupdate',doctorID]);
  }

}
