import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { InfoModule } from './info/info.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { FormsModule } from '@angular/forms';
import { ModificationModule } from './modification/modification.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    InfoModule,
    FormsModule,
    ModificationModule,
    NgbModule.forRoot()
  ],
  providers: [LoginService], // Porque el login no es un modulo, si no un componente
  bootstrap: [AppComponent]
})
export class AppModule { }
