import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import * as aos from 'aos';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:scroll)' : 'onScroll($event)'
  }
})
export class AppComponent implements OnInit {
  lang = 'en';
  constructor(public translate: TranslateService, private _changeDetectorRef: ChangeDetectorRef, private appService:ApiService) {
    this.translate.addLangs(['en', 'ch']);
    if(localStorage.getItem('lang')){
      this.lang = localStorage.getItem('lang');
      this.translate.setDefaultLang(this.lang);
    } else{
      this.lang = 'en';
      this.translate.setDefaultLang(this.lang);
    }
  }
  ngOnInit(): void {

    this._changeDetectorRef.detectChanges();
    aos.init();
  }

  onScroll(event){
    this.appService.updateWindowScroll(window.pageYOffset + 200);
  }

}
