import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Topicwordview } from '../topicwordview';
import { Sentence } from '../sentence';
import { LearnService } from '../_services/learn.service';

@Component({
  selector: 'app-learnmode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learnmode.component.html',
  styleUrls: ['./learnmode.component.css']
})
export class LearnmodeComponent {
  wlist: Array<Topicwordview> = []
  sentences: Array<Sentence> = []
  learnService: LearnService = inject(LearnService);

  constructor(private router: Router) {
    this.wlist = router.getCurrentNavigation()!.extras.state!['data']
    console.log(this.wlist)
    for (let i = 0; i < this.wlist.length; i++) {
      this.learnService.getSentences(1, [this.wlist[i].speechpart + '=' + this.wlist[i].v_id]).subscribe({
        next: sentences => {
          this.sentences[i] = sentences[0]
          console.log(this.wlist[i].word, this.wlist[i].v_id)
          console.log(sentences)
        }
      });
    }
  }

  size(arr: Array<any>): number {
    return arr.filter(x => x).length
  }
}
