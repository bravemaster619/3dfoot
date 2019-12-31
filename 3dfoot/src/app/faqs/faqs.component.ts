import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
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
      question: "How does it work?",
      answer: "You simply need to take three photographs of each foot using our easy to use, guided app and using AI techniques and that’s enough to build a highly accurate 3d model of each foot. Once this is done you just have to place your order and we do the rest.",
      id: 1,
      expand: false
    },
    {
      question: "How accurate is it?",
      answer: "We compare your scans with our database of over 500,000 feet, this combined with complex mathematical algorithms means we can very accurately produce custom profiles of your feet from 3 images of each foot.",
      id: 2,
      expand: false
    },
    {
      question: "How long does it take?",
      answer: "From the time you place the order we aim to have your insoles delivered to your door within 2 weeks.",
      id: 3,
      expand: false
    },
    {
      question: "Why are they made in Switzerland?",
      answer: "Switzerland is renowned for producing high quality products and we are no different. How production facility offers the very best in premium insole quality, capable of withstanding the demands required through heavy usage.",
      id: 4,
      expand: false
    },
    {
      question: "Do I have to scan my feet every time I want to place an order?",
      answer: "No, you do this only once and then your 3d feet profile is saved against your account meaning you can re order at any time simply by placing an order.",
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

  ngOnInit() {

  }

  statChange(event, i){
    this.faqs[i].expand = event;
  }

}
