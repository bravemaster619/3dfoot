import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lang = 'en'
  alerts: any;


  constructor(public translate: TranslateService) {

  }

  ngOnInit() {
  }
  getAlerts(event) {
    this.alerts = event;

  }

}
