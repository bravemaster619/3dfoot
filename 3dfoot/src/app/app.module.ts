import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import { QuestionComponent } from './question/question/question.component';
import { QuestionTwoComponent } from './question/question-two/question-two.component';
import { ResultComponent } from './question/result/result.component';
import { ResultTwoComponent } from './question/result-two/result-two.component';
import { ResultThreeComponent } from './question/result-three/result-three.component';
import {ApiService} from "./services/api.service";

import {NgxBootstrapAlertNotificationModule} from "@benevideschissanga/ngx-bootstrap-alert-notification";
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CustomerComponent } from './customer/customer.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SharedModule } from './shared/shared.module';
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {ErrorInterceptor} from "./_helpers/error.interceptor";
import { AccordionModule } from 'ngx-bootstrap/accordion';
import {BsModalRef, ModalModule} from "ngx-bootstrap";
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionTwoComponent,
    ResultComponent,
    ResultTwoComponent,
    ResultThreeComponent,
    AccountComponent,
    AboutComponent,
    ContactsComponent,
    CustomerComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapAlertNotificationModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AccordionModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      ApiService],

  bootstrap: [AppComponent]
})
export class AppModule { }
