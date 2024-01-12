import { Injectable } from '@angular/core';
import { Sentence } from '../sentence';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LearnService {

  constructor(
    private http: HttpClient) { }

  url = 'http://localhost:3000/random';

  getSentences(): Observable<Array<Sentence>> {
    return this.http.get<Array<Sentence>>(this.url);
  }
}
