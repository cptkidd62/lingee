import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicGrammar } from '../topicgrammar';
import { TopicLexical } from '../topiclexical';
import { LearnService } from '../_services/learn.service';

@Component({
  selector: 'app-topicslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topicslist.component.html',
  styleUrls: ['./topicslist.component.scss']
})
export class TopicslistComponent {
  topics: { grammar: Array<TopicGrammar>, lexical: Array<TopicLexical> } = { grammar: [], lexical: [] }
  learnService: LearnService = inject(LearnService);

  constructor() {
    this.learnService.getTopicsList().subscribe({
      next: topics => { this.topics.grammar = topics.grammar; this.topics.lexical = topics.lexical }
    });
    console.log(this.topics)
  }
}
