import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private route:Router) { }

  isLoggedIn(): boolean {
    let status = false;      
   if (sessionStorage.getItem('userrole') == "admin") {      
      status = true;      
   }    
   else {      
      status = false;      
      }      
   return status;   
  }
  isLogged(): boolean {
    let status = false;      
   if (sessionStorage.getItem('userrole') == "doctor") {      
      status = true;      
   }    
   if (sessionStorage.getItem('userrole') == "patient") {      
      status = true;      
   }    
         
   return status;   
  }

  logout() {    
    sessionStorage.setItem('userrole','null');    
    sessionStorage.removeItem('user');  
    this.route.navigate(['/login']);
    }  

}
