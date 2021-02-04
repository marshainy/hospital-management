import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApointmentService } from '../apointment.service';


@Component({
  selector: 'app-doctor-console',
  templateUrl: './doctor-console.component.html',
  styleUrls: ['./doctor-console.component.css']
})
export class DoctorConsoleComponent implements OnInit {
apointment:any[];

  doctor:any;
  appArray:any;
  constructor(private apointmentService:ApointmentService,private router:Router) { }

  ngOnInit(): void {
    var str=sessionStorage.getItem('currentdoc');
    
    console.log(str);
    if(str!=null){
      this.doctor=JSON.parse(str);
      console.log(this.doctor);
      this.apointment=this.doctor.appointments;
      console.log(this.apointment);
    }

}
deleteApointment(doctorId:number){
  this.apointmentService.deleteApointment(doctorId).subscribe(
    data=>{
     
      this.apointment=[]
      console.log(data);
      this.apointment.push(data)
      this.router.navigate(['/docConsole']);
    },
    error=>console.error(error)
  );
   

}



updateApointment(doctorId: number){
  this.router.navigate(['/apoint',doctorId]);
}

}