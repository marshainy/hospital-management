import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminconsole',
  templateUrl: './adminconsole.component.html',
  styleUrls: ['./adminconsole.component.css']
})
export class AdminconsoleComponent implements OnInit {
  myimage1: string ="assets/images/patient id.jpg";
  myimage2: string ="assets/images/apointment.jpg";
  myimage3: string ="assets/images/doctorid.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
