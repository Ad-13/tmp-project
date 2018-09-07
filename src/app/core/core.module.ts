import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
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
    HomePageComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    /* AuthenticationService,
    AuthGuardService */
  ]
})
export class CoreModule { }
