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

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  constructor(private translateService: TranslateService, private renderer: Renderer2, private router: Router, private el:ElementRef) { }
  @HostBinding('class.general-content') newClass: boolean = true;
  ngOnInit() {
  }
    ngAfterViewInit(): void {
  }
  result(answer) {
    this.router.navigate(['questions', 2], {queryParams: {answers: [answer]}});
  }
}
