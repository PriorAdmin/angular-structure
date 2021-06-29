import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {InputTypeNumberDirective} from './utils/inputTypeNumber';
import {SnackbarComponent} from './component/snackbar/snackbar.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppFormDynamicComponent } from './component/app-form-dynamic/app-form-dynamic.component';
import { AppControlDynamicComponent } from './component/app-control-dynamic/app-control-dynamic.component';
@NgModule({
  declarations: [InputTypeNumberDirective, SnackbarComponent, AppFormDynamicComponent, AppControlDynamicComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    MaterialModule,
    InputTypeNumberDirective,
    FormsModule,
    ReactiveFormsModule,
    AppFormDynamicComponent,
    AppControlDynamicComponent
  ],
})
export class SharedModule {}
