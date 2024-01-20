import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../_services/auth.service';
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

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang') || 'en');
  };

  changeLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('lang', language)
  }
}
