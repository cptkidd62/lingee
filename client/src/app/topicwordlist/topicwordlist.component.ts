import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Topicwordview } from '../topicwordview';
import { LearnService } from '../_services/learn.service';

@Component({
  selector: 'app-topicwordlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topicwordlist.component.html',
  styleUrls: ['./topicwordlist.component.css']
})
export class TopicwordlistComponent {
  wlist: Array<Topicwordview> = []
  learnService: LearnService = inject(LearnService);

  constructor(private route: ActivatedRoute) {
    this.learnService.getWordList(this.route.snapshot.params['lang'], this.route.snapshot.params['id']).subscribe({
      next: lst => {
        this.wlist = lst
        console.log(this.wlist)
      }
    });
  }
}
