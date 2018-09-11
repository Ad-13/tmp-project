
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';

import { throwIfAlreadyLoaded } from './guards/module-import.guard';

import { HeaderComponent } from './base-layout/header/header.component';
import { FooterComponent } from './base-layout/footer/footer.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CoreRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    /* AuthenticationService,
    AuthGuardService */
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
