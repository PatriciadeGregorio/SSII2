import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SearchResponse } from '../classes/search-response';
import { SearchService } from '../service/search.service';

@Injectable()
export class SearchResolverService implements Resolve<Observable<SearchResponse>> {


  constructor(private searchService: SearchService) { }

  resolve(): Observable<SearchResponse> {
    return this.searchService.getSearch();
  }

}
