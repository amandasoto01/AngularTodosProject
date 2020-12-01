import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';


export const TOKEN = 'authenticatedUser'
export const AUTHENTICATED_USER = 'token'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password){
    //console.log('before '+this.isUserLoggedIn());
    if(username === "in28minutes" && password === 'dummy'){
        sessionStorage.setItem('authenticatedUser',username);
        //console.log('after ' + this.isUserLoggedIn());
        return true;
    }else{
      return false;
    }
  }

  executeJWTAuthenticationService(username, password){
    return this.http.post<any>(`${API_URL}/authenticate`, {
      //object with list of variables js create a proper json structure
      username,
      password
    })
    .pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
          return data;
        }
      )
    );
    //console.log("Execute Hello World Bean Service");
  }

  executeBasicAuthenticationService(username, password){

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':'+password);
    //console.log(basicAuthHeaderString);

    let headers = new HttpHeaders ({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers})
    .pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(TOKEN,basicAuthHeaderString);
          return data;
        }
      )
    );
    //console.log("Execute Hello World Bean Service");
  }


  getAuthenticatedUser(){
  return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser){
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn(){
    let user =sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean{
  constructor(public message: string){}
}
