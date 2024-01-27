import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccount } from '../useraccount';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from "@ngx-translate/core";
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-myaccount',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    TranslateModule],
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent {
  myaccount: UserAccount = { id: -1, displayname: "", login: "" };
  userService: UserService = inject(UserService);
  authService: AuthService = inject(AuthService);
  hide = true

  handset = false

  pwdChangeForm = new FormGroup({
    pwd: new FormControl('', Validators.required),
  })

  constructor(private responsive: BreakpointObserver, private router: Router, private translate: TranslateService) {
    if (!this.authService.isSignedIn()) {
      this.router.navigate(['/'])
    }
    this.userService.getUser().subscribe({
      next: account => this.myaccount = account,
      error: err => this.router.navigate(['/'])
    });
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang') || 'en');
  }

  ngOnInit() {
    this.responsive.observe([Breakpoints.Handset]).subscribe(res => {
      this.handset = res.matches
    })
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
