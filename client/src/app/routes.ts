import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
      },
      {
        path: 'signin',
        component: SigninComponent,
        title: 'Sign in'
      },
      {
        path: 'myaccount',
        component: MyaccountComponent,
        title: 'My Account'
      }
];

export default routeConfig;