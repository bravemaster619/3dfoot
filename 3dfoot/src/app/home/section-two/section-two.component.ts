import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from "@angular/router";
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent implements OnInit {
  @ViewChild('sectionTwo', {static:true}) sectionTwo: ElementRef;
  shouldDisplay:boolean = false;
  constructor(private router: Router, private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.windowScroll.subscribe(event => {
      if(event >= this.sectionTwo.nativeElement.offsetTop){
        this.shouldDisplay = true;
      }
    });
  }
  takeQuizz(number) {
    this.router.navigate(['questions', number])
  }
}
