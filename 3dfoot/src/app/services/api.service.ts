import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  windowScroll = new BehaviorSubject(0);

  constructor(private http: HttpClient) {
  }

  login(payload) {
    return this.http.post(environment.siteurl + '/signin', payload)
  }

  postEmail(payload) {
    payload.locale = window.localStorage.getItem('lang')
    return this.http.post(environment.siteurl + '/email', payload)
  }

  // for admin export users
  exportUsers(payload) {
    // return this.http.post(environment.siteurl + '/email', payload)
    // return this.http.post(environment.siteurl + '/admin/users/export', payload)
    return window.location.href = environment.siteurl + '/admin/users/export';
  }

  updateWindowScroll(event){
    this.windowScroll.next(event);
  }
}
