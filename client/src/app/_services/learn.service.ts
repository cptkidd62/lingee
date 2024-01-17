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

  getSentences(n: number, prms?: [string]): Observable<Array<Sentence>> {
    let extra: string = ''
    if (prms) {
      extra = '&' + prms.join('&')
    }
    return this.http.get<Array<Sentence>>(this.url + '/random?count=' + n + extra);
  }

  getTopicsList(): Observable<{ grammar: Array<TopicGrammar>, lexical: Array<TopicLexical> }> {
    return this.http.get<{ grammar: Array<TopicGrammar>, lexical: Array<TopicLexical> }>(this.url + '/topics');
  }

  getWordList(lang: string, id: number): Observable<Array<Topicwordview>> {
    return this.http.get<Array<Topicwordview>>(this.url + '/topics/lexical/' + lang + '/' + id);
  }

  addToReviews(wlist: Array<number>) {
    return this.http.post(this.url + '/reviews/add', { wlist: wlist, lang: 'tr' }, { responseType: 'json', withCredentials: true })
  }

  getReviewsCount(): Observable<number> {
    return this.http.get<number>(this.url + '/reviews/tr/count');
  }

  getReviews(lang: string): Observable<Array<Topicwordview>> {
    return this.http.get<Array<Topicwordview>>(this.url + '/reviews/' + lang);
  }
}
