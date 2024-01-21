import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { TranslatemodeComponent } from './translatemode/translatemode.component';
import { TopicwordlistComponent } from './topicwordlist/topicwordlist.component';

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
    path: 'signup',
    component: SignupComponent,
    title: 'Sign up'
  },
  {
    path: 'myaccount',
    component: MyaccountComponent,
    title: 'My Account'
  },
  {
    path: 'review',
    component: TranslatemodeComponent,
    title: 'Review Mode'
  },
  {
    path: 'topics/lexical/:lang/:id',
    component: TopicwordlistComponent,
    title: 'Topics Word List'
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
