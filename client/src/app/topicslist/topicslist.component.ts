import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topic } from '../topic';
import { LearnService } from '../_services/learn.service';

@Component({
  selector: 'app-topicslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topicslist.component.html',
  styleUrls: ['./topicslist.component.css']
})
export class TopicslistComponent {
  topics: Array<Topic> = []
  learnService: LearnService = inject(LearnService);

  constructor() {
    this.learnService.getTopicsList().subscribe({
      next: topics => this.topics = topics
    });
  }
}
