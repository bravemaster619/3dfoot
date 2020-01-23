import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionComponent} from "./question/question/question.component";
import {QuestionOneComponent} from "./question/question-one/question-one.component";
import {ResultComponent} from "./question/result/result.component";
import {ResultThreeComponent} from "./question/result-three/result-three.component";
import {ResultTwoComponent} from "./question/result-two/result-two.component";
import {AboutComponent} from "./about/about.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {CustomerComponent} from "./customer/customer.component";
import {AccountComponent} from "./account/account.component";
import {FaqsComponent} from "./faqs/faqs.component";
import {AuthGuard} from "./_helpers/auth.guard";
import {QuestionTwoComponent} from "./question/question-two/question-two.component";
import {QuestionThreeComponent} from "./question/question-three/question-three.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)},
  {path: 'register', loadChildren: () => import('./register/register.module').then(mod => mod.RegisterModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)},
  // {path: 'questions/1', component: QuestionComponent},
  {path: 'questions/1', component: QuestionOneComponent},
  {path: 'questions/2', component: QuestionTwoComponent},
  {path: 'questions/3', component: QuestionThreeComponent},
  {path: 'results', component: ResultComponent},
  {path: 'results/2', component: ResultTwoComponent},
  {path: 'results/3', component: ResultThreeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'account', component: AccountComponent},
  {path: 'faqs', component: FaqsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
