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
import { PatientmanagementComponent } from './patientmanagement/patientmanagement.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { DataTablesModule } from "angular-datatables";
import { CommonModule } from '@angular/common';
import { DoctormanagementComponent } from './doctormanagement/doctormanagement.component';
import { UpdatedoctorComponent } from './updatedoctor/updatedoctor.component';
import { DoctorConsoleComponent } from './doctor-console/doctor-console.component';
import { ApointmentManagementComponent } from './apointment-management/apointment-management.component';
import { UpdateApointmentComponent } from './update-apointment/update-apointment.component';
import { NewguardGuard } from './loginauth/newguard.guard';
import { StdguardGuard } from './loginauth/stdguard.guard';


const appRouters:Routes=[
  { path:'home',component:HomeComponent},
  { path:'patient',component:PloginComponent},
  { path:'doctor',component:DloginComponent},
  { path:'admin',component:AloginComponent},
  { path:'',redirectTo:"patients",pathMatch:"full"},
  { path:'register',component:RegisterComponent},
  { path:'appointment',component:AppointmentComponent},
  { path:'booking' ,component:BookingComponent},
  { path:'doctorreg',component:DocregistrationComponent},
  { path:'adminconsole',component:AdminconsoleComponent 
},
  { path:'update/:id',component:UpdatepatientComponent},
  { path:'patientmanagement',component:PatientmanagementComponent},
  { path:'doctormanagement',component:DoctormanagementComponent},
  { path:'dupdate/:doctorID',component:UpdatedoctorComponent},
  { path:'docConsole',component:DoctorConsoleComponent, canActivate: [StdguardGuard]},
  { path:'apoiManagement',component:ApointmentManagementComponent},
  { path:'apoint/:appointmentID',component:UpdateApointmentComponent}
  
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
    AdminconsoleComponent,
    PatientmanagementComponent,
    UpdatepatientComponent,
    DoctormanagementComponent,
    UpdatedoctorComponent,
    DoctorConsoleComponent,
    ApointmentManagementComponent,
    UpdateApointmentComponent,
    
    
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
    HttpClientModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    DataTablesModule,
    CommonModule,
  
    NgxMaterialTimepickerModule,
    
   RouterModule.forRoot( appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
