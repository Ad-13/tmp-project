import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
// import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'login',
    loadChildren: '../pages/login/login.module#LoginModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
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
