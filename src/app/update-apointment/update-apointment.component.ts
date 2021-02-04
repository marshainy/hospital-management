import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiResponse } from '../api.response';
import { Apointment } from '../apointment';
import { ApointmentService } from '../apointment.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-apointment',
  templateUrl: './update-apointment.component.html',
  styleUrls: ['./update-apointment.component.css']
})
export class UpdateApointmentComponent implements OnInit {

  hide=true;
  id:number;
  apointment:Apointment;
  apiResponse:ApiResponse;

  constructor(private router:Router,private apointmentService:ApointmentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.apointment=new Apointment();
    this.id=this.route.snapshot.params['id'];
    this.apointmentService.getApointmentById(this.id).subscribe(
      data=>{
        console.log(data)
        this.apointment=data;
      },
      error=>console.error(error)
    );

  }
  onSubmit()
  {
    this.apointmentService.updateApointment(this.id,this.apointment).subscribe(
      data=>console.log(data),
      error=>console.error(error)
    );
    this.apointment=new Apointment();
    this.router.navigate(['/apoiManagement']);
  }

}
