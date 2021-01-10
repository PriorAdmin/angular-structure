import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import { AuthGuardService } from './core/authGuard/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
