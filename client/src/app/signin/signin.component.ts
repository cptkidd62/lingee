import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Jwtoken } from '../jwtoken';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    TranslateModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private router: Router, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang') || 'en');
  };

  errMsg: string = "";
  hide = true

  authService: AuthService = inject(AuthService);

  signinForm = new FormGroup({
    login: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required),
  })

  signoutForm = new FormGroup({});

  signinSubmit() {
    const { login, pwd } = this.signinForm.value;
    console.log(login, pwd);
    this.authService.signin(login!, pwd!).subscribe({
      complete: () => { this.router.navigate(['']) },
      next: data => {
        this.authService.setSession((data as { token: Jwtoken }).token);
        this.errMsg = ""
        let prefs: { last_course_code: string, ui_code: string } =
          (data as { preferences: { last_course_code: string, ui_code: string } }).preferences
        localStorage.setItem('currcourse', prefs.last_course_code)
        localStorage.setItem('lang', prefs.ui_code)
      },
      error: err => { console.log(err); this.errMsg = err.error.message }
    });
  }

  signoutSubmit() {
    this.authService.signout();
  }
}
