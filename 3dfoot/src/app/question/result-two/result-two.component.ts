import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-result-two',
  templateUrl: './result-two.component.html',
  styleUrls: ['./result-two.component.scss']
})
export class ResultTwoComponent implements OnInit {
  
  constructor(private translateService: TranslateService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    
  }
  
}
