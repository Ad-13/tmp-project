import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/*--- PrimeNg lib ---*/
import {
  MultiSelectModule
} from 'primeng/multiselect';


@NgModule({
  imports: [
    MultiSelectModule,
    RouterModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    MultiSelectModule,
    RouterModule,
    CommonModule,
    FormsModule
  ]
})

export class SharedModule {
}
