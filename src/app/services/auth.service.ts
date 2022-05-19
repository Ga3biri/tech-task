import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(data:any){
    if(data.name == 'admin',data.password == '1234'){
      localStorage.setItem('permission','true')
      return true
    }
    localStorage.setItem('permission','false')
    return false
  }
}
