import { NgModule } from '@angular/core';

import {
  MultiSelectModule
} from 'primeng/multiselect';


@NgModule({
    imports: [
        MultiSelectModule
    ],
    exports: [
        MultiSelectModule
    ]
})

export class PrimeNgModule { }
