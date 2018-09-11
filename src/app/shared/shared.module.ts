import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

/*--- PrimeNg lib ---*/
import {
  PrimeNgModule
} from './primeNg/primeNg.module';


@NgModule({
  imports: [
    PrimeNgModule,
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    PrimeNgModule,
    RouterModule,
    CommonModule,
    FormsModule,
  ]
})

export class SharedModule {
}
