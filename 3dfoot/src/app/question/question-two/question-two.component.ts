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
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.scss']
})
export class QuestionTwoComponent implements OnInit {
  constructor(private translateService: TranslateService, private renderer: Renderer2, private router: Router, private el: ElementRef) { }
  @HostBinding('class.general-content') newClass: boolean = true;
  ngOnInit() {
  }
  result(result) {
    this.router.navigate(['results', result])
  }
}
