import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myimage1: string ="assets/images/patient.png";
  myimage2: string ="assets/images/doctor.jpg";
  myimage3: string ="assets/images/admin.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
