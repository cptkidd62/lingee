import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { LearnService } from '../_services/learn.service';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    TranslateModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  authService: AuthService = inject(AuthService);
  userService: UserService = inject(UserService)
  learnService: LearnService = inject(LearnService)

  revs: { l_code: string, count: number }[] = []

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang') || 'en');
    this.refresh()
  };

  changeLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('lang', language)
    this.userService.setPreferences().subscribe({})
  }

  changeCourse(language: string): void {
    localStorage.setItem('currcourse', language)
    this.userService.setPreferences().subscribe({})
  }

  getUILang(): string | null {
    return localStorage.getItem('lang')
  }

  getCourseLang(): string | null {
    return localStorage.getItem('currcourse')
  }

  getRevs(lang: string): number {
    let v = this.revs.find(e => e.l_code == lang)
    return v ? v.count : 0
  }

  refresh() {
    if (this.authService.isSignedIn()) {
      this.learnService.getAllReviewsCount().subscribe({
        next: data => {
          this.revs = data
        }
      })
    }
  }
}
