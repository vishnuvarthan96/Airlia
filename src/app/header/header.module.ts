import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeadingComponent } from './heading/heading.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HeadingComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports:[]
})
export class HeaderModule { }
