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

  translateForm: FormGroup = new FormGroup({})

  answersCorrect: Array<boolean> = [];

  checkAnwers() {
    console.log(this.sentences.length)
    const formVals = this.translateForm.value;
    let formArr = Object.values(formVals);
    for (let i = 0; i < this.sentences.length; i++) {
      console.log(formArr[i])
      console.log(this.sentences[i].original)
      this.answersCorrect[i] = formArr[i] == this.sentences[i].original;
    }
  }

  constructor() {
    this.learnService.getSentences(10).subscribe({
      next: sentences => {
        this.sentences = sentences
        this.answersCorrect = new Array(this.sentences.length).fill(false)
        var ctrls: { [key: string]: FormControl } = {}
        for (let i = 0; i < this.sentences.length; i++) {
          ctrls['res' + i] = new FormControl('')
        }
        this.translateForm = new FormGroup(ctrls)
      }
    });
  }
}
