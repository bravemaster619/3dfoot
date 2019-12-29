import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import { first } from 'rxjs/operators';

import { User } from "../../_models/user";
import { UserService} from "../../_services/user.service";
import { AuthenticationService} from "../../_services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lang = 'en'
  alerts: any;
  loading:boolean;
  users: User[];

  constructor(
      public translate: TranslateService,
      private userService: UserService
  ) {

  }

  ngOnInit() {
    this.loading = true
    // this.userService.getAll().pipe(first()).subscribe(users => {
    //   this.loading = false
    //   this.users = users
    // })
  }
  getAlerts(event) {
    this.alerts = event;

  }

}
