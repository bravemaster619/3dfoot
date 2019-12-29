import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  
  private onScroll: boolean;
  constructor(public translate: TranslateService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private renderer: Renderer2,
              private apiService: ApiService,
              private el: ElementRef
  ) {


  }

  ngOnInit() {
    
  }
  
}
