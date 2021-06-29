import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PocRoutingModule } from './poc-routing.module';
import { PocComponent } from './page/poc/poc.component';
import { AppFormComponent } from './component/app-form/app-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PocComponent, AppFormComponent],
  imports: [
    CommonModule,
    PocRoutingModule,
    SharedModule
  ]
})
export class PocModule { }
