import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SectionOneComponent } from './section-one/section-one.component';
import { BenefitComponent } from './benefit/benefit.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { SectionFourComponent } from './section-four/section-four.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SectionFiveComponent } from './section-five/section-five.component';
import { SectionSixComponent } from './section-six/section-six.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [HeaderComponent, HomeComponent, SectionOneComponent, BenefitComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, SectionFiveComponent, SectionSixComponent, FooterComponent],
  imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule,
        TranslateModule,
        SharedModule,
        ReactiveFormsModule,
  ],
  providers: [

  ],
    exports: [
        SectionSixComponent,
        FooterComponent
    ]
})
export class HomeModule { }
