import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from "@angular/router";
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-section-five',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.scss']
})
export class SectionFiveComponent implements OnInit {
  @ViewChild('section5', {static:true}) section5: ElementRef;
  shouldDisplay:boolean = false;
  constructor(private router: Router, private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.windowScroll.subscribe(event => {
      if(event >= this.section5.nativeElement.offsetTop){
        this.shouldDisplay = true;
      }
    });
  }
  takeQuizz(number) {
    this.router.navigate(['questions', number])
  }
}
