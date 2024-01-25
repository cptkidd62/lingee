import { Injectable } from '@angular/core';
import { UserAccount } from '../useraccount';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient) { }

  url = environment.API_PREFIX + '/user';

  getUser(): Observable<UserAccount> {
    return this.http.get<UserAccount>(this.url);
  }

  setPreferences() {
    return this.http.post(this.url + "/prefs", {
      last_course_code: localStorage.getItem('currcourse'),
      ui_code: localStorage.getItem('lang')
    }, { responseType: 'json', withCredentials: true })
  }

  changePwd(pwd: string) {
    return this.http.post(this.url + "/pwdchange", { pwd }, { responseType: 'json', withCredentials: true })
  }
}
