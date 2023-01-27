import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../classes/login-request';
import { RegisterRequest } from '../classes/register-request';
import { User } from '../classes/user';
import { CollabService } from './collab.service';

@Injectable()
export class AuthService {

  serverUrl: string = "http://localhost:8080/api";
  isLoggedIn: boolean;
  private _token: string;


  constructor(private http: HttpClient, private collabService: CollabService) { }

  login(formValues: LoginRequest) {
    this.http.post<any>(this.serverUrl+"/auth/login", formValues)
    .subscribe(
      userData => {
        this._token = userData.token;
        this.isLoggedIn = true;
        this.collabService.setUser(new User(userData.id, userData.username, userData.email, userData.roles));
      }
    )
  }
  
  register(formValues: RegisterRequest) {
    return this.http.post(this.serverUrl+"/auth/register", formValues);
  }

  loginStatus() {
    return this.isLoggedIn;
  }

  getAuthToken() {
    return this._token;
  }
}
