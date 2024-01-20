import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccount } from '../useraccount';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-myaccount',
  standalone: true,
  imports: [CommonModule,
    TranslateModule],
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent {
  myaccount: UserAccount = { id: -1, displayname: "", login: "" };
  userService: UserService = inject(UserService);

  constructor(private router: Router, private translate: TranslateService) {
    this.userService.getUser().subscribe({
      next: account => this.myaccount = account,
      error: err => this.router.navigate(['/'])
    });
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang') || 'en');
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('lang', language)
  }
}
