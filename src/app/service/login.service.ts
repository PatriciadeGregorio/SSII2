import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../classes/login';

@Injectable()
export class LoginService {
   headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  });
   options = {
    headers: this.headers
  };
  constructor(private http: HttpClient) {

  }

  login(login: Login) {
    console.log(login);
    const body = JSON.stringify(login);
    return this.http
        .post('http://localhost:8080/gf/login', body, this.options);
  }
}
