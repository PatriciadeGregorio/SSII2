import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../classes/login';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: Login) {
    console.log(login);
    const body = JSON.stringify(login);
    return this.http
        .post('', body);
  }
}
