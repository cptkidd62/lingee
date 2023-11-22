import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { Jwtoken } from '../jwtoken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/auth';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  signin(login: string, password: string) {
    return this.http.post(this.url + '/signin', { login, password }, { responseType: 'json', withCredentials: true });
  }

  setSession(authResult: Jwtoken) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('idToken', authResult.idToken);
    localStorage.setItem('expiresAt', JSON.stringify(expiresAt.valueOf()));
  }

  signout() {
    localStorage.removeItem('idToken');
    localStorage.removeItem('expiresAt');
  }
}
