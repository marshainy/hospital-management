import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from '../api.response';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patientmanagement',
  templateUrl: './patientmanagement.component.html',
  styleUrls: ['./patientmanagement.component.css']
})
export class PatientmanagementComponent implements OnInit {
   
  patient: any[];
  constructor(private patientService: PatientService,private router:Router) { }

  ngOnInit(): void {
   this.patientService.getPatient().subscribe(data=>{
     console.log(data);
     this.patient=data;
   }

   )
    
  }

  deletePatient(id:number){
    this.patientService.deletePatient(id).subscribe(
      data=>{
       
        this.patient=[]
        console.log(data);
        this.patient.push(data)
        this.router.navigate(['/patientmanagement']);
      },
      error=>console.error(error)
    );
     

  }



  updatePatient(id: number){
    this.router.navigate(['update',id]);
  }

}
