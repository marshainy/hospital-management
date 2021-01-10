import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  myimage1: string ="assets/images/femaledoc.jpg";
  myimage2: string ="assets/images/maledoc.jpg";
  myimage3: string ="assets/images/olddoc.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
