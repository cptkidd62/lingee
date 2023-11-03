import { Injectable } from '@angular/core';
import { UserAccount } from './useraccount';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient) { }

  myaccount: UserAccount = {
    displayname: "Lindy B",
    login: "lindy222"
  }

  url = 'http://localhost:3000/user';

  getUser(): Observable<UserAccount> {
    return this.http.get<UserAccount>(this.url);
  }
}
