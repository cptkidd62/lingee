import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { SignupData } from '../signupdata';
import { Jwtoken } from '../jwtoken';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  errMsg: string = "";

  authService: AuthService = inject(AuthService);

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    login: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    pwd: new FormControl('', Validators.required),
    rpwd: new FormControl('', Validators.required),
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
    this.authService.signup(sdata).subscribe({
      next: data => { this.authService.setSession(data as Jwtoken); this.errMsg = "" },
      error: err => { console.log(err); this.errMsg = err.error.message }
    });
    console.log("done");
  }
}