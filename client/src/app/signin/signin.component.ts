import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Jwtoken } from '../jwtoken';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  errMsg: string = "";

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
