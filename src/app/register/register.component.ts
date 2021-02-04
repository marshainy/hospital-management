import { Component, OnInit } from '@angular/core';
import { FormsModule , Form, FormBuilder,FormGroup, Validators, FormControl } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PatientService } from "src/app/patient.service";
import { Router } from "@angular/router";
import { Patient } from '../patient';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
 {
   patient:Patient= new Patient();
   submitted=false;
   hide=true;
   
  
  
  constructor(private patientservice: PatientService,private router:Router)
  {
  }
  


  ngOnInit()
   {
     
  }

  onSubmit(){
    this.submitted=true;
    console.log(this.patient);
    this.patientservice.createPatient(this.patient).subscribe(
      data=>console.log(data),error=>console.error(error)
    );

    this.patient=new Patient();
    
    this.router.navigate(['/patientmanagement']);
  }

}
