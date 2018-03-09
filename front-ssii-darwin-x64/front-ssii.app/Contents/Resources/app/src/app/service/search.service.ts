import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Search } from '../classes/search';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SearchResponse } from '../classes/search-response';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearch (): Observable<SearchResponse> {
    // tslint:disable-next-line:prefer-const
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const options = {
      headers: headers
    };
    return this.http.get<SearchResponse>('assets/mocks/mock_games.json', options);

  }

}
