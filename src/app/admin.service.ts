import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private baseUrl="http://localhost:3726";

  constructor( private http: HttpClient) { }


  getAdmin(): Observable<any[]>{
     
    return  this.http.get<any[]>(this.baseUrl+"/admin");
  }

   
  getAdminById( adminID:number):Observable<any>{

    return this.http.get(this.baseUrl+'/'+ adminID);
  }
  getAdminByEmail( email:string):Observable<any>{

    return this.http.get<any>(this.baseUrl+'/logindoctor/'+ email);
  }






}
