import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Topicwordview } from '../topicwordview';
import { Sentence } from '../sentence';
import { LearnService } from '../_services/learn.service';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-translatemode',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    CdkDropList,
    CdkDrag,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    TranslateModule],
  templateUrl: './translatemode.component.html',
  styleUrls: ['./translatemode.component.scss']
})
export class TranslatemodeComponent {
  wlist: Array<Topicwordview> = []
  sentences: Array<Sentence> = [];
  learnService: LearnService = inject(LearnService);
  sentTokens: Array<string> = []

  translateForm: FormGroup = new FormGroup({
    res: new FormControl('')
  })

  answersCorrect: Array<boolean> = [];

  total: number = 0
  current: number = 0
  correct: number = 0
  enterText: boolean = true

  shuffle = (array: Array<any>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  checkAnswer(ans: string) {
    this.answersCorrect[this.current] = ans == this.sentences[this.current].original;
    this.correct += this.answersCorrect[this.current] ? 1 : 0
    this.learnService.updateReviews(this.wlist[this.current].v_id, this.answersCorrect[this.current]).subscribe({})
  }

  next() {
    let ans
    if (this.enterText) {
      ans = this.translateForm.value.res;
    } else {
      ans = this.sentTokens.join(' ')
    }
    this.checkAnswer(ans)
    this.current++
    if (this.current < this.total) {
      this.makeTokens(this.sentences[this.current].original)
    }
    this.translateForm.controls['res'].reset()
  }

  makeTokens(sent: string) {
    this.sentTokens = sent.split(' ')
    this.sentTokens = this.shuffle(this.sentTokens)
    this.enterText = this.wlist[this.current].progress >= 5
  }

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang') || 'en');

    this.learnService.getReviews().subscribe({
      next: lst => {
        this.wlist = lst
        this.wlist = this.shuffle(this.wlist)
        this.total = this.wlist.length
        this.answersCorrect = new Array(this.wlist.length).fill(false)

        for (let i = 0; i < this.wlist.length; i++) {
          this.learnService.getSentences(1, [this.wlist[i].speechpart.slice(0, -1) + '=' + this.wlist[i].v_id]
            .concat([`lang=${localStorage.getItem('currcourse')}`])).subscribe({
              next: sentences => {
                this.sentences[i] = sentences[0]
                console.log(this.wlist[i].word, this.wlist[i].v_id)
                console.log(this.sentences)
                console.log(this.size(this.sentences))
                if (i == 0) {
                  this.makeTokens(this.sentences[0].original)
                }
              }
            });
        }
      }
    });
  }

  size(arr: Array<any>): number {
    return arr.filter(x => x).length
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sentTokens, event.previousIndex, event.currentIndex);
  }
}
