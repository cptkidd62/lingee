import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Topicwordview } from '../topicwordview';
import { Sentence } from '../sentence';
import { LearnService } from '../_services/learn.service';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-topicwordlist',
  standalone: true,
  imports: [CommonModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule],
  templateUrl: './topicwordlist.component.html',
  styleUrls: ['./topicwordlist.component.scss']
})
export class TopicwordlistComponent {
  wlist: Array<Topicwordview> = []
  sentences: Array<Sentence> = []
  toLearn: boolean = true
  learnService: LearnService = inject(LearnService);

  constructor(private route: ActivatedRoute, private router: Router, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang') || 'en');
    this.loadContents(true)
  }

  loadContents(all: boolean) {
    this.learnService.getWordList(this.route.snapshot.params['lang'], this.route.snapshot.params['id']).subscribe({
      next: lst => {
        this.wlist = lst
        this.toLearn = !(this.wlist.every(w => w.progress && w.progress > 0))

        if (all) {
          for (let i = 0; i < this.wlist.length; i++) {
            this.learnService.getSentences(1, [this.wlist[i].speechpart + '=' + this.wlist[i].v_id,
            'lang=' + this.route.snapshot.params['lang'], 'uilang=' + localStorage.getItem('lang')]).subscribe({
              next: sentences => {
                this.sentences[i] = sentences[0]
              }
            });
          }
        }
      },
      error: err => this.router.navigate(['/'])
    });
  }

  addWordsToReviews() {
    let nlist: Array<number> = []
    this.wlist.forEach(w => {
      nlist.push(w.v_id)
    })
    this.learnService.addToReviews(nlist).subscribe({
      complete: () => { this.loadContents(false); },
      next: data => { this.loadContents(false); },
      error: err => { }
    })
  }

  size(arr: Array<any>): number {
    return arr.filter(x => x).length
  }
}
