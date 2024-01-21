import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { LearnService } from '../_services/learn.service';
import { TopicGrammar } from '../topicgrammar';
import { TopicLexical } from '../topiclexical';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatListModule,
    TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  learnService: LearnService = inject(LearnService)
  revs: { next_review: string, count: number }[] = []
  srevs: number = 0
  topics: { grammar: Array<TopicGrammar>, lexical: Array<TopicLexical> } = { grammar: [], lexical: [] }
  lang: string = ''

  constructor(private translate: TranslateService) {
    this.learnService.getReviewsCount().subscribe({
      next: data => this.revs = data
    })
    this.learnService.getAllReviewsCount().subscribe({
      next: data => {
        this.srevs = data.find(e => e.l_code == localStorage.getItem('currcourse'))?.count || 0
      }
    })
    this.learnService.getTopicsList().subscribe({
      next: topics => { this.topics.grammar = topics.grammar; this.topics.lexical = topics.lexical }
    });
    this.lang = localStorage.getItem('currcourse') || 'en'
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang') || 'en');
  }
}
