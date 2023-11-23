import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccount } from '../useraccount';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent {
  myaccount: UserAccount = { displayname: "", login: "" };
  userService: UserService = inject(UserService);

  constructor(private router: Router) {
    this.userService.getUser().subscribe({
      next: account => this.myaccount = account,
      error: err => this.router.navigate(['/'])
    });
  }
}
