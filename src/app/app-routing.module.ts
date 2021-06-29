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
          import('./modules/poc/poc.module').then((m) => m.PocModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
