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

  translateForm = new FormGroup({
    res0: new FormControl(''),
    res1: new FormControl(''),
    res2: new FormControl(''),
    res3: new FormControl(''),
    res4: new FormControl(''),
    res5: new FormControl(''),
  })

  answersCorrect: Array<boolean> = new Array(6).fill(false);

  checkAnwers() {
    const formVals = this.translateForm.value;
    let formArr = Object.values(formVals);
    for (let i = 0; i < 6; i++) {
      console.log(formArr[i])
      console.log(this.sentences[i].original)
      this.answersCorrect[i] = formArr[i] == this.sentences[i].original;
    }
  }

  constructor() {
    this.learnService.getSentences().subscribe({
      next: sentences => this.sentences = sentences
    });
  }
}
