import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apointment } from '../apointment';
import { ApointmentService } from '../apointment.service';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  apointment:Apointment=new Apointment();
  submitted=false;
hide=true;

  constructor(private apointmentService:ApointmentService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted=true;
    console.log(this.apointment);
    this.apointmentService.createApointment(this.apointment).subscribe(
      data=>console.log(data),error=>console.error(error)
    );

    this.apointment=new Apointment();
    
    this.router.navigate(['/home']);
  }
}



