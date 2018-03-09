import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../classes/search-response';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Search } from '../classes/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: SearchResponse;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.search = this.route.snapshot.data.search.gamesList;
  }

  // goInfo(item: Search) {
  //   console.log(item.id);
  //   this.router.navigate(['info'], item.id);
  // }
}
