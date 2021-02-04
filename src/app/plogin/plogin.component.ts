import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-plogin',
  templateUrl: './plogin.component.html',
  styleUrls: ['./plogin.component.css']
})

export class PloginComponent implements OnInit {
  hide=true;
pat:string;
password:string;
patient:Patient;
patpass:string;
  constructor(private docService:PatientService,private router:Router) { }

  ngOnInit(): void {
  }
  loginPat()
  {
    console.log("inlogin component");
    this.docService.getPatientByEmail(this.pat).subscribe(
      data=>{console.log(data);
      this.patient=data;
    this.patpass=data.password;
    console.log(this.patpass);
    console.log(this.password);
      if(
        this.password==this.patpass){
         console.log("logged in");
        var str=JSON.stringify(this.patient);
        console.log(str);
        sessionStorage.setItem("currentdoc",str);
        sessionStorage.setItem("userrole","patient");
        alert("logged in");
        this.router.navigate(['/appointment']);
      }
      else{
        alert("Not a valid Patient");
      } },error=>console.error(error)
    );
   
  }
}