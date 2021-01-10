import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import {  MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PloginComponent } from './plogin/plogin.component';
import { MatFormFieldModule} from '@angular/material/form-field';


import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookingComponent } from './booking/booking.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DloginComponent } from './dlogin/dlogin.component';
import { AloginComponent } from './alogin/alogin.component';
import { DocregistrationComponent } from './docregistration/docregistration.component';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';

const appRouters:Routes=[
  { path:'home',component:HomeComponent},
  { path:'patient',component:PloginComponent},
  { path:'doctor',component:DloginComponent},
  { path:'admin',component:AloginComponent},
  { path:'register',component:RegisterComponent},
  { path:'appointment',component:AppointmentComponent},
  { path:'booking' ,component:BookingComponent},
  { path:'doctorreg',component:DocregistrationComponent},
  { path:'adminconsole',component:AdminconsoleComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    PloginComponent,
    AppointmentComponent,
    BookingComponent,
    DloginComponent,
    AloginComponent,
    DocregistrationComponent,
    AdminconsoleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,
   RouterModule.forRoot( appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
