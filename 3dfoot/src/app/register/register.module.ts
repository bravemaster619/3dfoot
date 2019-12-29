import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { ThanksComponent } from './thanks/thanks.component';
import { SharedModule } from '../shared/shared.module';
import {BsModalRef, ModalModule} from "ngx-bootstrap";


@NgModule({
  declarations: [RegisterComponent, ThanksComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    ModalModule.forRoot()
  ],
  providers: [
      BsModalRef
  ]
})
export class RegisterModule { }
