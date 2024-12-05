import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin,IToken } from '../models/login';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {




baseUrlLogin= environment.apiEndpoint + 'auth/login'
  constructor(private http:HttpClient) {
}
userLogin(loginCredentails:ILogin):Observable<IToken>{
const data = this.http.post<IToken>(this.baseUrlLogin,loginCredentails)
console.log(data)
return data;
}
isAuthenticated(): boolean {
  const setToken = sessionStorage.getItem('token');
  if (setToken) {
    return true;
  }
  return false;
}

}
