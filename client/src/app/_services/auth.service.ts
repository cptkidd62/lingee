import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { SignupData } from '../signupdata';
import { Jwtoken } from '../jwtoken';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  url = environment.API_PREFIX + '/auth';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  signin(login: string, password: string) {
    return this.http.post(this.url + '/signin', { login, password }, { responseType: 'json', withCredentials: true });
  }

  signup(sdata: SignupData, l1: string, l2: string) {
    return this.http.post(this.url + '/signup', { sdata, l1, l2 }, { responseType: 'json', withCredentials: true })
  }

  isSignedIn() {
    let res = localStorage.getItem('idToken');
    return res != null;
  }

  setSession(authResult: Jwtoken) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('idToken', authResult.idToken);
    localStorage.setItem('expiresAt', JSON.stringify(expiresAt.valueOf()));
  }

  signout() {
    localStorage.removeItem('idToken');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('currcourse');
    this.router.navigate(['/'])
  }
}
