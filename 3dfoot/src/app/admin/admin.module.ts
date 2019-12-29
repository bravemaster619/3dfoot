import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeComponent } from './back-office/back-office.component';
import { LoginComponent } from './login/login.component';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BackOfficeComponent, LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
