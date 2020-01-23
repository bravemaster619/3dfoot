import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  constructor(
      private translateService: TranslateService, private renderer: Renderer2, private el: ElementRef,
      private route: ActivatedRoute
  ) { }
  @HostBinding('class.general-content') newClass: boolean = true;
  @HostBinding('class.results') newClassResult: boolean = true;

  ans = this.route.queryParams['value']


  ngOnInit() {

  }
}
