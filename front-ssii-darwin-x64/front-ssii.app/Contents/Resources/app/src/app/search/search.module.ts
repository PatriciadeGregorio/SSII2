import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchService } from '../service/search.service';
import { Search } from '../classes/search';
import { SearchResolverService } from '../resolve/search-resolver.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [SearchComponent],
  providers: [SearchService, SearchResolverService]
})
export class SearchModule { }
