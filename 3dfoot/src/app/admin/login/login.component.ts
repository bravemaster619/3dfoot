import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted:boolean = false;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.valid){
      // the login api will be called here
      console.log(this.loginForm.value);
      this.router.navigate(['admin/backOffice']);
    }
  }

}
