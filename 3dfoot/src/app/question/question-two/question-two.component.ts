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
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-question',
    templateUrl: './question-two.component.html',
    styleUrls: ['./question-two.component.scss']
})
export class QuestionTwoComponent implements OnInit {
    constructor(
        private translateService: TranslateService, private renderer: Renderer2, private router: Router, private el: ElementRef,
        private route: ActivatedRoute
    ) {
    }

    @HostBinding('class.general-content') newClass: boolean = true;
    question =1
    ngOnInit() {
      let ans1 = this.route.queryParams['value']['q1']
      if (ans1 == '1') {
        this.question = 1
      } else if (ans1 == '2') {
        this.question = 2
      }
    }

    ngAfterViewInit(): void {
    }

    result(answer) {
        let ans1 = this.route.queryParams['value']['ans1']
        const extra = {queryParams: {ans1, ans2: answer}}
        if (answer == 1) {
            this.router.navigate(['questions', 3], extra)
        } else if (answer == 2) {
            this.router.navigate(['results'], extra)
        }
    }
}
