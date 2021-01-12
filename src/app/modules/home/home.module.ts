import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './page/home/home.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {HomeInfoComponent} from './components/home-info/home-info.component';
import {Tab1InfoComponent} from './components/tab1-info/tab1-info.component';
import {Tab2InfoComponent} from './components/tab2-info/tab2-info.component';
import {Tab3InfoComponent} from './components/tab3-info/tab3-info.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeInfoComponent,
    Tab1InfoComponent,
    Tab2InfoComponent,
    Tab3InfoComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
