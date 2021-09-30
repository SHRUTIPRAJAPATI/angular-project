import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  userName="Shruti";
  password="Shruti123"

  constructor(
    private http: HttpClient
  ) {
   }

   login(item: any){
     if(item.userName === this.userName && item.password === this.password)
     {
      alert("Login Successfull");
     }else{
      alert("error");
    }
     
   }
}
