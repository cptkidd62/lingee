import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Sentence } from '../sentence';
import { LearnService } from '../_services/learn.service';

@Component({
  selector: 'app-translatemode',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CdkDropList, CdkDrag],
  templateUrl: './translatemode.component.html',
  styleUrls: ['./translatemode.component.scss']
})
export class TranslatemodeComponent {
  sentences: Array<Sentence> = [];
  learnService: LearnService = inject(LearnService);
  sentTokens: Array<string> = []

  translateForm: FormGroup = new FormGroup({
    res: new FormControl('')
  })

  answersCorrect: Array<boolean> = [];

  total: number = 10
  current: number = 0
  correct: number = 0
  enterText: boolean = false

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
  }

  constructor() {
    this.learnService.getSentences(this.total).subscribe({
      next: sentences => {
        this.sentences = sentences
        this.answersCorrect = new Array(this.sentences.length).fill(false)
        this.makeTokens(this.sentences[0].original)
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
