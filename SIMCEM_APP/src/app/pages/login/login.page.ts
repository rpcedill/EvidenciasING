import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.loginForm = this.fb.group({
      "email": new FormControl("", Validators.required),
      "pwd": new FormControl("", Validators.required)
    });
  }
  
  ngOnInit() {}
  
  login() {
    console.log("But I love you so");
  }

}
