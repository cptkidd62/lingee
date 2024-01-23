import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Topicwordview } from '../topicwordview';
import { Sentence } from '../sentence';
import { Validationresponse } from '../validationresponse';
import { LearnService } from '../_services/learn.service';
import { TranslateService, TranslateModule } from "@ngx-translate/core";
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { environment } from 'src/environments/environment';

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
    MatIconModule,
    TranslateModule],
  templateUrl: './translatemode.component.html',
  styleUrls: ['./translatemode.component.scss']
})
export class TranslatemodeComponent {
  env = environment
  wlist: Array<Topicwordview> = []
  sentences: Array<Sentence> = [];
  learnService: LearnService = inject(LearnService);
  sentTokens: Array<string> = []
  currvalidation: Validationresponse | null = null

  translateForm: FormGroup = new FormGroup({
    res: new FormControl('')
  })

  answersCorrect: Array<boolean> = [];

  total: number = 0
  current: number = 0
  correct: number = 0
  enterText: boolean = true
  checked: boolean = false
  active: boolean = true

  handset = false

  ans = ''

  shuffle = (array: Array<any>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  checkAnswer() {
    this.active = false
    this.ans = ''
    if (this.enterText) {
      this.ans = this.translateForm.value.res;
    } else {
      this.ans = this.sentTokens.join(' ')
    }
    this.learnService.validateAnswer(this.ans, this.sentences[this.current].translation).subscribe({
      next: data => {
        this.currvalidation = data as Validationresponse
        this.answersCorrect[this.current] = this.currvalidation.correct
        this.checked = true
      }
    })
  }

  markascorrect() {
    this.answersCorrect[this.current] = true
  }

  next() {
    this.correct += this.answersCorrect[this.current] ? 1 : 0
    this.learnService.updateReviews(this.wlist[this.current].v_id, this.answersCorrect[this.current]).subscribe({})
    this.checked = false
    this.current++
    if (this.current < this.total) {
      this.makeTokens(this.sentences[this.current].original)
    }
    this.translateForm.controls['res'].reset()
    this.active = true
  }

  makeTokens(sent: string) {
    this.sentTokens = sent.split(' ')
    this.sentTokens = this.shuffle(this.sentTokens)
    this.enterText = this.wlist[this.current].progress >= 5
  }

  constructor(private responsive: BreakpointObserver, private router: Router, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang') || 'en');

    this.learnService.getReviews().subscribe({
      next: lst => {
        this.wlist = lst
        this.wlist = this.shuffle(this.wlist)
        this.total = this.wlist.length
        if (this.total == 0) {
          this.router.navigate(['/'])
        }
        this.answersCorrect = new Array(this.wlist.length).fill(false)

        for (let i = 0; i < this.wlist.length; i++) {
          this.learnService.getSentences(1, [this.wlist[i].speechpart.slice(0, -1) + '=' + this.wlist[i].v_id]
            .concat([`lang=${localStorage.getItem('currcourse')}`], [`uilang=${localStorage.getItem('lang')}`])).subscribe({
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

  ngOnInit() {
    this.responsive.observe([Breakpoints.Handset]).subscribe(res => {
      this.handset = res.matches
      if (environment.DEBUG) {
        console.log("small", this.handset)
      }
    })
  }

  size(arr: Array<any>): number {
    return arr.filter(x => x).length
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sentTokens, event.previousIndex, event.currentIndex);
  }
}
