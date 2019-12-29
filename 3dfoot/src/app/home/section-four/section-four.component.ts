import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss']
})
export class SectionFourComponent implements OnInit {
  @ViewChild('sectionFour', {static:true}) sectionFour: ElementRef;
  constructor(private apiService:ApiService) { }
  shouldDisplay:boolean = false;

  ngOnInit() {
    this.apiService.windowScroll.subscribe(event => {
      if(event >= this.sectionFour.nativeElement.offsetTop){
        this.shouldDisplay = true;
      }
    });
  }

}
