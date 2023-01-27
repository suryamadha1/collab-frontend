import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class CollabService {

  serverUrl: string = "http://localhost:8080/api";

  user: User;

  // _token: Subject<string> = new Subject();
  // token$ = this._token.asObservable();
  // options: HttpHeaders = new HttpHeaders();

  // setToken(newToken: string) {
  //   this._token.next(newToken);
  // }

  // setOptions() {
  //   this.token$.subscribe(
  //     tokenInfo => {
  //       this.options.append(
  //         'Authorization',`Bearer ${tokenInfo}`
  //       )
  //     }
  //   );
  // }

  constructor(private http: HttpClient) { }

  setUser(userData: User) {
    this.user = userData;
  }

  testUser() {
    // this.setOptions();
    return this.http.get<string>(this.serverUrl+"/test/user");
  }
}
