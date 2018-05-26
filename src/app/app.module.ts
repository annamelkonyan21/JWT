import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//-------------------- module ----------------------------

import { AppRoutingModule } from './app-routing.module';

//-------------------- component ----------------------------

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

//-------------------- imports ----------------------------

import { ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
