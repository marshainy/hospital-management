import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { ApiResponse } from "src/app/api.response";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl="http://localhost:3726";

  constructor( private http: HttpClient) { }


  getPatient(): Observable<any[]>{
     
    return  this.http.get<any[]>(this.baseUrl);
  }

   
  getPatientById(id:number):Observable<any>{

    return this.http.get(this.baseUrl+'/'+id);
  }
  getPatientByEmail( email:string):Observable<any>{

    return this.http.get<any>(this.baseUrl+'/loginpatient/'+ email);
  }


  createPatient(patient:Patient):Observable<any[]>{
    return this.http.post<any[]>(this.baseUrl,patient);
  }


updatePatient(id:number,patient:Patient):Observable<any[]>{

  return this.http.put<any[]>(this.baseUrl+'/'+patient.id,patient);
}

deletePatient(id:number):Observable<any[]>{

  return this.http.delete<any[]>(this.baseUrl+'/'+id);
}


}
