import { Injectable } from '@angular/core';
import { Sentence } from '../sentence';
import { TopicGrammar } from '../topicgrammar';
import { TopicLexical } from '../topiclexical';
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

  getTopicsList(): Observable<{ grammar: Array<TopicGrammar>, lexical: Array<TopicLexical> }> {
    return this.http.get<{ grammar: Array<TopicGrammar>, lexical: Array<TopicLexical> }>(this.url + '/topics');
  }
}
