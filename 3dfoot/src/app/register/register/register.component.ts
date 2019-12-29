import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  
  private onScroll: boolean;
  constructor(public translate: TranslateService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private renderer: Renderer2,
              private apiService: ApiService,
              private el: ElementRef
  ) {


  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
    
  }
  
  register() {
    this.router.navigate(['register', 'thanks'], {relativeTo: this.activatedRoute});
  }
  registerNewsletter() {
    this.apiService.postEmail(this.form.value).subscribe(res => this.register())
  }

}
