import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../api.response';
import { Patient } from '../patient';
import {ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})
export class UpdatepatientComponent implements OnInit {
  hide=true;
  id:number;
  patient:Patient;
  apiResponse:ApiResponse;

  constructor(private router:Router,private patientService:PatientService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.patient=new Patient();
    this.id=this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(
      data=>{
        console.log(data)
        this.patient=data;
      },
      error=>console.error(error)
    );

  }
  onSubmit()
  {
    this.patientService.updatePatient(this.id,this.patient).subscribe(
      data=>console.log(data),
      error=>console.error(error)
    );
    this.patient=new Patient()
    this.router.navigate(['/patientmanagement']);
  }

}
