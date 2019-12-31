import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
  
})
export class SectionOneComponent implements OnInit {
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    
  }

}
