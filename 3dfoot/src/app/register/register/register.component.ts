import {
  AfterViewInit,
  Component,
  ElementRef,
  TemplateRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
  Output, EventEmitter, HostBinding
} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;

  @Output('alert') alert = new EventEmitter()
  data: any;
  show = true;
  modalRef: BsModalRef;

  @ViewChild('register', {static: true}) register:ElementRef;
  shouldDisplay:boolean = true;
  config = {
    animated:true
  }

  private onScroll: boolean;
  constructor(public translate: TranslateService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private renderer: Renderer2,
              private apiService: ApiService,
              private modalService: BsModalService,
              private el: ElementRef
  ) { }
  @HostBinding('class.base-content') newClass: boolean = true;
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
  showThanks() {
    this.router.navigate(['thanks'], {relativeTo: this.activatedRoute});
  }
  registerNewsletter(template: TemplateRef<any>) {
    this.apiService.postEmail(this.form.value).subscribe(res => {
      if (res === 'Registered successfully') {
        this.showThanks();
        this.show = true;
      } else {
        this.data = res;
        this.modalRef = this.modalService.show(template, {class: 'animated fadeIn slow'});
        this.show = true;
      }
    });
  }
}
