import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ModificationService {

  constructor(private http: HttpClient) { }

  updateGame(user: any) {
    const body = JSON.stringify(user);
    const id = '3';
    return this.http
        .patch('', body);
  }

}
