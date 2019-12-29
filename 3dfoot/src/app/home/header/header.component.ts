import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {NgxBootstrapAlertNotificationService} from "@benevideschissanga/ngx-bootstrap-alert-notification";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  lang = 'en';
  onScroll = false;
  @Input() data;
  alerts :any
  @ViewChild( 'language', {static: false}) language: ElementRef;

  constructor(private translateService: TranslateService, private notification: NgxBootstrapAlertNotificationService, private renderer: Renderer2, private router: Router, private el: ElementRef) { }

  ngOnInit() {}

  ngOnChanges(_changes: SimpleChanges): void {
    if(this.data)
      this.notification.show({
          type: 'info',
          message: this.data,
        icon: 'icon icon-bell-55',
        title: 'Info'
        },
        {
          position: 'topCenter'
        }
      )

  }
  
}
