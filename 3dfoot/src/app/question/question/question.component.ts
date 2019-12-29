import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{
  
  constructor(private translateService: TranslateService, private renderer: Renderer2, private router: Router, private el:ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
  }
  
  result(result) {
    this.router.navigate(['results', result])
  }
  
}
