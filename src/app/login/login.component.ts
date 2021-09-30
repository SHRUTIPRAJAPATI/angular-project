import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit { 
  username: string = "";
  password: string = "";
  loginForm = new FormGroup({
    userName: new FormControl(' ', [Validators.required]),
    password: new FormControl(' ', [Validators.required])
})
  constructor(private router: Router) {}
  ngOnInit() {
    this.username = "shruti";
    this.password = "shruti123";
  }

  onLogin(event: any) {
    if (this.loginForm.valid) {
      if (
        event.value.userName === this.username &&
        event.value.password === this.password
      ) {
        alert("Login Successfully");
        this.router.navigate(['/home']);
      } else {
        alert("Username or Password is incorrect");
        this.loginForm.controls['userName'].setValue(null);
        this.loginForm.controls['password'].setValue(null);
      }
    }
  }
}