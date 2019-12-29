import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-result-three',
  templateUrl: './result-three.component.html',
  styleUrls: ['./result-three.component.scss']
})
export class ResultThreeComponent implements OnInit{

  constructor(private translateService: TranslateService, private renderer: Renderer2, private el:ElementRef) { }

  ngOnInit() {
    
  }
}
