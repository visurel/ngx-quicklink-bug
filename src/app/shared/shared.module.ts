import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    QuicklinkModule,
  ],
  exports: [
    QuicklinkModule,
    RouterModule
  ]
})
export class SharedModule { }
