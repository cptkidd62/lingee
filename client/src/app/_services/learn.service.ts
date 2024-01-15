import { Injectable } from '@angular/core';
import { Sentence } from '../sentence';
import { TopicGrammar } from '../topicgrammar';
import { TopicLexical } from '../topiclexical';
import { Topicwordview } from '../topicwordview';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LearnService {

  constructor(
    private http: HttpClient) { }

  url = 'http://localhost:3000';

  getSentences(): Observable<Array<Sentence>> {
    return this.http.get<Array<Sentence>>(this.url + '/random');
  }

  getTopicsList(): Observable<{ grammar: Array<TopicGrammar>, lexical: Array<TopicLexical> }> {
    return this.http.get<{ grammar: Array<TopicGrammar>, lexical: Array<TopicLexical> }>(this.url + '/topics');
  }

  getWordList(lang: string, id: number): Observable<Array<Topicwordview>> {
    return this.http.get<Array<Topicwordview>>(this.url + '/topics/lexical/' + lang + '/' + id);
  }
}
