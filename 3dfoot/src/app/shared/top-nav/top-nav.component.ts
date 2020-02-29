import { Component, OnInit, HostListener, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {enableProdMode} from '@angular/core';

enableProdMode();
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  lang:string;
  onScroll = false;
  @Input() custom:boolean = false;
  @Input() newLogo:boolean = true;
  @Input() background: boolean = false;
  @Input() footer:boolean = true;
  @Input() showLang:boolean = true;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.lang = this.translateService.getDefaultLang();
    this.onScroll = false;
  }

  switchLanguage(event = ''){
    if(!event) {
      let currentLang = this.getLanguage();
      if(currentLang == 'en') {
        event = 'ch';
      } else {
        event = 'en';
      }
    } else {
      event = event === 'ch' ? 'ch' : 'en';
    }
    this.translateService.setDefaultLang(event);
    localStorage.setItem('lang', event);
    this.lang = event;
    window['changeTitle']();
  }

  getLanguage() {
    return localStorage.getItem('lang') == 'ch' ? 'ch' : 'en';
  }

  getLanguageButtonTitle() {
    if(this.getLanguage() == 'ch') {
      return 'EN';
    } else {
      return '中文';
    }
  }

  @HostListener('window:scroll', [])
  checkScroll() {

    return this.onScroll = window.pageYOffset > 70;

    // if (scrollPosition > 0) {
    //   this.onScroll = true;
    // } else {
    //   this.onScroll = false;
    // }
    // return this.onScroll;
  }

}
