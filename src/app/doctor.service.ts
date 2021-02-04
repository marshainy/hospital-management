import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl="http://localhost:3726";

  constructor( private http: HttpClient) { }


  getDoctor(): Observable<any[]>{
     
    return  this.http.get<any[]>(this.baseUrl+"/doctors");
  }

   
  getDoctorById( doctorID:number):Observable<any>{

    return this.http.get(this.baseUrl+'/'+ doctorID);
  }
  getDoctorByEmail( email:string):Observable<any>{

    return this.http.get<any>(this.baseUrl+'/logindoctor/'+ email);
  }



  createDoctor(doctor:Doctor):Observable<any[]>{
    return this.http.post<any[]>(this.baseUrl,doctor);
  }


updateDoctor( doctorID:number,doctor:Doctor):Observable<any[]>{

  return this.http.put<any[]>(this.baseUrl+'/'+doctor. doctorID,doctor);
}

deleteDoctor( doctorID:number):Observable<any[]>{

  return this.http.delete<any[]>(this.baseUrl+'/'+ doctorID);
}


}