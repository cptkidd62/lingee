import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LearnService } from '../_services/learn.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  learnService: LearnService = inject(LearnService)
  revCount: number = 0

  constructor() {
    this.learnService.getReviewsCount().subscribe({
      next: data => this.revCount = data
    })
  }
}
