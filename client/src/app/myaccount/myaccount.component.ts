import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccount } from '../useraccount';
import { UserService } from '../user.service';

@Component({
  selector: 'app-myaccount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent {
  myaccount: UserAccount = {displayname:"", login:""};
  userService: UserService = inject(UserService);

  constructor() {
    this.userService.getUser().subscribe(account => this.myaccount = account);
  }
}
