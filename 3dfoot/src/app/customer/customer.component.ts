import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{
  @ViewChild( 'language', {static:true}) language: ElementRef
  lang:any
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

