import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/auth';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  signin(login: string, password: string): Observable<any> {
    return this.http.post(this.url + '/signin', { login, password }, { responseType: "text", withCredentials: true });
  }

  signout(): Observable<any> {
    return this.http.get<any>(this.url + "/signout", { withCredentials: true });
  }
}
