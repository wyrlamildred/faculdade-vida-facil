import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from 'src/app/not-found/not-foun.component';
@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  declarations: [NotFoundComponent]
})

export class NotFoundModule { }
