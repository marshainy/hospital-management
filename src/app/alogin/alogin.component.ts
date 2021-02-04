import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {
 hide=true;
 adm:string;
password:string;
//admin:Admin;
adpass:string;
  constructor() { }

  ngOnInit(): void {
  }
  // loginadmin()
  // {
  //   console.log("inlogin component");
  //   this.docService.getDoctorByEmail(this.doc).subscribe(
  //     data=>{console.log(data);
  //     this.doctor=data;
  //   this.docpass=data.pass;
  //   console.log(this.docpass);
  //   console.log(this.password);
  //     if(
  //       this.password==this.docpass){
  //        console.log("logged in");
  //       var str=JSON.stringify(this.doctor);
  //       console.log(str);
  //       sessionStorage.setItem("currentdoc",str);
  //       sessionStorage.setItem("userrole","doctor");
  //       alert("logged in");
  //     }
  //     else{
  //       alert("not valid doctor");
  //     } },error=>console.error(error)
  //   );
   
  // }


}
