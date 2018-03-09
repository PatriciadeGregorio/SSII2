import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { Login } from '../classes/login';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName: string;
  public password: string;
  login: Login;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(loginForm: NgForm) {
    this.login = new Login (loginForm.value.userName, loginForm.value.password);
    this.loginService.login(this.login).subscribe(
      response => {
        this.router.navigate(['search']);
       },
      error => this.router.navigate(['search'])
    );
  }
}
