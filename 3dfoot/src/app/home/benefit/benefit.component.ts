import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss']
})
export class BenefitComponent implements OnInit {
  @Input() number
  constructor(private router: Router) { }

  ngOnInit() {
  }
  takeQuizz() {
    this.router.navigate(['questions', this.number])
  }
}
