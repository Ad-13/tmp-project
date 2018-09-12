import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/*--- PrimeNg lib ---*/
// import {
//   MultiSelectModule
// } from 'primeng/multiselect';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule {
}
