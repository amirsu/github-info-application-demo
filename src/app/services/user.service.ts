import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClientModule,HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
   
// Url of github to get users and repository
Base_url= "https://api.github.com/";
  constructor(public HttpClient:HttpClient,
    public HttpClientModule:HttpClientModule) { }

    // getting user detais here
  getsubmitdetails(): Observable<any> {
    
    return this.HttpClient.get(this.Base_url + "users");
  }
  
  // getting repository details here
  getrepositorydetails(user): Observable<any> {
    
    return this.HttpClient.get(this.Base_url + "users/" + user + '/repos');
  }
}
