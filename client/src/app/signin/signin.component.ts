import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Jwtoken } from '../jwtoken';
import { Langdata } from '../langdata';
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
        localStorage.setItem('courses', JSON.stringify((data as { courses: Langdata[] }).courses))
        localStorage.setItem('currcourse', (data as { courses: Langdata[] }).courses[0].l_code)
        if (localStorage.getItem('currcourse') == localStorage.getItem('lang')) {
          if (localStorage.getItem('lang') == 'en') {
            localStorage.setItem('lang', 'pl')
          } else {
            localStorage.setItem('lang', 'en')
          }
        }
      },
      error: err => { console.log(err); this.errMsg = err.error.message }
    });
    console.log("done");
  }

  signoutSubmit() {
    console.log("signout attempt");
    this.authService.signout();
  }
}
