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

  postEmail(payload) {
    return this.http.post(environment.siteurl + '/email', payload)
  }

  // @author bravemaster
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
