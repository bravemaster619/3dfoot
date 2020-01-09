import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2, TemplateRef,
  ViewChild
} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../services/api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  form: FormGroup;
  data: any;
  show = true;
  modalRef: BsModalRef;
  @ViewChild('contact', {static: true}) register:ElementRef;
  shouldDisplay:boolean = true;
  config = {
    animated:true
  }

  constructor(public translate: TranslateService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private renderer: Renderer2,
              private apiService: ApiService,
              private modalService: BsModalService,
              private el: ElementRef
  ) {


  }
  @HostBinding('class.base-content') newClass: boolean = true;
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      content: new FormControl('', [Validators.required])
    });
  }

  contact(template: TemplateRef<any>) {
    this.show = false;
    this.apiService.contacts(this.form.value).subscribe(res => {
      this.data = res;
      this.modalRef = this.modalService.show(template, {class: 'animated fadeIn slow'});
      this.show = true;
    });
  }
}
