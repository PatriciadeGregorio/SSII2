import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificationComponent } from './modification.component';
import { ModificationService } from '../service/modification.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ModificationComponent],
  providers: [ModificationService]
})
export class ModificationModule { }
