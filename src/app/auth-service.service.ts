import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/Constants'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(public http:HttpClient) { }
  loggedIn(userLogin, passLogin) {


    const url = Constants.apiEndpoint+"/login" ;
    let account = {
      username: userLogin,
      password: passLogin
    }
    // return this.http.post(Constants.apiEndpoint+"/contacts/login", login)
    return this.http.post(url, account)
  }
}
