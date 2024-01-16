import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Sentence } from '../sentence';
import { LearnService } from '../_services/learn.service';

@Component({
  selector: 'app-translatemode',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './translatemode.component.html',
  styleUrls: ['./translatemode.component.css']
})
export class TranslatemodeComponent {
  sentences: Array<Sentence> = [];
  learnService: LearnService = inject(LearnService);

  translateForm: FormGroup = new FormGroup({
    res: new FormControl('')
  })

  answersCorrect: Array<boolean> = [];

  total: number = 10
  current: number = 0
  correct: number = 0

  checkAnswer() {
    const ans = this.translateForm.value.res;
    console.log(this.sentences[this.current].original)
    this.answersCorrect[this.current] = ans == this.sentences[this.current].original;
    this.correct += this.answersCorrect[this.current] ? 1 : 0
  }

  next() {
    this.checkAnswer()
    this.current++
    this.translateForm.controls['res'].reset()
  }

  constructor() {
    this.learnService.getSentences(this.total).subscribe({
      next: sentences => {
        this.sentences = sentences
        this.answersCorrect = new Array(this.sentences.length).fill(false)
      }
    });
  }

  size(arr: Array<any>): number {
    return arr.filter(x => x).length
  }
}
