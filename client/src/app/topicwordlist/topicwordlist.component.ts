import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  toLearn: boolean = true
  learnService: LearnService = inject(LearnService);

  constructor(private route: ActivatedRoute, private router: Router) {
    this.learnService.getWordList(this.route.snapshot.params['lang'], this.route.snapshot.params['id']).subscribe({
      next: lst => {
        this.wlist = lst
        this.toLearn = !(this.wlist.every(w => w.progress && w.progress > 0))
        console.log(this.toLearn)
        console.log(this.wlist)
      },
      error: err => this.router.navigate(['/'])
    });
  }

  enterLearnMode() {
    this.router.navigate(['/learn'])
  }
}
