import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Topicwordview } from '../topicwordview';
import { Sentence } from '../sentence';
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
  sentences: Array<Sentence> = []
  toLearn: boolean = true
  learnService: LearnService = inject(LearnService);

  constructor(private route: ActivatedRoute, private router: Router) {
    this.loadContents(true)
  }

  loadContents(all: boolean) {
    this.learnService.getWordList(this.route.snapshot.params['lang'], this.route.snapshot.params['id']).subscribe({
      next: lst => {
        this.wlist = lst
        this.toLearn = !(this.wlist.every(w => w.progress && w.progress > 0))
        console.log(this.toLearn)
        console.log(this.wlist)

        if (all) {
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
      complete: () => { this.loadContents(false); this.wlist[0].word += 'bbbbb' },
      next: data => { this.loadContents(false); this.wlist[0].word += 'aaaaa' },
      error: err => { }
    })
  }

  size(arr: Array<any>): number {
    return arr.filter(x => x).length
  }
}
