import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoService } from '../service/info.service';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    YoutubePlayerModule,
    RouterModule
  ],
  declarations: [InfoComponent],
  providers: [InfoService, NgbModal]
})
export class InfoModule { }
