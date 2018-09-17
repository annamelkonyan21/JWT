import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-before-home',
  templateUrl: './before-home.component.html',
  styleUrls: ['./before-home.component.scss']
})
export class BeforeHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin(){
    this.router.navigateByUrl('login');
  }
}
