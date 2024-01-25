import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccount } from '../useraccount';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from "@ngx-translate/core";
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-myaccount',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule],
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent {
  myaccount: UserAccount = { id: -1, displayname: "", login: "" };
  userService: UserService = inject(UserService);
  hide = true

  pwdChangeForm = new FormGroup({
    pwd: new FormControl('', Validators.required),
  })

  constructor(private router: Router, private translate: TranslateService) {
    this.userService.getUser().subscribe({
      next: account => this.myaccount = account,
      error: err => this.router.navigate(['/'])
    });
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang') || 'en');
  }

  changePwd() {
    let pwd = this.pwdChangeForm.value.pwd!
    if (!pwd) {
      return
    } else {
      this.userService.changePwd(pwd).subscribe({})
      this.pwdChangeForm.controls.pwd.reset()
    }
  }
}
