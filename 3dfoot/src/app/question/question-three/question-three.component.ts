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
    templateUrl: './question-three.component.html',
    styleUrls: ['./question-three.component.scss']
})
export class QuestionThreeComponent implements OnInit {
    constructor(
        private translateService: TranslateService, private renderer: Renderer2, private router: Router, private el: ElementRef,
        private route: ActivatedRoute
    ) {
    }

    answers = [
      {1: false, 2:false, 3:false, 4:false, 5:false, 6: false, 7: false},
      1
    ];

    questionNumber = 1;

    @HostBinding('class.general-content') newClass: boolean = true;

    ngOnInit() {

    }

    onFirstAnswer(ans): void {
      const firstAnswers = this.answers[0]
      firstAnswers[ans] = !firstAnswers[ans]
    }

    onSecondAnswer(ans): void {
      this.answers[1] = ans
    }

    onShowResult(): void {
        let ans1 = this.route.queryParams['value']['ans1']
        let ans2 = this.route.queryParams['value']['ans2']
        let ans3_1 = []
        let ans3_2 = this.answers[1]
        for (var key in (new Object(this.answers[0]))) {
            if (this.answers[0][key]) {
                ans3_1.push(key)
            }
        }
        let ans = {ans1, ans2, ans3_1: ans3_1.join(","), ans3_2}
        this.router.navigate(['results'], {queryParams: ans})
    }

    ngAfterViewInit(): void {

    }
}
