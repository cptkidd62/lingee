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

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private router: Router) { };

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
      next: data => { this.authService.setSession(data as Jwtoken); this.errMsg = "" },
      error: err => { console.log(err); this.errMsg = err.error.message }
    });
    console.log("done");
  }

  signoutSubmit() {
    console.log("signout attempt");
    this.authService.signout();
  }
}
