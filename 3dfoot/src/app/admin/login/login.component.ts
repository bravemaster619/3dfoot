import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from "../../services/api.service";
import { AuthenticationService } from "../../_services/authentication.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted:boolean = false;
  data: any;
  show = true;
  modalRef: BsModalRef;
  constructor(
      private formBuilder:FormBuilder,
      private router:Router,
      private apiService:ApiService,
      private modalService: BsModalService,
      private authenticationService:AuthenticationService
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(template){
    this.submitted = true;

    if(this.loginForm.valid){
      this.show = false;
      // the login api will be called here
      this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(res => {
        if (res['role'] === 'admin') {
          this.router.navigate(['admin/backOffice'])
        } else {
          this.show = true;
          this.data = "Login Failed.";
          this.modalRef = this.modalService.show(template, {class: 'animated fadeIn slow'})
        }
      })
    }
  }

}
