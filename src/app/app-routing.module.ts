import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchResolverService } from './resolve/search-resolver.service';
import { InfoComponent } from './info/info.component';
import { InfoResolverService } from './resolve/info-resolver.service';
import { LoginComponent } from './login/login.component';
import { ModificationComponent } from './modification/modification.component';

const routes: Routes = [ {
  path: 'search',
  resolve: {search: SearchResolverService},
  component: SearchComponent
},
{
  path: 'info/:id',
  component: InfoComponent
},
{
  path: '',
  component: LoginComponent
},
{
  path: 'modification',
  component: ModificationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
