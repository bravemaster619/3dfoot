import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {
  constructor(public translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    
  }
  
  homePage() {
    this.router.navigate([''], {relativeTo: this.activatedRoute});
  }
}
