import { Component, OnInit, HostListener, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  lang:string;
  onScroll = false;
  @Input() custom:boolean = false;
  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.lang = this.translateService.getDefaultLang();
  }

  switchLanguage(event){
    this.translateService.setDefaultLang(event);
    localStorage.setItem('lang', event);
    this.lang = event;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {

    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 0) {
      this.onScroll = true;
    } else {
      this.onScroll = false;
    }
    return this.onScroll;
  }

}
