import { Injectable } from '@angular/core';
import { UserAccount } from '../useraccount';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient) { }

  url = 'https://lingee.onrender.com/user';

  getUser(): Observable<UserAccount> {
    return this.http.get<UserAccount>(this.url);
  }

  setPreferences() {
    return this.http.post(this.url + "/prefs", {
      last_course_code: localStorage.getItem('currcourse'),
      ui_code: localStorage.getItem('lang')
    }, { responseType: 'json', withCredentials: true })
  }
}
