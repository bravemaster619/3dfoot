import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from "@angular/router";
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent implements OnInit {
  @ViewChild('sectionThree', {static:true}) sectionThree: ElementRef;
  constructor(private router: Router, private apiService:ApiService) { }
  shouldDisplay:boolean = false;

  ngOnInit() {
    this.apiService.windowScroll.subscribe(event => {
      if(event >= this.sectionThree.nativeElement.offsetTop){
        this.shouldDisplay = true;
      }
    }); 
  } 

  takeQuizz(number) {
    this.router.navigate(['questions', number])
  }
}
