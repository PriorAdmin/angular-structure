import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocComponent } from './page/poc/poc.component';

const routes: Routes = [
  {path: "", component: PocComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocRoutingModule { }
