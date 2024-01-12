import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sentence } from '../sentence';
import { LearnService } from '../_services/learn.service';

@Component({
  selector: 'app-translatemode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './translatemode.component.html',
  styleUrls: ['./translatemode.component.css']
})
export class TranslatemodeComponent {
  sentences: Array<Sentence> = [];
  learnService: LearnService = inject(LearnService);

  constructor() {
    this.learnService.getSentences().subscribe({
      next: sentences => this.sentences = sentences
    });
  }
}
