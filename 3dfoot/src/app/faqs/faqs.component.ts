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
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  faqs = [
    {
      question: 'FAQS.faq1-question',
      answer: 'FAQS.faq1-answer',
      id: 1,
      expand: false
    },
    {
      question: 'FAQS.faq2-question',
      answer: 'FAQS.faq2-answer',
      id: 2,
      expand: false
    },
    {
      question: 'FAQS.faq3-question',
      answer: 'FAQS.faq3-answer',
      id: 3,
      expand: false
    },
    {
      question: 'FAQS.faq4-question',
      answer: 'FAQS.faq4-answer',
      id: 4,
      expand: false
    },
    {
      question: 'FAQS.faq5-question',
      answer: 'FAQS.faq5-answer',
      id: 5,
      expand: false
    }
  ]

  constructor(public translate: TranslateService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private renderer: Renderer2,
              private apiService: ApiService,
              private el: ElementRef
  ) {


  }
  @HostBinding('class.base-content') newClass: boolean = true;

  ngOnInit() {

  }

  statChange(event, i){
    this.faqs[i].expand = event;
  }

}
