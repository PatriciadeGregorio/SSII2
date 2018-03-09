import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Juego } from '../classes/juego';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InfoService {

  constructor(private http: HttpClient) { }

  getGame(): Observable <Juego> {
    return this.http.get<Juego>('assets/mocks/game.json');

  }

}
