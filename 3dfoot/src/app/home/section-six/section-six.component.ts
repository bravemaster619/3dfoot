import {Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild, ElementRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-section-six',
  templateUrl: './section-six.component.html',
  styleUrls: ['./section-six.component.scss']
})
export class SectionSixComponent implements OnInit {
  form  =  new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  
  @Output('alert') alert = new EventEmitter()
   data: any;
   show = true;
  modalRef: BsModalRef;
  @ViewChild('section6', {static:true}) section6: ElementRef;
  shouldDisplay:boolean = false;
  config = {
    animated: true
  }

  constructor(private apiService: ApiService, private modalService: BsModalService) { }

  ngOnInit() {
    this.apiService.windowScroll.subscribe(event => {
      if(event + 150 >= this.section6.nativeElement.offsetTop){
        this.shouldDisplay = true;
      }
    });
  }
  registerNewsletter(template) {
    this.show = false
    this.apiService.postEmail(this.form.value).subscribe(res => {
      this.data = res;
      this.show = true
      this.openModal(template)
    }, error => {
      this.data = "Oops, something went wrong!"
      this.show = true
      this.openModal(template)
    }, () => {
      this.show = true
    })
  }
  openModal(template: TemplateRef<any>) {
    if(this.data) {
      this.modalRef = this.modalService.show(template, Object.assign({}, {class: 'animated fadeIn slow'}));
    }

  }
}
