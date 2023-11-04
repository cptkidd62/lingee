import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

const routes: Routes = [
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
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
