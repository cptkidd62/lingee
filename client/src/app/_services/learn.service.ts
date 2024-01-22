import { Injectable } from '@angular/core';
import { Sentence } from '../sentence';
import { TopicGrammar } from '../topicgrammar';
import { TopicLexical } from '../topiclexical';
import { Topicwordview } from '../topicwordview';
import { Validationresponse } from '../validationresponse';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LearnService {

  constructor(
    private http: HttpClient) { }

  url = 'https://lingee.onrender.com';

  getSentences(n: number, prms?: string[]): Observable<Array<Sentence>> {
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
    return this.http.post(this.url + '/reviews/add', { wlist: wlist, lang: localStorage.getItem('currcourse') }, { responseType: 'json', withCredentials: true })
  }

  getReviewsCount(): Observable<{ next_review: string, count: number }[]> {
    return this.http.get<{ next_review: string, count: number }[]>(this.url + `/reviews/${localStorage.getItem('currcourse')}/count`);
  }

  getAllReviewsCount(): Observable<{ l_code: string, count: number }[]> {
    return this.http.get<{ l_code: string, count: number }[]>(this.url + '/reviews/count/all');
  }

  getReviews(): Observable<Array<Topicwordview>> {
    return this.http.get<Array<Topicwordview>>(this.url + '/reviews/' + localStorage.getItem('currcourse'));
  }

  updateReviews(id: number, correct: boolean) {
    return this.http.post(this.url + '/reviews/update', { v_id: id, lang: localStorage.getItem('currcourse'), corr: correct }, { responseType: 'json', withCredentials: true })
  }

  validateAnswer(s1: string, s2: string) {
    return this.http.post(this.url + '/validate', { s1, s2, l1: localStorage.getItem('currcourse'), l2: localStorage.getItem('lang') });
  }
}
