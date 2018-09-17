import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public nav:string =  'login';
  public active:string = 'login';
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  constructor(private router: Router) {
    this.createLogin();
    this.createRegisterForm();
  }

  ngOnInit() {
  }
  createLogin() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  createRegisterForm() {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  setValue(nav, active) {
    this.nav = nav;
    this.active = active;
    console.log(nav);
  }

  login() {
    console.log(this.loginForm);
    if (this.loginForm.value['email'] === 'admin@gmail.com' && this.loginForm.value['password'] === 'admin') {
      localStorage.setItem('currentUser', 'true');
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/');
    }
  }

  registr() {
    alert("you create new account")
  }

}
