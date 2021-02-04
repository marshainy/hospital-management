import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-dlogin',
  templateUrl: './dlogin.component.html',
  styleUrls: ['./dlogin.component.css']
})
export class DloginComponent implements OnInit {
hide=true;
doc:string;
password:string;
doctor:Doctor;
docpass:string;
  constructor(private docService:DoctorService,private router:Router) { }

  ngOnInit(): void {
  }
  loginDoc()
  {
    console.log("inlogin component");
    this.docService.getDoctorByEmail(this.doc).subscribe(
      data=>{console.log(data);
      this.doctor=data;
    this.docpass=data.pass;
    console.log(this.docpass);
    console.log(this.password);
      if(
        this.password==this.docpass){
         console.log("logged in");
        var str=JSON.stringify(this.doctor);
        console.log(str);
        sessionStorage.setItem("currentdoc",str);
        sessionStorage.setItem("userrole","doctor");
        alert("logged in");
        this.router.navigate(['/docConsole']);
      }
      else{
        alert("not valid doctor");
      } },error=>console.error(error)
    );
   
  }

}
