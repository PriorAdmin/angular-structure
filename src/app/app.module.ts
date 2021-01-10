import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorIntercepterService } from './core/intercepter/error-intercepter.service'
import { from } from 'rxjs';
import { CoreModule } from './core/core.module';
import { DataModule } from '@data/data.module';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AuthLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorIntercepterService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
