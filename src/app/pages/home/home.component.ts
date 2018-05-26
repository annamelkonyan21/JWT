import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public nav: string =  "login";
  public active: string = "login";
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
    this.registerForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]), 
      password: new FormControl('', Validators.required)
    });


   }

  ngOnInit() {
  }

  setValue(nav, active) {
    this.nav = nav;
    this.active = active;
    console.log(nav);
  }

  login() {
    console.log(this.loginForm.value);
    if(this.loginForm.value['email'] === 'admin' && this.loginForm.value['password'] === 'admin') {
      alert("its done")
    }

  }

  registr() {
    console.log(this.registerForm);
    alert("you create new account")
  }
}
