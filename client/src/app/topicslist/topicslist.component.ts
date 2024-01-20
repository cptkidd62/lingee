import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TopicGrammar } from '../topicgrammar';
import { TopicLexical } from '../topiclexical';
import { LearnService } from '../_services/learn.service';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-topicslist',
  standalone: true,
  imports: [CommonModule,
    MatProgressBarModule,
    TranslateModule],
  templateUrl: './topicslist.component.html',
  styleUrls: ['./topicslist.component.scss']
})
export class TopicslistComponent {
  topics: { grammar: Array<TopicGrammar>, lexical: Array<TopicLexical> } = { grammar: [], lexical: [] }
  learnService: LearnService = inject(LearnService);
  lang: string = ''

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang') || 'en');

    this.learnService.getTopicsList().subscribe({
      next: topics => { this.topics.grammar = topics.grammar; this.topics.lexical = topics.lexical }
    });
    this.lang = localStorage.getItem('currcourse') || 'en'
  }
}
