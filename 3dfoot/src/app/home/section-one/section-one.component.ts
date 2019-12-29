import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
  
})
export class SectionOneComponent implements OnInit {
  @ViewChild('sectionOne', {static:true}) sectionOne: ElementRef;
  shouldDisplay:boolean = false;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.windowScroll.subscribe(event => {
      if(event >= this.sectionOne.nativeElement.offsetTop){
        this.shouldDisplay = true;
      }
    });
  }

}
