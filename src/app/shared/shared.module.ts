import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  PrimeNgModule
} from './primeNg/primeNg.module';


@NgModule({
    imports: [
        PrimeNgModule,
        RouterModule
    ],
    exports: [
        PrimeNgModule,
        RouterModule
    ]
})

export class SharedModule { }
