import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apointment } from './apointment';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class ApointmentService {

  
  private baseUrl="http://localhost:3726";

  constructor( private http: HttpClient) { }


  getApointment(): Observable<any[]>{
     
    return  this.http.get<any[]>(this.baseUrl);
  }

   
  getApointmentById(appointmentID:number):Observable<any>{

    return this.http.get(this.baseUrl+'/'+appointmentID);
  }


  createApointment(apointment:Apointment):Observable<any[]>{
    return this.http.post<any[]>(this.baseUrl,apointment);
  }


updateApointment(appointmentID:number,apointment:Apointment):Observable<any[]>{

  return this.http.put<any[]>(this.baseUrl+'/'+apointment.appointmentID,apointment);
}

deleteApointment(appointmentID:number):Observable<any[]>{

  return this.http.delete<any[]>(this.baseUrl+'/appointments/'+appointmentID);
}
}
