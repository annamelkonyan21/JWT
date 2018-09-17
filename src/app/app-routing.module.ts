import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BeforeHomeComponent} from './pages/before-home/before-home.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: BeforeHomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
