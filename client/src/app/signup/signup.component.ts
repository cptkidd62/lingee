import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { SignupData } from '../signupdata';
import { Jwtoken } from '../jwtoken';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    TranslateModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private router: Router, private translate: TranslateService) {
    if (this.authService.isSignedIn()) {
      this.router.navigate(['/'])
    }
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang') || 'en');
  };

  errMsg: string = "";
  hide = true

  authService: AuthService = inject(AuthService);

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    login: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    pwd: new FormControl('', Validators.required),
    rpwd: new FormControl('', Validators.required),
    lang: new FormControl('', Validators.required),
  }, [this.passwordEqualityValidator()])

  passwordEqualityValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const group = control as FormGroup;
      const pwd = group.controls['pwd'];
      const rpwd = group.controls['rpwd'];
      if (pwd.value != rpwd.value) {
        return { notEqual: true };
      } else {
        return null;
      }
    }
  }

  signupSubmit() {
    const sdata: SignupData = {
      displayname: this.signupForm.value.name!,
      login: this.signupForm.value.login!,
      email: this.signupForm.value.email!,
      password: this.signupForm.value.pwd!
    };
    console.log(sdata);
    let course = this.signupForm.value.lang!
    localStorage.setItem('lang', this.translate.currentLang)
    this.authService.signup(sdata, course, localStorage.getItem('lang')!).subscribe({
      complete: () => { this.router.navigate(['']) },
      next: data => {
        this.authService.setSession(data as Jwtoken);
        localStorage.setItem('currcourse', course)
        this.errMsg = ""
      },
      error: err => { console.log(err); this.errMsg = err.error.message }
    });
  }

  getUILang(): string | null {
    return localStorage.getItem('lang')
  }
}
