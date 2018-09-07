import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
// import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
      path: '**',
      component: NotFoundComponent
  }
  /*     {
          path: 'admin',
          canActivate: [AuthGuardService],
          loadChildren: '../admin/admin.module#AdminModule'
      },
      {
          path: 'form',
          loadChildren: '../form/form.module#FormModule'
      },
      {
          path: '**',
          component: NotFoundComponent
      } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
