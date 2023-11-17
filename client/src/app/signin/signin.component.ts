import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  authService: AuthService = inject(AuthService);

  signinForm = new FormGroup({
    login: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required),
  })

  onSubmit() {
    const { login, pwd } = this.signinForm.value;
    console.log(login, pwd);
    this.authService.signin(login!, pwd!).subscribe({
      complete: () => { console.log("hurra") },
      next: data => { console.log("hurra") },
      error: data => { console.log("sad...") }
    });
  }
}
