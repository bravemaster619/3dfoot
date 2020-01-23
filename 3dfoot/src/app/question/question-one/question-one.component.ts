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
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.scss']
})
export class QuestionOneComponent implements OnInit {
  constructor(
      private translateService: TranslateService, private renderer: Renderer2, private router: Router, private el: ElementRef,
      private route: ActivatedRoute
  ) { }
  @HostBinding('class.general-content') newClass: boolean = true;
  ngOnInit() {

  }
  result(result) {
    const answers = [result]
    if (result == 1 || result == 2) {
      this.router.navigate(['questions', 2], { queryParams: {ans1: result} })
    }
    if (result == 3) {
      this.router.navigate(['questions', 3], { queryParams: {ans1: result} })
    }
  }
}
